"use client"

import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Logo from "@/public/assets/Logo-white.png"
import Image from "next/image"
import {useState} from 'react'
import { usePathname } from "next/navigation"
import { useResponsive } from "@/hooks/use-responsive"






const Nav = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isMobile = useResponsive("(max-width: 600px)")

  if (pathname === "/auth/signup" || pathname === "/auth/signin") {
    return null
  }


    const handleToggleNav = () => {
      setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-quivyPurple text-white w-full p-2 flex justify-between items-center font-[family-name:var(--font-inria-sans)]">
      <Image src={Logo} alt="quivy logo" className="w-20  md:w-32" />
      {
        isMobile &&
        (
          <div>
            <div className="w-8 border-none bg-transparent flex flex-col space-y-2 relative" onClick={() => { handleToggleNav() }}>
              <span className={`w-full h-[3px] rounded-sm bg-white transition-all duration-300 ease-in-out ${isOpen ? "translate-y-2.5 rotate-45 absolute -top-3" : ""}`}></span>
              <span className={`w-full h-[3px] rounded-sm bg-white transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`w-full h-[3px] rounded-sm bg-white transition-all duration-300 ease-in-out ${isOpen ? "-translate-y-2.5 -rotate-45 absolute bottom-0" : ""}`}></span>
            </div>
            {isOpen && (
              <ul className={`${isOpen ? 'fade-in' : 'fade-out'} w-full h-full flex space-y-8 space-x-4 absolute top-16 left-0 flex-col bg-white px-3 py-3 z-30 text-black`}>
                <li className="flex flex-row space-x-3">
                   <Link href="/auth/signin" className={`${buttonVariants({ variant: "outline" })} text-lg text-black`}>Sign In</Link>
                  <Link href="/auth/signup" className={`${buttonVariants({ variant: "default" })} bg-quivyOrange text-white`} >Create Account</Link>
                </li>
              <li className="cursor-pointer hover:bg-gray-400">
                Home
              </li>
              <li className="cursor-pointer hover:bg-gray-400">
                <Link href="#how-it-works">How it works</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-400">
                <Link href="#benefits">Benefits</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-400">
                <Link href="#testimonial">Testimonial</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-400">
                <Link href="#faqs">FAQs</Link>
              </li>
            </ul>
          )}
          </div>
        )
      }

      {!isMobile && (
        <>
          <ul className="flex space-x-4">
            <li className="cursor-pointer">
              Home
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
              <Link href="/auth/signup" className={`${buttonVariants({ variant: "default" })} bg-quivyOrange text-white`} >Create Account</Link>
            </li>
          </ul>
        </>
      )}

    </nav>
  )
}


export default Nav
