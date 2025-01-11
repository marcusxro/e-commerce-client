import Footer from "@/components/Footer";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import UpperHeader from "@/components/UpperHeader";


export default function orders() {
    return(
        <div className="h-screen w-full flex flex-col justify-between">
            <div>
                <UpperHeader />
                <LowerHeader />
                <ProfHeader />
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2 ">
                
                <p className="text-xl">You don't have any orders yet</p>
            </div>

            <Footer />
        </div>
    )
}