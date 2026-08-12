import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { HearthMenu } from './components/HearthMenu'
import { FireAndGrain } from './components/FireAndGrain'
import { TheRoom } from './components/TheRoom'
import { EveningFlow } from './components/EveningFlow'
import { CellarList } from './components/CellarList'
import { GuestStories } from './components/GuestStories'
import { VisitFaq } from './components/VisitFaq'
import { ReserveCta } from './components/ReserveCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF6EC] text-[#1B1410] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <HearthMenu />
        <FireAndGrain />
        <TheRoom />
        <EveningFlow />
        <CellarList />
        <GuestStories />
        <VisitFaq />
        <ReserveCta />
      </main>
      <SiteFooter />
    </div>
  )
}
