import { CalendarIcon, LockIcon, SparkIcon } from './Icons'

const REASSURANCES = [
  { icon: <CalendarIcon className="h-5 w-5" />, text: 'Sixty minutes, booked around your week' },
  { icon: <SparkIcon className="h-5 w-5" />, text: 'You leave with a written screen summary' },
  { icon: <LockIcon className="h-5 w-5" />, text: 'No card, no contract, no follow-up calls' },
]

export default function JoinCta() {
  return (
    <section id="join" data-testid="join-cta" className="relative overflow-hidden bg-slate-950 py-24 text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_75%_10%,rgba(163,230,53,0.20),transparent_70%),radial-gradient(40%_50%_at_10%_90%,rgba(56,189,248,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">Come see the room</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Book a free first session
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Pick an hour that suits you and spend it with a coach on the floor. If we are not the right
          gym for what you are trying to do, we will tell you that and point you somewhere better.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+14105550188"
            className="rounded-full bg-lime-300 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-lime-300/25 transition hover:bg-lime-200"
          >
            Call (410) 555-0188
          </a>
          <a
            href="mailto:desk@foundryhillstrength.co"
            className="rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-slate-100 transition hover:border-lime-300 hover:text-lime-300"
          >
            Email the front desk
          </a>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 text-left text-sm text-slate-300 sm:grid-cols-3">
          {REASSURANCES.map((item) => (
            <li key={item.text} className="flex items-start gap-3 rounded-2xl bg-white/5 px-5 py-4">
              <span className="mt-0.5 text-lime-300">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
