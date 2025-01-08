'use-client'
import Footer from '@/components/Footer'
import UpperHeader from '@/components/UpperHeader'
import { SignUp } from '@clerk/nextjs'

export default function page() {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <UpperHeader />
      <div className="w-full min-h-[400px] h-[80vh] flex items-center flex-col justify-center gap-5 md:h-[50vh]">
        <SignUp afterSignUpUrl="/dashboard"  />
      </div>
        <Footer />
    </div>
  )
}

