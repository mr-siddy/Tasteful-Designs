import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { ProofBar } from './components/ProofBar'
import { NightMarketGrid } from './components/NightMarketGrid'
import { FeastMenus } from './components/FeastMenus'
import { FireDeepDive } from './components/FireDeepDive'
import { RoomAndHours } from './components/RoomAndHours'
import { KitchenTeam } from './components/KitchenTeam'
import { GuestVoices } from './components/GuestVoices'
import { FaqList } from './components/FaqList'
import { ReserveCta } from './components/ReserveCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#16110F] font-sans text-[#FBF5EC] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProofBar />
        <NightMarketGrid />
        <FeastMenus />
        <FireDeepDive />
        <RoomAndHours />
        <KitchenTeam />
        <GuestVoices />
        <FaqList />
        <ReserveCta />
      </main>
      <SiteFooter />
    </div>
  )
}
