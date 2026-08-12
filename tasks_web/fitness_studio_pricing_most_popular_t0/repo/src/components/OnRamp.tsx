import { Shell } from './PageKit'

const STEPS = [
  {
    number: '01',
    title: 'Book the free intro',
    when: 'Takes about two minutes',
    body:
      'Pick a weekday slot on the phone or at the desk. Wear whatever you train in. If you have not trained in eleven years, say so on the form — it changes nothing except which coach you get.',
  },
  {
    number: '02',
    title: 'Get screened and tested',
    when: 'Ninety minutes, on us',
    body:
      'The movement screen, the aerobic test and the conversation about your week. You leave with your numbers written down and a straight answer about which membership fits, including "none of them, yet".',
  },
  {
    number: '03',
    title: 'Train your first block',
    when: 'Eight weeks',
    body:
      'Your program is written before your first real session. A coach walks you through the first three sessions on the floor until the setup is automatic, then steps back and watches from a distance.',
  },
  {
    number: '04',
    title: 'Retest and rewrite',
    when: 'Week eight, then every eight weeks',
    body:
      'Same tests, side-by-side numbers, and a new block written in front of you. This is the point most members say the thing stopped feeling like a gym membership and started feeling like training.',
  },
]

export default function OnRamp() {
  return (
    <section id="onramp" className="bg-[#12554D] py-20 text-[#FBF7F1] sm:py-24">
      <Shell>
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#FBF7F1]/25 bg-[#FBF7F1]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E2D6C6]">
            Your first eight weeks
          </span>
          <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-tight sm:text-[2.6rem]">
            Nobody gets handed a key fob and wished good luck
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#CDE3DF]">
            Every member, on every tier, goes through the same four steps. It is the reason ninety-one percent
            of people who join are still training here a year later.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              data-testid="onramp-step"
              className="flex h-full flex-col rounded-3xl border border-[#FBF7F1]/15 bg-[#0E3F3A] p-7"
            >
              <span className="text-3xl font-black tracking-tight text-[#F0803F]">{step.number}</span>
              <h3 className="mt-4 text-lg font-black tracking-tight">{step.title}</h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7FC8BE]">{step.when}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#CDE3DF]">{step.body}</p>
            </li>
          ))}
        </ol>
      </Shell>
    </section>
  )
}
