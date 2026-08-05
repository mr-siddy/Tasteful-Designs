import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { ServicesGrid } from './components/ServicesGrid'
import { AppointmentForm } from './components/AppointmentForm'
import { CareTechnology } from './components/CareTechnology'
import { VisitTimeline } from './components/VisitTimeline'
import { TeamSection } from './components/TeamSection'
import { Testimonials } from './components/Testimonials'
import { MembershipPlans } from './components/MembershipPlans'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-teal-950 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <AppointmentForm />
        <CareTechnology />
        <VisitTimeline />
        <TeamSection />
        <Testimonials />
        <MembershipPlans />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
