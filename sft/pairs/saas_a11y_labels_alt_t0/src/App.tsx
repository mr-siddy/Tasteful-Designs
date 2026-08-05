import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Capabilities from './components/Capabilities'
import ProductGallery from './components/ProductGallery'
import DeepDive from './components/DeepDive'
import RolloutSteps from './components/RolloutSteps'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import TrialSignupForm from './components/TrialSignupForm'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1524] font-sans text-slate-200 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <ProductGallery />
        <DeepDive />
        <RolloutSteps />
        <Pricing />
        <Testimonials />
        <FaqSection />
        <TrialSignupForm />
      </main>
      <SiteFooter />
    </div>
  )
}
