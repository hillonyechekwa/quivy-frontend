import React from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'





const ResetPasswordForm = () => {
    return (
        <Card>
            <form>
                <div>
                    <h2>Reset Password</h2>
                    <small>Create a new password. Your new password should be different from password previously used.</small>
                </div>
                <div>
                    <Label>New Password</Label>
                    <Input type="password" className="" placeholder='min. 8 character' />
                </div>
                <div>
                    <Label>Confirm Password</Label>
                    <Input type="password" className="" />
                </div>
                <Button type="submit">Continue</Button>
            </form>
        </Card>
    )
}

export default ResetPasswordForm