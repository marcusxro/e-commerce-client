'use client'

import React, { useState } from "react"
import { User, CreditCard, MapPin, Store, Mail, Share2, LinkIcon, Menu, X, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SettingsSidebar from "@/components/SettingsSidebar"


export default function PaymentMethods() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [isBillingModalOpen, setIsBillingModalOpen] = useState(false)

  const sidebarItems = [
    { icon: User, label: "Account Details", href: "#account" },
    { icon: CreditCard, label: "Payment Methods", href: "#payment", active: true },
    { icon: MapPin, label: "Delivery Addresses", href: "#delivery" },
    { icon: Store, label: "Shop Preferences", href: "#shop" },
    { icon: Mail, label: "Communication Preferences", href: "#communication" },
    { icon: Share2, label: "Profile Visibility", href: "#visibility" },
    { icon: LinkIcon, label: "Linked Accounts", href: "#linked" },
  ]

  const SidebarContent = () => (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Settings</h2>
        <div className="space-y-1">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
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
        <h1 className="text-2xl font-semibold tracking-tight">Saved Payment Methods</h1>

        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center min-h-[200px] text-center space-y-6 p-8">
            <p className="text-gray-600">
              You currently don't have any saved payment methods. Add a method here to be prefilled for quicker checkout.
            </p>
            <Button 
              size="lg" 
              className="bg-gray-700 hover:bg-gray-800 text-white"
              onClick={() => setIsPaymentModalOpen(true)}
            >
              Add Payment Method
            </Button>
          </div>
        </div>

        {/* Add Payment Method Modal */}
        <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <DialogTitle className="text-xl font-semibold">Add Payment Method</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full"
                  onClick={() => setIsPaymentModalOpen(false)}
                >
                  
                </Button>
              </div>
            </DialogHeader>
            <form className="space-y-4 py-4">
              <div className="relative">
                <Input
                  placeholder="Card Number"
                  className="pr-10"
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="MM/YY" />
                <Input placeholder="CVV" />
              </div>
              <div className="pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    setIsPaymentModalOpen(false)
                    setIsBillingModalOpen(true)
                  }}
                >
                  Add Billing Address
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="shipping" />
                  <label
                    htmlFor="shipping"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Billing address same as default shipping
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="default" />
                  <label
                    htmlFor="default"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Set as default payment method
                  </label>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button type="submit" className="bg-gray-700 hover:bg-gray-800 text-white">
                  Save
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Billing Address Modal */}
        <Dialog open={isBillingModalOpen} onOpenChange={setIsBillingModalOpen}>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <DialogTitle className="text-xl font-semibold">Billing Address</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full"
                  onClick={() => setIsBillingModalOpen(false)}
                >
                  
                </Button>
              </div>
            </DialogHeader>
            <form className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input placeholder="First Name*" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Last Name*" />
                </div>
              </div>
              <div className="space-y-2">
                <Input placeholder="Street Address*" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Apt, Suite, Building" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input placeholder="City*" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Zip*" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="State*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="us">
                  <SelectTrigger>
                    <SelectValue placeholder="Country/Region*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="mx">Mexico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setIsBillingModalOpen(false)
                    setIsPaymentModalOpen(true)
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-gray-900 text-white hover:bg-gray-800"
                  onClick={() => {
                    setIsBillingModalOpen(false)
                    setIsPaymentModalOpen(true)
                  }}
                >
                  Save
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}

