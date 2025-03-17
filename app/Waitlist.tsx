"use client"
import {useState } from "react"
import MemoBackgroundGrid from "@/components/BackgroundGrid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

// import toast


interface WaitlistRes {
    success?: boolean,
    error?: string
}

const Waitlist = () => {
    const [email, setEmail] = useState<string>("")
    const [sending, setSending] = useState<boolean>(false)
    const [status, setStatus] = useState<string>("")

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault()
        setSending(true)
        setStatus("")


        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email})
            })

            const data = response.json() as WaitlistRes

            if (response.ok) {
                setStatus("success")
                setEmail("")
            }else{
                setStatus(`error: ${data.error || "Unknown error"}`)
            }
        } catch (error) {
            console.error(error)
            setStatus(`error: Failed to submit`)
        } finally {
            setSending(false)
        }

    }


    return (
        <section className="w-full relative flex flex-col justify-center items-center space-y-6 p-6 md:p-12 bg-white min-h-[400px]">
            <MemoBackgroundGrid className="absolute top-0 left-0 w-full -z-0 opacity-15 h-full" />

            <div className="flex justify-center mb-4">
                <div className="bg-[#8257FF] p-3 rounded-lg w-16 h-16 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" />
                        <rect x="7" y="7" width="10" height="10" rx="1" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
            </div>

            <h2 className="text-xl md:text-3xl text-center max-w-[800px] relative z-10 font-medium">
                Automate your giveaways with <span className="text-[#8257FF]">Quivy</span> and capture high-quality leads
                effortlessly increasing brand&apos;s visibility!
            </h2>

            <p className="text-sm md:text-base text-center text-gray-500 max-w-[600px] relative z-10">
                Join the waitlist today and be among the first to access a powerful platform designed to simplify giveaways,
                attract engaged audiences, and drive real growth. Don&apos;t miss out—secure your spot now!
            </p>

            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 w-full max-w-[600px] relative z-10">
                <div className="relative w-full">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-300 absolute left-4 top-4 md:top-5 md:-translate-y-1/2"/>
                    <Input
                        type="email"
                        className="rounded-full py-5 px-10 w-full bg-white border border-gray-200 text-center md:text-left shadow-sm"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        variant="default"
                        className="bg-[#8257FF] hover:bg-[#6a46d1] rounded-full px-6 py-2 w-full md:w-auto mt-3 md:mt-0 md:absolute md:right-1 md:top-1/2 md:-translate-y-1/2"
                        onClick={handleSubmit}
                    >{
                            sending ? "Sending..." : "Join Waitlist"
                    }
                    </Button>

                </div>
                    {status === 'success' && (
                        <p className="mt-2 text-green-600 text-sx">Thanks! You&apos;ve been added to our waitlist.</p>
                    )}

                    {/* {status.includes('error') && (
                        <p className="mt-2 text-red-600 text-xs">{status}</p>
                    )} */}
            </div>
        </section>
    )
}

export default Waitlist

