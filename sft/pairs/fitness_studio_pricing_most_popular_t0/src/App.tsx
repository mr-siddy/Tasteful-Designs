import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import ProgramGrid from './components/ProgramGrid'
import Membership from './components/Membership'
import CoachingMethod from './components/CoachingMethod'
import FacilityTour from './components/FacilityTour'
import OnRamp from './components/OnRamp'
import CoachRoster from './components/CoachRoster'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF7F1] font-sans text-[#14181D] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ProofBar />
        <ProgramGrid />
        <Membership />
        <CoachingMethod />
        <FacilityTour />
        <OnRamp />
        <CoachRoster />
        <Testimonials />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
