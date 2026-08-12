import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import MenuBoard from './components/MenuBoard'
import Bakehouse from './components/Bakehouse'
import FireDeepDive from './components/FireDeepDive'
import ReserveLongTable from './components/ReserveLongTable'
import EveningFlow from './components/EveningFlow'
import TheRoom from './components/TheRoom'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import VisitUs from './components/VisitUs'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf5ec] font-sans text-[#1b1512] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <MenuBoard />
        <Bakehouse />
        <FireDeepDive />
        <ReserveLongTable />
        <EveningFlow />
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
