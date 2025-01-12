import Footer from "@/components/Footer";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import UpperHeader from "@/components/UpperHeader";
import Payment from './Payment'

export default function PaymentPage() {
    return (
        <div>
            <div>
                <UpperHeader />
                <LowerHeader />
                <ProfHeader />
            </div>

            

            <div>
                <Payment/>
            </div>

            <Footer />
        </div>
    )
}