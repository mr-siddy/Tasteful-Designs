import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { SupperMenu } from './components/SupperMenu'
import { ReserveDialog } from './components/ReserveDialog'
import { FishFryStory } from './components/FishFryStory'
import { RelishTradition } from './components/RelishTradition'
import { BrandyBar } from './components/BrandyBar'
import { EveningOrder } from './components/EveningOrder'
import { LanternRoom } from './components/LanternRoom'
import { GuestVoices } from './components/GuestVoices'
import { CommonQuestions } from './components/CommonQuestions'
import { VisitDetails } from './components/VisitDetails'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F1E4] text-[#17130F] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <SupperMenu />
        <ReserveDialog />
        <FishFryStory />
        <RelishTradition />
        <BrandyBar />
        <EveningOrder />
        <LanternRoom />
        <GuestVoices />
        <CommonQuestions />
        <VisitDetails />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
