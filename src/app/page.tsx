import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import UpperHeader from "@/components/UpperHeader";
import LowerHeader from "@/components/LowerHeader";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const sports = [
  {
    name: "Basketball",
    image: "/src/assets/basketball.png?height=600&width=800",
  },
  {
    name: "Training and Gym",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    name: "Badminton",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    name: "Running",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    name: "Football",
    image: "/src/assets/basketball.png",
  },
]

export default function Home() {
  return (
  <div className="h-screen w-full flex flex-col justify-between">
    <div>
    <UpperHeader/>
    <LowerHeader/>
    </div>
    <div className="py-10 px-2 md:px-6 overflow-auto">
    
    
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-[1800px] mx-auto"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Shop By Sport</h2>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
        
        <CarouselContent className="-ml-2 md:-ml-4">
          {sports.map((sport, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-6 md:basis-1/2 lg:basis-1/3">
              <Card className="relative overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] flex items-center justify-center">
                    <Image
                      src={sport.image}
                      alt={`${sport.name} category`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale "
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium">
                        {sport.name}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    <Footer/>
  </div>
  );
}
