import { useState } from 'react'

type Rate = 'weeknight' | 'weekend'

type Package = {
  id: string
  name: string
  seats: string
  summary: string
  weeknight: number
  weekend: number
  courses: string
  features: string[]
  cta: string
  /** The one package the room actively promotes. */
  popular: boolean
}

const PACKAGES: Package[] = [
  {
    id: 'hearthside',
    name: 'Hearthside',
    seats: 'Up to 12 guests',
    summary:
      'The back room and its long oak table, set with the family-style board we send out on a normal Thursday.',
    weeknight: 85,
    weekend: 105,
    courses: 'Four shared courses',
    features: [
      'The private back room with its own entrance',
      'Family-style board of four shared courses',
      'Hearth bread, bone butter and ash-roasted vegetables',
      'Two hours at the table, no hard turn after',
      'A server dedicated to your room for the evening',
      'Corkage waived on two bottles of your own',
    ],
    cta: 'Enquire about Hearthside',
    popular: false,
  },
  {
    id: 'chefs-table',
    name: "Chef's Table",
    seats: 'Up to 24 guests',
    summary:
      'Six courses cooked at the hearth rail with Margo working the fire an arm’s length from your table.',
    weeknight: 135,
    weekend: 160,
    courses: 'Six courses at the rail',
    features: [
      'Everything in the Hearthside package',
      'Six courses plated at the hearth rail as you watch',
      'Margo cooks and talks the room through every fire',
      'Whole dry-aged cut or whole day-boat fish carved at the table',
      'Wine pairing built by Priya from the cellar list',
      'Menus printed with your party’s name on them',
      'Three hours at the table and the room to yourselves',
    ],
    cta: "Enquire about the Chef's Table",
    popular: true,
  },
  {
    id: 'full-house',
    name: 'Full House',
    seats: 'Up to 70 guests',
    summary:
      'The whole restaurant — bar, dining room and back room — closed to the public for your evening.',
    weeknight: 185,
    weekend: 215,
    courses: 'Six courses plus a raw bar',
    features: [
      "Everything in the Chef's Table package",
      'The entire restaurant closed to the public',
      'Raw bar and a passed course during the first hour',
      'The full bar with Caleb behind it all night',
      'Sound, lighting and a lectern if you need to speak',
      'Load-in from four in the afternoon for anything you bring',
      'A planning call with Margo four weeks out',
    ],
    cta: 'Enquire about a buyout',
    popular: false,
  },
]

const RATE_LABEL: Record<Rate, string> = {
  weeknight: 'Wednesday to Thursday',
  weekend: 'Friday to Sunday',
}

function CheckMark() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.14" />
      <path
        d="m6 10.4 2.6 2.6L14 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FlameBadgeIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M8 1.5c2.6 3 3.9 5.3 3.9 7.4A3.9 3.9 0 0 1 8 12.8 3.9 3.9 0 0 1 4.1 8.9c0-2.1 1.3-4.4 3.9-7.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function PricingPackages() {
  const [rate, setRate] = useState<Rate>('weeknight')

  return (
    <section id="packages" className="bg-[#171310] text-[#f7f2ea]" aria-labelledby="packages-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e8b04b]">
            Private dining
          </p>
          <h2
            id="packages-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Three ways to take the room
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#c8bcae]">
            Every package is priced per guest and includes the food, the room and the staff for it.
            Tax and a twenty percent gratuity are added to the final bill; nothing else is. Deposits
            are half the estimated total and come off the balance.
          </p>
        </div>

        <div
          role="group"
          aria-label="Choose a rate"
          className="mx-auto mt-10 flex w-fit items-center gap-1 rounded-2xl border border-[#f7f2ea]/15 bg-[#221c17] p-1"
        >
          <button
            type="button"
            data-testid="seating-weeknight"
            aria-pressed={rate === 'weeknight'}
            onClick={() => setRate('weeknight')}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              rate === 'weeknight' ? 'bg-[#e2622a] text-[#171310]' : 'text-[#c8bcae] hover:text-[#f7f2ea]'
            }`}
          >
            Weeknight rate
          </button>
          <button
            type="button"
            data-testid="seating-weekend"
            aria-pressed={rate === 'weekend'}
            onClick={() => setRate('weekend')}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              rate === 'weekend' ? 'bg-[#e2622a] text-[#171310]' : 'text-[#c8bcae] hover:text-[#f7f2ea]'
            }`}
          >
            Weekend rate
          </button>
        </div>
        <p className="mt-3 text-center text-sm text-[#9a8d80]">{RATE_LABEL[rate]}</p>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => {
            const promoted = pkg.popular
            return (
              <article
                key={pkg.id}
                data-testid="plan-card"
                className={`relative flex h-full flex-col rounded-3xl border p-7 transition ${
                  promoted
                    ? 'border-[#e2622a] bg-[#221c17] shadow-2xl shadow-black/40 lg:-mt-4 lg:pb-10'
                    : 'border-[#f7f2ea]/15 bg-[#1c1713]'
                }`}
              >
                {promoted && (
                  <span
                    data-testid="popular-badge"
                    className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-[#e2622a] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#171310]"
                  >
                    <FlameBadgeIcon />
                    Most popular
                  </span>
                )}

                <h3 className="font-serif text-2xl font-semibold tracking-tight">{pkg.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#e8b04b]">{pkg.seats}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#c8bcae]">{pkg.summary}</p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span data-testid="plan-price" className="font-serif text-4xl font-semibold">
                    ${rate === 'weekend' ? pkg.weekend : pkg.weeknight}
                  </span>
                  <span className="text-sm text-[#9a8d80]">per guest</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#9a8d80]">{pkg.courses}</p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-[#f7f2ea]/12 pt-6">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      data-testid="plan-feature"
                      className="flex gap-2.5 text-sm leading-snug text-[#d9cfc2]"
                    >
                      <span className={promoted ? 'text-[#e8b04b]' : 'text-[#e2622a]'}>
                        <CheckMark />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#visit"
                  data-testid="plan-cta"
                  className={`mt-7 rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${
                    promoted
                      ? 'bg-[#e2622a] text-[#171310] hover:bg-[#e8b04b]'
                      : 'border border-[#f7f2ea]/25 text-[#f7f2ea] hover:border-[#e8b04b] hover:text-[#e8b04b]'
                  }`}
                >
                  {pkg.cta}
                </a>
              </article>
            )
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#9a8d80]">
          Smaller party than twelve, or a date inside two weeks? Write to Delphine at
          events@emberandrye.com and we will find you something. We hold two weeknights a month
          back for neighbourhood bookings at the Hearthside rate regardless of the day.
        </p>
      </div>
    </section>
  )
}
