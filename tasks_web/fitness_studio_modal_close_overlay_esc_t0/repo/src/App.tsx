import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { ProofBand } from './components/ProofBand'
import { ClassFormats } from './components/ClassFormats'
import { IntroRideBooking } from './components/IntroRideBooking'
import { TheRoom } from './components/TheRoom'
import { FirstVisitSteps } from './components/FirstVisitSteps'
import { CoachRoster } from './components/CoachRoster'
import { MembershipPlans } from './components/MembershipPlans'
import { MemberStories } from './components/MemberStories'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf5ee] text-[#40485a] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProofBand />
        <ClassFormats />
        <IntroRideBooking />
        <TheRoom />
        <FirstVisitSteps />
        <CoachRoster />
        <MembershipPlans />
        <MemberStories />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
