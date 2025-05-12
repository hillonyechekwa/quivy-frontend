"use client"

import React, { ReactNode } from 'react'
import Image from "next/image";
import formIllustration from "@/public/assets/illustrations/form-illustration.png";




interface AuthLayoutProps {
    children: ReactNode
}


const AuthLayout = ({ children }: AuthLayoutProps) => {
    


  return (
      <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#F2F2F2]">
      {/* Left side: Form (visible on all screens) */}
      <div className="flex justify-center items-center p-6">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right side: Illustration (completely unchanged) */}
      <div className="hidden md:flex justify-center items-center p-6">
        <div className="w-full max-w-lg h-[90vh] bg-quivyPurple rounded-3xl flex flex-col justify-between items-center px-6 py-10">
          <div className="text-white text-center space-y-2 mt-10">
            <h3 className="text-3xl font-bold">Welcome!</h3>
            <p className="text-sm font-light">
              Turn Your Events into Unforgettable Moments!
            </p>
          </div>
          <Image
            src={formIllustration}
            alt="Illustration"
            className="max-w-full"
            priority
          />
        </div>
      </div>
    </main>
  )
}

export default AuthLayout