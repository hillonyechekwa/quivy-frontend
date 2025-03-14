"use client"
import MemoBackgroundGrid from "@/components/BackgroundGrid"
import MemoTopography from "@/components/Topography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import appleLogo from "@/public/assets/illustrations/Apple Logo (1).png"
import googleLogo from "@/public/assets/illustrations/Google Logo.png"
import Image from "next/image"
import Lottie from "react-lottie"
import Barcodeanim from "@/public/assets/animations/barcode.json"
import Heroanim from "@/public/assets/animations/hero.json"
import { useResponsive } from "@/hooks/use-responsive"

const Hero = () => {
    const barcodeLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Barcodeanim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }

    const heroLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Heroanim,
        rendererSettings: {
            preserveAspectRatio: "none",
        },
    }

    const isMobile = useResponsive("(max-width: 768px)")

    return (
        <header className="w-full min-h-[100dvh] relative px-6 py-12 md:p-16 overflow-hidden">
            {/* Background elements */}
            <MemoBackgroundGrid className="absolute top-0 left-0 w-full -z-0 opacity-15" />
            <MemoTopography className="absolute top-0 right-0 md:right-10 w-[100px]" />

            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
                    {/* Left content section */}
                    <article className="relative z-20 w-full md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8">
                        <small className="text-quivyOrange font-medium">
                            <span className="text-quivyPurple">-</span> Host events that stand out
                        </small>

                        <h1 className="text-3xl md:text-5xl font-semibold">
                            Turn Your <span className="text-quivyPurple">Events</span> Into{" "}
                            <span className="text-quivyPurple">Unforgettable</span> Moments!
                        </h1>

                        <p className="text-sm text-gray-400 max-w-[500px]">
                            Create a giveaway to make your event more exciting and engaging. Offer any item as a prize and attract
                            more participants effortlessly. Manage and track your giveaway seamlessly with Quivy!
                        </p>

                        {/* Email input section */}
                        <div className="flex items-center w-full max-w-[500px]">
                            <div className="relative w-full">
                                <Input type="email" className="rounded-full py-6 pl-10 pr-32 w-full" placeholder="Your email address" />
                                <span className="absolute left-4 top-1/2 -translate-y-1/2">✉️</span>
                                <Button
                                    variant="default"
                                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-quivyPurple hover:bg-quivyPurple/90 rounded-full py-5 px-6"
                                >
                                    Create event
                                </Button>
                            </div>
                        </div>

                        {/* App store buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button variant="default" className="flex items-center justify-start gap-3 py-2 px-4 rounded-lg">
                                <Image src={appleLogo || "/placeholder.svg"} alt="Apple App Store" className="w-8 h-8" />
                                <div className="flex flex-col items-start">
                                    <small className="text-xs">Download on the</small>
                                    <p className="text-sm font-medium">App Store</p>
                                </div>
                            </Button>

                            <Button variant="default" className="flex items-center justify-start gap-3 py-2 px-4 rounded-lg">
                                <Image src={googleLogo || "/placeholder.svg"} alt="Google Play Store" className="w-8 h-8" />
                                <div className="flex flex-col items-start">
                                    <small className="text-xs">Get it on</small>
                                    <p className="text-sm font-medium">Google Play</p>
                                </div>
                            </Button>
                        </div>
                    </article>

                    {/* Right animation section */}
                    <section className="z-20 relative w-full md:w-1/2 flex flex-col items-center">
                        <div className="w-full max-w-[400px] mx-auto">
                            <Lottie options={heroLottieOptions} width={isMobile ? 280 : 400} height={isMobile ? 280 : 400} />
                        </div>

                        <div className="mt-4 md:mt-8 w-full flex justify-center">
                            <Lottie options={barcodeLottieOptions} width={200} height={200} />
                        </div>
                    </section>
                </div>
            </div>
        </header>
    )
}

export default Hero

