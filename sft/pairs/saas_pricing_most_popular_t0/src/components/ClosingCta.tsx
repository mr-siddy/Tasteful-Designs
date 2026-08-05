import { useState } from 'react'

const TRUCK_BANDS = ['1 truck', '2–4 trucks', '5–8 trucks', '9–20 trucks', 'More than 20 trucks']

export default function ClosingCta() {
  const [sent, setSent] = useState(false)

  return (
    <section id="walkthrough" className="bg-[#12242C] text-[#E6EEF0]">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E8813F]">Book a walkthrough</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-[2.7rem]">
            Twenty minutes, your board, your calls
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#A9C0C4]">
            We do not do a slide deck. Send us a week of your real jobs before the call and we will build your board in
            advance, then walk your dispatcher through a Tuesday morning as it would actually run.
          </p>
          <ul className="mt-8 space-y-3.5">
            {[
              'Run by someone who has dispatched trucks, not a sales engineer',
              'Your job types, your price book, your trucks on screen',
              'A written price for your shop before you hang up',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-[#D6E2E4]">
                <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 flex-none" aria-hidden="true" focusable="false">
                  <path d="M3 8.4l3 3L13 4" stroke="#E8813F" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-[#8FB0AE]">
            Prefer the phone? Call (616) 555 0142, 6am to 9pm Eastern, and ask for onboarding.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          {sent ? (
            <div data-testid="walkthrough-confirmation" className="py-10 text-center">
              <svg viewBox="0 0 48 48" className="mx-auto h-12 w-12" aria-hidden="true" focusable="false">
                <circle cx="24" cy="24" r="22" fill="#E8813F" opacity="0.2" />
                <path d="M15 24.5l6 6 12-13" stroke="#E8813F" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-5 text-xl font-bold text-white">Booked — we will call you back today</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A9C0C4]">
                An onboarding lead will reach out within two business hours to pick a time and get your week of jobs.
              </p>
            </div>
          ) : (
            <form
              data-testid="walkthrough-form"
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
              }}
              className="space-y-5"
            >
              <h3 className="text-xl font-bold text-white">Tell us about your shop</h3>
              <div>
                <label htmlFor="shop-name" className="block text-sm font-medium text-[#D6E2E4]">
                  Shop name
                </label>
                <input
                  id="shop-name"
                  name="shop-name"
                  type="text"
                  required
                  placeholder="Whitlock Heating &amp; Air"
                  className="mt-2 w-full rounded-lg border border-white/15 bg-[#0D1B22] px-4 py-3 text-sm text-white placeholder:text-[#5D7880]"
                />
              </div>
              <div>
                <label htmlFor="work-email" className="block text-sm font-medium text-[#D6E2E4]">
                  Work email
                </label>
                <input
                  id="work-email"
                  name="work-email"
                  type="email"
                  required
                  placeholder="dana@whitlockair.com"
                  className="mt-2 w-full rounded-lg border border-white/15 bg-[#0D1B22] px-4 py-3 text-sm text-white placeholder:text-[#5D7880]"
                />
              </div>
              <div>
                <label htmlFor="truck-count" className="block text-sm font-medium text-[#D6E2E4]">
                  Trucks on the road
                </label>
                <select
                  id="truck-count"
                  name="truck-count"
                  defaultValue="2–4 trucks"
                  className="mt-2 w-full rounded-lg border border-white/15 bg-[#0D1B22] px-4 py-3 text-sm text-white"
                >
                  {TRUCK_BANDS.map((band) => (
                    <option key={band} value={band}>
                      {band}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                data-testid="walkthrough-submit"
                className="w-full rounded-xl bg-[#E8813F] px-6 py-4 text-sm font-bold text-[#12242C] transition hover:bg-[#f79a5c]"
              >
                Book my walkthrough
              </button>
              <p className="text-xs leading-relaxed text-[#8FB0AE]">
                We call once, from a Grand Rapids number. No drip campaign, and we never sell your list.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
