import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type Booking = {
  guest: string
  email: string
  evening: string
  party: string
  seating: string
  note: string
}

const BLANK: Booking = {
  guest: '',
  email: '',
  evening: '',
  party: '4',
  seating: 'long',
  note: '',
}

const PARTY_SIZES = ['2', '3', '4', '5', '6', '8', '10', '12']

const SEATING = [
  { value: 'long', label: 'At the long table', phrase: 'at the long table' },
  { value: 'window', label: 'A two-top by the window', phrase: 'at the window two-top' },
  { value: 'counter', label: 'The kitchen counter', phrase: 'at the kitchen counter' },
]

const NOTE_LIMIT = 240

const HOW_IT_WORKS = [
  'Requests are read by hand every morning with coffee, in the order they arrive.',
  'We answer every one — Nino writes back herself, usually before the next evening service.',
  'Tables of nine or more become a private supra; tell us in the note and we will send the long-table sheet.',
]

export function ReserveTable() {
  const [booking, setBooking] = useState<Booking>(BLANK)
  const [sent, setSent] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setBooking((current) => ({ ...current, [name]: value }))
  }

  /** Everything a control needs to be driven by the booking above it. */
  function bind(field: keyof Booking) {
    return {
      id: `booking-${field}`,
      name: field,
      value: booking[field],
      onChange: handleChange,
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  function startOver() {
    setBooking(BLANK)
    setSent(false)
  }

  const seatingPhrase =
    SEATING.find((option) => option.value === booking.seating)?.phrase ?? 'at the long table'

  return (
    <section id="reserve" data-testid="reserve" className="bg-rose-950 py-24 text-amber-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Request a table
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Tell us who is coming and we will set the table for them
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-rose-100/85">
            We do not take bookings through a machine that fills seats by the minute. You write to
            us, we write back, and by the time you arrive we already know that one of you does not
            eat walnuts and that it is your mother&rsquo;s birthday.
          </p>

          <ul className="mt-9 space-y-4">
            {HOW_IT_WORKS.map((line) => (
              <li key={line} data-testid="reserve-note" className="flex gap-3 text-sm leading-relaxed text-rose-100/80">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0">
                  <circle cx="10" cy="10" r="9" fill="#fbbf24" opacity="0.2" />
                  <path
                    d="M6 10.5l2.6 2.6L14.4 7.3"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <svg
            viewBox="0 0 320 160"
            role="img"
            aria-label="Illustration of a laid place setting with a clay wine cup and a folded card"
            className="mt-10 w-full max-w-sm"
          >
            <rect x="0" y="0" width="320" height="160" rx="20" fill="#450a16" />
            <ellipse cx="120" cy="86" rx="62" ry="44" fill="#fdf8f1" opacity="0.95" />
            <ellipse cx="120" cy="86" rx="44" ry="30" fill="none" stroke="#e7c9a9" strokeWidth="2" />
            <path
              d="M42 56v58M42 56c-6 0-9 6-9 14s3 12 9 12M42 56c6 0 9 6 9 14s-3 12-9 12"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M198 60h18v22a9 9 0 0 1-18 0z" fill="#fbbf24" />
            <path d="M207 82v32" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M244 66c14 0 24 8 24 20s-10 20-24 20-24-8-24-20 10-20 24-20z"
              fill="#9f1239"
              stroke="#fbbf24"
              strokeWidth="2"
            />
            <path d="M244 106v14M232 120h24" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
            <path d="M96 118h48l-6 16H102z" fill="#fde68a" opacity="0.85" />
          </svg>
        </div>

        <div className="rounded-3xl bg-[#fdf8f1] p-8 text-stone-900 shadow-2xl shadow-black/30 md:p-10">
          {sent ? (
            <div
              role="status"
              data-testid="reservation-confirmation"
              className="mb-8 rounded-2xl border border-emerald-300 bg-emerald-50 p-6"
            >
              <h3 className="font-serif text-2xl font-semibold text-emerald-900">
                Your request is in, {booking.guest}.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-emerald-900/85">
                Nino will write to {booking.email} before tomorrow evening to confirm {booking.party}{' '}
                seats {seatingPhrase} on {booking.evening}.
              </p>
              {booking.note ? (
                <p
                  data-testid="confirmation-note"
                  className="mt-3 text-sm italic leading-relaxed text-emerald-900/80"
                >
                  You told the kitchen: &ldquo;{booking.note}&rdquo;
                </p>
              ) : null}
              <button
                type="button"
                onClick={startOver}
                data-testid="start-over"
                className="mt-5 rounded-full border border-emerald-700 px-5 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100"
              >
                Request another table
              </button>
            </div>
          ) : null}

          <h3 className="font-serif text-2xl font-semibold text-stone-900">
            Six lines and we will do the rest
          </h3>

          <form
            noValidate
            onSubmit={handleSubmit}
            data-testid="reservation-form"
            className="mt-6 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="booking-guest"
                  className="block text-sm font-semibold text-stone-700"
                >
                  Name for the reservation
                </label>
                <input
                  {...bind('guest')}
                  type="text"
                  autoComplete="name"
                  data-testid="field-guest"
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-rose-700 focus:ring-2 focus:ring-rose-200"
                />
              </div>
              <div>
                <label
                  htmlFor="booking-email"
                  className="block text-sm font-semibold text-stone-700"
                >
                  Email address
                </label>
                <input
                  {...bind('email')}
                  type="email"
                  autoComplete="email"
                  data-testid="field-email"
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-rose-700 focus:ring-2 focus:ring-rose-200"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="booking-evening"
                  className="block text-sm font-semibold text-stone-700"
                >
                  Which evening are you hoping for?
                </label>
                <input
                  {...bind('evening')}
                  type="text"
                  data-testid="field-evening"
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-rose-700 focus:ring-2 focus:ring-rose-200"
                />
                <p className="mt-1.5 text-xs text-stone-500">
                  Tuesday through Sunday, first seating at 5:30pm, last at 9:15pm.
                </p>
              </div>
              <div>
                <label
                  htmlFor="booking-party"
                  className="block text-sm font-semibold text-stone-700"
                >
                  How many at the table?
                </label>
                <select
                  {...bind('party')}
                  data-testid="field-party"
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-rose-700 focus:ring-2 focus:ring-rose-200"
                >
                  {PARTY_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size} guests
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-seating"
                className="block text-sm font-semibold text-stone-700"
              >
                Where would you like to sit?
              </label>
              <select
                {...bind('seating')}
                data-testid="field-seating"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-rose-700 focus:ring-2 focus:ring-rose-200"
              >
                {SEATING.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="booking-note" className="block text-sm font-semibold text-stone-700">
                Anything the kitchen should know?
              </label>
              <textarea
                {...bind('note')}
                rows={4}
                maxLength={NOTE_LIMIT}
                data-testid="field-note"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-rose-700 focus:ring-2 focus:ring-rose-200"
              />
              <p data-testid="note-count" className="mt-1.5 text-xs text-stone-500">
                {booking.note.length}/{NOTE_LIMIT} characters — allergies, birthdays, someone who
                cannot do stairs.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-rose-300 bg-rose-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-800">
                Your table so far
              </p>
              <p
                data-testid="reservation-summary"
                className="mt-2 text-sm leading-relaxed text-stone-700"
              >
                Holding {booking.party} seats {seatingPhrase} for{' '}
                {booking.guest || 'a name you have not written yet'} on{' '}
                {booking.evening || 'an evening of your choosing'}.
              </p>
            </div>

            <button
              type="submit"
              data-testid="reservation-submit"
              className="w-full rounded-full bg-rose-900 px-6 py-4 text-base font-semibold text-amber-50 shadow-lg shadow-rose-900/25 transition hover:bg-rose-800"
            >
              Send the request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
