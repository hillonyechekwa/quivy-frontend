"use client"
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from "next/image";
import getStartedImg from "@/public/assets/illustrations/Privacy policy-rafiki 1getstarted.png";
import createEventImg from "@/public/assets/illustrations/Events-pana 2createevent.png";
import shareEventImg from "@/public/assets/illustrations/QR Code-pana 1shareevent.png";
import trackEventImg from "@/public/assets/illustrations/Frame 1038trackevent.png";
import React from 'react'
import { useResponsive } from '@/hooks/use-responsive';
import Video from './Video';
 




const Howitworks = () => {
    const isMobile = useResponsive("(max-width: 768px)");

    return (
        <section
            className="w-full bg-[#F2F2F2] flex flex-col items-center px-4 md:px-8 py-12 md:py-16"
            id="how-it-works"
        >
            {/* Section Header */}
            <div className="w-full max-w-6xl flex flex-col items-center mb-8 md:mb-12">
                <small className="text-quivyOrange font-medium text-sm mb-2">
                    <span className="text-quivyPurple"> - </span> How it works
                </small>
                <h2 className="text-2xl md:text-4xl font-semibold text-center">4-steps to get it done</h2>
            </div>

            {/* Steps Container */}
            <div className={`w-full max-w-6xl ${isMobile ? 'flex flex-col space-y-8' : 'grid grid-cols-4 gap-6'}`}>
                {/* Step 1: Get Started */}
                <Card className="bg-transparent border-none shadow-none flex flex-col items-center">
                    <div className="bg-white rounded-lg p-3 shadow-sm mb-4 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
                        <Image src={getStartedImg} alt="Get Started" className="w-28 h-28 md:w-32 md:h-32 object-contain" />
                    </div>
                    <CardContent className="text-center p-0">
                        <CardTitle className="font-semibold text-base md:text-lg mb-2">Get Started</CardTitle>
                        <p className="text-xs text-gray-600 max-w-[200px]">
                            Sign in if you already have account with us or Create account if you&apos;re a new user to explore.
                        </p>
                    </CardContent>
                </Card>

                {/* Step 2: Create Event */}
                <Card className="bg-transparent border-none shadow-none flex flex-col items-center">
                    <div className="bg-white rounded-lg p-3 shadow-sm mb-4 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
                        <Image src={createEventImg} alt="Create Event" className="w-28 h-28 md:w-32 md:h-32 object-contain" />
                    </div>
                    <CardContent className="text-center p-0">
                        <CardTitle className="font-semibold text-base md:text-lg mb-2">Create Event</CardTitle>
                        <p className="text-xs text-gray-600 max-w-[200px]">
                            Create event add event details, set the giveaway duration, and add giveaway prize details.
                        </p>
                    </CardContent>
                </Card>

                {/* Step 3: Share Event */}
                <Card className="bg-transparent border-none shadow-none flex flex-col items-center">
                    <div className="bg-white rounded-lg p-3 shadow-sm mb-4 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
                        <Image src={shareEventImg} alt="Share Event" className="w-28 h-28 md:w-32 md:h-32 object-contain" />
                    </div>
                    <CardContent className="text-center p-0">
                        <CardTitle className="font-semibold text-base md:text-lg mb-2">Share Event</CardTitle>
                        <p className="text-xs text-gray-600 max-w-[200px]">
                            After creating event, a QR code & a link are generated to share for participant to scan or click to win
                        </p>
                    </CardContent>
                </Card>

                {/* Step 4: Track Event */}
                <Card className="bg-transparent border-none shadow-none flex flex-col items-center">
                    <div className="bg-white rounded-lg p-3 shadow-sm mb-4 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
                        <Image src={trackEventImg} alt="Track Event" className="w-28 h-28 md:w-32 md:h-32 object-contain" />
                    </div>
                    <CardContent className="text-center p-0">
                        <CardTitle className="font-semibold text-base md:text-lg mb-2">Track Event</CardTitle>
                        <p className="text-xs text-gray-600 max-w-[200px]">
                            Track all events in one place, monitor each event created, and view winners information
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Video Player Section */}
            {/* <div className="w-full max-w-6xl mt-16 flex justify-center">
                <video width="500" height="300" preload="none" autoPlay loop className="w-full md:w-3/4 rounded-lg shadow-md">
                   <source src="/Hero.mp4" type='video/mp4' />
                   Your browser doens&apos;t support the video tag
                </video>
            </div> */}
            <Video />
        </section>
    )
}

export default Howitworks