
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import UpperHeader from "@/components/UpperHeader";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Category from "@/components/Category";


const sports = [
  {
    name: "Basketball",
    image: "/basketball.png",
  },
  {
    name: "Training and Gym",
    image: "/basketball.png",
  },
  {
    name: "Badminton",
    image: "/basketball.png",
  },
  {
    name: "Running",
    image: "/basketball.png",
  },
  {
    name: "Football",
    image: "/basketball.png",
  },
]

const benefits = [
  {
    name: "Shop",
    image: "/basketball.png",
    headDesc: "Your Exclusive Access",
    desc: "Member Product",
  },
  {
    name: "Customize",
    image: "/basketball.png",
    headDesc: "Your Customisation Service",
    desc: "E-Commerce By You",
  },
  {
    name: "Celebrate",
    image: "/basketball.png",
    headDesc: "How We Say Thank You",
    desc: "Member Rewards",
  },
  {
    name: "Learn More",
    image: "/basketball.png",
    headDesc: "A Celebration of You",
    desc: "Member Days",
  },
  {
    name: "Move",
    image: "/basketball.png",
    headDesc: "Movement Where You Are",
    desc: "Sport & Wellness",
  },
  {
    name: "Explore",
    image: "/basketball.png",
    headDesc: "Your Ultimate E-Commerce Community",
    desc: "CMMRC",
  },
]

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
  }
]


export default function Home() {
  

  return (
  <div className="h-full w-full flex flex-col justify-between">
    <div>
    <UpperHeader/>
    <LowerHeader/>
    </div>

    <div className="flex items-center justify-center flex-col py-4 font-semibold">
     <h2 className="text-lg"> Move. Sell. Shop. Customize. With Us</h2>
     <p className="text-[12px]">No matter what you feel like doing today, It's better as a member.</p>
     <a href="#" className="underline text-[12px] ">Join Us</a>
    </div>

    <div className="flex items-center justify-center flex-col gap-2">
      <video src="/video.mp4" className="h-[475px]" autoPlay muted loop></video>
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h2 className="font-bold text-7xl">HAVE YOUR YEAR.</h2>
        <p className="font-semibold text-lg">This Year is Yours.</p>
      </div>
      <div className="flex flex-row gap-1 font-semibold">
        <button className="text-white bg-[#151515] py-2 px-4 max-w-[90px] rounded-full">Shop</button>
        <button className="text-white bg-[#151515] py-2 px-4 max-w-[90px] rounded-full">Explore</button>
      </div>
    </div>

    <div className="py-10 px-4 md:px-6">
      
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Shop by Sport</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm"></span>
            <div className="flex gap-2">
              <CarouselPrevious className="static  translate-x-0 translate-y-0 h-8 w-8 border-0 bg-gray-100 hover:bg-gray-200" />
              <CarouselNext className="static  translate-x-0 translate-y-0 h-8 w-8 border-0 bg-gray-100 hover:bg-gray-200" />
            </div>
          </div>
        </div>
        
          <CarouselContent className="-ml-2 md:-ml-4">
            {sports.map((sport, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="relative overflow-hidden group cursor-pointer rounded-none">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={sport.image}
                        alt={`${sport.name} category`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105 grayscale"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-medium">
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
    </div>

    <div className="py-10 px-4 md:px-6">
      <h2  className="text-3xl font-semibold tracking-tight mb-8">The Latest Tech.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-full">
          <div className="flex flex-col gap-2 font-semibold">
            <img src="/basketball.png" alt="" />
            <p>Future Ready.</p>
            <p>The E-Commerce Swift Collection</p>
            <button className="text-white bg-[#151515] py-2 px-4 max-w-[90px] rounded-full">Shop</button>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <img src="/basketball.png" alt="" />
            <p >Future Ready.</p>
            <p>The E-Commerce Stride Collection</p>
            <button className="text-white bg-[#151515] py-2 px-4 max-w-[90px] rounded-full">Shop</button>
          </div>
      </div>
    </div>

    <div className="pt-10 px-4 md:px-6">
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Member benefits</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm"></span>
            <div className="flex gap-2">
              <CarouselPrevious className="static  translate-x-0 translate-y-0 h-8 w-8 border-0 bg-gray-100 hover:bg-gray-200" />
              <CarouselNext className="static  translate-x-0 translate-y-0 h-8 w-8 border-0 bg-gray-100 hover:bg-gray-200" />
            </div>
          </div>
        </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {benefits.map((benefit, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="relative overflow-hidden group cursor-pointer rounded-none">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={benefit.image}
                        alt={`${benefit.name} category`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105 "
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4 text-white font-semibold ">
                        <p className="pb-2">{benefit.desc}</p>
                        <h2 className="pb-2 text-3xl max-w-[500px]">{benefit.headDesc}</h2>
                        <span className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-xs font-medium">
                          {benefit.name}
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
    </div>

    <div className="py-10 px-4 md:px-6">
      <h2  className="text-3xl font-semibold tracking-tight mb-8">The Latest Tech.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-full">
          <div className="flex flex-col gap-2 font-semibold">
            <img src="/basketball.png" alt="" />
            <p>Future Ready.</p>
            <p>The E-Commerce Swift Collection</p>
            <button className="text-white bg-[#151515] py-2 px-4 max-w-[90px] rounded-full">Shop</button>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <img src="/basketball.png" alt="" />
            <p >Future Ready.</p>
            <p>The E-Commerce Stride Collection</p>
            <button className="text-white bg-[#151515] py-2 px-4 max-w-[90px] rounded-full">Shop</button>
          </div>
      </div>
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
          <h2 className="text-2xl font-semibold">New Arrivals</h2>
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

    <div>
      <Category/>
    </div>
    
    <Footer/>
  </div>
  );
}
