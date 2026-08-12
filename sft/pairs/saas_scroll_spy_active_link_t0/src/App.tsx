import ClosingCta from './components/ClosingCta'
import ControlsSection from './components/ControlsSection'
import CustomersSection from './components/CustomersSection'
import FaqSection from './components/FaqSection'
import HeroSection from './components/HeroSection'
import IntegrationsSection from './components/IntegrationsSection'
import PlatformSection from './components/PlatformSection'
import PricingSection from './components/PricingSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import TrustBar from './components/TrustBar'
import WorkflowSection from './components/WorkflowSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <PlatformSection />
        <WorkflowSection />
        <IntegrationsSection />
        <ControlsSection />
        <PricingSection />
        <CustomersSection />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
