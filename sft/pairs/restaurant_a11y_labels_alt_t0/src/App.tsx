import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import PressBar from './components/PressBar'
import MenuBoard from './components/MenuBoard'
import DiningRoomGallery from './components/DiningRoomGallery'
import HearthStory from './components/HearthStory'
import ServiceSteps from './components/ServiceSteps'
import Testimonials from './components/Testimonials'
import PrivateEvents from './components/PrivateEvents'
import FaqSection from './components/FaqSection'
import ReservationForm from './components/ReservationForm'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf7ef] font-sans text-[#0b2027] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <PressBar />
        <MenuBoard />
        <DiningRoomGallery />
        <HearthStory />
        <ServiceSteps />
        <Testimonials />
        <PrivateEvents />
        <FaqSection />
        <ReservationForm />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
