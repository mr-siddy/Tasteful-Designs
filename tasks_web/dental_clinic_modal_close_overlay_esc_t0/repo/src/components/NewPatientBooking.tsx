import { useState } from 'react'
import { ArrowIcon, CheckIcon, ClockIcon, CloseIcon, PhoneIcon, PinIcon } from './Icons'

const INCLUDED = [
  'A 75-minute chair with Priya, our hygiene lead — not a fifteen-minute look and a rebooking',
  'Low-dose digital X-rays and intraoral photographs you get to keep',
  'A full periodontal charting and an oral cancer screening',
  'A written treatment plan with a printed price beside every line',
]

const SLOTS = [
  { day: 'Tuesday', time: '7:00 am', note: 'First chair of the day' },
  { day: 'Wednesday', time: '11:20 am', note: 'Good for a lunch break' },
  { day: 'Friday', time: '8:40 am', note: 'Before the ship canal traffic' },
]

export function NewPatientBooking() {
  const [open, setOpen] = useState(false)

  return (
    <section id="booking" aria-labelledby="booking-heading" className="bg-[#EFE6DA]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">New patients</p>
            <h2
              id="booking-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-[#0B2540] sm:text-4xl"
            >
              Your first visit, booked in about a minute
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#42566A]">
              Tell us how to reach you and which mornings work. Marisol, who runs the front desk,
              answers every request herself and will text you back within one business hour with a
              real time — not a form letter and not a call centre in another state.
            </p>

            <ul className="mt-8 space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#42566A]">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#4E7C6A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                type="button"
                data-testid="open-booking"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0B2540] px-7 py-3.5 text-base font-semibold text-[#FAF6F1] shadow-lg shadow-[#0B2540]/15 transition hover:bg-[#123457]"
              >
                Reserve a new-patient visit
                <ArrowIcon />
              </button>
              <a href="tel:+12065550142" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2540]">
                <PhoneIcon className="h-4 w-4 text-[#C2703D]" />
                Or call (206) 555-0142
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-[#DCCDB9] bg-[#FAF6F1] p-8 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight text-[#0B2540]">This week at the studio</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#7A6A58]">
              Three chairs are still open for new patients. Reserving one holds it for four hours while
              Marisol confirms.
            </p>
            <ul className="mt-6 space-y-3">
              {SLOTS.map((slot) => (
                <li
                  key={slot.day}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-[#E4D8C8] bg-white px-4 py-3"
                >
                  <span>
                    <span className="block text-sm font-semibold text-[#0B2540]">
                      {slot.day} · {slot.time}
                    </span>
                    <span className="block text-xs text-[#9A8973]">{slot.note}</span>
                  </span>
                  <ClockIcon className="h-5 w-5 shrink-0 text-[#4E7C6A]" />
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-[#7A6A58]">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#C2703D]" />
              Street parking on Ballard Ave is two hours; the lot behind the building is free for
              patients and the entrance is off 54th.
            </p>
          </aside>
        </div>
      </div>

      {open && (
        <div
          data-testid="booking-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B2540]/70 px-4 py-8 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-dialog-title"
            data-testid="booking-modal"
            className="max-h-full w-full max-w-lg overflow-y-auto rounded-3xl bg-[#FAF6F1] p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">$149 · 75 minutes</p>
                <h3
                  id="booking-dialog-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-[#0B2540]"
                >
                  Reserve your new-patient visit
                </h3>
              </div>
              <button
                type="button"
                data-testid="booking-close"
                aria-label="Close booking dialog"
                onClick={() => setOpen(false)}
                className="rounded-full border border-[#DCCDB9] p-2 text-[#0B2540] transition hover:bg-[#EFE6DA]"
              >
                <CloseIcon />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#42566A]">
              Nothing is charged now. Marisol texts you back within one business hour to confirm the
              time, and you can move it once at no cost.
            </p>

            <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="booking-name" className="block text-sm font-medium text-[#0B2540]">
                  Your name
                </label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-[#DCCDB9] bg-white px-4 py-2.5 text-sm text-[#0B2540]"
                />
              </div>
              <div>
                <label htmlFor="booking-phone" className="block text-sm font-medium text-[#0B2540]">
                  Mobile number
                </label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-[#DCCDB9] bg-white px-4 py-2.5 text-sm text-[#0B2540]"
                />
              </div>
              <div>
                <label htmlFor="booking-slot" className="block text-sm font-medium text-[#0B2540]">
                  Which chair suits you
                </label>
                <select
                  id="booking-slot"
                  name="slot"
                  className="mt-1.5 w-full rounded-xl border border-[#DCCDB9] bg-white px-4 py-2.5 text-sm text-[#0B2540]"
                >
                  {SLOTS.map((slot) => (
                    <option key={slot.day} value={slot.day}>
                      {slot.day} at {slot.time}
                    </option>
                  ))}
                  <option value="other">Something else — call me</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#C2703D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A85B2D]"
              >
                Send the request
              </button>
            </form>

            <p className="mt-5 text-xs leading-relaxed text-[#7A6A58]">
              Prefer to speak to someone? Call{' '}
              <a href="tel:+12065550142" className="font-semibold text-[#0B2540] underline">
                (206) 555-0142
              </a>{' '}
              between 7am and 5pm, Monday to Thursday.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
