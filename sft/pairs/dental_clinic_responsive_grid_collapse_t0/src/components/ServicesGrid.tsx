import type { ReactNode } from 'react'

type Service = {
  name: string
  price: string
  duration: string
  blurb: string
  includes: string[]
  icon: ReactNode
}

const SERVICES: Service[] = [
  {
    name: 'New patient exam',
    price: '$149',
    duration: '60 minutes',
    blurb:
      'A full look around, digital x-rays and a 3D scan, then a written plan with prices on it. If nothing needs doing we will tell you that and send you home.',
    includes: ['Digital x-ray series', 'Written plan with costs', 'Oral cancer screening'],
    icon: (
      <>
        <rect x="4" y="5" width="24" height="22" rx="4" fill="#1c6f6b" opacity="0.16" />
        <path d="M9 12h14M9 17h14M9 22h9" stroke="#0f4c4f" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="24" cy="22" r="4.5" fill="#c68a3e" />
      </>
    ),
  },
  {
    name: 'Cleaning & gum care',
    price: '$120',
    duration: '45–75 minutes',
    blurb:
      'Ruth and the hygiene team scale, polish and chart every pocket depth. Deeper cleanings are quoted separately and never sprung on you in the chair.',
    includes: ['Full pocket charting', 'Ultrasonic scaling', 'Fluoride varnish'],
    icon: (
      <>
        <path d="M16 4c5 0 7.5 3 7.5 7 0 5-2 6-2 11 0 3-1.5 5-3.5 5-2 0-2-3-4-3s-2 3-4 3c-2 0-3.5-2-3.5-5 0-5-2-6-2-11 0-4 2.5-7 7-7z" fill="#1c6f6b" opacity="0.18" />
        <path d="M16 4c5 0 7.5 3 7.5 7 0 5-2 6-2 11 0 3-1.5 5-3.5 5-2 0-2-3-4-3s-2 3-4 3c-2 0-3.5-2-3.5-5 0-5-2-6-2-11 0-4 2.5-7 7-7z" fill="none" stroke="#0f4c4f" strokeWidth="1.6" />
        <path d="M12 12l2.5 2.5L20 9" stroke="#c68a3e" strokeWidth="2" fill="none" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: 'Same-day crowns',
    price: '$1,290',
    duration: 'One appointment',
    blurb:
      'Scanned, designed and milled on the unit downstairs while you wait, then bonded the same afternoon. No temporary, no goopy impression, no second trip in two weeks.',
    includes: ['Chairside milling', 'Lifetime-of-tooth warranty', 'No temporary crown'],
    icon: (
      <>
        <circle cx="16" cy="16" r="11" fill="#1c6f6b" opacity="0.14" />
        <path d="M16 7l7.8 4.5v9L16 25l-7.8-4.5v-9L16 7z" fill="none" stroke="#0f4c4f" strokeWidth="1.7" />
        <circle cx="16" cy="16" r="3.5" fill="#c68a3e" />
      </>
    ),
  },
  {
    name: 'Fillings & root canals',
    price: 'from $220',
    duration: '45–90 minutes',
    blurb:
      'Tooth-coloured composite for everyday repairs and rotary endodontics for the ones that have gone quiet and sore. Both done here, not referred across town.',
    includes: ['Composite, never amalgam', 'Rubber dam isolation', 'Rotary endodontics'],
    icon: (
      <>
        <path d="M6 20c0-7 4.5-12 10-12s10 5 10 12" fill="none" stroke="#0f4c4f" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="12" y="18" width="8" height="9" rx="2.5" fill="#c68a3e" />
        <path d="M9 24h3M20 24h3" stroke="#1c6f6b" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: 'Children’s dentistry',
    price: '$95',
    duration: '30 minutes',
    blurb:
      'Dr. Braga sees kids from their first tooth. First visits are a ride in the chair, a count of the teeth and a sticker — nothing that turns into a fight at bedtime.',
    includes: ['Sealants and varnish', 'Parent stays in the room', 'Free first visit under 3'],
    icon: (
      <>
        <circle cx="16" cy="16" r="11" fill="#c68a3e" opacity="0.2" />
        <circle cx="12.5" cy="14" r="1.6" fill="#0f4c4f" />
        <circle cx="19.5" cy="14" r="1.6" fill="#0f4c4f" />
        <path d="M11 19.5c1.6 2.4 3.2 3.6 5 3.6s3.4-1.2 5-3.6" fill="none" stroke="#0f4c4f" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: 'Whitening & veneers',
    price: 'from $290',
    duration: '2 visits',
    blurb:
      'Custom take-home trays that actually fit, or hand-layered porcelain when a front tooth has been chipped since a hockey game in 2011. Shade matched in daylight.',
    includes: ['Custom-moulded trays', 'Daylight shade matching', 'Sensitivity gel included'],
    icon: (
      <>
        <path d="M16 5l2.6 6.4 6.9.5-5.3 4.4 1.7 6.7L16 19.4l-5.9 3.6 1.7-6.7-5.3-4.4 6.9-.5L16 5z" fill="#c68a3e" opacity="0.3" />
        <path d="M16 5l2.6 6.4 6.9.5-5.3 4.4 1.7 6.7L16 19.4l-5.9 3.6 1.7-6.7-5.3-4.4 6.9-.5L16 5z" fill="none" stroke="#0f4c4f" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
]

/**
 * The treatment cards. Six of them, laid out mobile-first: a single column on a
 * phone, two across from the md breakpoint and three on a laptop.
 */
export default function ServicesGrid() {
  return (
    <section id="treatments" data-testid="treatments" className="bg-[#faf5ec]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68a3e]">
            What we treat
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#0d2b2e] sm:text-4xl">
            Everything a family needs, on one street
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0d2b2e]/70">
            Six things make up almost everything we do in a week. Every price below is
            what you pay if you have no insurance at all — with insurance it comes down
            from there, and we will run the estimate before we touch anything.
          </p>
        </div>

        <div
          data-testid="services-grid"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <article
              key={service.name}
              data-testid="service-card"
              className="flex flex-col rounded-2xl border border-[#0f4c4f]/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <svg viewBox="0 0 32 32" className="h-11 w-11" aria-hidden="true">
                {service.icon}
              </svg>

              <h3 className="mt-5 font-serif text-xl font-semibold text-[#0d2b2e]">
                {service.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#1c6f6b]">
                <span data-testid="service-price">{service.price}</span>
                <span className="text-[#0d2b2e]/40"> · </span>
                {service.duration}
              </p>

              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#0d2b2e]/75">
                {service.blurb}
              </p>

              <ul className="mt-6 space-y-2 border-t border-[#0f4c4f]/10 pt-5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#0d2b2e]/70">
                    <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true">
                      <path
                        d="M3 8.4l3 3 7-7.6"
                        fill="none"
                        stroke="#c68a3e"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#0d2b2e]/60">
          Emergencies are seen the same day whenever a chair is free — call before ten
          and we will almost always find you one.
        </p>
      </div>
    </section>
  )
}
