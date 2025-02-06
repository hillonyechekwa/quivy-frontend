import {z} from 'zod'


export type SessionPayload = {
    user: {
        userId: string,
        email: string
    },
    backendToken: {
        accessToken: string,
        refreshToken: string
    }
}


export const AuthFormSchema = z.object({
    email: z.string().email({ message: "please enter email" }).trim(),
    password: z
        .string()
        .min(8, {message: "be at least 8 characters long."})
        .regex(/[a-zA-Z]/, { message: "contain at least one letter." })
        .regex(/[0-9]/, {message: "contain at least one number."})
        .regex(/[^a-zA-Z0-9]/, {message: "contain at least one special character"})
        .trim()
})

export type FormState =
    |{
        error?: {
            email?: string[],
            password?: string[]
        };
        message?: string
    }
    | undefined