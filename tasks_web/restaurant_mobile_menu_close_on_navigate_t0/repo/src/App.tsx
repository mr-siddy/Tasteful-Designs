import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import PressStrip from './components/PressStrip'
import MenuHighlights from './components/MenuHighlights'
import FireKitchen from './components/FireKitchen'
import Sourcing from './components/Sourcing'
import TheRoom from './components/TheRoom'
import PrivateEvents from './components/PrivateEvents'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import ReserveCta from './components/ReserveCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F1E8] font-sans text-[#12261F] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <PressStrip />
        <MenuHighlights />
        <FireKitchen />
        <Sourcing />
        <TheRoom />
        <PrivateEvents />
        <Testimonials />
        <Faq />
        <ReserveCta />
      </main>
      <SiteFooter />
    </div>
  )
}
