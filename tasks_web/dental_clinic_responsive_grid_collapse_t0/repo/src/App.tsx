import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import ServicesGrid from './components/ServicesGrid'
import SameDayCrowns from './components/SameDayCrowns'
import ComfortAndSedation from './components/ComfortAndSedation'
import FirstVisitTimeline from './components/FirstVisitTimeline'
import TeamSection from './components/TeamSection'
import MembershipPlans from './components/MembershipPlans'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

/** Quarry Hill Dental — 218 Water Street, Burlington VT. */
export default function App() {
  return (
    <div className="min-h-screen bg-[#faf5ec] font-sans text-[#0d2b2e] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ProofBar />
        <ServicesGrid />
        <SameDayCrowns />
        <ComfortAndSedation />
        <FirstVisitTimeline />
        <TeamSection />
        <MembershipPlans />
        <Testimonials />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
