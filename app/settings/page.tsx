"use client"

import type React from "react"

import { useState } from "react"
// import { useRouter } from "next/navigation"
import Image from "next/image"
import { Building, Camera, ChevronDown, ChevronRight, Eye, EyeOff, Mail, Trash2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  // const router = useRouter()
  const [activeView, setActiveView] = useState<"main" | "change-email" | "change-password">("main")
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(false)
  const [notificationOptions, setNotificationOptions] = useState({
    platformUpdate: true,
    newEvent: false,
    eventCompletion: false,
    winnersAlert: false,
  })

  // Form data state
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "09025164562",
    password: "**********",
    address: "138, BODE THOMAS, SURULERE LAGOS STATE",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveProfileImage = () => {
    setProfileImage(null)
  }

  const handleNotificationOptionChange = (option: string, checked: boolean) => {
    setNotificationOptions((prev) => ({ ...prev, [option]: checked }))
  }

  const handleSaveChanges = () => {
    // Save changes logic would go here
    console.log("Saving changes:", { formData, profileImage, notificationOptions })
  }

  if (activeView === "change-email") {
    return <ChangeEmailView currentEmail={formData.email} onBack={() => setActiveView("main")} />
  }

  if (activeView === "change-password") {
    return <ChangePasswordView onBack={() => setActiveView("main")} />
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Profile settings</h1>
        </div>

        {/* Profile Image Section */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
              {profileImage ? (
                <Image
                  src={profileImage || "/placeholder.svg"}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <User className="w-16 h-16 text-gray-500" />
                </div>
              )}
            </div>
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full border cursor-pointer"
            >
              <Camera className="w-5 h-5" />
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageUpload}
                aria-label="Upload profile picture"
              />
            </label>
          </div>
          <div className="space-x-3">
            <Button variant="default" className="bg-black text-white hover:bg-gray-800" asChild>
              <label htmlFor="profile-upload-btn">
                Upload new
                <input
                  id="profile-upload-btn"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageUpload}
                />
              </label>
            </Button>
            <Button variant="outline" onClick={handleRemoveProfileImage}>
              Remove
            </Button>
          </div>
        </div>

        {/* Personal Information Form */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="pl-10"
              />
            </div>
            <p className="text-sm text-muted-foreground">You&apos;ll not be able to change your name until after 30days</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10"
                disabled
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <div className="flex">
              <div className="flex items-center border rounded-l-md px-3 bg-background">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-3 h-6 bg-green-500 rounded-l-full"></div>
                </div>
                <span className="ml-1">+234</span>
                <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <Input
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="rounded-l-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSaveChanges} className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            Save changes
          </Button>
        </div>

        <Separator />

        {/* Notification Settings */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Notification</h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-medium">Enable push notification</span>
              <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
            </div>

            <div className="space-y-4 ml-1">
              <p className="font-medium">Notify me when........</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="platform-update"
                    checked={notificationOptions.platformUpdate}
                    onCheckedChange={(checked) => handleNotificationOptionChange("platformUpdate", checked as boolean)}
                  />
                  <label htmlFor="platform-update">Platform update</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="new-event"
                    checked={notificationOptions.newEvent}
                    onCheckedChange={(checked) => handleNotificationOptionChange("newEvent", checked as boolean)}
                  />
                  <label htmlFor="new-event">New event created</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="event-completion"
                    checked={notificationOptions.eventCompletion}
                    onCheckedChange={(checked) => handleNotificationOptionChange("eventCompletion", checked as boolean)}
                  />
                  <label htmlFor="event-completion">Event completion</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="winners-alert"
                    checked={notificationOptions.winnersAlert}
                    onCheckedChange={(checked) => handleNotificationOptionChange("winnersAlert", checked as boolean)}
                  />
                  <label htmlFor="winners-alert">Winner&apos;s alert</label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium">Enable email notification</span>
              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Set reminder</p>
                  <p className="text-sm text-muted-foreground">
                    (Set a time to receive a reminder before the event begins)
                  </p>
                </div>
              </div>
              <Select defaultValue="30">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="120">2 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Separator />

        {/* Account Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Account</h2>

          <div className="space-y-4">
            <button
              onClick={() => setActiveView("change-email")}
              className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-md"
            >
              <span className="font-medium">Change email</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActiveView("change-password")}
              className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-md"
            >
              <span className="font-medium">Change password</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-md">
              <span className="font-medium">Privacy & policy</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-md">
              <span className="font-medium">About us</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Help & Support Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Help & support</h2>

          <div className="space-y-4 ml-4">
            <button className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-md">
              <span className="font-medium">FAQs</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-md">
              <span className="font-medium">Customer service</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button className="w-full flex items-center justify-between py-3 hover:bg-gray-50 rounded-md">
              <span className="font-medium">Contact us</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Delete Account */}
        <button className="flex items-center text-red-500 hover:text-red-600 py-3">
          <Trash2 className="w-5 h-5 mr-2" />
          <span className="font-medium">Delete account</span>
        </button>
      </div>
    </div>
  )
}

function ChangeEmailView({ currentEmail, onBack }: { currentEmail: string; onBack: () => void }) {
  const [newEmail, setNewEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Change email logic would go here
    console.log("Changing email from", currentEmail, "to", newEmail)
    onBack()
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <button onClick={onBack} className="flex items-center mb-6 text-primary hover:underline">
        <ChevronRight className="w-5 h-5 rotate-180 mr-1" />
        Back to settings
      </button>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Change Email</h1>
          <p className="text-muted-foreground">Update your email address</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="current-email">Current Email</Label>
            <Input id="current-email" value={currentEmail} disabled />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-email">New Email</Label>
            <Input
              id="new-email"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter your new email address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password to confirm"
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={onBack}>
              Cancel
            </Button>
            <Button type="submit" className="bg-black text-white hover:bg-gray-800">
              Update Email
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function ChangePasswordView({ onBack }: { onBack: () => void }) {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Change password logic would go here
    if (newPassword !== confirmPassword) {
      alert("New passwords don't match")
      return
    }
    console.log("Changing password")
    onBack()
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <button onClick={onBack} className="flex items-center mb-6 text-primary hover:underline">
        <ChevronRight className="w-5 h-5 rotate-180 mr-1" />
        Back to settings
      </button>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Change Password</h1>
          <p className="text-muted-foreground">Update your password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <div className="relative">
              <Input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter your current password"
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showCurrentPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showNewPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-new-password">Confirm New Password</Label>
            <div className="relative">
              <Input
                id="confirm-new-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your new password"
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={onBack}>
              Cancel
            </Button>
            <Button type="submit" className="bg-black text-white hover:bg-gray-800">
              Update Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

