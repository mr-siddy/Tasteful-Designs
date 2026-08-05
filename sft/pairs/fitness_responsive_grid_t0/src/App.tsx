import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { ProofBar } from './components/ProofBar'
import { ProgramList } from './components/ProgramList'
import { ClassGrid } from './components/ClassGrid'
import { MethodDeepDive } from './components/MethodDeepDive'
import { StudioStory } from './components/StudioStory'
import { CoachRoster } from './components/CoachRoster'
import { MemberStories } from './components/MemberStories'
import { FaqList } from './components/FaqList'
import { ClosingCta } from './components/ClosingCta'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 antialiased">
      <SiteHeader />

      <main>
        <HeroSection />
        <ProofBar />
        <ProgramList />
        <ClassGrid />
        <MethodDeepDive />
        <StudioStory />
        <CoachRoster />
        <MemberStories />
        <FaqList />
        <ClosingCta />
      </main>

      <SiteFooter />
    </div>
  )
}
