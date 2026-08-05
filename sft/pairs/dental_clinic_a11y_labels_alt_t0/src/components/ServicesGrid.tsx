type Service = {
  name: string
  price: string
  length: string
  copy: string
  icon: JSX.Element
}

const SERVICES: Service[] = [
  {
    name: 'New patient check-up and clean',
    price: '$95',
    length: '60 minutes',
    copy: 'A full examination, two small X-rays, an oral cancer screen and a scale and polish, finished with a written plan you take home before anything is booked.',
    icon: (
      <path
        d="M12 3c2.4 0 3.6 1.2 5 1.2 1.9 0 3.1 1.5 3.1 3.8 0 3-1.3 5.2-2 7.4-.6 1.8-1 3-2 3-1.1 0-1.4-1.8-1.9-3.4-.3-1.2-.7-2-1.2-2s-.9.8-1.2 2c-.4 1.6-.8 3.4-1.9 3.4-1 0-1.5-1.2-2-3-.7-2.2-2-4.4-2-7.4C6 5.7 7.2 4.2 9 4.2c1.4 0 2.6-1.2 3-1.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    ),
  },
  {
    name: 'Same-week emergency care',
    price: '$140',
    length: '30 minutes',
    copy: 'A held slot every single day for registered patients in pain. Call before 4:00pm and you are seen that week; call before 10:00am and it is usually the same day.',
    icon: (
      <path
        d="M4 13h4l2-5 3 9 2.5-4H20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'Tooth-coloured fillings',
    price: 'from $210',
    length: '45 minutes',
    copy: 'Composite matched to the shade of the tooth beside it, placed under a rubber dam so the repair stays dry and lasts. No silver, no grey shadow at the gum line.',
    icon: (
      <path
        d="M6 18l9-9a2.8 2.8 0 10-4-4l-9 9v4h4zM14 6l4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'Crowns, onlays and bridges',
    price: 'from $1,180',
    length: 'two visits',
    copy: 'Scanned rather than moulded, milled by the ceramist we have used for nine years, and fitted with a colour check in daylight at the front window before it is cemented.',
    icon: (
      <path
        d="M3 16l2.5-8 4 4L12 5l2.5 7 4-4L21 16z M4 19h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'Clear aligners',
    price: 'from $2,950',
    length: '12 to 40 weeks',
    copy: 'A scan, a printed simulation of the finish line, then trays changed at home every ten days with a five-minute review each month, most of them booked before work.',
    icon: (
      <path
        d="M5 9c2-2.5 4.3-3.5 7-3.5S17 6.5 19 9c-1.4 5-3.4 8-7 8s-5.6-3-7-8z M8.5 8.6v7.2M15.5 8.6v7.2M12 8v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    name: "Children's first visit",
    price: 'no charge under six',
    length: '30 minutes',
    copy: 'On the children’s floor, with its own waiting room, low chairs and a tour of the buttons before anything is counted. Dr. Theo Marchetti sees every child himself.',
    icon: (
      <path
        d="M12 4.5a4 4 0 110 8 4 4 0 010-8z M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    ),
  },
]

export function ServicesGrid() {
  return (
    <section id="services" data-testid="services" className="bg-[#f6fafb]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2fb99b]">
            Treatments and prices
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Every price on this page is the price you are quoted at the desk
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0b2d45]/75">
            Nothing starts until you have a written plan with a number on it. If a treatment turns
            out to need more time in the chair than we thought, we tell you before we book it, not
            after it is done.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              data-testid="service-card"
              className="flex flex-col rounded-3xl border border-[#0b2d45]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf4f5] text-[#0b2d45]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
                  {service.icon}
                </svg>
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#0b2d45]/70">
                {service.copy}
              </p>
              <div className="mt-6 flex items-baseline justify-between border-t border-[#0b2d45]/10 pt-4">
                <span className="font-serif text-2xl font-semibold text-[#0b2d45]">
                  {service.price}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0b2d45]/50">
                  {service.length}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-dashed border-[#2fb99b]/50 bg-white p-6 text-sm leading-relaxed text-[#0b2d45]/75">
          <strong className="font-semibold text-[#0b2d45]">Not sure what you need?</strong> Book the
          check-up. It is the cheapest appointment we offer and it is the only honest way to answer
          the question. Roughly one in three new patients leaves with nothing booked beyond a clean.
        </p>
      </div>
    </section>
  )
}
