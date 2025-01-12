import Footer from "@/components/Footer";
import LowerHeader from "@/components/LowerHeader";
import ProfHeader from "@/components/ProfHeader";
import UpperHeader from "@/components/UpperHeader";
import Settingsss from './Settingsss'

export default function Settings() {
    return (
        <div>
            <div>
                <UpperHeader />
                <LowerHeader />
                <ProfHeader />
            </div>

            <div>
                <Settingsss />
            </div>

            <Footer />
        </div>
    )
}