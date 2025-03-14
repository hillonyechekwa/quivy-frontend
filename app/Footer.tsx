"use client"
import MemoBackgroundGrid from '@/components/BackgroundGrid'
import { Button } from '@/components/ui/button'
import { faFacebook, faInstagramSquare, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QuviyLogo from "@/public/assets/Logo-white.png";
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
      <footer className="text-white mt-[300px] bg-quivyPurple w-full min-h-[100vh] md:h-[100vh] flex flex-col justify-between items-center relative">
          <MemoBackgroundGrid className="absolute top-0 left-0 w-full -z-0 opacity-15 h-full" />

          <div className="w-full p-6 md:p-12 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 items-start space-y-7 justify-center relative top-1/4 z-10">
              <article className="flex flex-col items-start justify-between space-y-8 relative z-10">
                  <Image src={QuviyLogo} alt="quivy logo in qhite" className="" />
                  <p className="max-w-[300px] text-lg">
                      Create a giveaway to make your event more exciting and engaging.
                      Offer any item as a prize and attract more participants
                      effortlessly. Manage and track your giveaway seamlessly with
                      Quivy!
                  </p>
                  <div className="flex items-center">
                      <Input
                          type="text"
                          className="rounded-full p-6 w-[300px] bg-white"
                          placeholder="&#9993; Your email address"
                      />
                      <Button
                          variant="default"
                          className="bg-quivyPurple rounded-full relative -left-28"
                      >
                          Create Event
                      </Button>
                  </div>
              </article>
              <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-x-6 text-sm">
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
              <div className="flex flex-col items-start justify-start md:justify-center space-y-5 md:justify-self-center">
                  <h3>Socials</h3>
                  <ul className="flex items-center justify-center space-x-4">
                      <li className="bg-white rounded-full w-10 h-10 p-2 w-fit h-fit flex items-center justify-center">
                          <FontAwesomeIcon
                              icon={faInstagramSquare}
                              size="lg"
                              className="text-quivyPurple"
                          />
                      </li>
                      <li className="bg-white rounded-full w-10 h-10 p-2 w-fit h-fit flex items-center justify-center">
                          <FontAwesomeIcon
                              icon={faXTwitter}
                              size="lg"
                              className="text-quivyPurple"
                          />
                      </li>
                      <li className="bg-white rounded-full w-10 h-10 p-2 w-fit h-fit flex items-center justify-center">
                          <FontAwesomeIcon
                              icon={faFacebook}
                              size="lg"
                              className="text-quivyPurple"
                          />
                      </li>
                      <li className="bg-white rounded-full w-10 h-10 p-2 w-fit h-fit flex items-center justify-center">
                          <FontAwesomeIcon
                              icon={faLinkedin}
                              size="lg"
                              className="text-quivyPurple"
                          />
                      </li>
                  </ul>
              </div>
          </div>
          <div className="w-full flex justify-between items-center border-t-2 border-t-white p-3 font-light">
              <p>&copy;2025 Quivy. All Rights Reserved</p>
              <p className="space-x-5">
                  <Link href="">Terms and Conditions.</Link>
                  <Link href="">Privacy Policy</Link>
              </p>
          </div>
          </footer>
  )
}

export default Footer