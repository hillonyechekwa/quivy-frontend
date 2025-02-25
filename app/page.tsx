import { Input } from "@/components/ui/input";
import { Accordion } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Nav from "@/components/Nav";
import Image from "next/image";

import getStartedImg from "@/public/assets/illustrations/Privacy policy-rafiki 1getstarted.png"
import createEventImg from "@/public/assets/illustrations/Events-pana 2createevent.png"
import shareEventImg from "@/public/assets/illustrations/QR Code-pana 1shareevent.png"
import trackEventImg from "@/public/assets/illustrations/Frame 1038trackevent.png"
import appleLogo from "@/public/assets/illustrations/Apple Logo (1).png"
import googleLogo from "@/public/assets/illustrations/Google Logo.png"
import MemoBarcode from "@/components/Barcode";









export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Nav />
      <header className="w-full h-[100dvh] flex justify-between items-center">
        <article>
          <small> <span> - </span> host events that stand out</small>
          <h2>
            Turn your <span className="text-quivyPurple">events</span> into <span className="text-quivyPurple">unforgettable</span> moments.
          </h2>
          <p>Create a giveaway to make your event more exciting and engaging. Offer any item as a prize and attract more participants effortlessly. Manage and track your giveaway seamlessly with Quivy!</p>
          <div>
            <Input type="text" className="" placeholder="&#9993; Your email address"/>
            <Button variant="default">Create Event</Button>
          </div>
          <div>
            <Button variant="default" className="">
              <Image src={appleLogo} alt="" />
            </Button>
            <Button variant="default" className="">
              <Image src={googleLogo} alt="" />
            </Button>
          </div>
        </article>
        <section>
          <MemoBarcode />
        </section>
     </header>
      <main>
        <section className="h-[100dvh]" id="how-it-works">
          <small> <span> - </span> How it works</small>
          <div>
            <Card>
              <Image src={getStartedImg} alt="" className="" />
            </Card>
            <Card>
              <Image src={createEventImg} alt="" className="" />
            </Card>
            <Card>
              <Image src={shareEventImg} alt="" className="" />
            </Card>
            <Card>
              <Image src={trackEventImg} alt="" className="" />
            </Card>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
     </main>
    </main>
  );
}
