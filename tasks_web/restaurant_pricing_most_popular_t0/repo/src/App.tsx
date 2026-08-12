import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import HearthMenu from './components/HearthMenu'
import PricingPackages from './components/PricingPackages'
import DeepDive from './components/DeepDive'
import BookingSteps from './components/BookingSteps'
import TheRoom from './components/TheRoom'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import VisitUs from './components/VisitUs'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f2ea] font-sans text-[#171310] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <HearthMenu />
        <PricingPackages />
        <DeepDive />
        <BookingSteps />
        <TheRoom />
        <Testimonials />
        <FaqSection />
        <VisitUs />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
