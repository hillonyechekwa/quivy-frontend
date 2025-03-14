"use client"
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from "next/image";
import getStartedImg from "@/public/assets/illustrations/Privacy policy-rafiki 1getstarted.png";
import createEventImg from "@/public/assets/illustrations/Events-pana 2createevent.png";
import shareEventImg from "@/public/assets/illustrations/QR Code-pana 1shareevent.png";
import trackEventImg from "@/public/assets/illustrations/Frame 1038trackevent.png";
import React from 'react'

const Howitworks = () => {
  return (
      <section
          className="min-h-[100dvh] bg-[#F2F2F2] flex flex-col items-center justify-center space-y-24 pt-24"
          id="how-it-works"
      >
          <small className="text-quivyOrange font-semibold text-lg">
              {" "}
              <span className="text-quivyPurple"> - </span> How it works
          </small>
          <h2 className="text-3xl md:text-5xl">4-Steps to get it done</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-14 md:space-x-14">
              <Card className="bg-transparent w-[150px] md:w-[350px] flex flex-col items-center space-y-4 shadow-none border-none">
                  <div className="p-2 bg-white rounded-md">
                      <Image src={getStartedImg} alt="" className="w-[160px]" />
                  </div>
                  <CardContent className="text-center space-y-3">
                      <CardTitle className="font-semilbold text-sm md:text-lg">
                          Get Started
                      </CardTitle>
                      <p className="text-xs max-w-44">
                          Sign in if you already have account with us or Create account
                          if you&apos;re a new user to explore.
                      </p>
                  </CardContent>
              </Card>
              <Card className="bg-transparent w-[200px] md:w-[350px] flex flex-col items-center space-y-4 shadow-none border-none">
                  <div className="rounded-md bg-white p-2">
                      <Image src={createEventImg} alt="" className="w-[220px]" />
                  </div>
                  <CardContent className="text-center space-y-3">
                      <CardTitle className="font-semibold text-sm md:text-lg">Create Event</CardTitle>
                      <p className="text-xs max-w-44">
                          Create event add event details, set the giveaway duration, and
                          add giveaway prize details.
                      </p>
                  </CardContent>
              </Card>
              <Card className="bg-transparent w-[200px] md:w-[350px] flex flex-col items-center space-y-4 shadow-none border-none">
                  <div className="bg-white rounded-md p-2">
                      <Image src={shareEventImg} alt="" className="max-w-[160px]" />
                  </div>
                  <CardContent className="text-center space-y-3">
                      <CardTitle className="font-semilbold text-sm md:text-lg">
                          Share Event
                      </CardTitle>
                      <p className="text-xs max-w-44">
                          After creating event, a QR code & a link are generated to
                          share for participant to scan or click to win
                      </p>
                  </CardContent>
              </Card>
              <Card className="bg-transparent w-[200px] md:w-[350px] flex flex-col items-center space-y-4 shadow-none border-none">
                  <div className="bg-white rounded-md p-2">
                      <Image src={trackEventImg} alt="" className="max-w-[160px]" />
                  </div>
                  <CardContent className="text-center space-y-3">
                      <CardTitle className="font-semilbold text-sm md:text-lg">
                          Track Event
                      </CardTitle>
                      <p className="text-xs max-w-44">
                          Track all events in one place, monitor each event created, and
                          view winners information
                      </p>
                  </CardContent>
              </Card>
          </div>
      </section>
  )
}

export default Howitworks