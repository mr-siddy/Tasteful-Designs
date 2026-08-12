import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { ClassCatalog } from './components/ClassCatalog'
import { WeeklyTimetable } from './components/WeeklyTimetable'
import { MethodDeepDive } from './components/MethodDeepDive'
import { StudioRooms } from './components/StudioRooms'
import { FirstMonthPath } from './components/FirstMonthPath'
import { MembershipTiers } from './components/MembershipTiers'
import { InstructorRoster } from './components/InstructorRoster'
import { MemberStories } from './components/MemberStories'
import { FaqSection } from './components/FaqSection'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#1E1B16] antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ClassCatalog />
        <WeeklyTimetable />
        <MethodDeepDive />
        <StudioRooms />
        <FirstMonthPath />
        <MembershipTiers />
        <InstructorRoster />
        <MemberStories />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
