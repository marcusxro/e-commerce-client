import Footer from "@/components/Footer";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import UpperHeader from "@/components/UpperHeader";
import ShopPreferences from './ShopPreferences'

export default function PaymentPage() {
    return (
        <div>
            <div>
                <UpperHeader />
                <LowerHeader />
                <ProfHeader />
            </div>

            

            <div>
                <ShopPreferences/>
            </div>

            <Footer />
        </div>
    )
}