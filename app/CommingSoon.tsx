"use client"
import Phone from '@/components/Phone'
import QrCode from '@/components/QrCode'
import { Button } from '@/components/ui/button'
import { useResponsive } from '@/hooks/use-responsive';
import appleLogo from "@/public/assets/illustrations/Apple Logo (1).png";
import googleLogo from "@/public/assets/illustrations/Google Logo.png";
import Image from 'next/image'
import React from 'react'

const CommingSoon = () => {
    const isMobile = useResponsive("(max-width: 600px)")

    
  return (
      <section className="w-full h-[100dvh] grid grid-cols-1 grid-row-[1_0.5] relative">
          <div className="w-full h-full">
              <Phone className="w-full absolute top-16 md:left-20" viewBox={`0 0 ${isMobile ? `1100` : `1700`} ${isMobile ? `1250` : `800`}`} preserveAspectRatio="none" />
          </div>
          <div className="w-full h-full bg-quivyPurple/30">
              <article className="w-[300px] md:w-[700px] relative md:left-2/4 top-60 md:top-32 grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 justify-evenly items-center space-x-8">
                  <h2 className="text-2xl max-w-[200px] md:max-w-[400px] md:text-4xl font-semibold text-center md:text-left">
                      Get <span className="text-quivyPurple"> Quivy</span> on Play
                      Store or App Store
                  </h2>
                  <div className="flex space-x-4 items-center row-start-2 row-end-3 col-start-1 col-end-2">
                      <Button
                          variant="default"
                          className="flex items-center p-8 rounded-lg"
                      >
                          <Image src={appleLogo} alt="" className="w-10" />
                          <article className="flex flex-col items-center">
                              <small className="">Download on the</small>
                              <p className="text-lg">App Store</p>
                          </article>
                      </Button>
                      <Button
                          variant="default"
                          className="flex items-center p-8 rounded-lg"
                      >
                          <Image src={googleLogo} alt="" className="w-10" />
                          <article className="flex flex-col item-center">
                              <small>Get it on</small>
                              <p className="text-lg">Google Play</p>
                          </article>
                      </Button>
                  </div>
                  <div className=" p-4 md:p-2 bg-white w-fit row-start-2 row-end-3 col-start-2 col-end-3">
                      <QrCode className="" />
                  </div>
              </article>
          </div>
      </section>
  )
}

export default CommingSoon