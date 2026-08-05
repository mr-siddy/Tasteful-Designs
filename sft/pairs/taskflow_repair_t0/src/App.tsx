import ClosingCta from './components/ClosingCta'
import DeepDive from './components/DeepDive'
import Faq from './components/Faq'
import FeatureGrid from './components/FeatureGrid'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import Testimonials from './components/Testimonials'
import TrustBar from './components/TrustBar'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <FeatureGrid />
        <DeepDive />
        <HowItWorks />
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
