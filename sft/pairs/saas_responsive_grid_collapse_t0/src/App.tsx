import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import CapabilityGrid from './components/CapabilityGrid'
import TicketDeepDive from './components/TicketDeepDive'
import FloorRollout from './components/FloorRollout'
import Integrations from './components/Integrations'
import PricingPlans from './components/PricingPlans'
import CaseStudy from './components/CaseStudy'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F2EC] font-sans text-[#1E1B26] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ProofBar />
        <CapabilityGrid />
        <TicketDeepDive />
        <FloorRollout />
        <Integrations />
        <PricingPlans />
        <CaseStudy />
        <Testimonials />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
