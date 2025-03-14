"use client"
import React from 'react'
// import BrandImgOne from "@/public/assets/illustrations/brand loyalty-amico 1.png";
// import BrandImgTwo from "@/public/assets/illustrations/brand loyalty-pana 1.png";
// import BrandImgThree from "@/public/assets/illustrations/Business mission-pana 1.png";
// import Image from "next/image";

const Aboutquivy = () => {
  return (
        <section className="grid grid-rows-2 grid-cols-1 p-5">
          <div className="text-center space-y-4 bg-quivyPurple w-full p-6 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl">About Us</h2>
            <p className="max-w-[800px] text-gray-200">
              Quivy is a smart and seamless giveaway platform designed to help
              businesses, event organizers, and individuals create engaging and
              rewarding experiences. We simplify the giveaway process, allowing
              hosts to set up, manage, and distribute prizes effortlessly
              through QR codes and unique links. With Quivy, giveaways are no
              longer a hassle—they&apos;re an opportunity to drive engagement,
              boost brand visibility, and delight participants.
            </p>
          </div>
          {/* <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
            <section className="flex flex-col items-center space-y-6 p-3">
              <article>
                <h2 className="text-4xl font-semilbold ">Our Mission</h2>
                <p className="max-w-[500px] text-gray-500 text-sm leading-relaxed">
                  Our mission is to make giveaways simple, engaging, and
                  rewarding for both hosts and participants. We empower
                  businesses and event organizers with a seamless and automated
                  solution that enhances audience engagement, builds brand
                  loyalty, and turns every event into an exciting, memorable
                  experience.
                </p>
              </article>
              <article>
                <h2 className="text-4xl font-semilbold ">Our Vision</h2>
                <p className="max-w-[500px] text-gray-500 text-sm leading-relaxed">
                  To become the go-to giveaway platform that enables brands and
                  businesses to effortlessly engage their audience, drive
                  excitement, and reward participation. We envision a future
                  where giveaways are instant, interactive, and impactful,
                  helping businesses, and brands grow while delivering
                  unforgettable experiences.
                </p>
              </article>
            </section>
            <section className="grid grid-cols-2 grid-rows-2">
              <Image src={BrandImgOne} alt="" />
              <Image src={BrandImgTwo} alt="" />
              <Image
                src={BrandImgThree}
                alt=""
                className="row-span-2 justify-self-center"
              />
            </section>
          </div> */}
        </section>
  )
}

export default Aboutquivy