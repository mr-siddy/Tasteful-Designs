import { BarbellIcon, FlameIcon, HeartRateIcon, ShieldIcon, StopwatchIcon, ClipboardIcon } from './Icons'
import { SectionHeading, Shell } from './PageKit'

const PROGRAMS = [
  {
    name: 'Barbell Foundations',
    icon: BarbellIcon,
    schedule: 'Mon · Wed · Fri, 6:00am / 12:15pm / 5:45pm',
    length: '8-week block',
    body:
      'The squat, press, deadlift and clean, taught slowly with an empty bar first. You leave knowing how to set up, brace and bail, and with a program that adds weight in a way your joints can keep up with.',
  },
  {
    name: 'Engine Room',
    icon: HeartRateIcon,
    schedule: 'Tue · Thu, 6:30am / 6:15pm · Sat 8:00am',
    length: 'Ongoing',
    body:
      'Rower, bike, ski and sled intervals built off a tested aerobic threshold rather than a whiteboard guess. Most members pair this with two strength sessions and stop dreading stairs by week five.',
  },
  {
    name: 'Hybrid Athlete',
    icon: FlameIcon,
    schedule: 'Mon · Thu, 5:45am · Sun 9:30am',
    length: '12-week block',
    body:
      'For the runners, cyclists and amateur footballers who want to lift without wrecking their weekend racing. Strength work is scheduled around your event calendar, not the other way around.',
  },
  {
    name: 'Masters 50+',
    icon: ShieldIcon,
    schedule: 'Tue · Fri, 9:30am · Sat 10:30am',
    length: 'Ongoing',
    body:
      'Same barbells, different pacing. Longer warm-ups, more bone-loading work, and coaches who understand hip replacements, blood pressure medication and what "just a niggle" usually turns out to be.',
  },
  {
    name: 'Return to Strength',
    icon: ClipboardIcon,
    schedule: 'By appointment, weekday mornings',
    length: '6-week bridge',
    body:
      'Our physio-led bridge for members coming back from surgery, a long illness or pregnancy. Sessions run in the rehab annex with one coach, then hand you over to a group when the retest says you are ready.',
  },
  {
    name: 'Open Floor',
    icon: StopwatchIcon,
    schedule: 'All staffed hours, 5:30am – 8:30pm',
    length: 'Ongoing',
    body:
      'Self-programmed training on the full strength floor. You get the platforms, the bars, the chalk and a coach in the room to ask, but the session plan is yours to write.',
  },
]

export default function ProgramGrid() {
  return (
    <section id="programs" className="bg-[#FBF7F1] py-20 sm:py-24">
      <Shell>
        <SectionHeading
          eyebrow="What we run"
          title="Six programs, one shared method"
          lede="Every program below is coached by the same five people, uses the same assessment and the same eight-week retest, and is written down before you walk in. Pick the one that matches the week you actually have."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => {
            const Icon = program.icon
            return (
              <article
                key={program.name}
                data-testid="program-card"
                className="group flex h-full flex-col rounded-3xl border border-[#E2D6C6] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#14181D]/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9481F]/10 text-[#D9481F]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-black tracking-tight text-[#14181D]">{program.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#4A4438]">{program.body}</p>
                <dl className="mt-6 space-y-1.5 border-t border-[#F2EAE0] pt-4 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-bold text-[#7A6E60]">When</dt>
                    <dd className="text-[#4A4438]">{program.schedule}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-bold text-[#7A6E60]">Format</dt>
                    <dd className="text-[#4A4438]">{program.length}</dd>
                  </div>
                </dl>
              </article>
            )
          })}
        </div>
      </Shell>
    </section>
  )
}
