import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { ProgramGrid } from './components/ProgramGrid'
import { WeeklyTimetable } from './components/WeeklyTimetable'
import { CoachingMethod } from './components/CoachingMethod'
import { RecoveryLoft } from './components/RecoveryLoft'
import { OnboardingSteps } from './components/OnboardingSteps'
import { MembershipTiers } from './components/MembershipTiers'
import { CoachRoster } from './components/CoachRoster'
import { MemberStories } from './components/MemberStories'
import { FaqAccordion } from './components/FaqAccordion'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF7F1] text-[#1B1A17] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ProgramGrid />
        <WeeklyTimetable />
        <CoachingMethod />
        <RecoveryLoft />
        <OnboardingSteps />
        <MembershipTiers />
        <CoachRoster />
        <MemberStories />
        <FaqAccordion />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
