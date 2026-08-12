import { useState } from 'react'

type Field = 'name' | 'email' | 'guests' | 'seating'
type Draft = Record<Field | 'note', string>
type Errors = Partial<Record<Field, string>>

const EMPTY: Draft = { name: '', email: '', guests: '', seating: '', note: '' }

const SEATINGS = [
  { value: 'early', label: 'Early seating — sit at 5:30 pm' },
  { value: 'main', label: 'Main seating — sit at 7:45 pm' },
  { value: 'buyout', label: 'Full buyout — the whole room, Sundays only' },
]

function SeatingPlanArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label="Plan of the dining room showing the Long Table along the south wall">
      <rect width="320" height="180" rx="16" fill="#f1e7d6" />
      <rect x="18" y="18" width="284" height="144" rx="10" fill="none" stroke="#8a6a4a" strokeWidth="2" />
      <rect x="42" y="112" width="236" height="24" rx="6" fill="#8a6a4a" />
      <g fill="#b8451f">
        {[54, 82, 110, 138, 166, 194, 222, 250].map((x) => (
          <circle key={`b-${x}`} cx={x} cy={148} r="7" />
        ))}
        {[54, 82, 110, 138, 166, 194, 222, 250].map((x) => (
          <circle key={`t-${x}`} cx={x} cy={100} r="7" />
        ))}
      </g>
      <g fill="none" stroke="#8a6a4a" strokeWidth="2">
        <circle cx="70" cy="52" r="16" />
        <circle cx="126" cy="52" r="16" />
        <circle cx="182" cy="52" r="16" />
        <circle cx="238" cy="52" r="16" />
      </g>
      <rect x="264" y="30" width="30" height="46" rx="6" fill="#241a14" />
      <text x="42" y="98" fontSize="10" fontWeight="700" fill="#3d3128">
        THE LONG TABLE — 22 FT
      </text>
      <text x="264" y="92" fontSize="9" fontWeight="700" fill="#3d3128">
        GRILL
      </text>
    </svg>
  )
}

