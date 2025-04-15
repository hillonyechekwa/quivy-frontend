"use client"

import {useState} from 'react'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Card } from '@/components/ui/card'
import { Button, buttonVariants } from '@/components/ui/button'
import { useRouter } from 'next/navigation'




const VerificationPage = () => {

  const [value, setValue] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()



  const handleOTPVerification = async () => {
    if (value.length === 6) {
      setLoading(true)
      const response = await fetch("/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: value }),
      })

      if (response.ok) {
        setLoading(false)
        const data = await response.json()
        if (data.status === 200) {
          console.log("Verification successful")
          router.push("/dashboard")
        }
      } else {
        console.error("Verification failed")
        setLoading(false)
        const errorData = await response.json()
        setError(errorData.message || "Verification failed")
      }
    }
  }


  return (
    <section className="w-full flex flex-col justify-center md:justify-start items-center space-y-10">
      <Card className="flex flex-col items-center space-y-3 w-full">
        <div>
          <h2>Verify your email address</h2>
          <small>we&apos;ve sent a 6-digit verification email address</small>
        </div>
        <InputOTP value={value} onChange={(value) => setValue(value)} maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} className="w-full">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <small>Didn&apos;t get the code? <p className={buttonVariants({variant: "link"})}>Resend</p></small>
        <Button type="button" onClick={handleOTPVerification}>
          {loading ? "Verifying..." : "Verify"}
        </Button>
      </Card>

      {error && <p className="text-red-500">{error}</p>}
    </section>
  )
}

export default VerificationPage