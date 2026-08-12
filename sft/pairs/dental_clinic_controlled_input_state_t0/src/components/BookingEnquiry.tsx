import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { CheckIcon, ClockIcon, PhoneIcon, PinIcon } from './Icons'

type Enquiry = {
  name: string
  email: string
  phone: string
  treatment: string
  preferredTime: string
  notes: string
}

const EMPTY_ENQUIRY: Enquiry = {
  name: '',
  email: '',
  phone: '',
  treatment: '',
  preferredTime: '',
  notes: '',
}

const TREATMENT_OPTIONS = [
  'Checkup and clean',
  'Hygienist appointment',
  'White fillings',
  'Same-day crown',
  'Clear aligners',
  'Single-tooth implant',
  'Something is hurting',
]

const TIME_OPTIONS = [
  'Weekday mornings',
  'Weekday afternoons',
  'Late chairs on Thursday',
  'Saturday, twice a month',
]

const NOTES_LIMIT = 300

const OPENING_HOURS = [
  { day: 'Monday to Wednesday', hours: '8.00am — 5.30pm' },
  { day: 'Thursday', hours: '8.00am — 7.00pm' },
  { day: 'Friday', hours: '8.00am — 4.00pm' },
  { day: 'Saturday', hours: '9.00am — 1.00pm, alternate weeks' },
]

