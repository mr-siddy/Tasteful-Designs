import { useState, type FormEvent } from 'react'

const DAYS = [
  'No preference',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday (late clinic)',
  'Friday',
  'Saturday morning',
]

const fieldClass =
  'mt-2 w-full rounded-xl border border-teal-200 bg-white px-4 py-2.5 text-teal-900 placeholder:text-teal-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200'
const labelClass = 'block text-sm font-medium text-teal-900'

export function BookingForm() {
  const [requestedBy, setRequestedBy] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setRequestedBy(String(data.get('name') || '').trim())
  }

  return (
    <section id="book" className="bg-teal-50/60 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-3xl font-bold text-teal-900">Book an appointment</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-teal-700">
          Tell us how to reach you and roughly when suits. The front desk replies within one
          working day &mdash; sooner if you are in pain.
        </p>

        <form
          onSubmit={handleSubmit}
          data-testid="booking-form"
          className="mt-10 grid gap-6 rounded-3xl border border-teal-100 bg-white p-8 shadow-sm sm:grid-cols-2"
        >
          <div>
            <label htmlFor="booking-name" className={labelClass}>
              Full name
            </label>
            <input
              id="booking-name"
              name="name"
              type="text"
              required
              data-testid="booking-field"
              placeholder="Priya Raman"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="booking-email" className={labelClass}>
              Email address
            </label>
            <input
              id="booking-email"
              name="email"
              type="email"
              required
              data-testid="booking-field"
              placeholder="you@example.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="booking-phone" className={labelClass}>
              Phone number
            </label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              data-testid="booking-field"
              placeholder="07700 900123"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="booking-day" className={labelClass}>
              Preferred day
            </label>
            <select
              id="booking-day"
              name="day"
              defaultValue="No preference"
              data-testid="booking-field"
              className={fieldClass}
            >
              {DAYS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="booking-reason" className={labelClass}>
              Reason for your visit
            </label>
            <textarea
              id="booking-reason"
              name="reason"
              rows={4}
              required
              data-testid="booking-field"
              placeholder="A check-up, a chipped tooth, something that has been aching&hellip;"
              className={fieldClass}
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              data-testid="booking-submit"
              className="w-full rounded-xl bg-teal-900 px-6 py-3 font-medium text-white hover:bg-teal-800 sm:w-auto"
            >
              Request an appointment
            </button>
          </div>

          {requestedBy !== null && (
            <p
              role="status"
              data-testid="booking-confirmation"
              className="sm:col-span-2 rounded-xl bg-teal-100 px-4 py-3 text-sm text-teal-900"
            >
              Thank you{requestedBy ? `, ${requestedBy}` : ''} &mdash; your request is with the
              front desk and we will confirm within one working day.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
