"use client"
import React from 'react'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Spiral from "@/public/assets/illustrations/spiral.png";
import Splash from "@/public/assets/illustrations/splash.png";
import MemoQuestionIllustration from '@/components/QuestionIllustration';
// import { useResponsive } from '@/hooks/use-responsive';



const FAQS = () => {
    // const isMobile = useResponsive("(max-width: 600px)")
    
    const faqs = [
        {
            q: "what is quivy?",
            a: "Quivy is a platform that makes it easy to create, manage, and track giveaways.",
        },
        {
            q: "How does quivy work?",
            a: "Create an event, set up giveaway details, generate a shareable link or QR code, and track participants.",
        },
        {
            q: "who can use quivy?",
            a: "Anyone looking to host giveaways, including businesses, influencers, event organizers, and brands.",
        },
        {
            q: "can i track my giveaway performance?",
            a: "Yes! You can monitor all hosted events, track participant activity, and view winner details..",
        },
        {
            q: "how are winners selected?",
            a: "Winners can be selected fairly and transparently using Quivy’s automated system.",
        },
        {
            q: "do i need technical skills to use quivy?",
            a: "No, Quivy is built to be user-friendly, making it easy for anyone to create and manage giveaways..",
        },
        {
            q: "can i use quivy to promote my brand?",
            a: "Yes, giveaways are a great way to increase brand awareness and attract new customers.",
        },
        {
            q: "how does quivy help increase my engagement?",
            a: "By making events interactive and easy to join, Quivy keeps participants engaged and excited.",
        },
    ];

    
  return (
      <section className="bg-[#FAFAFA] w-full min-h-screen flex flex-col justify-evenly items-center p-4 md:p-6 relative overflow-hidden">
          {/* Splash Illustration */}
          <Image
              src={Splash}
              alt="splash illustration"
              className="w-24 md:w-32 absolute top-0 left-0 md:left-auto md:right-[5%] z-0 opacity-70"
          />

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 md:mb-10">
              Frequently Asked Questions
          </h2>

          <div className="w-full max-w-7xl flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-6 relative z-10">
              {/* FAQ Accordion */}
              <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                      <AccordionItem
                          key={`item-${index}`}
                          value={`item-${index}`}
                          className="rounded-lg bg-white shadow-sm"
                      >
                          <AccordionTrigger className="font-medium text-lg md:text-xl px-4 py-3">
                              {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-3 text-base">
                              {faq.a}
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>

              {/* Contact Card */}
              <Card className="w-full h-fit shadow-lg">
                  <CardHeader className="flex flex-col items-center space-y-6">
                      <MemoQuestionIllustration
                          className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
                          viewBox="0 0 350 350"
                          preserveAspectRatio="xMidYMid meet"
                      />
                      <p className="text-center text-gray-600 md:text-lg">
                          Feel free to contact us with any questions or inquiries.
                      </p>
                  </CardHeader>

                  <CardContent>
                      <form className="flex flex-col space-y-6 md:space-y-8">
                          <div className="space-y-4">
                              <Label htmlFor="fullname" className="text-base md:text-lg">
                                  Full name
                              </Label>
                              <Input
                                  className="h-12 md:h-14 text-base"
                                  name="fullname"
                                  id="fullname"
                                  type="text"
                              />
                          </div>

                          <div className="space-y-4">
                              <Label htmlFor="email" className="text-base md:text-lg">
                                  Email
                              </Label>
                              <Input
                                  className="h-12 md:h-14 text-base"
                                  name="email"
                                  id="email"
                                  type="email"
                              />
                          </div>

                          <div className="space-y-4">
                              <Label htmlFor="message" className="text-base md:text-lg">
                                  Write your question
                              </Label>
                              <Textarea
                                  className="text-base min-h-[120px]"
                                  id="message"
                              />
                          </div>

                          <Button
                              variant="default"
                              className="w-full py-6 text-base md:text-lg bg-quivyPurple hover:bg-quivyPurple/90"
                          >
                              Submit Now
                          </Button>
                      </form>
                  </CardContent>
              </Card>
          </div>

          {/* Spiral Illustration */}
          <Image
              src={Spiral}
              alt="spiral illustration"
              className="w-20 md:w-24 absolute bottom-0 left-0 md:bottom-[5%] md:left-[5%] z-0 opacity-70"
          />
      </section>

  )
}

export default FAQS