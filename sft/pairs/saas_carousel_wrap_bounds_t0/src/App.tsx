import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Capabilities from './components/Capabilities'
import DeepDive from './components/DeepDive'
import Integrations from './components/Integrations'
import RolloutSteps from './components/RolloutSteps'
import StoryCarousel from './components/StoryCarousel'
import Outcomes from './components/Outcomes'
import FaqSection from './components/FaqSection'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans text-[#131A2A] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <DeepDive />
        <Integrations />
        <RolloutSteps />
        <StoryCarousel />
        <Outcomes />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
