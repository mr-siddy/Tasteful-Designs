import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import TrustBar from './components/TrustBar'
import ClassCatalog from './components/ClassCatalog'
import MembershipPlans from './components/MembershipPlans'
import StudioTour from './components/StudioTour'
import FirstSixWeeks from './components/FirstSixWeeks'
import ScheduleStrip from './components/ScheduleStrip'
import InstructorRoster from './components/InstructorRoster'
import Testimonials from './components/Testimonials'
import IntroForm from './components/IntroForm'
import FaqSection from './components/FaqSection'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] font-sans text-[#16211C] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ClassCatalog />
        <MembershipPlans />
        <StudioTour />
        <FirstSixWeeks />
        <ScheduleStrip />
        <InstructorRoster />
        <Testimonials />
        <IntroForm />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
