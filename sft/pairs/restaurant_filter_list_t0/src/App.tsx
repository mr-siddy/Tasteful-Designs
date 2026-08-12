import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { DiningFormats } from './components/DiningFormats'
import { MenuExplorer } from './components/MenuExplorer'
import { HearthStory } from './components/HearthStory'
import { Growers } from './components/Growers'
import { EveningFlow } from './components/EveningFlow'
import { GuestVoices } from './components/GuestVoices'
import { PrivateDining } from './components/PrivateDining'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#241C17] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <DiningFormats />
        <MenuExplorer />
        <HearthStory />
        <Growers />
        <EveningFlow />
        <GuestVoices />
        <PrivateDining />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
