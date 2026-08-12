import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { TreatmentGrid } from './components/TreatmentGrid'
import { FeeSchedule } from './components/FeeSchedule'
import { PracticeDeepDive } from './components/PracticeDeepDive'
import { FirstVisitSteps } from './components/FirstVisitSteps'
import { TeamRoster } from './components/TeamRoster'
import { PatientStories } from './components/PatientStories'
import { MembershipPlans } from './components/MembershipPlans'
import { HoursAndAccess } from './components/HoursAndAccess'
import { FaqAccordion } from './components/FaqAccordion'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] font-sans text-[#1C1A17] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentGrid />
        <FeeSchedule />
        <PracticeDeepDive />
        <FirstVisitSteps />
        <TeamRoster />
        <PatientStories />
        <MembershipPlans />
        <HoursAndAccess />
        <FaqAccordion />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
