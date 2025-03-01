import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Nav from "@/components/Nav";
import Image from "next/image";

import getStartedImg from "@/public/assets/illustrations/Privacy policy-rafiki 1getstarted.png"
import createEventImg from "@/public/assets/illustrations/Events-pana 2createevent.png"
import shareEventImg from "@/public/assets/illustrations/QR Code-pana 1shareevent.png"
import trackEventImg from "@/public/assets/illustrations/Frame 1038trackevent.png"
import appleLogo from "@/public/assets/illustrations/Apple Logo (1).png"
import googleLogo from "@/public/assets/illustrations/Google Logo.png"
import MemoBarcode from "@/components/Barcode";
import MemoBackgroundGrid from "@/components/BackgroundGrid";
import MemoTopography from "@/components/Topography";
// import MemoRotatingOrbs from "@/components/RotatingOrbs";
import AudienceEngagmentImg from "@/public/assets/illustrations/IntersectThreeaudienceengagement.png"
import PromoteNewProductImg from "@/public/assets/illustrations/FediverseLogopromotenewproduct.png"
import BuildCustomerLoyaltyImg from "@/public/assets/illustrations/Heartbeatcustomerloyalty.png"
import BrandAwarenessImg from "@/public/assets/illustrations/Vectorbrandawareness.png"
import ScalableSolutionImg from "@/public/assets/illustrations/Vectorscalablesolution.png"
import BenefitIllustration from "@/public/assets/illustrations/benefitillustration.png"
import BrandImgOne from "@/public/assets/illustrations/brand loyalty-amico 1.png"
import BrandImgTwo from "@/public/assets/illustrations/brand loyalty-pana 1.png"
import BrandImgThree from "@/public/assets/illustrations/Business mission-pana 1.png"
// import QuestionIllustration from "@/public/assets/illustrations/Questions-pana 1.png"
import MemoQuestionIllustration from "@/components/QuestionIllustration";
import AppBenefits from "@/components/AppBenefits";
import { Textarea } from "@/components/ui/textarea";
import Spiral from "@/public/assets/illustrations/spiral.png"
import Splash from "@/public/assets/illustrations/splash.png"
import Phone from "@/components/Phone"
import QrCode from "@/components/QrCode"
import QuviyLogo from "@/public/assets/Logo-white.png"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare, faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";















const benefitsImgs = [
  {
    id: 1,
    img: AudienceEngagmentImg,
    title: "Audience Engagement",
    description: " Create an interactive experience that keeps your audience engaged and excited.",
    color: "bg-[#000000]"
  },
  {
    id: 2,
    img: PromoteNewProductImg,
    title: "Promote New Product",
    description: "Use giveaways to attract attention to new products, increase visibility and strengthen customer interest.",
    color: "bg-[#321A72]"
  },
  {
    id: 3,
    img: BuildCustomerLoyaltyImg,
    title: "Build Customer Loyalty",
    description: "Reward participants, strengthen trust, and keep customers engaged for long-term loyalty.",
    color: "bg-[#FF0000]"
  },
  {
    id: 4,
    img: BrandAwarenessImg,
    title: "Brand Awareness",
    description: "Increase brand awareness by reaching a wider audience and making your brand more recognizable.",
    color: "bg-[#7340FD]"
  },
  {
    id: 5,
    img: ScalableSolutionImg,
    title: "Scalable Solution",
    description: "Either it's a small gathering or a large event, manage your audience easily and capture their attention.",
    color: "bg-[#FF9800]"
  }
]


const faqs = [
  {
    q: "what is quivy?",
    a: "Quivy is a platform that makes it easy to create, manage, and track giveaways."
  },
  {
    q: "How does quivy work?",
    a: "Create an event, set up giveaway details, generate a shareable link or QR code, and track participants."
  },
  {
    q: "who can use quivy?",
    a: "Anyone looking to host giveaways, including businesses, influencers, event organizers, and brands."
  },
  {
    q: "can i track my giveaway performance?",
    a: "Yes! You can monitor all hosted events, track participant activity, and view winner details.."
  },
  {
    q: "how are winners selected?",
    a: "Winners can be selected fairly and transparently using Quivy’s automated system."
  },
  {
    q: "do i need technical skills to use quivy?",
    a: "No, Quivy is built to be user-friendly, making it easy for anyone to create and manage giveaways.."
  },
  {
    q: "can i use quivy to promote my brand?",
    a: "Yes, giveaways are a great way to increase brand awareness and attract new customers."
  },
  {
    q: "how does quivy help increase my engagement?",
    a: "By making events interactive and easy to join, Quivy keeps participants engaged and excited."
  },
]


