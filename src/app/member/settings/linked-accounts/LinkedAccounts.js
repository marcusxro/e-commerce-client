'use client'

import React from "react"
import { User, CreditCard, MapPin, Store, Mail, Share2, LinkIcon, Menu, Ban } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import SettingsSidebar from "@/components/SettingsSidebar"

export default function LinkedAccounts() {
  
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
        <h1 className="text-2xl font-semibold tracking-tight">Linked Accounts</h1>

        <div className="space-y-8 max-w-2xl">
          <p className="text-gray-600">
            Manage accounts and services connected to your Nike account.
          </p>

          <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-3">
            <Ban className="h-5 w-5 text-gray-500" />
            <p className="text-gray-600">You don't have any connected apps or services.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

