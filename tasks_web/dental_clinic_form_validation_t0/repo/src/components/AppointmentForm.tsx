import { useState, type FormEvent } from 'react'

type Values = {
  name: string
  email: string
  phone: string
  service: string
  time: string
  notes: string
}

type FieldName = 'name' | 'email' | 'phone' | 'service'
type Errors = Partial<Record<FieldName, string>>

const EMPTY: Values = { name: '', email: '', phone: '', service: '', time: '', notes: '' }

const SERVICES = [
  'New patient exam and clean',
  'Toothache or something broken',
  'Clear aligners consultation',
  'Crown, filling or repair',
  'Implant consultation',
  "Child's first visit",
]

const TIMES = [
  'Weekday mornings',
  'Weekday afternoons',
  'After 4pm',
  'Saturday (fortnightly)',
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: Values): Errors {
  const found: Errors = {}

  if (!values.name.trim()) {
    found.name = 'Please tell us who the appointment is for.'
  }

  if (!values.email.trim()) {
    found.email = 'We send every confirmation in writing, so we need an email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    found.email = 'That email address looks incomplete — check it for a typo.'
  }

  if (!values.phone.trim()) {
    found.phone = 'A phone number lets the front desk reach you if the schedule moves.'
  } else if (values.phone.replace(/\D/g, '').length < 10) {
    found.phone = 'Please enter a full 10-digit phone number.'
  }

  if (!values.service) {
    found.service = 'Choose a reason so we book the right amount of chair time.'
  }

  return found
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p
      id={id}
      role="alert"
      data-testid="field-error"
      className="mt-2 flex items-start gap-2 text-sm font-medium text-rose-700"
    >
      <svg
        viewBox="0 0 20 20"
        className="mt-0.5 h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v5M10 14h.01" />
      </svg>
      {message}
    </p>
  )
}

const fieldClass =
  'mt-2 w-full rounded-2xl border border-teal-900/15 bg-white px-4 py-3 text-base text-teal-950 shadow-sm outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/15'
const labelClass = 'block text-sm font-semibold text-teal-900'

