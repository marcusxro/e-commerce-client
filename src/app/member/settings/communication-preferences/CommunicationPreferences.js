'use client'

import React, { useState } from "react"
import { User, CreditCard, MapPin, Store, Mail, Share2, LinkIcon, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import SettingsSidebar from "@/components/SettingsSidebar"
export default function CommunicationPreferences() {
  const [emailUpdates, setEmailUpdates] = useState(true)

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
        <h1 className="text-2xl font-semibold tracking-tight">Communication Preferences</h1>

        <div className="space-y-8 max-w-2xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">General Communication</h2>
              <p className="text-gray-600 mb-4">
                Get updates on products, offers, and your member benefits.
              </p>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="email-updates" 
                  checked={emailUpdates}
                  onCheckedChange={setEmailUpdates}
                />
                <label
                  htmlFor="email-updates"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Yes, send me emails.
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900">
              Save
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

