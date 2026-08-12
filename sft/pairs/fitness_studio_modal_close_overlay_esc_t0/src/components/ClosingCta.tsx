import { ArrowIcon, ClockIcon, PinIcon } from './Icons'

const HOURS = [
  { days: 'Monday to Thursday', times: '5:30 am – 9:00 pm' },
  { days: 'Friday', times: '5:30 am – 8:00 pm' },
  { days: 'Saturday', times: '7:00 am – 4:00 pm' },
  { days: 'Sunday', times: '8:00 am – 4:00 pm' },
]

export function ClosingCta() {
  return (
    <section id="visit" className="relative overflow-hidden bg-[#d94a2b] text-[#faf5ee]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(239,166,60,0.55),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Ride once. Then decide everything else.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#faf5ee]/85">
            Nine pounds, forty-five minutes, a coach who sets your bike up and a room built for
            exactly this. There are three bikes left on Thursday evening and six on Saturday
            morning, and nobody will ring you afterwards to sell you anything.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#intro"
              className="inline-flex items-center gap-2 rounded-full bg-[#101826] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#faf5ee] transition hover:bg-[#1b2436]"
            >
              Book the £9 intro ride
              <ArrowIcon />
            </a>
            <a
              href="tel:+441615500419"
              className="inline-flex items-center gap-2 rounded-full border border-[#faf5ee]/45 px-8 py-4 text-sm font-bold uppercase tracking-wider transition hover:bg-[#faf5ee]/10"
            >
              Or call 0161 550 0419
            </a>
          </div>

          <h3 className="mt-12 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em]">
            <PinIcon className="h-4 w-4" />
            Finding us
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#faf5ee]/85">
            88 Hallam Fields Road, Marlowe Quarter, MQ2 4RN. The old Gazette printworks, black
            door with the press mark, eleven free bays in the yard behind.
          </p>
        </div>

        <div className="rounded-3xl border border-[#faf5ee]/25 bg-[#101826]/25 p-7 backdrop-blur-sm">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em]">
            <ClockIcon className="h-4 w-4" />
            Opening hours
          </h3>
          <dl className="mt-5 divide-y divide-[#faf5ee]/20">
            {HOURS.map((row) => (
              <div key={row.days} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-sm font-semibold">{row.days}</dt>
                <dd className="font-mono text-sm text-[#faf5ee]/85">{row.times}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs leading-relaxed text-[#faf5ee]/75">
            First class of the day is 5:45 am Monday to Friday. The recovery room closes fifteen
            minutes before the building does, and the sauna goes off at half eight.
          </p>
        </div>
      </div>
    </section>
  )
}
