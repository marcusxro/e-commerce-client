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
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false)


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
        <h1 className="text-2xl font-semibold tracking-tight flex items-center justify-center">Saved Delivery Addresses</h1>

        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center min-h-[200px] text-center space-y-6 p-8">
            <p className="text-gray-600">
              You currently don't have any saved delivery addresses. Add an address here to be prefilled for quicker checkout.
            </p>
            <Button 
              size="lg" 
              className="bg-gray-700 hover:bg-gray-800 text-white"
              onClick={() => setIsDeliveryModalOpen(true)}
            >
              Add Payment Method
            </Button>
          </div>
        </div>


        {/* Billing Address Modal */}
        <Dialog open={isDeliveryModalOpen} onOpenChange={setIsDeliveryModalOpen}>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <DialogTitle className="text-xl font-semibold">Billing Address</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full"
                  onClick={() => setIsDeliveryModalOpen(false)}
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
              <div className="">
              <Input placeholder="Phone Number*" />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setIsDeliveryModalOpen(false)
                    setIsDeliveryModalOpen(true)
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-gray-900 text-white hover:bg-gray-800"
                  onClick={() => {
                    setIsDeliveryModalOpen(false)
                    setIsDeliveryModalOpen(true)
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

