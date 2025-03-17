"use client"
// import Phone from '@/components/Phone'
import QrCode from '@/components/QrCode'
import { Button } from '@/components/ui/button'
import { useResponsive } from '@/hooks/use-responsive';
import appleLogo from "@/public/assets/illustrations/Apple Logo (1).png";
import googleLogo from "@/public/assets/illustrations/Google Logo.png";
import Image from 'next/image'
import Phone from "@/public/assets/illustrations/phone2.png"

const CommingSoon = () => {
    const isMobile = useResponsive("(max-width: 600px)")


    return (
        <section className="w-full h-[100dvh] grid grid-cols-1 grid-row-[1_0.5] relative">
            <div className="w-full h-full">
                {/* {
                  !isMobile 
                      ? 
                      <Phone className="w-full absolute top-16" viewBox={`0 0 ${isMobile ? `1100` : `1500`} ${isMobile ? `1250` : `800`}`} preserveAspectRatio="none" />
                      :
                      <Phone className="w-full absolute top-16" viewBox={`0 0 ${isMobile ? `1100` : `1500`} ${isMobile ? `1250` : `800`}`} preserveAspectRatio="none" />
              } */}
                <Image src={Phone} alt="" className="w-[200px] sm:w-[500px] top-56 sm:left-20 sm:top-20 absolute" />
            </div>
            <div className="w-full h-full bg-quivyPurple/30 relative">
                <article className="w-[300px] md:w-[700px] relative md:left-2/4 top-60 md:top-32 flex flex-col items-center justify-evenly space-y-3 md:space-y-5 mx-auto md:mx-0">
                    <h2 className="text-2xl max-w-[200px] md:max-w-[400px] md:text-4xl font-semibold text-center">
                        Get <span className="text-quivyPurple"> Quivy</span> on Play
                        Store or App Store
                    </h2>
                    <div className="flex md:flex-row space-x-4 items-center row-start-2 row-end-3 col-start-1 col-end-2">
                        <Button variant="default" className="flex items-center justify-start gap-x-4 md:gap-x-8 py-4 sm:py-8 px-6 sm:px-6 rounded-lg">
                            <Image src={appleLogo} alt="Apple App Store" className="w-4 h-4 sm:w-8 sm:h-8" />
                            <div className="flex flex-col items-start">
                                <small className="text-[10px] sm:text-xs">Download on the</small>
                                <p className="text-xs sm:text-sm font-medium">App Store</p>
                            </div>
                        </Button>

                        <Button variant="default" className="flex items-center justify-start gap-x-4 md:gap-x-8 py-4 sm:py-8 px-6 sm:px-6 rounded-lg">
                            <Image src={googleLogo} alt="Google Play Store" className="w-4 h-4 sm:w-8 sm:h-8" />
                            <div className="flex flex-col items-start">
                                <small className="text-[10px] sm:text-xs">Get it on</small>
                                <p className="text-xs sm:text-sm font-medium">Google Play</p>
                            </div>
                        </Button>
                    </div>
                </article>
                <div className="w-fit absolute top-5 md:top-10 left-1/2 md:left-3/4 ml-10 md:ml-56 md:mt-36">
                    <QrCode viewBox={`0 0 ${isMobile ? `150` : `106`} ${isMobile ? `150` : `106`}`} />
                </div>
            </div>
        </section>
    )
}

export default CommingSoon