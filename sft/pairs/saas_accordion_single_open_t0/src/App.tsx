import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { ModuleGrid } from './components/ModuleGrid'
import { SeasonBoard } from './components/SeasonBoard'
import { ProofRounds } from './components/ProofRounds'
import { MetadataFeeds } from './components/MetadataFeeds'
import { RolloutSteps } from './components/RolloutSteps'
import { PricingTiers } from './components/PricingTiers'
import { CustomerStories } from './components/CustomerStories'
import { FaqAccordion } from './components/FaqAccordion'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#141B2E] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ModuleGrid />
        <SeasonBoard />
        <ProofRounds />
        <MetadataFeeds />
        <RolloutSteps />
        <PricingTiers />
        <CustomerStories />
        <FaqAccordion />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
