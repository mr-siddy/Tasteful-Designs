import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import LogoWall from './components/LogoWall'
import PlatformOverview from './components/PlatformOverview'
import TemplateGallery from './components/TemplateGallery'
import ReliabilityPanel from './components/ReliabilityPanel'
import AuditTrailPanel from './components/AuditTrailPanel'
import HowItWorks from './components/HowItWorks'
import PricingPlans from './components/PricingPlans'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F4EC] font-sans text-[#132A25] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <LogoWall />
        <PlatformOverview />
        <TemplateGallery />
        <ReliabilityPanel />
        <AuditTrailPanel />
        <HowItWorks />
        <PricingPlans />
        <Testimonials />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
