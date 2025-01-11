import Footer from "@/components/Footer";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import UpperHeader from "@/components/UpperHeader";


export default function inboc() {
    return(
        <div className="h-screen w-full flex flex-col justify-between">
            <div>
                <UpperHeader />
                <LowerHeader />
                <ProfHeader />
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2 ">
                <h2 className="text-2xl font-semibold">No Messages</h2>
                <p className="text-xl">Messages and notifications from e-commerce will show up here.</p>
            </div>

            <Footer />
        </div>
    )
}