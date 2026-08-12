import { CareTeam } from './components/CareTeam'
import { ChairsideComfort } from './components/ChairsideComfort'
import { ClosingCta } from './components/ClosingCta'
import { FaqSection } from './components/FaqSection'
import { FirstVisitTimeline } from './components/FirstVisitTimeline'
import { HeroSection } from './components/HeroSection'
import { MembershipPlans } from './components/MembershipPlans'
import { NewPatientBooking } from './components/NewPatientBooking'
import { PatientStories } from './components/PatientStories'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TreatmentMenu } from './components/TreatmentMenu'
import { TrustBar } from './components/TrustBar'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] font-sans text-[#0B2540] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentMenu />
        <NewPatientBooking />
        <ChairsideComfort />
        <FirstVisitTimeline />
        <CareTeam />
        <MembershipPlans />
        <PatientStories />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
