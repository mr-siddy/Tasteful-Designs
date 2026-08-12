import { Capabilities } from './components/Capabilities'
import { ClosingCta } from './components/ClosingCta'
import { DeepDive } from './components/DeepDive'
import { Faq } from './components/Faq'
import { Hero } from './components/Hero'
import { Integrations } from './components/Integrations'
import { Pricing } from './components/Pricing'
import { ReviewWorkflow } from './components/ReviewWorkflow'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { Testimonials } from './components/Testimonials'
import { TrustBar } from './components/TrustBar'
import { WorkspaceSetup } from './components/WorkspaceSetup'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <ReviewWorkflow />
        <WorkspaceSetup />
        <DeepDive />
        <Integrations />
        <Pricing />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
