import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./utils/session";
import { cookies } from "next/headers";


//protected routes
const protectedRoutes: string[] = []
const publicRoutes: string[] = ["/", "/auth/signup", "/auth/sigin"]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)


    const cookie = (await cookies()).get('session')?.value

    let session;

    try {
        session = cookie ? await decrypt(cookie) : null
    } catch (error) {
        console.error("Middleware session verification error", error)
    }

    if (isProtectedRoute && !session?.user.userId) {
        return NextResponse.redirect(new URL("/auth/signin", req.nextUrl))
    }

    //TODO: this might be a some shifty code
    if (isPublicRoute && session?.user.userId && !req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
    }

    return NextResponse.next()

}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}