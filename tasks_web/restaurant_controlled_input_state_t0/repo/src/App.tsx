import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { Accolades } from './components/Accolades'
import { TheTable } from './components/TheTable'
import { ReserveTable } from './components/ReserveTable'
import { QvevriCellar } from './components/QvevriCellar'
import { Bakehouse } from './components/Bakehouse'
import { HowASupraWorks } from './components/HowASupraWorks'
import { PrivateSupra } from './components/PrivateSupra'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { VisitUs } from './components/VisitUs'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdf8f1] font-sans text-stone-900 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <Accolades />
        <TheTable />
        <ReserveTable />
        <QvevriCellar />
        <Bakehouse />
        <HowASupraWorks />
        <PrivateSupra />
        <Testimonials />
        <Faq />
        <VisitUs />
      </main>
      <SiteFooter />
    </div>
  )
}
