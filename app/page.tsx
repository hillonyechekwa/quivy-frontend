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
// import { useResponsive } from "@/hooks/use-responsive";


function Home() {

  // const isMobile = useResponsive("(max-width: 600px)")
  


  return (
    <main className="flex flex-col justify-between items-center">
      <main className="flex flex-col items-center justify-evenly w-full">
      <Nav />
      <Hero />
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

export default Home


