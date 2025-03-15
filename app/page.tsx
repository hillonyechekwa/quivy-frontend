"use client"

import Nav from "@/components/Nav";
import Hero from "./Hero";
import Howitworks from "./Howitworks";
import Benefits from "./Benefits";
import Subscribequivy from "./Waitlist";
import Aboutquivy from "./Aboutquivy";
import FAQS from "./FAQS";
import CommingSoon from "./CommingSoon";
import Footer from "./Footer";

export default function Home() {




  return (
    <main className="flex flex-col justify-between items-center">
      <Nav />
      <Hero />
      <main className="w-full relative top-36 pt-44">
        <Howitworks />
        <Benefits />
        <Subscribequivy />
        <Aboutquivy />
        <FAQS />
        <CommingSoon />
        <Footer />
      </main>
     
    </main>
  );
}
