import Footer from "@/components/Footer";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import UpperHeader from "@/components/UpperHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
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
];

export default function Favorites() {
    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <UpperHeader />
                <LowerHeader />
                <ProfHeader />
            </div>

            <div className="flex-grow flex flex-col items-center justify-center space-y-2 py-10">
                <p className="text-xl">Items added to your Favorites will be saved here.</p>
            </div>

            <div className="pb-8 px-4 md:px-16">
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
                                <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-8 border-0 bg-gray-100 hover:bg-gray-200" />
                                <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-8 border-0 bg-gray-100 hover:bg-gray-200" />
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

            <Footer />
        </div>
    );
}
