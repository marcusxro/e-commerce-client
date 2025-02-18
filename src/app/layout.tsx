import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import UpperHeader from "@/components/UpperHeader";
import LowerHeader from "@/components/LowerHeader";
import News from "@/components/News";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shopee ni marcus",
  description: "Developed by LeBron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <UpperHeader />
          <LowerHeader /> */}
          {/* <News /> */}
          {children}
          {/* <Footer /> */}
        </body>
        
      </html>
    </ClerkProvider>

  );
}
