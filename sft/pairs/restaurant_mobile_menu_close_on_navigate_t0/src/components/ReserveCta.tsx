import { useState } from 'react'
import { ArrowIcon, PhoneIcon } from './Icons'

export default function ReserveCta() {
  const [sent, setSent] = useState(false)

  return (
    <section id="reserve" className="relative overflow-hidden bg-[#4C6B54] text-[#F7F1E8]">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(50% 60% at 85% 25%, rgba(224,139,79,0.5) 0%, rgba(76,107,84,0) 70%), linear-gradient(180deg, rgba(18,38,31,0.35) 0%, rgba(18,38,31,0) 45%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#F3C98B]">Reservations</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Come sit by the fire
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F7F1E8]/85">
            Tables open thirty days ahead at 9am Pacific and the counter goes fast on Fridays.
            Send us a request below and the front-of-house team will confirm by email within one
            business day — or call and we will sort it out in ninety seconds.
          </p>
          <a
            href="tel:+12065550142"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#F7F1E8]/35 px-6 py-3 text-sm font-semibold transition-colors hover:border-[#F3C98B] hover:text-[#F3C98B]"
          >
            <PhoneIcon className="h-4 w-4" />
            (206) 555-0142
          </a>
        </div>

        <form
          className="rounded-[1.75rem] border border-[#F7F1E8]/20 bg-[#12261F]/45 p-8 backdrop-blur"
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
          }}
        >
          <h3 className="font-serif text-2xl">Request a table</h3>
          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="reserve-name" className="block text-xs uppercase tracking-[0.18em] text-[#F3C98B]">
                Name on the booking
              </label>
              <input
                id="reserve-name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-[#F7F1E8]/25 bg-[#F7F1E8]/10 px-4 py-3 text-sm text-[#F7F1E8] outline-none focus:border-[#F3C98B]"
              />
            </div>
            <div>
              <label htmlFor="reserve-email" className="block text-xs uppercase tracking-[0.18em] text-[#F3C98B]">
                Email
              </label>
              <input
                id="reserve-email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-[#F7F1E8]/25 bg-[#F7F1E8]/10 px-4 py-3 text-sm text-[#F7F1E8] outline-none focus:border-[#F3C98B]"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="reserve-date" className="block text-xs uppercase tracking-[0.18em] text-[#F3C98B]">
                  Evening
                </label>
                <input
                  id="reserve-date"
                  name="date"
                  type="date"
                  className="mt-2 w-full rounded-xl border border-[#F7F1E8]/25 bg-[#F7F1E8]/10 px-4 py-3 text-sm text-[#F7F1E8] outline-none focus:border-[#F3C98B]"
                />
              </div>
              <div>
                <label htmlFor="reserve-party" className="block text-xs uppercase tracking-[0.18em] text-[#F3C98B]">
                  Party size
                </label>
                <select
                  id="reserve-party"
                  name="party"
                  defaultValue="2"
                  className="mt-2 w-full rounded-xl border border-[#F7F1E8]/25 bg-[#F7F1E8]/10 px-4 py-3 text-sm text-[#F7F1E8] outline-none focus:border-[#F3C98B]"
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="reserve-notes" className="block text-xs uppercase tracking-[0.18em] text-[#F3C98B]">
                Anything we should know
              </label>
              <textarea
                id="reserve-notes"
                name="notes"
                rows={3}
                className="mt-2 w-full rounded-xl border border-[#F7F1E8]/25 bg-[#F7F1E8]/10 px-4 py-3 text-sm text-[#F7F1E8] outline-none focus:border-[#F3C98B]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C4653A] px-6 py-3.5 text-sm font-semibold text-[#F7F1E8] transition-colors hover:bg-[#E08B4F]"
          >
            Send the request
            <ArrowIcon />
          </button>
          {sent && (
            <p className="mt-4 text-sm text-[#F3C98B]" data-testid="reserve-confirmation">
              Thank you — we have your request and will confirm by email within one business day.
            </p>
          )}
          <p className="mt-4 text-xs leading-relaxed text-[#F7F1E8]/60">
            Parties of six or more, please call. We hold the bar and the counter for walk-ins every
            night from 5pm.
          </p>
        </form>
      </div>
    </section>
  )
}
