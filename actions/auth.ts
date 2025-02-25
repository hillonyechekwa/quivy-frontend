"use server"

import { AuthFormSchema, FormState } from "@/utils/definitions"
import { BACKEND_URL } from "@/utils/constants"
import { redirect } from "next/navigation"
import axios from 'axios'
import { createSession } from "@/utils/session"


export async function SignUp(prevState: FormState, formData: FormData): Promise<FormState> {

    if (!(formData instanceof FormData)) {
        return {
            success: false,
            errors: {
                error: ["Invalid form data"]
            }
        }
    }


    const payload = Object.fromEntries(formData)


    const validatedFields = AuthFormSchema.safeParse(payload)

    if (!validatedFields.success) {
        const errors = validatedFields.error.flatten().fieldErrors
        const fields: Record<string, string> = {} 
        
        for (const key of Object.keys(payload)) {
            fields[key] = payload[key].toString()
        }

        return {
            success: false,
            fields,
            errors
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
            // throw new Error("Signup Failed!")
            console.error(`Signup failed with status: ${res.status}`);
            return {
              success: false,
              errors: {
                api: [`Signup failed`],
              },
            };
        }

        const result = res.data
        //create user session
        await createSession(result)
        redirect('/onboarding/verifyemail')

    } catch (error) {
        console.error(error)
        return {
            success: false,
        }
    }
    
}

export async function SignIn(prevState: FormState, formData: FormData): Promise<FormState> {
    if (!(formData instanceof FormData)) {
      return {
        success: false,
        errors: {
          error: ["Invalid login details"],
        },
      };
    }

    const payload = Object.fromEntries(formData);

    const validatedFields = AuthFormSchema.safeParse(payload);

    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors;
      const fields: Record<string, string> = {};

      for (const key of Object.keys(payload)) {
        fields[key] = payload[key].toString();
      }

      return {
        success: false,
        fields,
        errors,
      };
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
          console.error(`signin failed with status: ${res.status}`);
          return {
            success: false,
            errors: {
              api: [`login failed, Invalid login detiails`],
            },
          };
        }

        const result = res.data
        //create user session
        await createSession(result)
        redirect('/dashboard')
    } catch (error) {
        console.error(error)
        return {
            success: false
        }
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
            throw new Error("failed to refresh token" + response.statusText)
        }

        const { accessToken, refreshToken } = await response.data
        
        const updateRes = await axios.post("http://localhost:3000/api/auth/update", {
            accessToken,
            refreshToken
        })

        if (updateRes.status !== 200) {
            throw new Error("failed to update tokens ")
        }

        return accessToken
    } catch (error) {
        console.error("refresh token failed", error)
        return null
    }
}