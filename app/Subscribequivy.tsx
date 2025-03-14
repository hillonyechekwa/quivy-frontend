"use client"
import MemoBackgroundGrid from '@/components/BackgroundGrid'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Subscribequivy = () => {
  return (
      <section className="w-full relative flex flex-col justify-between items-center space-y-8 p-6 bg-gray-100">
          <MemoBackgroundGrid className="absolute top-0 left-0 w-full -z-0 opacity-15 h-full" />

          <h2 className="text-3xl text-center max-w-[800px] relative z-10">
              {" "}
              Automate your giveaways with quivy and capture high quality leads
              effortlessly increasing brand visibility{" "}
          </h2>
          <p className="text-sm text-center text-gray-400 max-w-[600px] relative z-10">
              Join the waitlist today and be among the first to access our
              powerful platform designed to simplify giveaways, attract engaged
              audiences, and drive real growth. Don&apos;t miss out - secure your
              spot
          </p>
          <div className="flex items-center relative z-10">
              <Input
                  type="text"
                  className="rounded-full p-6 w-[300px] md:w-[600px] bg-white"
                  placeholder="&#9993; Your email address"
              />
              <Button
                  variant="default"
                  className="bg-quivyPurple rounded-full relative -left-28"
              >
                  Create Event
              </Button>
          </div>
      </section>
  )
}

export default Subscribequivy