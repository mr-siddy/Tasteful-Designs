import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Treatments from './components/Treatments'
import TechnologyDeepDive from './components/TechnologyDeepDive'
import FirstVisit from './components/FirstVisit'
import BookingEnquiry from './components/BookingEnquiry'
import TeamRoster from './components/TeamRoster'
import MembershipPlans from './components/MembershipPlans'
import PatientStories from './components/PatientStories'
import Questions from './components/Questions'
import ClosingCta from './components/ClosingCta'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#152046] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Treatments />
        <TechnologyDeepDive />
        <FirstVisit />
        <BookingEnquiry />
        <TeamRoster />
        <MembershipPlans />
        <PatientStories />
        <Questions />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
