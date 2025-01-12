'use client'

import React, { useState } from "react"
import { Calendar, CreditCard, Link, Mail, MapPin, Menu, Share2, Store, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SettingsPage() {
  const [date, setDate] = useState(null)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const sidebarItems = [
    { icon: User, label: "Account Details", href: "#account" },
    { icon: CreditCard, label: "Payment Methods", href: "#payment" },
    { icon: MapPin, label: "Delivery Addresses", href: "#delivery" },
    { icon: Store, label: "Shop Preferences", href: "#shop" },
    { icon: Mail, label: "Communication Preferences", href: "#communication" },
    { icon: Share2, label: "Profile Visibility", href: "#visibility" },
    { icon: Link, label: "Linked Accounts", href: "#linked" },
  ]

  const SidebarContent = () => (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
        <div className="space-y-1">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <a href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="grid lg:grid-cols-5">
      {/* Sidebar for larger screens */}
      <aside className="hidden lg:block lg:col-span-1">
        <div className="sticky top-0 h-screen border-r">
          <SidebarContent />
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
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="col-span-4 p-6 space-y-8">
        <h1 className="text-2xl font-semibold">Account Details</h1>

        <div className="space-y-6 max-w-2xl">
          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email*
            </label>
            <Input
              id="email"
              type="email"
              value="ajnaval67@gmail.com"
              readOnly
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm text-gray-500">
              Password
            </label>
            <div className="flex gap-4 items-center">
              <Input
                type="password"
                value="••••••••••••"
                readOnly
              />
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm text-gray-500">
              Phone Number
            </label>
            <div className="flex gap-4 items-center">
              <Input
                type="tel"
                placeholder="Add your phone number"
              />
              <Button variant="outline" size="sm">
                Add
              </Button>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <label className="text-sm text-gray-500">
              Date of Birth*
            </label>
            <div className="relative">
              <Input
                type="text"
                value={date ? date.toLocaleDateString() : ""}
                onClick={() => setIsCalendarOpen(true)}
                readOnly
                className="cursor-pointer"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              {isCalendarOpen && (
                <div className="absolute top-full mt-1 z-50">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => {
                      setDate(newDate)
                      setIsCalendarOpen(false)
                    }}
                    initialFocus
                  />
                </div>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-medium">Location</h3>
            <div className="space-y-2">
              <label className="text-sm text-gray-500">
                Country/Region*
              </label>
              <Select defaultValue="philippines">
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="philippines">Philippines</SelectItem>
                  <SelectItem value="other">Other Countries</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-500">
                Province*
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metro-manila">Metro Manila</SelectItem>
                  <SelectItem value="cebu">Cebu</SelectItem>
                  <SelectItem value="davao">Davao</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

