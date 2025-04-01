import React, { ReactNode } from 'react'
import Image from "next/image";
import formIllustration from "@/public/assets/illustrations/form-illustration.png";
import { useIsMobile } from "@/hooks/use-mobile";




interface AuthLayoutProps {
    children: ReactNode
}


const AuthLayout = ({ children }: AuthLayoutProps) => {
    
    const isMobile = useIsMobile()


  return (
      <main className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 justify-evenly items-center bg-[#F2F2F2]'>
          {children}
           {
                  !isMobile && (
                    <section className="w-auto h-auto p-3 grid place-items-center">
                      <div className="w-3/4 px-8 h-[95dvh] bg-quivyPurple rounded-3xl flex flex-col justify-between items-center">
                        <article className="text-white space-y-3 relative top-32">
                          <h3 className="text-2xl">Welcome!</h3>
                          <p className="font-light text-sm">
                            Turn Your Events into Unforgettable Moments!
                          </p>
                        </article>
                        <Image
                          src={formIllustration}
                          alt=""
                          className="max-w-[500px] relative left-10"
                        />
                      </div>
                    </section>
                  )
                }
    </main>
  )
}

export default AuthLayout