export function ClosingCta() {
  return (
    <section id="book" className="relative overflow-hidden bg-[#14312c] text-[#f3e9dd]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-[-6rem] h-72 w-72 rounded-full bg-[#d9682f]/25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e2864f]">
            Booking takes about ninety seconds
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Come and see the place before you commit to anything
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#cbdcd4]">
            Book the $95 exam, or just walk in between seven and ten on a weekday and ask to look
            at a surgery. Rosalind will show you round, make you a coffee, and let you leave
            without booking a single thing. That offer is genuine and people take it up most weeks.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+15035550197"
              data-testid="closing-call"
              className="rounded-full bg-[#d9682f] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#c25a24]"
            >
              Call (503) 555 0197
            </a>
            <a
              href="mailto:desk@foundryrowdental.test"
              data-testid="closing-email"
              className="rounded-full border border-[#f3e9dd]/35 px-7 py-3.5 text-center text-sm font-semibold text-[#f3e9dd] transition hover:bg-white/10"
            >
              Email the front desk
            </a>
          </div>
          <p className="mt-5 text-sm text-[#a9c0b7]">
            Emergency? Phone rather than email — the line is answered from 6:30am and diverts to
            Dr. Ovalle on Sundays.
          </p>
        </div>

        <div className="rounded-[26px] border border-[#f3e9dd]/20 bg-white/5 p-8">
          <h3 className="font-serif text-2xl font-semibold text-white">What to bring</h3>
          <ul className="mt-6 space-y-4">
            {[
              'Your insurance card, if you have one — we check cover before you sit down.',
              'A list of any medication you take, including anything over the counter.',
              'The name of your last dentist, so we can request the old x-rays instead of retaking them.',
              'Any question you have been embarrassed to ask someone else.',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#cbdcd4]">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="none" stroke="#d9682f" strokeWidth="1.8" />
                  <path
                    d="M6 10.4l2.6 2.5L14.2 7"
                    fill="none"
                    stroke="#f3e9dd"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
