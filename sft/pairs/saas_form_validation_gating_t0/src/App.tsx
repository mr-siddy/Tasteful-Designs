import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import TrustBar from './components/TrustBar'
import PlatformModules from './components/PlatformModules'
import DispatchDeepDive from './components/DispatchDeepDive'
import TruckAppSection from './components/TruckAppSection'
import RolloutTimeline from './components/RolloutTimeline'
import IntegrationGrid from './components/IntegrationGrid'
import PricingPlans from './components/PricingPlans'
import Testimonials from './components/Testimonials'
import SecurityStrip from './components/SecurityStrip'
import FaqSection from './components/FaqSection'
import ContactForm from './components/ContactForm'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F7FB] font-sans text-[#0A1220] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <PlatformModules />
        <DispatchDeepDive />
        <TruckAppSection />
        <RolloutTimeline />
        <IntegrationGrid />
        <PricingPlans />
        <Testimonials />
        <SecurityStrip />
        <FaqSection />
        <ContactForm />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
