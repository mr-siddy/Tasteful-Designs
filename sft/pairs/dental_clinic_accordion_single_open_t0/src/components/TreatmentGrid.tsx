type Treatment = {
  name: string
  price: string
  duration: string
  blurb: string
  icon: JSX.Element
}

const TREATMENTS: Treatment[] = [
  {
    name: 'Check-up and X-rays',
    price: 'from £46',
    duration: '25 minutes',
    blurb:
      'A full examination, two small X-rays if you are due them, and an oral cancer screen. You leave with a written plan and a price for anything we found.',
    icon: (
      <path
        d="M12 5c4 0 6.5 2.1 6.5 5.7 0 2.8-.9 4.9-1.6 7.9-.6 2.7-1 5.4-2.7 5.4-1.4 0-1.6-2-2.2-2s-.8 2-2.2 2c-1.7 0-2.1-2.7-2.7-5.4-.7-3-1.6-5.1-1.6-7.9C5.5 7.1 8 5 12 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'Hygienist appointment',
    price: 'from £62',
    duration: '30 or 45 minutes',
    blurb:
      'Scaling, polishing and airflow with Ijeoma or Faye, plus five minutes at the end on the two spots your brush keeps missing. Book 45 minutes if it has been over a year.',
    icon: (
      <path
        d="M6 20l3-9h6l3 9M9.5 11V6a2.5 2.5 0 0 1 5 0v5M4 20h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'White fillings',
    price: 'from £145',
    duration: '45 minutes',
    blurb:
      'Tooth-coloured composite matched to the shade of the tooth beside it, placed under rubber dam. We quote per surface, so a small repair never gets billed as a large one.',
    icon: (
      <path
        d="M4 16.5 15 5.5a2.8 2.8 0 0 1 4 4L8 20.5H4v-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'Same-day crowns',
    price: 'from £680',
    duration: 'one 2-hour visit',
    blurb:
      'Scanned, milled and fitted in our own lab off the back corridor while you wait. No impression trays, no temporary crown, no second appointment three weeks later.',
    icon: (
      <path
        d="M5 9l3.5-4h7L19 9l-7 10L5 9Zm0 0h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'Clear aligners',
    price: 'from £1,940',
    duration: '6–11 months',
    blurb:
      'A scan, a preview of the finished smile before you commit, and trays you change at home every ten days. Two retainers and a year of reviews are inside the price.',
    icon: (
      <path
        d="M4 10c2.6-2 5.3-3 8-3s5.4 1 8 3c-.6 4.6-2.3 7-4 7-1.3 0-1.6-1.6-4-1.6S9.3 17 8 17c-1.7 0-3.4-2.4-4-7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'Emergency appointment',
    price: '£75',
    duration: 'same day, 30 minutes',
    blurb:
      'One chair stays empty until three o’clock every weekday for registered patients in pain. Ring before eleven and you will almost always be seen before lunch.',
    icon: (
      <path
        d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
]

export function TreatmentGrid() {
  return (
    <section id="treatments" className="bg-[#FBF9F5]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
            What we do
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56]">
            Six things that cover almost every visit
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5A5347]">
            Between them these six appointments account for nine visits in ten at Bramble Court.
            Each card shows what it costs to start and how long we set aside, because a price with
            no time attached to it tells you almost nothing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((treatment) => (
            <article
              key={treatment.name}
              data-testid="treatment-card"
              className="flex flex-col rounded-3xl border border-[#EFE9E0] bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9F8] text-[#5B4BA8]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  {treatment.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#1C1A17]">
                {treatment.name}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6A6255]">
                {treatment.blurb}
              </p>
              <div className="mt-6 flex items-baseline justify-between border-t border-[#EFE9E0] pt-4">
                <span
                  data-testid="treatment-price"
                  className="text-lg font-semibold text-[#332A56]"
                >
                  {treatment.price}
                </span>
                <span className="text-xs uppercase tracking-[0.14em] text-[#8B8375]">
                  {treatment.duration}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#6A6255]">
          Root canal treatment, extractions, veneers, night guards and children&rsquo;s dentistry are
          all priced on the board too — the full list is in the next section.
        </p>
      </div>
    </section>
  )
}
