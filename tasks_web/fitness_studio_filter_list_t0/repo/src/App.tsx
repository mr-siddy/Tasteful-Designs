import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Programs } from './components/Programs'
import { ClassSchedule } from './components/ClassSchedule'
import { DeepDive } from './components/DeepDive'
import { CoachRoster } from './components/CoachRoster'
import { HowItWorks } from './components/HowItWorks'
import { MemberStories } from './components/MemberStories'
import { Facility } from './components/Facility'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F2EA] text-[#0B2A33] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Programs />
        <ClassSchedule />
        <DeepDive />
        <CoachRoster />
        <HowItWorks />
        <MemberStories />
        <Facility />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