export default function ReserveLongTable() {
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update =
    (field: keyof Draft) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setDraft((prev) => ({ ...prev, [field]: value }))
    }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrors({})
    setSent(true)
  }

  const fieldClass = (field: Field) =>
    `w-full rounded-xl border bg-[#faf5ec] px-4 py-3 text-base text-[#1b1512] outline-none transition focus:border-[#b8451f] ${
      errors[field] ? 'border-[#b8451f]' : 'border-[#1b1512]/20'
    }`

  return (
    <section id="long-table" aria-labelledby="long-table-heading" className="bg-[#f1e7d6]">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b8451f]">Private dining</p>
          <h2 id="long-table-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Twenty-two feet of heart pine, and it is yours for the night
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5d4c3d]">
            The Long Table runs the length of the south wall, six feet off the fire. It takes parties from
            six to sixty — anything over forty and you have the room to yourselves. There is one menu, it is
            served family style, and Inés walks it out herself.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5d4c3d]">
            Send us the shape of the evening below and Odalys Prieto, who runs events, will write back
            within one business day with a menu and a hold on the date. Nothing is charged until you have
            seen both.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-[#1b1512]/10 shadow-sm">
            <SeatingPlanArt />
          </div>

          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a6a4a]">Per head</dt>
              <dd className="mt-1 text-base text-[#3d3128]">$78 for the family-style menu, $46 for the pairing</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a6a4a]">Prefer the phone?</dt>
              <dd className="mt-1 text-base text-[#3d3128]">(919) 555-0164, Wednesday to Sunday after 2 pm</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-[#1b1512]/10 bg-[#faf5ec] p-8 shadow-xl shadow-[#1b1512]/5 sm:p-10">
          {sent ? (
            <div data-testid="reserve-success" className="rounded-2xl border border-[#2f6b46]/25 bg-[#eaf4ec] p-8">
              <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#2f6b46]" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="m7.5 12.4 3 3 6-6.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-[#1b1512]">
                Your Long Table request is in
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#3d3128]">
                Odalys has it and will write back within one business day with a draft menu and a hold on the
                date. If the evening is sooner than a week out, call (919) 555-0164 and we will sort it faster.
              </p>
            </div>
          ) : (
            <form data-testid="reserve-form" noValidate onSubmit={handleSubmit}>
              <h3 className="text-2xl font-black tracking-tight">Ask about a date</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5d4c3d]">
                Four things and an optional note. We read every one of these ourselves.
              </p>

              <div className="mt-7 space-y-6">
                <div>
                  <label htmlFor="reserve-name" className="block text-sm font-bold text-[#1b1512]">
                    Full name
                  </label>
                  <input
                    id="reserve-name"
                    name="name"
                    type="text"
                    value={draft.name}
                    onChange={update('name')}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'reserve-name-error' : undefined}
                    className={`mt-2 ${fieldClass('name')}`}
                  />
                  {errors.name && (
                    <p id="reserve-name-error" data-testid="error-name" className="mt-2 text-sm font-semibold text-[#b8451f]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="reserve-email" className="block text-sm font-bold text-[#1b1512]">
                    Email address
                  </label>
                  <input
                    id="reserve-email"
                    name="email"
                    type="text"
                    value={draft.email}
                    onChange={update('email')}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'reserve-email-error' : undefined}
                    className={`mt-2 ${fieldClass('email')}`}
                  />
                  {errors.email && (
                    <p id="reserve-email-error" data-testid="error-email" className="mt-2 text-sm font-semibold text-[#b8451f]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="reserve-guests" className="block text-sm font-bold text-[#1b1512]">
                    Guests in your party
                  </label>
                  <input
                    id="reserve-guests"
                    name="guests"
                    type="text"
                    inputMode="numeric"
                    value={draft.guests}
                    onChange={update('guests')}
                    aria-invalid={errors.guests ? true : undefined}
                    aria-describedby={errors.guests ? 'reserve-guests-error' : undefined}
                    className={`mt-2 ${fieldClass('guests')}`}
                  />
                  {errors.guests && (
                    <p id="reserve-guests-error" data-testid="error-guests" className="mt-2 text-sm font-semibold text-[#b8451f]">
                      {errors.guests}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="reserve-seating" className="block text-sm font-bold text-[#1b1512]">
                    Which seating suits you
                  </label>
                  <select
                    id="reserve-seating"
                    name="seating"
                    value={draft.seating}
                    onChange={update('seating')}
                    aria-invalid={errors.seating ? true : undefined}
                    aria-describedby={errors.seating ? 'reserve-seating-error' : undefined}
                    className={`mt-2 ${fieldClass('seating')}`}
                  >
                    <option value="">Choose a seating</option>
                    {SEATINGS.map((seating) => (
                      <option key={seating.value} value={seating.value}>
                        {seating.label}
                      </option>
                    ))}
                  </select>
                  {errors.seating && (
                    <p id="reserve-seating-error" data-testid="error-seating" className="mt-2 text-sm font-semibold text-[#b8451f]">
                      {errors.seating}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="reserve-note" className="block text-sm font-bold text-[#1b1512]">
                    Anything we should know <span className="font-normal text-[#8a6a4a]">(optional)</span>
                  </label>
                  <textarea
                    id="reserve-note"
                    name="note"
                    rows={4}
                    value={draft.note}
                    onChange={update('note')}
                    className="mt-2 w-full rounded-xl border border-[#1b1512]/20 bg-[#faf5ec] px-4 py-3 text-base text-[#1b1512] outline-none transition focus:border-[#b8451f]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-[#b8451f] px-8 py-4 text-base font-bold text-[#faf5ec] transition hover:bg-[#9a3717]"
              >
                Send the request
              </button>
              <p className="mt-4 text-xs leading-relaxed text-[#8a6a4a]">
                We hold your details for the length of the booking and never pass them on. Deposits are taken
                by card two weeks out and are refundable up to seventy-two hours before the date.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
