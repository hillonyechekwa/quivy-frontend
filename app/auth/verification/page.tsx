"use client"
import React from 'react'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'



const VerificationPage = () => {
  return (
    <section className="w-full flex flex-col justify-center md:justify-start items-center space-y-10">
      <Card>
        <div>
          <h2>Verify your email address</h2>
          <small>we&apos;ve sent a 6-digit verification email address</small>
        </div>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <small>Didn&apos;t get the code? <link href="">Resend</link></small>
        <Button type="submit">Continue</Button>
      </Card>
    </section>
  )
}

export default VerificationPage