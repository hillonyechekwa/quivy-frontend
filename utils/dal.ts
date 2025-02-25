"use server"

import { cache } from 'react'
import { cookies } from 'next/headers'
import { decrypt } from './session'




export const verifySession = cache(async () => {
    const cookie = (await (cookies())).get('session')?.value
    const session = await decrypt(cookie)


    if (!session?.user.userId) {
        return null
    }

    return {isAuth: true, user: session.user}
})