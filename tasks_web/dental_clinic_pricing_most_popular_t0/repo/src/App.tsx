import { ClosingCta } from './components/ClosingCta'
import { DeepDive } from './components/DeepDive'
import { FaqSection } from './components/FaqSection'
import { Hero } from './components/Hero'
import { MembershipPlans } from './components/MembershipPlans'
import { ServicesGrid } from './components/ServicesGrid'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TeamSection } from './components/TeamSection'
import { Testimonials } from './components/Testimonials'
import { TrustBar } from './components/TrustBar'
import { VisitJourney } from './components/VisitJourney'
import { VisitUs } from './components/VisitUs'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF8F3] font-sans text-[#14201E] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <MembershipPlans />
        <DeepDive />
        <VisitJourney />
        <TeamSection />
        <Testimonials />
        <FaqSection />
        <VisitUs />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
