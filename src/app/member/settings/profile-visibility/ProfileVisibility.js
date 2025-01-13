'use client'

import React, { useState, useRef } from "react"
import { User, CreditCard, MapPin, Store, Mail, Share2, LinkIcon, Menu, Pencil, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SettingsSidebar from "@/components/SettingsSidebar"

export default function ProfileVisibility() {
  const [visibility, setVisibility] = useState("social")
  const [locationSharing, setLocationSharing] = useState("none")
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isPictureModalOpen, setIsPictureModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const fileInputRef = useRef(null)
  const [profileData, setProfileData] = useState({
    firstName: "LeBron ",
    lastName: "James",
    screenName: "KingJames",
    hometown: "",
    aboutMe: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'aboutMe' && value.length > 150) return
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Validate file type
    if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
      alert('Please select a JPG file')
      return
    }

    // Validate file size (2MB = 2 * 1024 * 1024 bytes)
    if (file.size > 2 * 1024 * 1024) {
      alert('File size must be less than 2MB')
      return
    }

    setSelectedFile(file)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const handleUpload = () => {
    // Handle the file upload here
    console.log('Uploading file:', selectedFile)
    setIsPictureModalOpen(false)
    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleCancel = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    setIsPictureModalOpen(false)
    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }


  return (
    <div className="grid lg:grid-cols-5">
      {/* Sidebar for larger screens */}
      <aside className="hidden lg:block lg:col-span-1">
        <div className="sticky top-0 h-screen border-r">
          <SettingsSidebar />
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden px-4 py-2">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SettingsSidebar />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="col-span-4 p-6 space-y-8">
        <h1 className="text-2xl font-semibold tracking-tight">Profile Visibility</h1>

        <div className="space-y-8 max-w-2xl">
          <p className="text-gray-600">
            Your Nike profile represents you on product reviews and across the Nike family of apps.
          </p>

          {/* Profile Display */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Profile Display</h2>
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={previewUrl} />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <Button 
                  size="icon"
                  variant="ghost"
                  className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white shadow"
                  onClick={() => setIsPictureModalOpen(true)}
                >
                  <Pencil className="h-3 w-3" />
                </Button>
              </div>
              <div className="space-y-2">
                <div className="font-medium">{profileData.screenName}</div>
                <Button variant="outline" size="sm" onClick={() => setIsEditModalOpen(true)}>
                  Edit
                </Button>
              </div>
            </div>
          </div>

          {/* Product Review Visibility */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Product Review Visibility</h2>
            <p className="text-gray-600">
              Choose how you will appear on any Nike product reviews you complete. Changing these settings will also affect your visibility for connecting with friends on the Nike Training Club and Nike Run Club apps.{" "}
              <a href="#learn-more" className="underline">Learn More</a>
            </p>
            <RadioGroup
              value={visibility}
              onValueChange={setVisibility}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <label htmlFor="private" className="text-sm font-medium leading-none">
                  Private: Profile visible to only you
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="social" id="social" />
                <label htmlFor="social" className="text-sm font-medium leading-none">
                  Social: Profile visible to friends
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <label htmlFor="public" className="text-sm font-medium leading-none">
                  Public: Everyone can view profile
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* Location Sharing */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Location Sharing</h2>
            <RadioGroup
              value={locationSharing}
              onValueChange={setLocationSharing}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="friends" id="friends" />
                <label htmlFor="friends" className="text-sm font-medium leading-none">
                  Share my location with friends only
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <label htmlFor="none" className="text-sm font-medium leading-none">
                  Don't share my location
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900">
              Save
            </Button>
          </div>
        </div>

        {/* Edit Profile Modal */}
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <DialogTitle className="text-xl font-semibold">Edit Profile Details</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  
                </Button>
              </div>
            </DialogHeader>
            <form className="space-y-4 py-4">
              <div className="space-y-4">
                <div>
                  <Input
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name*"
                  />
                </div>
                <div>
                  <Input
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name*"
                  />
                </div>
                <div>
                  <Input
                    name="screenName"
                    value={profileData.screenName}
                    onChange={handleInputChange}
                    placeholder="Screen Name*"
                  />
                </div>
                <div>
                  <Input
                    name="hometown"
                    value={profileData.hometown}
                    onChange={handleInputChange}
                    placeholder="Hometown"
                  />
                </div>
                <div className="relative">
                  <Textarea
                    name="aboutMe"
                    value={profileData.aboutMe}
                    onChange={handleInputChange}
                    placeholder="About Me"
                    className="min-h-[100px]"
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                    {profileData.aboutMe.length}/150
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900"
                >
                  Save
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Edit Profile Picture Modal */}
        <Dialog open={isPictureModalOpen} onOpenChange={setIsPictureModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <DialogTitle className="text-xl font-semibold">Edit Profile Picture</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full"
                  onClick={handleCancel}
                >
                  
                </Button>
              </div>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <p className="text-center text-sm text-gray-600">
                Image must be in jpg file format. File size must be less than 2MB.
              </p>
              <div className="flex justify-center">
                <Avatar className="h-40 w-40">
                  <AvatarImage src={previewUrl} />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
              </div>
              <input
                type="file"
                accept=".jpg,.jpeg"
                onChange={handleFileSelect}
                className="hidden"
                ref={fileInputRef}
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Upload Photo
                </Button>
              </div>
              {selectedFile && (
                <div className="flex justify-end">
                  <Button
                    className="bg-black text-white hover:bg-gray-800"
                    onClick={handleUpload}
                  >
                    Save
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}

