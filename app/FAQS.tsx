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
import { useResponsive } from '@/hooks/use-responsive';



const FAQS = () => {
    const isMobile = useResponsive("(max-width: 600px)")
    
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
      <section className="bg-[#FAFAFA] min-h-[100dvh] flex flex-col justify-evenly items-center p-5 relative">
          <Image
              src={Splash}
              alt="splash illustration"
              className="w-32 absolute top-0 left-0 md:left-[85%] z-0"
          />
          <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
          <section className="w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-evenly p-6 space-x-8 relative z-10">
              <Accordion type="single" collapsible className="p-5 justify-self-center">
                  {faqs.map((faq, index) => (
                      <AccordionItem
                          key={`item-${index}`}
                          value={`item-${index}`}
                          className="mb-3 shadow-sm bg-white rounded-md p-4"
                      >
                          <AccordionTrigger className="font-medium text-2xl capitalize">
                              {faq.q}
                          </AccordionTrigger>
                          <AccordionContent>{faq.a}</AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
              <Card className="space-y-16 ">
                  <CardHeader className="w-full flex flex-col justify-center items-center">
                      <MemoQuestionIllustration className="" viewBox={`0 0 ${isMobile ? `350` : `298`} ${isMobile ? `350` : `298`}`} preserveAspectRatio="none" />
                      <p className="text-center">
                          Feel free to contact us with any questions or inquiries.
                      </p>
                  </CardHeader>
                  <CardContent>
                      <form className="flex flex-col items-center justify-between space-y-16">
                          <div className="w-full flex flex-col items-start justify-evenly space-y-2">
                              <Label htmlFor="fullname" className="font-semibold text-lg">
                                  Full name
                              </Label>
                              <Input
                                  className="w-full py-5"
                                  name="fullname"
                                  id="fullname"
                                  type="text"
                                  placeholder=""
                              />
                          </div>
                          <div className="w-full flex flex-col items-start justify-evenly space-y-2">
                              <Label htmlFor="email" className="font-semibold text-lg">
                                  Email
                              </Label>
                              <Input
                                  className="w-full py-5"
                                  name="email"
                                  id="email"
                                  type="email"
                              />
                          </div>
                          <div className="w-full flex flex-col items-start justify-evenly space-y-2">
                              <Label htmlFor="message" className="font-semibold text-lg">
                                  Write your question
                              </Label>
                              <Textarea className="w-full" id="message" rows={5} />
                          </div>
                          <Button
                              variant="default"
                              className="p-7 text-lg bg-quivyPurple"
                          >
                              Submit Now
                          </Button>
                      </form>
                  </CardContent>
              </Card>
          </section>
          <Image
              src={Spiral}
              alt="spiral illustration"
              className="absolute top-[90%] z-0 w-24 -left-0"
          />
      </section>
  )
}

export default FAQS