import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { HearthMenu } from './components/HearthMenu'
import { FireStory } from './components/FireStory'
import { ChefsCounter } from './components/ChefsCounter'
import { ProducerMap } from './components/ProducerMap'
import { EveningFlow } from './components/EveningFlow'
import { NetLoft } from './components/NetLoft'
import { CellarPours } from './components/CellarPours'
import { GuestReviews } from './components/GuestReviews'
import { FaqAccordion } from './components/FaqAccordion'
import { VisitDetails } from './components/VisitDetails'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6EF] text-[#171310] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <HearthMenu />
        <FireStory />
        <ChefsCounter />
        <ProducerMap />
        <EveningFlow />
        <NetLoft />
        <CellarPours />
        <GuestReviews />
        <FaqAccordion />
        <VisitDetails />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
