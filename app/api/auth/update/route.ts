
import { NextResponse, NextRequest } from "next/server";
import { updateSession } from "@/utils/session";


export async function POST(req: NextRequest) {
    const body = await req.json()
    const { accessToken, refreshToken } = body


    if (!accessToken || !refreshToken) {
        return NextResponse.json({ error: "Provide Tokens" }, {status: 401})
    }

    await updateSession({accessToken, refreshToken})

    return NextResponse.json({message: "Ok"}, {status: 200})
}