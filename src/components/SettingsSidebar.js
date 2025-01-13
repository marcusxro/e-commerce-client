'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, CreditCard, MapPin, Store, Mail, Share2, LinkIcon, Menu, X, Lock } from 'lucide-react'

export default function SettingsSidebar() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const sidebarItems = [
        { icon: User, label: "Account Details", href: "/member/settings" },
        { icon: CreditCard, label: "Payment Methods", href: "/member/settings/payment",  },
        { icon: MapPin, label: "Delivery Addresses", href: "/member/settings/delivery-addresses" },
        { icon: Store, label: "Shop Preferences", href: "/member/settings/shop-preferences" },
        { icon: Mail, label: "Communication Preferences", href: "/member/settings/communication-preferences" },
        { icon: Share2, label: "Profile Visibility", href: "/member/settings/profile-visibility" },
        { icon: LinkIcon, label: "Linked Accounts", href: "/member/settings/linked-accounts" },
    ]

    return (
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
}