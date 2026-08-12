import { ClipboardIcon, HeartRateIcon, StopwatchIcon } from './Icons'
import { Eyebrow, Shell } from './PageKit'

const BLOCKS = [
  {
    eyebrow: 'Step one · Assess',
    title: 'We measure before we prescribe anything',
    icon: ClipboardIcon,
    body:
      'Your first session is ninety minutes and involves almost no training. A coach screens your ankles, hips and shoulders, watches you squat and hinge with a dowel, takes a resting heart rate and a three-minute step test, and asks what your week genuinely looks like — not what you wish it looked like. All of it is written into your file that day.',
    points: [
      'Movement screen across nine joint positions',
      'Aerobic threshold test on the rower or bike',
      'An honest conversation about time, sleep and injuries',
    ],
    accent: 'ember' as const,
  },
  {
    eyebrow: 'Step two · Program',
    title: 'A written block, not a workout of the day',
    icon: HeartRateIcon,
    body:
      'You train on an eight-week block written by your head coach. Sets, reps and target loads are on the sheet before you arrive, they progress on a schedule, and when you miss a week because of a work trip the block bends instead of breaking. Two members standing next to each other on adjacent platforms are almost never doing the same thing.',
    points: [
      'Every session written and shared before the block starts',
      'Loads progress off your own tested numbers',
      'Missed weeks get re-planned, not skipped',
    ],
    accent: 'pine' as const,
  },
  {
    eyebrow: 'Step three · Retest',
    title: 'Week eight tells you the truth',
    icon: StopwatchIcon,
    body:
      'At the end of every block we repeat the tests from day one and put the two sets of numbers side by side. Sometimes the squat went up eighteen kilos. Sometimes it did not move and the honest answer is that you slept five hours a night for two months. Either way you get the data and a plan for the next block that responds to it.',
    points: [
      'Same tests, same equipment, same coach',
      'Results emailed to you and kept in your file',
      'The next block is written in front of you',
    ],
    accent: 'ember' as const,
  },
]

export default function CoachingMethod() {
  return (
    <section id="method" className="bg-[#14181D] py-20 text-[#FBF7F1] sm:py-24">
      <Shell>
        <div className="max-w-3xl">
          <Eyebrow tone="sand">How coaching works here</Eyebrow>
          <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-tight sm:text-[2.6rem]">
            Assess, program, retest — then do it again
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#E2D6C6]">
            The whole club runs on one eight-week loop. It is not complicated and it is not a secret. It is
            just the part most gyms skip because measuring people takes staff time.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {BLOCKS.map((block, index) => {
            const Icon = block.icon
            const flipped = index % 2 === 1
            return (
              <article
                key={block.title}
                data-testid="method-block"
                className={`grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-2 lg:items-center lg:p-10 ${
                  flipped ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      block.accent === 'ember' ? 'bg-[#D9481F]/20 text-[#F0803F]' : 'bg-[#12554D]/40 text-[#7FC8BE]'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E2D6C6]/70">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight">{block.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#E2D6C6]">{block.body}</p>
                </div>
                <ul className="space-y-3 rounded-2xl bg-[#FBF7F1]/[0.06] p-6">
                  {block.points.map((point) => (
                    <li key={point} data-testid="method-point" className="flex items-start gap-3 text-[15px] text-[#E2D6C6]">
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          block.accent === 'ember' ? 'bg-[#F0803F]' : 'bg-[#7FC8BE]'
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </Shell>
    </section>
  )
}
