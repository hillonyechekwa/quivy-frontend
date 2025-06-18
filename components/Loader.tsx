import React from 'react'
import Logo from "@/public/assets/Logo.png"
import Image from "next/image"

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <Image src={Logo} alt="logo loader" width={80} height={40} className="animate-pulse" />
    </div>
  )
}

export default Loader