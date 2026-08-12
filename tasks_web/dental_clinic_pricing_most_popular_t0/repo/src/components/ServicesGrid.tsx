type Service = {
  name: string
  price: string
  blurb: string
  detail: string
  icon: 'tooth' | 'sparkle' | 'crown' | 'align' | 'shield' | 'siren'
}

const SERVICES: Service[] = [
  {
    name: 'Cleaning and exam',
    price: 'from $148',
    blurb:
      'Forty-five minutes with the same hygienist every time, hand scaling before ultrasonic, and photographs so you can see what we are describing.',
    detail: 'Includes bitewing x-rays once a year',
    icon: 'sparkle',
  },
  {
    name: 'Fillings and repairs',
    price: 'from $215',
    blurb:
      'Tooth-coloured composite matched to the shade beside it, placed in layers and polished flat so floss does not shred on the edge.',
    detail: 'Two-year repair guarantee in writing',
    icon: 'tooth',
  },
  {
    name: 'Same-day crowns',
    price: 'from $1,090',
    blurb:
      'Scanned, designed and milled in our own lab room while you wait, so there is no temporary crown and no second appointment three weeks later.',
    detail: 'In and out in about two and a half hours',
    icon: 'crown',
  },
  {
    name: 'Clear aligners',
    price: 'from $3,400',
    blurb:
      'A full scan, a printed model of where your bite ends up, and a flat quote for the whole course before you decide anything.',
    detail: 'Payment plans over 12 or 18 months',
    icon: 'align',
  },
  {
    name: 'Gum health therapy',
    price: 'from $320',
    blurb:
      'Deep cleaning under local anaesthetic, split across two visits so one side of your mouth is always comfortable enough to eat with.',
    detail: 'Three-month maintenance recall included',
    icon: 'shield',
  },
  {
    name: 'Emergency visits',
    price: 'from $95',
    blurb:
      'Two slots held open every weekday morning for pain, a lost filling or a broken front tooth, and a real person answers the phone at 7am.',
    detail: 'Members get the slot at no extra charge',
    icon: 'siren',
  },
]

function ServiceIcon({ icon }: { icon: Service['icon'] }) {
  const shapes: Record<Service['icon'], JSX.Element> = {
    tooth: (
      <path
        d="M16 7c-4 0-6.4 2.2-6.4 6 0 3 .9 5.3 1.7 7.8.7 2.3 1.2 4.7 2.5 4.7 1.1 0 1.3-1.9 2.2-1.9s1 1.9 2.2 1.9c1.3 0 1.8-2.4 2.5-4.7.8-2.5 1.7-4.8 1.7-7.8 0-3.8-2.4-6-6.4-6z"
        fill="currentColor"
      />
    ),
    sparkle: (
      <path
        d="M16 6l2.6 6.6L25 15l-6.4 2.4L16 24l-2.6-6.6L7 15l6.4-2.4z"
        fill="currentColor"
      />
    ),
    crown: (
      <path d="M6 22l2-13 5 5 3-7 3 7 5-5 2 13z" fill="currentColor" />
    ),
    align: (
      <g fill="currentColor">
        <rect x="6" y="9" width="20" height="5" rx="2.5" />
        <rect x="9" y="18" width="14" height="5" rx="2.5" opacity="0.6" />
      </g>
    ),
    shield: (
      <path d="M16 5l9 3.4V16c0 5.8-3.8 9.6-9 10.8C10.8 25.6 7 21.8 7 16V8.4z" fill="currentColor" />
    ),
    siren: (
      <g fill="currentColor">
        <path d="M16 6a7 7 0 0 1 7 7v6H9v-6a7 7 0 0 1 7-7z" />
        <rect x="7" y="21" width="18" height="4" rx="2" opacity="0.6" />
      </g>
    ),
  }

  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-[#0F3B36]" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#DCEDE7" />
      {shapes[icon]}
    </svg>
  )
}

export function ServicesGrid() {
  return (
    <section id="services" className="bg-[#FBF8F3]" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C2557E]">
            What we do here
          </p>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#0F3B36] sm:text-4xl"
          >
            Six things, done properly, with the price on the wall
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#14201E]/70">
            We are a general practice, not a specialist referral machine. Almost everything a
            household needs happens in these two operatories, and the number beside each one is
            what it actually costs before insurance or a membership discount is applied.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              data-testid="service-card"
              className="flex h-full flex-col rounded-3xl border border-[#0F3B36]/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-[#0F3B36]/10"
            >
              <ServiceIcon icon={service.icon} />
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#0F3B36]">{service.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[#C2557E]">{service.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#14201E]/70">{service.blurb}</p>
              <p className="mt-5 border-t border-[#0F3B36]/10 pt-4 text-xs uppercase tracking-[0.12em] text-[#14201E]/50">
                {service.detail}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-dashed border-[#0F3B36]/25 bg-[#F3EDE4] px-6 py-5 text-sm leading-relaxed text-[#14201E]/75">
          Anything outside this list — wisdom teeth under general anaesthetic, implants that need a
          graft, orthodontics for a child still growing — we refer to three practices within a mile
          that we would send our own families to, and we do not take a referral fee for it.
        </p>
      </div>
    </section>
  )
}
