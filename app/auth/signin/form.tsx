"use client"


import { SignIn } from "@/actions/auth"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CardContent } from "@/components/ui/card"
import { useFormState } from "react-dom"
import { buttonVariants } from "@/components/ui/button"
import { Mail } from "lucide-react"



export const SigninForm = () => {
    const [state, action, pending] = useFormState(SignIn, undefined)
    
    return (
        <CardContent>
            <form action={action}>
                <section>
                    <Label htmlFor="email">Email Address</Label>
                    <Input type="email" id="email" placeholder={`${<Mail size={14} />} johndoe@gmail.com`} className="" />
                    {state?.error?.email && <div>{state.error.email}</div>}
                </section>
                <section>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Min 8 characters" className="" />
                </section>
                <Link href="" className={`${buttonVariants({variant: "link"})}`}>forgot password?</Link>
                <button disabled={pending} className={`${buttonVariants({ variant: "secondary" })}`} type="submit">Continue</button>
                <small>By continuing, you agree to Quivy&apos;s <Link href="">privacy policy</Link> and <Link href="">Terms and conditions</Link> and to recieve electronic communication about my accounts and services.</small>
            </form>
        </CardContent>
    )
}

