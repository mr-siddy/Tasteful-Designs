import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { Accolades } from './components/Accolades'
import { SignaturePlates } from './components/SignaturePlates'
import { MenuTabs } from './components/MenuTabs'
import { TheHearth } from './components/TheHearth'
import { Sourcing } from './components/Sourcing'
import { HowWeCook } from './components/HowWeCook'
import { PrivateDining } from './components/PrivateDining'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { ReserveCta } from './components/ReserveCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <Accolades />
        <SignaturePlates />
        <MenuTabs />
        <TheHearth />
        <Sourcing />
        <HowWeCook />
        <PrivateDining />
        <Testimonials />
        <Faq />
        <ReserveCta />
      </main>
      <SiteFooter />
    </div>
  )
}
