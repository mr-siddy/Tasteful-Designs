import { ClinicianRoster } from './components/ClinicianRoster'
import { ClosingCta } from './components/ClosingCta'
import { ComfortDeepDive } from './components/ComfortDeepDive'
import { FaqSection } from './components/FaqSection'
import { FirstVisitTimeline } from './components/FirstVisitTimeline'
import { HeroSection } from './components/HeroSection'
import { MembershipPlans } from './components/MembershipPlans'
import { PatientStories } from './components/PatientStories'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TreatmentPathways } from './components/TreatmentPathways'
import { TreatmentPricing } from './components/TreatmentPricing'
import { TrustBar } from './components/TrustBar'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] font-sans text-[#123B36] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentPricing />
        <TreatmentPathways />
        <ComfortDeepDive />
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
