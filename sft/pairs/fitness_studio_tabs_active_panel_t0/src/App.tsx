import { ClosingCta } from './components/ClosingCta'
import { Coaches } from './components/Coaches'
import { Faq } from './components/Faq'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Membership } from './components/Membership'
import { ProofBar } from './components/ProofBar'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TheBoathouse } from './components/TheBoathouse'
import { Testimonials } from './components/Testimonials'
import { Timetable } from './components/Timetable'
import { TrainingTracks } from './components/TrainingTracks'

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#0b3a41] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ProofBar />
        <TrainingTracks />
        <Timetable />
        <TheBoathouse />
        <HowItWorks />
        <Coaches />
        <Membership />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
