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
    .min(8, { message: "be at least 8 characters long." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      { message: "Password must include uppercase, lowercase, number and special characters." }
    )
    .trim(),
});

// export type FormState =
//     |{
//         error?: {
//             email?: string[],
//             password?: string[]
//         };
//         message?: string
//     }
//     | undefined


export type FormState = {
    success: boolean
    fields?: Record<string, string>
    errors?: Record<string, string[]>
}