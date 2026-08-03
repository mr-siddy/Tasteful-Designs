import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { ServicesGrid } from './components/ServicesGrid'
import { BookingPanel } from './components/BookingPanel'
import { ComfortDeepDive } from './components/ComfortDeepDive'
import { FirstVisitTimeline } from './components/FirstVisitTimeline'
import { TeamRoster } from './components/TeamRoster'
import { HoursAndAccess } from './components/HoursAndAccess'
import { MembershipPlans } from './components/MembershipPlans'
import { Testimonials } from './components/Testimonials'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6fafb] text-[#0b2d45] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <BookingPanel />
        <ComfortDeepDive />
        <FirstVisitTimeline />
        <TeamRoster />
        <HoursAndAccess />
        <MembershipPlans />
        <Testimonials />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
