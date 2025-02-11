"use client"

import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Logo from "@/public/assets/Logo.png"
import Image from "next/image"


const Nav = () => { 
    return (
        <nav className="w-full p-3 flex justify-evenly items-center">
            <Image src={Logo} alt="quivy logo" className="" />
            <ul>
               <li>
                <Link href="/">Home</Link>
               </li>
               <li>
                <Link href="">How it works</Link>
               </li>
               <li>
                <Link href="">Benefits</Link>
               </li>
               <li>
                <Link href="">Testimonial</Link>
               </li>
               <li>
                <Link href="">FAQs</Link>
               </li>
            </ul>
            <ul>
                <li>
                    <Link href="/auth/signin" className={`${buttonVariants({ variant: "link" })}`}>Sign In</Link>
                </li>
                <li>
                    <Link href="/auth/signin" className={`${buttonVariants({variant: "secondary"})} bg-quivyOrange text-white`} >Create Account</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav