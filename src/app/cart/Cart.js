'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Category from "@/components/Category";
import Image from "next/image";

const products = [
    {
        name: "Nike Tech Windrunner",
        description: "Men's Woven Full-Zip Jacket",
        price: "₱5,995",
        image: "/basketball.png"
    },
    {
        name: "Nike Tech",
        description: "Men's Woven Open-Hem Trousers",
        price: "₱5,495",
        image: "/basketball.png"
    },
    {
        name: "Nike",
        description: "Woven Twill Premium Jacket",
        price: "₱4,795",
        image: "/basketball.png"
    }, 
    {
        name: "Nike",
        description: "Woven Twill Premium Jacket",
        price: "₱4,795",
        image: "/basketball.png"
    },
    {
        name: "Nike",
        description: "Woven Twill Premium Jacket",
        price: "₱4,795",
        image: "/basketball.png"
    }
]

export default function ShoppingCart() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                {/* Left Column - Bag and Favorites */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Bag Section */}
                    <div className="space-y-4">
                        <h1 className="text-2xl font-medium">Bag</h1>
                        <p className="text-gray-600">There are no items in your bag.</p>
                    </div>

                    {/* Favorites Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-medium">Favorites</h2>
                        <p className="text-gray-600">There are no items saved to your favorites.</p>
                    </div>
                    <div className="py-10 px-4 md:px-6">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-semibold">You Might Also Like</h2>
                            <div className="flex items-center gap-4">
                                <span className="text-sm"></span>
                                <div className="flex gap-2">
                                    <CarouselPrevious className="static  translate-x-0 translate-y-0 h-8 w-8 border-0 bg-gray-100 hover:bg-gray-200" />
                                    <CarouselNext className="static  translate-x-0 translate-y-0 h-8 w-8 border-0 bg-gray-100 hover:bg-gray-200" />
                                </div>
                            </div>
                        </div>

                        <CarouselContent className="-ml-4">
                            {products.map((product, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card className="border-0">
                                        <CardContent className="p-0">
                                            <div className="relative aspect-[3/4] bg-[#f5f5f5] mb-4">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-medium">{product.name}</h3>
                                                <p className="text-gray-600">{product.description}</p>
                                                <p className="font-medium">{product.price}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                </div>

                

                {/* Right Column - Summary */}
                <div className="mt-8 lg:mt-0">
                    <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                        <h2 className="text-2xl font-medium">Summary</h2>

                        {/* Promo Code Collapsible */}
                        <Collapsible className="w-full">
                            <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                                <span className="text-sm font-medium">Do you have a Promo Code?</span>
                                <ChevronDown className="h-4 w-4" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pt-2">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Enter promo code"
                                        className="h-9"
                                    />
                                    <Button variant="outline" size="sm">
                                        Apply
                                    </Button>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>

                        <Separator />

                        {/* Summary Details */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <span className="text-sm">Subtotal</span>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <HelpCircle className="h-4 w-4 text-gray-400" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Total before taxes and shipping</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <span className="text-sm">—</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm">Estimated Shipping & Handling</span>
                                <span className="text-sm">Free</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <span className="text-sm">Estimated Tax</span>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <HelpCircle className="h-4 w-4 text-gray-400" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Tax calculated at checkout</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <span className="text-sm">—</span>
                            </div>

                            <Separator />

                            <div className="flex justify-between items-center font-medium">
                                <span>Total</span>
                                <span>—</span>
                            </div>
                        </div>

                        {/* Free Shipping Progress */}
                        <div className="space-y-2">
                            <Progress value={0} className="h-2" />
                            <p className="text-sm text-center text-gray-600">
                                $50.00 to go to qualify for free shipping!
                            </p>
                        </div>

                        {/* Checkout Button */}
                        <Button className="w-full bg-gray-200 text-gray-500 hover:bg-gray-300" disabled>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

