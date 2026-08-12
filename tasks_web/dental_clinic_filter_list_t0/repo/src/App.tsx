import { CeramicMillFeature } from './components/CeramicMillFeature'
import { ClinicianRoster } from './components/ClinicianRoster'
import { ClosingCta } from './components/ClosingCta'
import { ComfortProtocol } from './components/ComfortProtocol'
import { FaqSection } from './components/FaqSection'
import { FirstVisitTimeline } from './components/FirstVisitTimeline'
import { HeroSection } from './components/HeroSection'
import { MembershipPlans } from './components/MembershipPlans'
import { PatientStories } from './components/PatientStories'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TreatmentIndex } from './components/TreatmentIndex'
import { TrustBar } from './components/TrustBar'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F1F5F7] font-sans text-[#12263F] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentIndex />
        <CeramicMillFeature />
        <ComfortProtocol />
        <FirstVisitTimeline />
        <ClinicianRoster />
        <MembershipPlans />
        <PatientStories />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
