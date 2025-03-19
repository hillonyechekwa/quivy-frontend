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
        <footer className="text-white bg-quivyPurple w-full min-h-screen flex flex-col justify-between relative pt-20 pb-8 px-4 md:px-12">
            <MemoBackgroundGrid className="absolute top-0 left-0 w-full h-full opacity-15 -z-10" />

            {/* Main Content Container */}
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 mb-12">
                {/* Left Column (Logo + Form) */}
                <div className="flex-1 flex flex-col gap-8 pr-0 lg:pr-12">
                    <Image
                        src={QuviyLogo}
                        alt="Quivy logo"
                        className="w-40 md:w-48"
                    />
                    <p className="text-lg max-w-md">
                        Create a giveaway to make your event more exciting and engaging.
                        Offer any item as a prize and attract more participants
                        effortlessly. Manage and track your giveaway seamlessly with
                        Quivy!
                    </p>

                    <div className="flex flex-row items-center justify-between w-full md:max-w-md relative">
                        <Input
                            type="email"
                            placeholder="&#9993; Your email address"
                            className="rounded-full py-5 md:py-7 bg-white/90 flex-1 w-3/4 md:w-[800px] placeholder:text-[10px] md:placeholder:text-sm"
                        />
                        <Button
                            variant="default"
                            className="rounded-full px-6 py-3 md:py-6 bg-quivyPurple hover:bg-quivyPurple/90 whitespace-nowrap absolute ml-3 left-2/4 md:left-3/4 md:-ml-5"
                        >
                            Create Event
                        </Button>
                    </div>
                </div>

                {/* Right Columns (Links) */}
                <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                    {/* Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                        <Link href="">Home</Link>
                        <Link href="">Benefits</Link>
                        <Link href="">FAQs</Link>
                        <Link href="">Sign in</Link>
                        <Link href="">Create Account</Link>
                        <Link href="">Download App</Link>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold mb-2">Resources</h3>
                        <Link href="">Blogs</Link>
                        <Link href="">Mission</Link>
                        <Link href="">Vision</Link>
                        <Link href="">About us</Link>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold mb-2">Support</h3>
                        <Link href="">Help Center</Link>
                        <Link href="">How it works</Link>
                        <Link href="">User guide</Link>
                        <Link href="">Terms of service</Link>
                        <Link href="">Contact us</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full max-w-7xl mx-auto border-t border-white/20 pt-8">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-4 order-2 md:order-1">
                        {[faInstagramSquare, faXTwitter, faFacebook, faLinkedin].map((icon, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
                            >
                                <FontAwesomeIcon
                                    icon={icon}
                                    className="text-quivyPurple text-lg"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Copyright + Legal */}
                    <div className="flex flex-col md:flex-row items-center gap-4 order-1 md:order-2 text-center md:text-left">
                        <p>&copy;2025 Quivy. All Rights Reserved</p>
                        <div className="flex gap-4">
                            <Link href="">Terms and Conditions</Link>
                            <Link href="">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer