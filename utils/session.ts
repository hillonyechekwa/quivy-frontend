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
            console.error("session has no payload!!")
            return null
        }

        return session
    } catch (error) {
        console.error("failed to verify session", error)
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



export async function updateSession() {
    const session = (await cookies()).get("session")?.value
    const payload = await decrypt(session)


    if (!session || !payload) {
        return null
    }

    
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const cookieStore = await cookies();

    cookieStore.set("session", session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });
}


export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}