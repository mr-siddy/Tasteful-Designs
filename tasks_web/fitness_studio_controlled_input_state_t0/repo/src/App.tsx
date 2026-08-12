import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { ProgramGrid } from './components/ProgramGrid'
import { TrialPassForm } from './components/TrialPassForm'
import { WeeklyTimetable } from './components/WeeklyTimetable'
import { CoachingMethod } from './components/CoachingMethod'
import { TheFloor } from './components/TheFloor'
import { OnboardingSteps } from './components/OnboardingSteps'
import { MembershipTiers } from './components/MembershipTiers'
import { CoachRoster } from './components/CoachRoster'
import { MemberStories } from './components/MemberStories'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#10161C] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ProgramGrid />
        <TrialPassForm />
        <WeeklyTimetable />
        <CoachingMethod />
        <TheFloor />
        <OnboardingSteps />
        <MembershipTiers />
        <CoachRoster />
        <MemberStories />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
