"use server"

import { AuthFormSchema, FormState } from "@/utils/definitions"
import { BACKEND_URL } from "@/utils/constants"
import { redirect } from "next/navigation"
import axios from 'axios'
import { createSession } from "@/utils/session"


export async function SignUp(state: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = AuthFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }


    //call provider to create user
    const {email, password} = validatedFields.data

    try {
        const res = await axios.post(`${BACKEND_URL}/auth/signup`, {
          email,
          password,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.status !== 200) {
            throw new Error("Signup Failed!")
        }

        const result = res.data
        //create user session
        await createSession(result)
        redirect('/dashboard')
    } catch (error) {
        console.error(error)
    }
    
}

export async function SignIn(state: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = AuthFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }


    //call provider to create user
    const {email, password} = validatedFields.data

    try {
        const res = await axios.post(`${BACKEND_URL}/auth/login`, {
          email,
          password,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.status !== 200) {
          throw new Error("Signin Failed!");
        }

        const result = res.data
        //create user session
        await createSession(result)
        redirect('/dashboard')
    } catch (error) {
        console.error(error)
    }
    
}



export async function refreshToken(oldRefreshToken?: string) {
    try {
        const response = await axios.post(`${BACKEND_URL}/auth/refresh`, {
            headers: {
                "Authorization": `Bearer ${oldRefreshToken}`,
                "Content-Type": "application/json"
            }
        })

        if (response.status !== 200) {
            throw new Error("failed to refres token", response.statusText)
        }
    }catch(error){}
}