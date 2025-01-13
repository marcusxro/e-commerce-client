'use client'

import React, { useState } from "react"
import { User, CreditCard, MapPin, Store, Mail, Share2, LinkIcon, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import SettingsSidebar from "@/components/SettingsSidebar"
export default function ShoppingPreferences() {
  const [shoppingPreference, setShoppingPreference] = useState("men")
  const [unitPreference, setUnitPreference] = useState("imperial")
  const [additionalPreferences, setAdditionalPreferences] = useState([])


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
        <h1 className="text-2xl font-semibold tracking-tight">Shopping Preferences</h1>

        <div className="space-y-8 max-w-2xl">
          {/* Shopping Preferences */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Shopping Preferences</h2>
            <RadioGroup
              value={shoppingPreference}
              onValueChange={setShoppingPreference}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="women" id="women" />
                <label htmlFor="women" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Women's
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="men" id="men" />
                <label htmlFor="men" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Men's
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* Additional Preferences */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Additional Preferences</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="girls"
                  checked={additionalPreferences.includes('girls')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setAdditionalPreferences([...additionalPreferences, 'girls'])
                    } else {
                      setAdditionalPreferences(additionalPreferences.filter(p => p !== 'girls'))
                    }
                  }}
                />
                <label htmlFor="girls" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Girls'
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="boys"
                  checked={additionalPreferences.includes('boys')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setAdditionalPreferences([...additionalPreferences, 'boys'])
                    } else {
                      setAdditionalPreferences(additionalPreferences.filter(p => p !== 'boys'))
                    }
                  }}
                />
                <label htmlFor="boys" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Boys'
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="women-additional"
                  checked={additionalPreferences.includes('women')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setAdditionalPreferences([...additionalPreferences, 'women'])
                    } else {
                      setAdditionalPreferences(additionalPreferences.filter(p => p !== 'women'))
                    }
                  }}
                />
                <label htmlFor="women-additional" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Women's
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="women-additional"
                  checked={additionalPreferences.includes('men')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setAdditionalPreferences([...additionalPreferences, 'men'])
                    } else {
                      setAdditionalPreferences(additionalPreferences.filter(p => p !== 'men'))
                    }
                  }}
                />
                <label htmlFor="men-additional" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Men's
                </label>
              </div>
            </div>
          </div>

          {/* Unit of Measure */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Unit of Measure</h2>
            <RadioGroup
              value={unitPreference}
              onValueChange={setUnitPreference}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="metric" id="metric" />
                <label htmlFor="metric" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Metric
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <label htmlFor="imperial" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Imperial
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
      </main>
    </div>
  )
}

