type Service = {
  name: string
  price: string
  length: string
  blurb: string
  icon: 'tooth' | 'siren' | 'aligner' | 'crown' | 'implant' | 'child'
}

const SERVICES: Service[] = [
  {
    name: 'New patient exam & clean',
    price: 'from $189',
    length: '60 minutes',
    blurb:
      'A full charting of every tooth, gum measurements, two bitewing images and a gentle scale and polish. You leave with a written summary of what we found and what, if anything, needs doing.',
    icon: 'tooth',
  },
  {
    name: 'Same-day emergency care',
    price: 'from $145',
    length: '30 minutes',
    blurb:
      'We hold two chairs every weekday for pain, a cracked tooth or a crown that came off in a sandwich. Call before 11am and you will be seen that afternoon.',
    icon: 'siren',
  },
  {
    name: 'Clear aligners',
    price: 'from $3,400',
    length: '6–14 months',
    blurb:
      'Scanned, planned and reviewed here rather than posted off to a call centre. You see the projected result before you commit a cent, and refinements are included.',
    icon: 'aligner',
  },
  {
    name: 'Single-visit ceramic crowns',
    price: 'from $1,290',
    length: '1 appointment',
    blurb:
      'Our in-house mill cuts the crown while you wait, so there is no fortnight in a temporary and no second round of anaesthetic. Colour-matched to the tooth beside it.',
    icon: 'crown',
  },
  {
    name: 'Implants & bridges',
    price: 'from $4,200',
    length: '3–5 visits',
    blurb:
      'Planned from a low-dose 3D scan so the post lands where the bone is strongest. Dr. Oyelaran places and restores every implant himself, start to finish.',
    icon: 'implant',
  },
  {
    name: "Children's dentistry",
    price: 'from $95',
    length: '30 minutes',
    blurb:
      'First visits are a ride in the chair, a count of the teeth and a sticker. Nothing sharp, nothing rushed, and a parent in the room for as long as it helps.',
    icon: 'child',
  },
]

function ServiceIcon({ icon }: { icon: Service['icon'] }) {
  const common = {
    viewBox: '0 0 32 32',
    className: 'h-7 w-7',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (icon === 'siren') {
    return (
      <svg {...common}>
        <path d="M6 26h20" />
        <path d="M9 26v-8a7 7 0 0 1 14 0v8" />
        <path d="M16 6v3M9 9l2 2M23 9l-2 2" />
      </svg>
    )
  }
  if (icon === 'aligner') {
    return (
      <svg {...common}>
        <path d="M6 12c0-3 4-5 10-5s10 2 10 5-2 12-10 12S6 15 6 12Z" />
        <path d="M11 10v9M16 9v11M21 10v9" />
      </svg>
    )
  }
  if (icon === 'crown') {
    return (
      <svg {...common}>
        <path d="M5 22 7 9l6 5 3-7 3 7 6-5 2 13z" />
        <path d="M5 26h22" />
      </svg>
    )
  }
  if (icon === 'implant') {
    return (
      <svg {...common}>
        <path d="M16 5v8" />
        <path d="M11 13h10l-1.4 12a2 2 0 0 1-2 1.8h-3.2a2 2 0 0 1-2-1.8z" />
        <path d="M13 17h6M13.5 21h5" />
      </svg>
    )
  }
  if (icon === 'child') {
    return (
      <svg {...common}>
        <circle cx="16" cy="12" r="6" />
        <path d="M13 11.5h.01M19 11.5h.01M13.5 15c1.6 1.3 3.4 1.3 5 0" />
        <path d="M7 27c1.5-4.5 5-7 9-7s7.5 2.5 9 7" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M11 5c-3.3 0-5 2.5-5 6 0 4.3 1.6 6.4 2.4 10.3.7 3 .8 5.7 2.6 5.7 1.7 0 1.8-4.2 2.7-6.9.4-1.3 1-2 1.8-2s1.4.7 1.8 2c.9 2.7 1 6.9 2.7 6.9 1.8 0 1.9-2.7 2.6-5.7C23.4 17.4 25 15.3 25 11c0-3.5-1.7-6-5-6-1.6 0-2.3.8-2.9 1-.6.3-1.3.3-1.9 0-.6-.2-1.3-1-2.9-1" />
    </svg>
  )
}

export function ServicesGrid() {
  return (
    <section id="services" className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Six things we do well, with the price written down
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-900/70">
            We are a general practice, not a factory. If something is outside what we do properly —
            wisdom teeth under general anaesthetic, jaw surgery, orthodontics for a growing child —
            we will tell you on the day and refer you to someone in the neighbourhood we trust.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              data-testid="service-card"
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-inset ring-teal-900/10 transition hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <ServiceIcon icon={service.icon} />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.name}</h3>
              <p className="mt-1 text-sm font-semibold text-amber-700">
                {service.price} · {service.length}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-teal-900/70">
                {service.blurb}
              </p>
              <a
                href="#book"
                data-testid="service-link"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
              >
                Ask about this
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 10h11M11 6l4 4-4 4" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-3xl bg-teal-900 px-7 py-6 text-sm leading-relaxed text-teal-50">
          <span className="font-semibold text-amber-200">A note on the prices above.</span> They are
          the real starting fees we charge in 2026, not an introductory rate that expires. If your
          treatment costs more than the from-price, you will hear the number and the reason before
          we book the appointment — never on the invoice afterwards.
        </p>
      </div>
    </section>
  )
}
