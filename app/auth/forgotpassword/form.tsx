import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'



const ForgotPasswordForm = () => {
  return (
    <Card className="">
      <div>
        <h2>Forgot Password</h2>
        <p>Enter your email address to reset your password</p>
      </div>
      <CardContent>
        <Label>Email address</Label>
        <Input type="email" placeholder="&#x2709; johndoe@gmail.com" className="p-4"/>
        <Button type="submit" className="">Continue</Button>
      </CardContent>
    </Card>
  )
}

export default ForgotPasswordForm