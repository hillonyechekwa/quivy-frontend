"use client"
import MemoBackgroundGrid from '@/components/BackgroundGrid'
import MemoTopography from '@/components/Topography'
import { Button} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import appleLogo from "@/public/assets/illustrations/Apple Logo (1).png";
import googleLogo from "@/public/assets/illustrations/Google Logo.png";
import Image from "next/image";
import Lottie from "react-lottie"
import Barcodeanim from "@/public/assets/animations/barcode.json"
import Heroanim from "@/public/assets/animations/hero.json"
import React from 'react'
import {useResponsive} from '@/hooks/use-responsive';

const Hero = () => {

    const barcodeLottieOptions = {
      loop: true,
      autoplay: true,
      animationData: Barcodeanim,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
    
    
    const heroLottieOptions = {
      loop: true,
      autoplay: true,
      animationData: Heroanim,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }
    const isMobile = useResponsive("(max-width: 600px)")

  return (
      <header className="w-full min-h-[100dvh] flex flex-col md:flex-row justify-between items-center relative p-8">
          <MemoBackgroundGrid className="absolute top-0 left-0 w-full -z-0 opacity-15" />
          <MemoTopography className="absolute top-0 left-1/4 w-[100px] md:left-3/4" />
          <article className="relative z-20 w-full h-full flex flex-col justify-center space-y-10">
              <small className="text-quivyOrange">
                  {" "}
                  <span className="text-quivyPurple"> - </span> Host events that stand
                  out
              </small>
              <h2 className="text-3xl capitalize md:text-5xl font-semibold max-w-[600px]">
                  Turn your <span className="text-quivyPurple">events</span> into{" "}
                  <span className="text-quivyPurple">unforgettable</span> moments!
              </h2>
              <p className="text-sm text-gray-400 max-w-[400px]">
                  Create a giveaway to make your event more exciting and engaging.
                  Offer any item as a prize and attract more participants
                  effortlessly. Manage and track your giveaway seamlessly with Quivy!
              </p>
              <div className="flex items-center w-fit h-auto">
                  <Input
                      type="text"
                      className="rounded-full p-8 md:p-8 w-[200px] md:w-[400px]"
                      placeholder="&#9993; Your email address"
                  />
                  <Button
                      variant="default"
                      className="bg-quivyPurple rounded-full relative -left-12 md:-left-28 p-8 w-[150px] md:w-[250px]"
                  >
                      Create Event
                  </Button>
              </div>
              <div className="flex space-x-4 items-center">
                  <Button
                      variant="default"
                      className="flex items-center p-7 md:p-8 rounded-lg w-[150px] md:w-[250px]"
                  >
                      <Image src={appleLogo} alt="" className="w-10" />
                      <article className="flex flex-col items-center">
                          <small className="">Download on the</small>
                          <p className="text-lg">App Store</p>
                      </article>
                  </Button>
                  <Button
                      variant="default"
                      className="flex items-center p-7 md:p-8 rounded-lg w-[150px] md:w-[250px]"
                  >
                      <Image src={googleLogo} alt="" className="w-10" />
                      <article className="flex flex-col item-center">
                          <small>Get it on</small>
                          <p className="text-lg">Google Play</p>
                      </article>
                  </Button>
              </div>
          </article>
          <section className="z-20 relative w-full flex flex-col items-center justify-between space-y-24 h-auto">
              <span className="p-2">
                  <Lottie options={heroLottieOptions} width={`${isMobile ? 300 : 400}`} height={`${isMobile ? 300 : 400}`} /> </span>
              {/* <MemoBarcode className="absolute right-3/4 top-96 md:left-1/4 w-[300px]" /> */}
              <span className="relative top-14 md:top-24"> <Lottie options={barcodeLottieOptions} width={250} height={250} /> </span>
          </section>
      </header>
  )
}

export default Hero