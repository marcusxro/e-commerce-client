import Footer from "@/components/Footer";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import UpperHeader from "@/components/UpperHeader";
import LinkedAccounts from './LinkedAccounts'

export default function PaymentPage() {
    return (
        <div>
            <div>
                <UpperHeader />
                <LowerHeader />
                <ProfHeader />
            </div>

            

            <div>
                <LinkedAccounts/>
            </div>

            <Footer />
        </div>
    )
}