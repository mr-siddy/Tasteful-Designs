import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { ModuleGrid } from './components/ModuleGrid'
import { PlatformTabs } from './components/PlatformTabs'
import { SamplingDeepDive } from './components/SamplingDeepDive'
import { IntegrationStrip } from './components/IntegrationStrip'
import { RolloutSteps } from './components/RolloutSteps'
import { OperatorStory } from './components/OperatorStory'
import { PricingPlans } from './components/PricingPlans'
import { Testimonials } from './components/Testimonials'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#08312F] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ModuleGrid />
        <PlatformTabs />
        <SamplingDeepDive />
        <IntegrationStrip />
        <RolloutSteps />
        <OperatorStory />
        <PricingPlans />
        <Testimonials />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
