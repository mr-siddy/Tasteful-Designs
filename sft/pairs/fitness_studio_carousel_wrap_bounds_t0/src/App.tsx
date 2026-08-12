import CoachRoster from './components/CoachRoster'
import CoachingMethod from './components/CoachingMethod'
import FacilityTour from './components/FacilityTour'
import FaqList from './components/FaqList'
import FirstEightWeeks from './components/FirstEightWeeks'
import Hero from './components/Hero'
import JoinCta from './components/JoinCta'
import MemberStories from './components/MemberStories'
import MembershipPlans from './components/MembershipPlans'
import ProgramGrid from './components/ProgramGrid'
import ProofBand from './components/ProofBand'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ProofBand />
        <ProgramGrid />
        <MemberStories />
        <CoachingMethod />
        <FacilityTour />
        <FirstEightWeeks />
        <MembershipPlans />
        <CoachRoster />
        <FaqList />
        <JoinCta />
      </main>
      <SiteFooter />
    </div>
  )
}
