import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Capabilities from './components/Capabilities'
import DeepDive from './components/DeepDive'
import TradeFit from './components/TradeFit'
import RolloutSteps from './components/RolloutSteps'
import Pricing from './components/Pricing'
import CaseStudy from './components/CaseStudy'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF6EE] font-sans text-[#12242C] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <DeepDive />
        <TradeFit />
        <RolloutSteps />
        <Pricing />
        <CaseStudy />
        <Testimonials />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
