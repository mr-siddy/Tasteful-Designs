import { useState } from 'react'

type Field = {
  id: string
  label: string
  hint?: string
  kind: 'text' | 'select' | 'textarea' | 'checkbox'
  type?: string
  placeholder?: string
  options?: string[]
}

const FIELDS: Field[] = [
  { id: 'guest-name', label: 'Full name', kind: 'text', type: 'text', placeholder: 'Ruth Halloran' },
  {
    id: 'guest-email',
    label: 'Email address',
    kind: 'text',
    type: 'email',
    placeholder: 'ruth@northsound.org',
    hint: 'We confirm by email, usually the same evening.',
  },
  { id: 'guest-phone', label: 'Phone number', kind: 'text', type: 'tel', placeholder: '(978) 555 0142' },
  {
    id: 'party-size',
    label: 'Party size',
    kind: 'select',
    options: ['2 guests', '3 guests', '4 guests', '6 guests', '8 guests'],
    hint: 'Nine or more is a cellar booking — say so in the note.',
  },
  {
    id: 'seating-area',
    label: 'Seating area',
    kind: 'select',
    options: ['No preference', 'The Cutting Shed', 'The Oyster Counter', 'The Harbour Terrace', 'The Cellar'],
  },
  {
    id: 'guest-note',
    label: 'Anything we should know',
    kind: 'textarea',
    placeholder: 'Allergies, an anniversary, a quiet table, a train to catch.',
  },
  { id: 'friday-board', label: 'Send me the Friday board', kind: 'checkbox' },
]

const INITIAL: Record<string, string | boolean> = {
  'guest-name': '',
  'guest-email': '',
  'guest-phone': '',
  'party-size': '2 guests',
  'seating-area': 'No preference',
  'guest-note': '',
  'friday-board': false,
}

export default function ReservationForm() {
  const [values, setValues] = useState<Record<string, string | boolean>>(INITIAL)
  const [sent, setSent] = useState(false)

  const set = (id: string, value: string | boolean) => {
    setValues((current) => ({ ...current, [id]: value }))
    setSent(false)
  }

  return (
    <section id="reserve" className="bg-[#fbf7ef]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d2601a]">Request a table</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us when, and which room
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#0b2027]/75">
              A request is not a confirmation — someone reads every one of these at the host stand and writes back,
              usually the same evening and always within one business day. If you need a table tonight, ring us instead.
            </p>
            <ul className="mt-10 space-y-5 border-t border-[#0b2027]/10 pt-8 text-sm">
              <li className="flex gap-3">
                <span className="font-serif text-lg font-semibold text-[#d2601a]">01</span>
                <span className="text-[#0b2027]/70">
                  Dinner Wednesday to Sunday, 5:00 to 10:00 pm. Last seating in the cutting shed is 9:15 pm.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-serif text-lg font-semibold text-[#d2601a]">02</span>
                <span className="text-[#0b2027]/70">
                  The counter and the terrace are walk-in only, so there is nothing to request for those.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-serif text-lg font-semibold text-[#d2601a]">03</span>
                <span className="text-[#0b2027]/70">
                  We hold tables for fifteen minutes. After that they go to the walk-in list, and we are sorry.
                </span>
              </li>
            </ul>
          </div>

          <form
            data-testid="reservation-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSent(true)
            }}
            className="rounded-3xl border border-[#0b2027]/10 bg-white p-8 shadow-lg sm:p-10"
          >
            <h3 className="font-serif text-2xl font-semibold">Reservation request</h3>
            <p className="mt-2 text-sm text-[#0b2027]/60">
              Seven quick things and we will do the rest at this end.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {FIELDS.map((field) => {
                if (field.kind === 'checkbox') {
                  return (
                    <div key={field.id} className="sm:col-span-2 flex items-start gap-3 rounded-2xl bg-[#f3ece0] p-4">
                      <input
                        data-testid="reservation-field"
                        id={field.id}
                        type="checkbox"
                        checked={Boolean(values[field.id])}
                        onChange={(event) => set(field.id, event.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-[#0b2027]/30 accent-[#d2601a]"
                      />
                      <label htmlFor={field.id} className="text-sm leading-relaxed text-[#0b2027]/75">
                        {field.label} — one email on Friday afternoon with the weekend board and what the boats brought
                        in. Nothing else, ever.
                      </label>
                    </div>
                  )
                }

                return (
                  <div key={field.id} className={field.kind === 'textarea' ? 'sm:col-span-2' : ''}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#0b2027]/60"
                    >
                      {field.label}
                    </label>

                    {field.kind === 'select' ? (
                      <select
                        data-testid="reservation-field"
                        id={field.id}
                        value={String(values[field.id])}
                        onChange={(event) => set(field.id, event.target.value)}
                        className="mt-2 w-full rounded-xl border border-[#0b2027]/15 bg-white px-4 py-3 text-sm text-[#0b2027] outline-none transition focus:border-[#d2601a]"
                      >
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.kind === 'textarea' ? (
                      <textarea
                        data-testid="reservation-field"
                        id={field.id}
                        rows={3}
                        value={String(values[field.id])}
                        placeholder={field.placeholder}
                        onChange={(event) => set(field.id, event.target.value)}
                        className="mt-2 w-full rounded-xl border border-[#0b2027]/15 px-4 py-3 text-sm outline-none transition focus:border-[#d2601a]"
                      />
                    ) : (
                      <input
                        data-testid="reservation-field"
                        id={field.id}
                        type={field.type}
                        value={String(values[field.id])}
                        placeholder={field.placeholder}
                        onChange={(event) => set(field.id, event.target.value)}
                        className="mt-2 w-full rounded-xl border border-[#0b2027]/15 px-4 py-3 text-sm outline-none transition focus:border-[#d2601a]"
                      />
                    )}

                    {field.hint ? <p className="mt-2 text-xs text-[#0b2027]/50">{field.hint}</p> : null}
                  </div>
                )
              })}
            </div>

            <button
              type="submit"
              data-testid="reservation-submit"
              className="mt-8 w-full rounded-full bg-[#d2601a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b74f13]"
            >
              Send the request
            </button>

            {sent ? (
              <p
                data-testid="reservation-confirmation"
                className="mt-5 rounded-2xl bg-[#0b2027] px-5 py-4 text-sm leading-relaxed text-[#e8f1ee]"
              >
                Thank you — the request is with the host stand. Someone reads these between three and five, and you will
                have an answer within one business day.
              </p>
            ) : null}

            <p className="mt-5 text-xs leading-relaxed text-[#0b2027]/50">
              We keep your details for the booking and nothing else, and we never pass them on. Cancel any time by
              replying to the confirmation.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
