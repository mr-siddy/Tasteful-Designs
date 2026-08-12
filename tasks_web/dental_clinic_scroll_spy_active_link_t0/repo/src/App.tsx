import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { TreatmentsSection } from './components/TreatmentsSection'
import { TechnologySection } from './components/TechnologySection'
import { ComfortSection } from './components/ComfortSection'
import { VisitSection } from './components/VisitSection'
import { TeamSection } from './components/TeamSection'
import { MembershipSection } from './components/MembershipSection'
import { ReviewsSection } from './components/ReviewsSection'
import { FaqSection } from './components/FaqSection'
import { BookingSection } from './components/BookingSection'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-700 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentsSection />
        <TechnologySection />
        <ComfortSection />
        <VisitSection />
        <TeamSection />
        <MembershipSection />
        <ReviewsSection />
        <FaqSection />
        <BookingSection />
      </main>
      <SiteFooter />
    </div>
  )
}
