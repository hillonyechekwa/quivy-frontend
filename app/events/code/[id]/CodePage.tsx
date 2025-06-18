"use client"

import { AsyncBoundary } from "@/components/AsyncBoundary"
import {useState} from "react"
import { ChevronLeft, Download, Copy } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faWhatsapp, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Loader from "@/components/Loader"
import ErrorPage from "@/components/ErrorPage"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { EventType } from "../../types"
import { useRouter } from "next/navigation"

interface Props {
    id: string;
}


const CodePage: React.FC<Props> = ({ id }) => {

    const router = useRouter()
    const [copied, setCopied] = useState(false)

    const { data: event, isLoading } = useQuery<EventType>({
        queryKey: ["event"],
        queryFn: async () => {
            const response = await fetch(`/api/events/getEvent/${id}`)
            const data = response.json()
            return data
        }
    })

    const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }


    if (isLoading) {
        return <Loader />
    }

    const qrCode = event?.qrCodeUrl

    return (
        <AsyncBoundary loadingFallback={<Loader />} errorFallback={<ErrorPage content="Couldn&apos;t load Qr Code page" />}>
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center">
                        
                            <ChevronLeft className="h-5 w-5" onClick={() => router.back()}/>
                        
                        <h1 className="mx-auto text-xl font-semibold">Scan, Win, Celebrate!</h1>
                    </div>

                    <div className="relative mb-6 flex justify-center">
                        <Image
                            src={qrCode}
                            alt="QR Code"
                            width={240}
                            height={240}
                            className="h-auto w-auto"
                        />
                        <button className="absolute right-0 top-0 rounded-full bg-white p-1 shadow-sm" aria-label="Download QR code">
                            <Download className="h-5 w-5 text-gray-700" />
                        </button>
                    </div>

                    <div className="mb-6 flex items-center gap-2">
                        <Input value={url} readOnly className="flex-1 bg-gray-50" />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleCopy}
                            className="h-10 w-10 shrink-0 rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200 hover:text-purple-700"
                        >
                            <Copy className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="mb-6 text-center text-sm text-gray-500">Or share to</div>

                    <div className="mb-8 flex justify-center gap-4">
                        <button className="rounded-full border border-gray-200 p-3" aria-label="Share on Twitter">
                            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5 text-blue-600" />
                        </button>
                        <button className="rounded-full border border-gray-200 p-3" aria-label="Share on Instagram">
                            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-pink-500" />
                        </button>
                        <button className="rounded-full border border-gray-200 p-3" aria-label="Share on Facebook">
                            <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 text-blue-600" />
                        </button>
                        <button className="rounded-full border border-gray-200 p-3" aria-label="Share on WhatsApp">
                             <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 text-blue-600" />
                        </button>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Done</Button>
                </div>
            </div>
        </AsyncBoundary>
    )
}


export default CodePage