import { ClosingCta } from './components/ClosingCta'
import { FaqSection } from './components/FaqSection'
import { FirstVisitTimeline } from './components/FirstVisitTimeline'
import { HeroSection } from './components/HeroSection'
import { ImplantDeepDive } from './components/ImplantDeepDive'
import { MembershipPlans } from './components/MembershipPlans'
import { NervousPatientClinic } from './components/NervousPatientClinic'
import { PatientStories } from './components/PatientStories'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TeamRoster } from './components/TeamRoster'
import { TreatmentPriceList } from './components/TreatmentPriceList'
import { TrustBar } from './components/TrustBar'
import { VisitUsSection } from './components/VisitUsSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] font-sans text-[#2B3A44] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentPriceList />
        <PatientStories />
        <ImplantDeepDive />
        <NervousPatientClinic />
        <FirstVisitTimeline />
        <TeamRoster />
        <MembershipPlans />
        <FaqSection />
        <VisitUsSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
