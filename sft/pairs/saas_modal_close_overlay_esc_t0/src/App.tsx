import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { FilingWorkbench } from './components/FilingWorkbench'
import { WalkthroughDialog } from './components/WalkthroughDialog'
import { ShipmentTimeline } from './components/ShipmentTimeline'
import { ClassificationEngine } from './components/ClassificationEngine'
import { ExceptionDesk } from './components/ExceptionDesk'
import { IntegrationGrid } from './components/IntegrationGrid'
import { RolloutPlan } from './components/RolloutPlan'
import { PricingPlans } from './components/PricingPlans'
import { CustomerVoices } from './components/CustomerVoices'
import { SecurityPosture } from './components/SecurityPosture'
import { CommonQuestions } from './components/CommonQuestions'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F7F9] text-[#0B1F33] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <FilingWorkbench />
        <WalkthroughDialog />
        <ShipmentTimeline />
        <ClassificationEngine />
        <ExceptionDesk />
        <IntegrationGrid />
        <RolloutPlan />
        <PricingPlans />
        <CustomerVoices />
        <SecurityPosture />
        <CommonQuestions />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
