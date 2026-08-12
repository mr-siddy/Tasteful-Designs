import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import ProgramGrid from './components/ProgramGrid'
import StudioGallery from './components/StudioGallery'
import CoachRoster from './components/CoachRoster'
import MethodBlocks from './components/MethodBlocks'
import OnRamp from './components/OnRamp'
import Membership from './components/Membership'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import BookingForm from './components/BookingForm'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#12141A] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ProofBar />
        <ProgramGrid />
        <StudioGallery />
        <CoachRoster />
        <MethodBlocks />
        <OnRamp />
        <Membership />
        <Testimonials />
        <FaqSection />
        <BookingForm />
      </main>
      <SiteFooter />
    </div>
  )
}
