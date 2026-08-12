const HOURS = [
  { day: 'Monday to Thursday', time: '7:30 – 19:00' },
  { day: 'Friday', time: '7:30 – 16:00' },
  { day: 'Saturday', time: '8:00 – 13:00' },
  { day: 'Sunday', time: 'Emergencies only, on call' },
]

const REASONS = [
  'A checkup and clean',
  'Something hurts',
  'A chipped or broken tooth',
  'Clear aligners or straightening',
  'Implants or a missing tooth',
  'Cosmetic work — veneers or whitening',
  'I am not sure yet',
]

const FIELD =
  'mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100'
const LABEL = 'block text-sm font-medium text-stone-700'

function StreetMap() {
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" role="img" aria-labelledby="booking-map-title">
      <title id="booking-map-title">
        Copper Birch Dental sits on Halloway Street, one block east of the Rivermill tram stop
      </title>
      <rect width="320" height="180" rx="20" fill="#ecfdf5" />
      <path d="M0 118h320" stroke="#d6d3d1" strokeWidth="16" />
      <path d="M110 0v180" stroke="#e7e5e4" strokeWidth="12" />
      <path d="M236 0v180" stroke="#e7e5e4" strokeWidth="12" />
      <path d="M0 48h320" stroke="#e7e5e4" strokeWidth="10" />
      <rect x="18" y="60" width="72" height="42" rx="6" fill="#d1fae5" />
      <rect x="128" y="58" width="88" height="46" rx="6" fill="#fef3c7" />
      <rect x="252" y="62" width="52" height="40" rx="6" fill="#d1fae5" />
      <rect x="18" y="132" width="76" height="34" rx="6" fill="#e7e5e4" />
      <rect x="252" y="132" width="52" height="34" rx="6" fill="#e7e5e4" />
      <circle cx="172" cy="81" r="15" fill="#0f766e" />
      <path d="M172 74c2.4.9 3.6 2.6 3.6 5.2 0 2.3-1.1 4-2.2 4-.7 0-1-.6-1.4-.6s-.7.6-1.4.6c-1.1 0-2.2-1.7-2.2-4 0-2.6 1.2-4.3 3.6-5.2Z" fill="#fff" />
      <text x="130" y="132" fontSize="11" fill="#57534e">
        Halloway Street
      </text>
      <text x="16" y="40" fontSize="11" fill="#57534e">
        Tram stop — Rivermill
      </text>
      <circle cx="66" cy="48" r="7" fill="#f59e0b" />
    </svg>
  )
}

export function BookingSection() {
  return (
    <section id="book" className="scroll-mt-28 bg-teal-950 py-20 text-teal-50 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Book a visit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Send this and we will call you back within one working day
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-teal-100">
            No deposit, no card, no obligation to book anything on the phone. If you would rather just ask a question
            first, say so in the last box and that is exactly what the call will be.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            data-testid="booking-form"
            noValidate
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl bg-white p-8 text-stone-800 shadow-2xl shadow-black/20"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="booking-name" className={LABEL}>
                  Full name
                </label>
                <input id="booking-name" name="name" type="text" autoComplete="name" className={FIELD} />
              </div>
              <div>
                <label htmlFor="booking-email" className={LABEL}>
                  Email address
                </label>
                <input id="booking-email" name="email" type="email" autoComplete="email" className={FIELD} />
              </div>
              <div>
                <label htmlFor="booking-phone" className={LABEL}>
                  Phone number
                </label>
                <input id="booking-phone" name="phone" type="tel" autoComplete="tel" className={FIELD} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="booking-reason" className={LABEL}>
                  What brings you in?
                </label>
                <select id="booking-reason" name="reason" className={FIELD} defaultValue={REASONS[0]}>
                  {REASONS.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="booking-notes" className={LABEL}>
                  Anything we should know?
                </label>
                <textarea id="booking-notes" name="notes" rows={4} className={FIELD} />
                <p className="mt-2 text-xs text-stone-500">
                  Nervous, on medication, needing a Saturday, bringing children — all useful, none of it judged.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <input
                id="booking-reminder"
                name="reminder"
                type="checkbox"
                defaultChecked
                className="mt-1 h-4 w-4 rounded border-stone-300 text-teal-700"
              />
              <label htmlFor="booking-reminder" className="text-sm text-stone-600">
                Text me a reminder the day before my appointment
              </label>
            </div>

            <button
              type="submit"
              data-testid="booking-submit"
              className="mt-8 w-full rounded-full bg-teal-800 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-900"
            >
              Request my appointment
            </button>
            <p className="mt-4 text-center text-xs text-stone-500">
              We use these details to arrange your visit and nothing else. No marketing lists, ever.
            </p>
          </form>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl ring-1 ring-teal-800">
              <StreetMap />
            </div>
            <div className="rounded-3xl bg-teal-900/60 p-7 ring-1 ring-teal-800">
              <h3 className="text-lg font-semibold text-white">Copper Birch Dental</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal-100">
                118 Halloway Street, Rivermill — the old hardware store with the green door, one block east of the tram
                stop. Two accessible parking bays behind the building off Falk Lane.
              </p>
              <p className="mt-4 text-sm">
                <a href="tel:+15035550164" className="font-semibold text-amber-300 underline underline-offset-4">
                  (503) 555-0164
                </a>
              </p>
              <dl className="mt-6 space-y-2 border-t border-teal-800 pt-5 text-sm">
                {HOURS.map((entry) => (
                  <div key={entry.day} className="flex justify-between gap-4">
                    <dt className="text-teal-200">{entry.day}</dt>
                    <dd className="font-medium text-white">{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
