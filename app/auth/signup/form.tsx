"use client"

import { SignUp } from "@/actions/auth"
import { z } from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CardContent } from "@/components/ui/card"
import { useActionState, useEffect, useRef, startTransition } from "react" // Import FocusEvent
import { buttonVariants } from "@/components/ui/button"
import { AuthFormSchema } from "@/utils/definitions"
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons"



export const SignupForm = () => {
    const [formState, formAction] = useActionState(SignUp, {
        success: false,
    });

    const formRef = useRef<HTMLFormElement>(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors: rhfErrors, isSubmitSuccessful, isValid}
    } = useForm<z.output<typeof AuthFormSchema>>({
        resolver: zodResolver(AuthFormSchema),
        defaultValues: {
            email: "",
            password: "",
            ...(formState?.fields ?? {})
        },
        mode: "onTouched"
    })

    useEffect(() => {
        if (isSubmitSuccessful && formState.success) {
           reset()
       }
    }, [reset, isSubmitSuccessful, formState.success])


    return (
        <CardContent className="rounded-sm p-0 w-auto bg-[#FEFEFE]">
            <form action={formAction} ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(() => {
                    startTransition(() => formAction(new FormData(formRef.current!)))
                })
            }} className="flex flex-col justify-between space-y-4">
                {
                    formState?.errors?.error && (
                        <div className="w-full p-3 bg-destructive text-white">{formState?.errors.error}</div>
                    )
                }
                <section className="flex flex-col space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="&#9993; johndoe@gmail.com"
                        required
                        className={`w-[300px] ${rhfErrors.email ? `border-red-500` : `border-quivyPurple`}`}
                        defaultValue={formState.fields?.email}
                        {...register("email")}
                        // onBlur={handleInputBlur} // Add onBlur for validation
                    />
                    {formState?.errors?.email && (
                        <p className="text-destructive text-xs mt-1"> <FontAwesomeIcon icon={faCircleExclamation} /> {formState?.errors?.email}</p>
                    )}
                    {rhfErrors.email?.message && (
                        <p className="text-destructive text-xs mt-1"> <FontAwesomeIcon icon={faCircleExclamation} /> { rhfErrors.email?.message}</p>
                    )}
                </section>
                <section className="flex flex-col space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Min 8 characters"
                        className={`w-[300px] ${rhfErrors.password ? `border-red-500` : `border-quivyPurple`}`}
                        defaultValue={formState.fields?.password}
                        {...register("password")}
                        // onBlur={handleInputBlur} // Add onBlur for validation
                    />
                    {formState?.errors?.password && (
                        <p className="text-destructive text-xs mt-1"> <FontAwesomeIcon icon={faCircleExclamation} /> {formState?.errors?.password}</p>
                    )}
                    {rhfErrors.password?.message && (
                        <p className="text-destructive text-xs mt-1 max-w-[250px]"> <FontAwesomeIcon icon={faCircleExclamation} /> { rhfErrors.password?.message}</p>
                    )}
                </section>

                <button type="submit" disabled={!isValid} className={`${buttonVariants({ variant: "default" })}  w-[300px] ${isValid ? `cursor-pointer opacity-100 bg-quivyPurple`: `cursor-not-allowed opacity-50 bg-quivyPurple/50`}`}>Continue</button>
                <small className="max-w-[300px] text-center text-xs text-gray-300">By continuing, you agree to Quivy&apos;s <Link href="" className="underline underline-offset-1">privacy policy</Link> and <Link href="" className="underline underline-offset-1">Terms and conditions</Link> and to recieve electronic communication about my accounts and services.</small>
            </form>
        </CardContent>
    )
}
