"use client"
import React from 'react'
import ForgotPasswordForm from './form'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import Logo from "@/public/assets/Logo.png";




const ForgotPasswordPage = () => {
  const router = useRouter()
  return (
    <section className="w-full flex flex-col justify-center md:justify-start items-center space-y-10">
      <div className="flex flex-col space-y-3 items-start justify-between">
        <Image src={Logo} alt="quivy logo" className="w-24 relative md:-left-48" />
        <div onClick={() => router.back()} className={`${buttonVariants({ variant: "link" })} flex items-center justify-between relative md:-left-48 space-x-3 hover:text-quivyPurple`}>
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
          <p>Go Back</p>
        </div>
      </div>
      <ForgotPasswordForm />
    </section>
  )
}

export default ForgotPasswordPage