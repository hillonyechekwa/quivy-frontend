import {SignJWT, jwtVerify} from 'jose'
import { SessionPayload } from './definitions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



const secretKey = process.env.SESSION_SECRET_KEY
const encodedKey = new TextEncoder().encode(secretKey)


export async function encrypt(payload: SessionPayload) {
    return await new SignJWT(payload)
                        .setProtectedHeader({alg: 'HS256'})
                        .setIssuedAt()
                        .setExpirationTime('7d')
                        .sign(encodedKey)
}


export async function decrypt(session: string | undefined = "") {
    if (!session) {
        return null
    }

    try {
        const {payload} = await jwtVerify(session, encodedKey, {algorithms: ['HS256']})
        return payload as SessionPayload
    } catch (error) {
        console.error("failed to verify session", error)
    }
}


export async function getSession() {
    const cookie = (await cookies()).get("session")?.value

    try {
        const session = await decrypt(cookie)

        if (!session) {
            return null
        }

        return session
    } catch (error) {
        redirect("/")
    }
}

export async function createSession(payload: SessionPayload) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt(payload)

    const cookieStore = await cookies()

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    })
}



export async function updateSession({
    accessToken, refreshToken
}: {accessToken: string, refreshToken: string}) {
    const sessionCookie = (await cookies()).get("session")?.value
    if(!sessionCookie) return null

    const { payload } = await jwtVerify<SessionPayload>(sessionCookie, encodedKey)


    if (!payload) throw new Error("Session not found")
    
    
    const newPayload: SessionPayload = {
        user: { ...payload.user },
        backendTokens: {
            accessToken,
            refreshToken
        }
    }
    
    await createSession(newPayload)
}


export async function deleteSession() {
  const cookieStore = await cookies()

  cookieStore.delete({
    name: "session",
    path: "/", // Must match the path used in createSession
    secure: true, // Match other relevant options
    httpOnly: true,
    sameSite: "lax",
  })
}