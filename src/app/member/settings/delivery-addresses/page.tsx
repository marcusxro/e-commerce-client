import Footer from "@/components/Footer";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import UpperHeader from "@/components/UpperHeader";
import Deliveryyy from './Delivery'



export default function page() {
    return (
        <div>
            <div>
                <UpperHeader />
                <LowerHeader />
                <ProfHeader />
            </div>



            <div>
                <Deliveryyy />
            </div>

            <Footer />
        </div>
    )
}