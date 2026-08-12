import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { ClassesSection } from './components/ClassesSection'
import { FacilitySection } from './components/FacilitySection'
import { MethodSection } from './components/MethodSection'
import { ScheduleSection } from './components/ScheduleSection'
import { CoachesSection } from './components/CoachesSection'
import { MembershipSection } from './components/MembershipSection'
import { ResultsSection } from './components/ResultsSection'
import { FaqSection } from './components/FaqSection'
import { JoinSection } from './components/JoinSection'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-300 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ClassesSection />
        <FacilitySection />
        <MethodSection />
        <ScheduleSection />
        <CoachesSection />
        <MembershipSection />
        <ResultsSection />
        <FaqSection />
        <JoinSection />
      </main>
      <SiteFooter />
    </div>
  )
}
