import { CheckIcon } from './icons'

const TIERS = [
  {
    name: 'Day Pass',
    price: '£26',
    cadence: 'per visit',
    summary: 'One coached session, any track, sauna included.',
    perks: ['Any session with a free seat', 'Recovery bay for the day', 'Redeemable against your first month'],
  },
  {
    name: 'Ebb',
    price: '£119',
    cadence: 'per month',
    summary: 'Eight coached sessions a month for people with a complicated calendar.',
    perks: [
      'Eight sessions across all three tracks',
      'Split test and written block',
      'Recovery bay and open ergs on Sunday',
    ],
  },
  {
    name: 'Flood',
    price: '£169',
    cadence: 'per month',
    summary: 'Unlimited sessions — what most members are on.',
    perks: [
      'Every session on the timetable',
      'Eight-week blocks with quarterly re-tests',
      'Two guest passes a month',
      'Priority booking seven days ahead',
    ],
  },
  {
    name: 'Crew',
    price: '£249',
    cadence: 'per month',
    summary: 'Unlimited, plus a monthly hour that is only about you.',
    perks: [
      'Everything on Flood',
      'Monthly one-to-one with Ines or Callum',
      'Video review each block',
      'Soft-tissue clinic slot every month',
    ],
  },
]

export function Membership() {
  return (
    <section id="membership" className="bg-[#faf6ef]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#12626c]">Membership</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0b3a41] md:text-5xl">
            Four ways in, no contract on any of them
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#2c565c]">
            Monthly, cancel with thirty days’ notice, freeze for up to two months a year for
            travel, injury or a newborn. We have never run a joining fee and we are not going to
            start.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col rounded-3xl border border-[#0b3a41]/12 bg-white p-7 shadow-[0_1px_2px_rgba(11,58,65,0.06)]"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b3a41]">{tier.name}</h3>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight text-[#0b3a41]">
                  {tier.price}
                </span>
                <span className="text-sm text-[#5b7c81]">{tier.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#2c565c]">{tier.summary}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-[#2c565c]">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#12626c]" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="mt-7 rounded-full border border-[#0b3a41]/25 px-5 py-2.5 text-center text-sm font-semibold text-[#0b3a41] transition hover:border-[#e0813d] hover:text-[#8a4715]"
              >
                Start with {tier.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#5b7c81]">
          Students, NHS staff and Bellhaven Masters crew members take 15% off any monthly plan —
          ask at the desk, no form to fill in.
        </p>
      </div>
    </section>
  )
}