export default function BookingEnquiry() {
  const [enquiry, setEnquiry] = useState<Enquiry>({ ...EMPTY_ENQUIRY })
  const [confirmation, setConfirmation] = useState<Enquiry | null>(null)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target
    setEnquiry((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setConfirmation(enquiry)
    setEnquiry({ ...EMPTY_ENQUIRY })
  }

  const named = enquiry.name.trim()

  return (
    <section id="book" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2704a]">
            Booking
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#152046] sm:text-4xl">
            Ask us for a time
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#1f2a4d]/75">
            Tell us who you are and roughly when suits, and Marta on the front desk will come
            back with two or three real slots the same working day. This is a request, not a
            booking — nothing is confirmed until you have replied to say the time works.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-[#152046]/10 bg-[#faf6f0] p-7 shadow-sm sm:p-9">
            {confirmation ? (
              <div
                role="status"
                data-testid="enquiry-confirmation"
                className="mb-8 rounded-2xl border border-[#2b3a7a]/20 bg-white p-6"
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[#152046]">
                  <CheckIcon className="h-5 w-5 text-[#f2704a]" />
                  Thank you, {confirmation.name.trim() || 'and welcome'} — that is with the front
                  desk.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1f2a4d]/80">
                  We have you down for{' '}
                  <strong className="font-semibold text-[#152046]">
                    {confirmation.treatment || 'a general appointment'}
                  </strong>
                  , {confirmation.preferredTime || 'any time that suits you'}. Marta will reply to{' '}
                  <strong className="font-semibold text-[#152046]">
                    {confirmation.email || 'the address you gave us'}
                  </strong>{' '}
                  before we close today.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} noValidate aria-label="Appointment request">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="enquiry-name"
                    className="block text-sm font-semibold text-[#152046]"
                  >
                    Full name
                  </label>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    data-testid="enquiry-name"
                    value={enquiry.name}
                    onChange={handleChange}
                    placeholder="The name we should call you"
                    className="mt-2 w-full rounded-xl border border-[#152046]/15 bg-white px-4 py-3 text-sm text-[#152046] outline-none transition focus:border-[#2b3a7a] focus:ring-2 focus:ring-[#2b3a7a]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-email"
                    className="block text-sm font-semibold text-[#152046]"
                  >
                    Email
                  </label>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    data-testid="enquiry-email"
                    value={enquiry.email}
                    onChange={handleChange}
                    placeholder="Where we should reply"
                    className="mt-2 w-full rounded-xl border border-[#152046]/15 bg-white px-4 py-3 text-sm text-[#152046] outline-none transition focus:border-[#2b3a7a] focus:ring-2 focus:ring-[#2b3a7a]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="block text-sm font-semibold text-[#152046]"
                  >
                    Phone
                  </label>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    data-testid="enquiry-phone"
                    value={enquiry.phone}
                    onChange={handleChange}
                    placeholder="Only if you would rather we called"
                    className="mt-2 w-full rounded-xl border border-[#152046]/15 bg-white px-4 py-3 text-sm text-[#152046] outline-none transition focus:border-[#2b3a7a] focus:ring-2 focus:ring-[#2b3a7a]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-treatment"
                    className="block text-sm font-semibold text-[#152046]"
                  >
                    What do you need?
                  </label>
                  <select
                    id="enquiry-treatment"
                    name="treatment"
                    data-testid="enquiry-treatment"
                    value={enquiry.treatment}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#152046]/15 bg-white px-4 py-3 text-sm text-[#152046] outline-none transition focus:border-[#2b3a7a] focus:ring-2 focus:ring-[#2b3a7a]/20"
                  >
                    <option value="">Not sure yet</option>
                    {TREATMENT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-time"
                    className="block text-sm font-semibold text-[#152046]"
                  >
                    When suits you?
                  </label>
                  <select
                    id="enquiry-time"
                    name="preferredTime"
                    data-testid="enquiry-time"
                    value={enquiry.preferredTime}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#152046]/15 bg-white px-4 py-3 text-sm text-[#152046] outline-none transition focus:border-[#2b3a7a] focus:ring-2 focus:ring-[#2b3a7a]/20"
                  >
                    <option value="">Any time you have free</option>
                    {TIME_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="enquiry-notes"
                    className="block text-sm font-semibold text-[#152046]"
                  >
                    Anything we should know first?
                  </label>
                  <textarea
                    id="enquiry-notes"
                    name="notes"
                    rows={4}
                    maxLength={NOTES_LIMIT}
                    data-testid="enquiry-notes"
                    value={enquiry.notes}
                    onChange={handleChange}
                    placeholder="Nerves, a tooth that has been aching, a plan from another practice — all useful."
                    className="mt-2 w-full rounded-xl border border-[#152046]/15 bg-white px-4 py-3 text-sm leading-relaxed text-[#152046] outline-none transition focus:border-[#2b3a7a] focus:ring-2 focus:ring-[#2b3a7a]/20"
                  />
                  <p
                    data-testid="enquiry-notes-count"
                    className="mt-2 text-right text-xs text-[#1f2a4d]/55"
                  >
                    {enquiry.notes.length} of {NOTES_LIMIT} characters
                  </p>
                </div>
              </div>

              <p
                data-testid="enquiry-summary"
                className="mt-6 rounded-2xl bg-white px-5 py-4 text-sm leading-relaxed text-[#1f2a4d]/80"
              >
                {named
                  ? `Thanks ${named} — we will reply the same working day.`
                  : 'Fill in your name and we will address the reply to you properly.'}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  data-testid="enquiry-submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f2704a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f2704a]/25 transition hover:bg-[#dd5a35]"
                >
                  Send the request
                </button>
                <p className="text-xs leading-relaxed text-[#1f2a4d]/60">
                  We keep enquiries for ninety days and never pass them to anyone else.
                </p>
              </div>
            </form>
          </div>

          <aside className="rounded-3xl border border-[#152046]/10 bg-[#f6eee4] p-7 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight text-[#152046]">
              Or just come and find us
            </h3>

            <svg
              viewBox="0 0 320 180"
              className="mt-5 h-auto w-full rounded-2xl border border-[#152046]/10"
              role="img"
              aria-label="Simplified street map showing Lantern Lane between Kelso Park and the tram stop"
            >
              <rect width="320" height="180" fill="#efe4d4" />
              <rect x="0" y="0" width="120" height="88" fill="#dcead8" />
              <path d="M0 96h320M132 0v180M0 140h320" stroke="#fff" strokeWidth="12" />
              <path d="M0 96h320M132 0v180M0 140h320" stroke="#e3cfb2" strokeWidth="2" />
              <text x="12" y="46" fill="#6f7c53" fontSize="12" fontFamily="sans-serif">Kelso Park</text>
              <text x="146" y="88" fill="#8a7a63" fontSize="11" fontFamily="sans-serif">Lantern Lane</text>
              <text x="14" y="134" fill="#8a7a63" fontSize="11" fontFamily="sans-serif">Fenwick Road</text>
              <circle cx="196" cy="96" r="12" fill="#f2704a" />
              <circle cx="196" cy="96" r="4.5" fill="#fff" />
              <rect x="252" y="130" width="20" height="20" rx="5" fill="#2b3a7a" />
              <text x="242" y="166" fill="#2b3a7a" fontSize="10" fontFamily="sans-serif">Tram · 4 min</text>
            </svg>

            <ul className="mt-6 space-y-4 text-sm text-[#1f2a4d]/80">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#f2704a]" />
                <span>
                  42 Lantern Lane, Kelso Park.
                  <br />
                  The old lamp-works, green door beside the bakery.
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#f2704a]" />
                <span>
                  <a href="tel:+15550142118" className="font-semibold text-[#152046]">
                    (555) 014-2118
                  </a>
                  <br />
                  Answered by a person, 8am to close.
                </span>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#f2704a]" />
                <span>Free parking for patients in the yard behind the building.</span>
              </li>
            </ul>

            <dl className="mt-7 space-y-2 border-t border-[#152046]/10 pt-6 text-sm">
              {OPENING_HOURS.map(({ day, hours }) => (
                <div key={day} className="flex justify-between gap-4">
                  <dt className="text-[#1f2a4d]/70">{day}</dt>
                  <dd className="text-right font-medium text-[#152046]">{hours}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