export function AppointmentForm() {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [attempted, setAttempted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function update(field: keyof Values, value: string) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (attempted) setErrors(validate(next))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate(values)
    setAttempted(true)
    setErrors(found)
    setSubmitted(true)
  }

  function startOver() {
    setValues(EMPTY)
    setErrors({})
    setAttempted(false)
    setSubmitted(false)
  }

  const firstName = values.name.trim().split(/\s+/)[0]

  return (
    <section id="book" className="bg-teal-900 text-stone-50">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Request an appointment
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tell us what you need and we will call you back
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-50/80">
            This form reaches the front desk, not a booking robot. Joel reads every request the
            morning it arrives and rings you to lock in a time that suits — usually within one
            business day, and always with the fee confirmed before you hang up.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] bg-stone-50 p-7 text-teal-950 shadow-2xl shadow-teal-950/30 sm:p-9">
            {submitted ? (
              <div data-testid="booking-success" role="status" className="py-6 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12.5 4.5 4.5L19 7" />
                  </svg>
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  Thanks, {firstName} — your request is with the front desk.
                </h3>
                <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-teal-900/70">
                  We answer requests in the order they arrive and confirm every booking by phone
                  within one business day. If your tooth starts hurting before then, ring us on
                  (206) 555-0142 and we will move you up the list.
                </p>
                <dl className="mx-auto mt-7 grid max-w-md gap-3 rounded-2xl bg-stone-100 p-5 text-left text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold text-teal-900">Visit type</dt>
                    <dd className="text-teal-900/70">{values.service}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold text-teal-900">Preferred time</dt>
                    <dd className="text-teal-900/70">{values.time || 'Whatever you have first'}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold text-teal-900">We will call</dt>
                    <dd className="text-teal-900/70">{values.phone}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={startOver}
                  data-testid="booking-reset"
                  className="mt-7 rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-teal-700"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="booking-form" noValidate>
                <h3 className="text-xl font-semibold tracking-tight">Your details</h3>
                <p className="mt-1 text-sm text-teal-900/60">
                  Six quick questions. Nothing is shared outside the practice.
                </p>

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="booking-name" className={labelClass}>
                      Full name
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      data-testid="booking-name"
                      className={fieldClass}
                      value={values.name}
                      onChange={(event) => update('name', event.target.value)}
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'booking-name-error' : undefined}
                    />
                    <FieldError id="booking-name-error" message={errors.name} />
                  </div>

                  <div>
                    <label htmlFor="booking-email" className={labelClass}>
                      Email address
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      data-testid="booking-email"
                      className={fieldClass}
                      value={values.email}
                      onChange={(event) => update('email', event.target.value)}
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'booking-email-error' : undefined}
                    />
                    <FieldError id="booking-email-error" message={errors.email} />
                  </div>

                  <div>
                    <label htmlFor="booking-phone" className={labelClass}>
                      Phone number
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      data-testid="booking-phone"
                      className={fieldClass}
                      value={values.phone}
                      onChange={(event) => update('phone', event.target.value)}
                      aria-required="true"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                    />
                    <FieldError id="booking-phone-error" message={errors.phone} />
                  </div>

                  <div>
                    <label htmlFor="booking-service" className={labelClass}>
                      What is this visit for?
                    </label>
                    <select
                      id="booking-service"
                      name="service"
                      data-testid="booking-service"
                      className={fieldClass}
                      value={values.service}
                      onChange={(event) => update('service', event.target.value)}
                      aria-required="true"
                      aria-invalid={errors.service ? 'true' : 'false'}
                      aria-describedby={errors.service ? 'booking-service-error' : undefined}
                    >
                      <option value="">Choose a reason</option>
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <FieldError id="booking-service-error" message={errors.service} />
                  </div>

                  <div>
                    <label htmlFor="booking-time" className={labelClass}>
                      Preferred time of day
                    </label>
                    <select
                      id="booking-time"
                      name="time"
                      data-testid="booking-time"
                      className={fieldClass}
                      value={values.time}
                      onChange={(event) => update('time', event.target.value)}
                    >
                      <option value="">Whatever you have first</option>
                      {TIMES.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="booking-notes" className={labelClass}>
                      Anything we should know?
                    </label>
                    <textarea
                      id="booking-notes"
                      name="notes"
                      rows={4}
                      data-testid="booking-notes"
                      className={fieldClass}
                      value={values.notes}
                      onChange={(event) => update('notes', event.target.value)}
                    />
                    <p className="mt-2 text-sm text-teal-900/60">
                      Nervous, running late from work, bringing two children, mid-treatment
                      somewhere else — all useful, none of it judged.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  data-testid="booking-submit"
                  className="mt-8 w-full rounded-full bg-amber-400 px-7 py-4 text-base font-semibold text-teal-950 shadow-lg shadow-teal-950/10 transition hover:bg-amber-300"
                >
                  Send my request
                </button>
                <p className="mt-4 text-center text-xs text-teal-900/60">
                  Sending this does not book a chair yet — we call you to agree the time first.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-teal-800/60 p-7 ring-1 ring-inset ring-stone-50/15">
              <h3 className="text-lg font-semibold tracking-tight">Opening hours</h3>
              <dl className="mt-4 space-y-2 text-sm text-teal-50/85">
                <div className="flex justify-between gap-4">
                  <dt>Monday to Thursday</dt>
                  <dd className="font-semibold text-stone-50">7:30am – 6:00pm</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Friday</dt>
                  <dd className="font-semibold text-stone-50">8:00am – 4:00pm</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Saturday</dt>
                  <dd className="font-semibold text-stone-50">9:00am – 2:00pm</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sunday</dt>
                  <dd className="font-semibold text-stone-50">Closed</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[2rem] bg-teal-800/60 p-7 ring-1 ring-inset ring-stone-50/15">
              <h3 className="text-lg font-semibold tracking-tight">Where to find us</h3>
              <p className="mt-3 text-sm leading-relaxed text-teal-50/85">
                22 Alder Court, Kestrel Park. Ground floor, the teal door beside the bakery. Two
                accessible parks at the rear off Sedge Lane, and the 14 bus stops at the corner.
              </p>
              <a
                href="tel:+12065550142"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200"
              >
                Call (206) 555-0142
              </a>
            </div>

            <div className="rounded-[2rem] bg-teal-800/60 p-7 ring-1 ring-inset ring-stone-50/15">
              <h3 className="text-lg font-semibold tracking-tight">Bring with you</h3>
              <ul className="mt-4 space-y-3 text-sm text-teal-50/85">
                {[
                  'Your health fund card, if you have one',
                  'A list of any medication you take',
                  'Recent images from another practice',
                  'A support person, if that helps you relax',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m4 10.5 4 4 8-9" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
