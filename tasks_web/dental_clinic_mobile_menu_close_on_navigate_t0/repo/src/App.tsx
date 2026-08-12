import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { TreatmentMenu } from './components/TreatmentMenu'
import { CeramicMill } from './components/CeramicMill'
import { CalmChairside } from './components/CalmChairside'
import { VisitTimeline } from './components/VisitTimeline'
import { DentistRoster } from './components/DentistRoster'
import { MembershipPlans } from './components/MembershipPlans'
import { Testimonials } from './components/Testimonials'
import { HoursAndAccess } from './components/HoursAndAccess'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf6f0] font-sans text-[#14312c] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentMenu />
        <CeramicMill />
        <CalmChairside />
        <VisitTimeline />
        <DentistRoster />
        <MembershipPlans />
        <Testimonials />
        <HoursAndAccess />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
