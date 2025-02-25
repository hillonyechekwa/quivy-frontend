"use client"

import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Logo from "@/public/assets/Logo-white.png"
import Image from "next/image"
import { usePathname } from "next/navigation"


const Nav = () => { 

    const pathname = usePathname()
    
    if (pathname === "/auth/signup" || pathname === "/auth/signin") {
        return null
    }

    return (
        <nav className="bg-quivyPurple text-white w-full p-2 flex justify-between items-center font-[family-name:var(--font-inria-sans)]">
            <Image src={Logo} alt="quivy logo" className="w-32" />
            <ul className="flex space-x-4">
               <li>
                <Link href="/">Home</Link>
               </li>
               <li>
                <Link href="#how-it-works">How it works</Link>
               </li>
               <li>
                <Link href="#benefits">Benefits</Link>
               </li>
               <li>
                <Link href="#testimonial">Testimonial</Link>
               </li>
               <li>
                <Link href="#faqs">FAQs</Link>
               </li>
            </ul>
            <ul className="flex space-x-2">
                <li>
                    <Link href="/auth/signin" className={`${buttonVariants({ variant: "link" })} text-lg text-white`}>Sign In</Link>
                </li>
                <li>
                    <Link href="/auth/signin" className={`${buttonVariants({variant: "default"})} bg-quivyOrange text-white`} >Create Account</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav