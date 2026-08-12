const HOURS = [
  { day: 'Monday', time: '8:00 – 5:00' },
  { day: 'Tuesday', time: '8:00 – 7:30' },
  { day: 'Wednesday', time: '8:00 – 5:00' },
  { day: 'Thursday', time: '8:00 – 7:30' },
  { day: 'Friday', time: '8:00 – 2:00' },
  { day: 'Saturday', time: 'Emergencies only' },
]

/** Final conversion band: the ask, the hours, the address, the phone. */
export default function ClosingCta() {
  return (
    <section
      id="book"
      data-testid="closing-cta"
      className="relative overflow-hidden bg-gradient-to-br from-[#134e4a] via-[#0f4c4f] to-[#0d2b2e] text-[#faf5ec]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#c68a3e]/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Book the first visit and we will take it from there
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#f2e9da]/85">
            One hundred and forty-nine dollars for the exam, the x-rays, the scan and a
            written plan you get to keep. New patients are usually seen within nine days,
            and same-day emergency chairs open at eight every weekday morning.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="tel:+18025550142"
              data-testid="closing-phone"
              className="rounded-full bg-[#c68a3e] px-7 py-3.5 text-base font-semibold text-[#0d2b2e] transition-transform hover:-translate-y-0.5"
            >
              Call (802) 555 0142
            </a>
            <a
              href="#treatments"
              data-testid="closing-secondary"
              className="rounded-full border border-[#faf5ec]/40 px-7 py-3.5 text-base font-semibold transition-colors hover:bg-[#faf5ec]/10"
            >
              Read the price list again
            </a>
          </div>

          <address className="mt-10 not-italic text-[15px] leading-relaxed text-[#f2e9da]/75">
            Quarry Hill Dental
            <br />
            218 Water Street, Burlington, Vermont 05401
            <br />
            Free lot behind the building, entered from the alley by the co-op
          </address>
        </div>

        <div className="rounded-3xl border border-[#faf5ec]/15 bg-[#faf5ec]/5 p-8">
          <h3 className="font-serif text-xl font-semibold">Opening hours</h3>
          <dl className="mt-6 space-y-3">
            {HOURS.map((entry) => (
              <div
                key={entry.day}
                data-testid="hours-row"
                className="flex items-baseline justify-between gap-4 border-b border-[#faf5ec]/10 pb-3 text-[15px]"
              >
                <dt className="text-[#f2e9da]/80">{entry.day}</dt>
                <dd className="font-medium">{entry.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-[#f2e9da]/70">
            Late chairs on Tuesday and Thursday exist so nobody has to take a half day off
            work to get a filling. They book out about three weeks ahead.
          </p>
        </div>
      </div>
    </section>
  )
}