export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      <Nav />
      <header className="w-full h-[100dvh] flex justify-between items-center relative p-8">
        <MemoBackgroundGrid className="absolute top-0 left-0 w-full -z-0 opacity-15" />
        <MemoTopography className="absolute top-0 left-3/4" />
        <article className="relative z-20 w-full h-full flex flex-col justify-center space-y-10">
          <small className="text-quivyOrange"> <span className="text-quivyPurple"> - </span> Host events that stand out</small>
          <h2 className="text-5xl font-semibold max-w-[600px]">
            Turn your <span className="text-quivyPurple">events</span> into <span className="text-quivyPurple">unforgettable</span> moments!
          </h2>
          <p className="text-sm text-gray-400 max-w-[400px]">Create a giveaway to make your event more exciting and engaging. Offer any item as a prize and attract more participants effortlessly. Manage and track your giveaway seamlessly with Quivy!</p>
          <div className="flex items-center">
            <Input type="text" className="rounded-full p-5 w-[400px]" placeholder="&#9993; Your email address" />
            <Button variant="default" className="bg-quivyPurple rounded-full relative -left-28">Create Event</Button>
          </div>
          <div className="flex space-x-4 items-center">
            <Button variant="default" className="flex items-center p-7 rounded-lg">
              <Image src={appleLogo} alt="" className="w-10" />
              <article className="flex flex-col items-center">
                <small className="">Download on the</small>
                <p className="text-lg">App Store</p>
              </article>
            </Button>
            <Button variant="default" className="flex items-center p-7 rounded-lg">
              <Image src={googleLogo} alt="" className="w-10" />
              <article className="flex flex-col item-center">
                <small>Get it on</small>
                <p className="text-lg">Google Play</p>
              </article>
            </Button>
          </div>
        </article>
        <section className="z-20 relative w-full">
          <MemoBarcode className="absolute top-96 left-2/4" />
        </section>
      </header>
      <main className="w-full relative top-36 pt-44">
        <section className="min-h-[100dvh] bg-[#F2F2F2]  flex flex-col items-center justify-center space-y-24" id="how-it-works">
          <small className="text-quivyOrange font-semibold text-lg"> <span className='text-quivyPurple'> - </span> How it works</small>
          <h2 className="text-5xl">4-Steps to get it done</h2>
          <div className="flex justify-center items-center space-x-14">
            <Card className="bg-transparent flex flex-col items-center space-y-4 shadow-none border-none">
              <div className="p-2 bg-white rounded-md">
                <Image src={getStartedImg} alt="" className="w-[160px]" />
              </div>
              <CardContent className="text-center space-y-3">
                <CardTitle className="font-semilbold text-lg">Get Started</CardTitle>
                <p className="text-xs max-w-44">Sign in if you already have account with us or Create account if you&apos;re a new user to explore.</p>
              </CardContent>
            </Card>
            <Card className="bg-transparent flex flex-col items-center space-y-4 shadow-none border-none">
              <div className="rounded-md bg-white p-2">
                <Image src={createEventImg} alt="" className="w-[220px]" />
              </div>
              <CardContent className="text-center space-y-3">
                <CardTitle>Create Event</CardTitle>
                <p className="text-xs max-w-44">Create event add event details, set the giveaway duration, and add giveaway prize details.</p>
              </CardContent>
            </Card>
            <Card className="bg-transparent flex flex-col items-center space-y-4 shadow-none border-none">
              <div className="bg-white rounded-md p-2">
                <Image src={shareEventImg} alt="" className="max-w-[160px]" />
              </div>
              <CardContent className="text-center space-y-3">
                <CardTitle className="font-semilbold text-lg">Share Event</CardTitle>
                <p className="text-xs max-w-44">After creating event, a QR code & a link are generated to share for participant to scan or click to win</p>
              </CardContent>
            </Card>
            <Card className="bg-transparent flex flex-col items-center space-y-4 shadow-none border-none">
              <div className="bg-white rounded-md p-2">
                <Image src={trackEventImg} alt="" className="max-w-[160px]" />
              </div>
              <CardContent className="text-center space-y-3">
                <CardTitle className="font-semilbold text-lg">Track Event</CardTitle>
                <p className="text-xs max-w-44">Track all events in one place, monitor each event created, and view winners information</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full h-[100dvh] grid grid-cols-[1fr_0.5fr] justify-center items-center relative">
          {/* <MemoRotatingOrbs className="absolute top-0 left-2/4 -z-0"/> */}
          <div className="flex justify-center items-center space-x-8 relative z-20">

            <div className="grid grid-rows-2 grid-cols-1 gap-7">
              {
                benefitsImgs.slice(0, 3).map((benefit) => (
                  <AppBenefits
                    key={benefit.id}
                    img={benefit.img}
                    title={benefit.title}
                    description={benefit.description}
                    color={benefit.color}
                  />
                ))
              }
            </div>
            <div className="grid grid-rows-2 grid-cols-1 gap-7">
              {
                benefitsImgs.slice(-2).map((benefit) => (
                  <AppBenefits
                    key={benefit.id}
                    img={benefit.img}
                    title={benefit.title}
                    description={benefit.description}
                    color={benefit.color}
                  />
                ))
              }
            </div>
          </div>
          <div className="justify-self-end relative z-20">
            <small className="text-quivyOrange text-xs font-medium"> <span className="text-quivyPurple"> - </span> Benefits </small>
            <h2 className="text-5xl max-w-[400px] font-semibold capitalize">Why <span className="text-quivyPurple">Quivy</span> your giveaway with us?</h2>
          </div>
        </section>
        <section className="relative w-full h-[50dvh] bg-[#F1ECFF]">
          <Image src={BenefitIllustration} alt="" className="max-w-[700px] absolute -top-80 left-1/2 mx-10"/>
        </section>
        <section className="grid grid-rows-2 grid-cols-1 p-5">
          <div className="text-center space-y-4 bg-quivyPurple w-full p-6 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl">About Us</h2>
            <p className="max-w-[800px] text-gray-200">
              Quivy is a smart and seamless giveaway platform designed to help businesses, event organizers, and individuals create engaging and rewarding experiences. We simplify the giveaway process, allowing hosts to set up, manage, and distribute prizes effortlessly through QR codes and unique links. With Quivy, giveaways are no longer a hassle—they&apos;re an opportunity to drive engagement, boost brand visibility, and delight participants.
            </p>
          </div>
          <div className="flex justify-evenly items-center w-full">
            <section className="flex flex-col items-center space-y-6 p-3">
              <article>
                <h2 className="text-4xl font-semilbold ">Our Mission</h2>
                <p className="max-w-[500px] text-gray-500 text-sm leading-relaxed">Our mission is to make giveaways simple, engaging, and rewarding for both hosts and participants. We empower businesses and event organizers with a seamless and automated solution that enhances audience engagement, builds brand loyalty, and turns every event into an exciting, memorable experience.</p>
              </article>
              <article>
                <h2 className="text-4xl font-semilbold ">Our Vision</h2>
              <p className="max-w-[500px] text-gray-500 text-sm leading-relaxed">
                To become the go-to giveaway platform that enables brands and businesses to effortlessly engage their audience, drive excitement, and reward participation. We envision a future where giveaways are instant, interactive, and impactful, helping businesses, and brands grow while delivering unforgettable experiences.
              </p>
              </article>
            </section>
            <section className="grid grid-cols-2 grid-rows-2">
              <Image src={BrandImgOne} alt="" />
              <Image src={BrandImgTwo} alt="" />
              <Image src={BrandImgThree} alt=""  className="row-span-2 justify-self-center"/>
            </section>
          </div>
        </section>
        <section className="bg-[#FAFAFA] min-h-[100dvh] flex flex-col justify-evenly items-center p-5 relative">
          <Image src={Splash} alt="splash illustration" className="absolute top-0 left-[85%] z-0"/>
          <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
          <section className="w-full grid grid-cols-2 justify-evenly p-6 space-x-8 relative z-10">
          <Accordion type="single" collapsible className="p-5">
            {
              faqs.map((faq, index) => (
                <AccordionItem key={`item-${index}`} value={`item-${index}`} className="mb-3 shadow-sm bg-white rounded-md p-4">
                  <AccordionTrigger className="font-medium text-2xl capitalize">{faq.q}</AccordionTrigger>
                  <AccordionContent>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem> 
              ))
            }
            
          </Accordion>
          <Card className="space-y-16">
              <CardHeader className="">
                <MemoQuestionIllustration className="mx-auto" />
                <p className="text-center">Feel free to contact us with any questions or inquiries.</p>
              </CardHeader>    
              <CardContent>
                <form className="flex flex-col items-center justify-between space-y-16">
                  <div className="w-full flex flex-col items-start justify-evenly space-y-2">
                    <Label htmlFor="fullname" className="font-semibold text-lg">Full name</Label>
                    <Input className="w-full" name="fullname" id="fullname" type="text" placeholder=""/>
                  </div>
                  <div className="w-full flex flex-col items-start justify-evenly space-y-2">
                    <Label htmlFor="email" className="font-semibold text-lg">Email</Label>
                    <Input className="w-full" name="email" id="email" type="email"/>
                  </div>
                  <div className="w-full flex flex-col items-start justify-evenly space-y-2">
                    <Label htmlFor="message" className="font-semibold text-lg" >Write your question</Label>
                    <Textarea className="w-full" id="message" rows={5}  />
                  </div>
                  <Button variant="default" className="p-7 text-lg bg-quivyPurple">Submit Now</Button>
                </form>  
              </CardContent>
          </Card>
          </section>
          <Image src={Spiral} alt="spiral illustration" className="absolute top-[90%] z-0 w-24 -left-0" />
        </section>
        <section className="w-full h-[100dvh] grid grid-cols-1 grid-row-[1_0.5] relative">
          <div className="w-full h-full">
            <Phone className="absolute top-16 left-20" />
            </div>
          <div className="w-full h-full bg-quivyPurple/30">
            <article className="w-[800px] relative left-2/4 top-32 grid grid-cols-2 grid-rows-2 justify-evenly items-center space-x-8">
              <h2 className="text-4xl font-semibold text-center">Get <span className="text-quivyPurple"> Quivy</span> on Play Store or App Store</h2>
              <div className="flex space-x-4 items-center row-start-2 row-end-3 col-start-1 col-end-2">
                <Button variant="default" className="flex items-center p-8 rounded-lg">
                  <Image src={appleLogo} alt="" className="w-10" />
                  <article className="flex flex-col items-center">
                    <small className="">Download on the</small>
                    <p className="text-lg">App Store</p>
                  </article>
                </Button>
                <Button variant="default" className="flex items-center p-8 rounded-lg">
                  <Image src={googleLogo} alt="" className="w-10" />
                  <article className="flex flex-col item-center">
                    <small>Get it on</small>
                    <p className="text-lg">Google Play</p>
                  </article>
                </Button>
              </div>
              <div className="p-2 bg-white w-fit row-start-2 row-end-3 col-start-2 col-end-3">
              <QrCode className="" />
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer className="text-white mt-[300px] bg-quivyPurple w-full h-[100vh] flex flex-col justify-between items-center">
        <div className="w-full p-12 grid grid-cols-3 grid-rows-1 items-start justify-center relative top-1/4">
          <article className="flex flex-col items-start justify-between space-y-8">
            <Image src={QuviyLogo} alt="quivy logo in qhite" className="" />
            <p className="max-w-[300px] text-lg">Create a giveaway to make your event more exciting and engaging. Offer any item as a prize and attract more participants effortlessly. Manage and track your giveaway seamlessly with Quivy!</p>
            <div className="flex items-center">
              <Input type="text" className="rounded-full p-6 w-[300px] bg-white" placeholder="&#9993; Your email address" />
              <Button variant="default" className="bg-quivyPurple rounded-full relative -left-28">Create Event</Button>
            </div>
          </article>   
          <div className="flex justify-between items-start space-x-6 text-sm">
            <ul className="flex flex-col items-start justify-between space-y-3">
              <li className="font-semibold text-xl">Quick Links</li>
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">Benefits</Link>
              </li>
              <li>
                <Link href="">FAQs</Link>
              </li>
              <li>
                <Link href="">Sign in</Link>
              </li>
              <li>
                <Link href="">Create Account</Link>
              </li>
              <li>
                <Link href="">Download App</Link>
              </li>
            </ul>
            <ul className="flex flex-col items-start justify-between space-y-3">
              <li className="font-semibold text-xl">Resources</li>
              <li>
                <Link href="">Blogs</Link>
              </li>
              <li>
                <Link href="">Mission</Link>
              </li>
              <li>
                <Link href="">Vision</Link>
              </li>
              <li>
                <Link href="">About us</Link>
              </li>
            </ul>
            <ul className="flex flex-col items-start justify-between space-y-3">
              <li className="font-semibold text-xl">Support</li>
              <li>
                <Link href="">Help Center</Link>
              </li>
              <li>
                <Link href="">How it works</Link>
              </li>
              <li>
                <Link href="">User guide</Link>
              </li>
              <li>
                <Link href="">Terms of service</Link>
              </li>
              <li>
                <Link href="">Contact us</Link>
              </li>
            </ul>
           </div>
          <div className="flex flex-col items-start justify-center space-y-5 justify-self-center">
            <h3>Socials</h3>
            <ul className="flex items-center justify-center space-x-4">
              <li className="bg-white rounded-full p-2 w-fit h-fit flex items-center justify-center">
                <FontAwesomeIcon icon={faInstagramSquare} size="lg" className="text-quivyPurple"/>
              </li>
              <li className="bg-white rounded-full p-2 w-fit h-fit flex items-center justify-center">
                <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-quivyPurple"/>
              </li>
              <li className="bg-white rounded-full p-2 w-fit h-fit flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebook} size="lg" className="text-quivyPurple"/>
              </li>
              <li className="bg-white rounded-full p-2 w-fit h-fit flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-quivyPurple"/>
              </li>
            </ul>
           </div>
        </div>
        <div className="w-full flex justify-between items-center border-t-2 border-t-white p-3 font-light">
          <p>&copy;2025 Quivy. All Rights Reserved</p>
          <p>
            <Link href="">Terms and Conditions.</Link>
            <Link href="">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
