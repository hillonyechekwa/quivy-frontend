"use client"


import { SignUp } from "@/actions/auth"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CardContent} from "@/components/ui/card"
import { useFormState } from "react-dom"
import { buttonVariants } from "@/components/ui/button"
import { Mail } from "lucide-react"





export const SignupForm = () => {
    const [state, action, pending] = useFormState(SignUp, undefined)
    
    

    
    return (
        <CardContent>
            <form action={action} className="">
                <section>
                    <Label htmlFor="email">Email Address</Label>
                    <Input type="email" id="email" placeholder={`${<Mail size={14} />} johndoe@gmail.com `} />
                    {state?.error?.email && <div>{state.error.email}</div>}
                </section>
                <section>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Min 8 characters" />
                    {state?.error?.password && (
                        <div>
                            <p>Password must: </p>
                            <ul>
                                {
                                    state.error.password.map((error) => (
                                        <li key={error}>
                                            {error}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
                </section>

                <button disabled={pending} className={`${buttonVariants({variant: "secondary"})}`} type="submit">Continue</button>
                <small>By continuing, you agree to Quivy&apos;s <Link href="">privacy policy</Link> and <Link href="">Terms and conditions</Link> and to recieve electronic communication about my accounts and services.</small>
            </form>
        </CardContent>
    )
}

