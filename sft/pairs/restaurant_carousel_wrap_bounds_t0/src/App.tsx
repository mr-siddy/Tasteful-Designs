import { EveningFlow } from './components/EveningFlow'
import { FaqList } from './components/FaqList'
import { FireDeepDive } from './components/FireDeepDive'
import { GuestStories } from './components/GuestStories'
import { HearthMenu } from './components/HearthMenu'
import { Hero } from './components/Hero'
import { PrivateRooms } from './components/PrivateRooms'
import { ProofBand } from './components/ProofBand'
import { ReserveCta } from './components/ReserveCta'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { VisitDetails } from './components/VisitDetails'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ProofBand />
        <HearthMenu />
        <GuestStories />
        <FireDeepDive />
        <EveningFlow />
        <PrivateRooms />
        <VisitDetails />
        <FaqList />
        <ReserveCta />
      </main>
      <SiteFooter />
    </div>
  )
}
