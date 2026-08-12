import { useState } from 'react'
import { Field } from './PageKit'

const GOALS = [
  'Pick one',
  'Get strong for the first time',
  'Come back from an injury',
  'Train for a meet',
  'Keep up with my kids',
  'Still be lifting at eighty',
]

const DAYS = ['Pick one', 'Two days a week', 'Three days a week', 'Four days a week', 'Five or more']

const inputClass =
  'w-full rounded-xl border border-white/15 bg-[#0E1116] px-4 py-3 text-sm text-[#F7F3EC] outline-none transition-colors focus:border-[#E1552B]'

export default function BookingForm() {
  const [sent, setSent] = useState(false)

  return (
    <section id="book" className="bg-[#12141A] text-[#F7F3EC]">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E1552B]">Book an intro</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Forty-five minutes, no cost, and you keep the plan either way
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#F7F3EC]/75">
            Tell us where you are starting from and the desk will come back with two or three times that
            fit around your week. Nadia runs every intro herself, so the person who assesses you is the
            person who writes your first eight weeks.
          </p>
          <ul className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-[#F7F3EC]/70">
            <li className="border-l-2 border-[#E1552B] pl-4">
              You will lift an empty bar and nothing heavier. Wear whatever you already own.
            </li>
            <li className="border-l-2 border-[#2F6C7A] pl-4">
              You leave with a written sheet — your twelve screens, your starting loads, your two priorities.
            </li>
            <li className="border-l-2 border-[#D9A441] pl-4">
              Nobody will ask you for a card, and nobody will call you twice.
            </li>
          </ul>
          <p className="mt-8 text-sm text-[#F7F3EC]/55">
            Prefer to talk to a person? The desk is on (215) 555 0142 from 5:30am to 9:30pm.
          </p>
        </div>

        <form
          data-testid="booking-form"
          className="rounded-3xl border border-white/10 bg-[#171B22] p-8"
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
          }}
        >
          <h3 className="text-lg font-black tracking-tight">Request an intro session</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#F7F3EC]/60">
            Six boxes and a tick. It goes to the front desk, not to a mailing list.
          </p>

          <div className="mt-7 flex flex-col gap-5">
            <Field spec={{ id: 'booking-name', label: 'Your name' }}>
              <input
                id="booking-name"
                name="name"
                type="text"
                data-testid="booking-field"
                className={inputClass}
              />
            </Field>

            <Field spec={{ id: 'booking-email', label: 'Email address' }}>
              <input
                id="booking-email"
                name="email"
                type="email"
                data-testid="booking-field"
                className={inputClass}
              />
            </Field>

            <Field
              spec={{
                id: 'booking-phone',
                label: 'Mobile number',
                hint: 'Only used to confirm the time of your intro.',
              }}
            >
              <input
                id="booking-phone"
                name="phone"
                type="tel"
                data-testid="booking-field"
                className={inputClass}
              />
            </Field>

            <Field spec={{ id: 'booking-goal', label: 'What you want out of the first eight weeks' }}>
              <select id="booking-goal" name="goal" data-testid="booking-field" className={inputClass}>
                {GOALS.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </Field>

            <Field spec={{ id: 'booking-days', label: 'Days a week you can train' }}>
              <select id="booking-days" name="days" data-testid="booking-field" className={inputClass}>
                {DAYS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              spec={{
                id: 'booking-notes',
                label: 'Anything a coach should know',
                hint: 'Old injuries, surgeries, what went wrong at the last gym — all of it helps.',
              }}
            >
              <textarea
                id="booking-notes"
                name="notes"
                rows={4}
                data-testid="booking-field"
                className={inputClass}
              />
            </Field>

            <Field spec={{ id: 'booking-reminders', label: 'Text me the week’s timetable on Sunday nights' }} inline>
              <input
                id="booking-reminders"
                name="reminders"
                type="checkbox"
                data-testid="booking-field"
                className="mt-1 h-4 w-4 flex-none accent-[#E1552B]"
              />
            </Field>
          </div>

          <button
            type="submit"
            data-testid="booking-submit"
            className="mt-8 w-full rounded-full bg-[#E1552B] px-6 py-3.5 text-base font-bold text-[#12141A] transition-colors hover:bg-[#F2703F]"
          >
            Send it to the front desk
          </button>

          {sent ? (
            <p
              data-testid="booking-confirmation"
              className="mt-5 rounded-2xl border border-[#2F6C7A] bg-[#2F6C7A]/15 px-5 py-4 text-sm leading-relaxed text-[#F7F3EC]"
            >
              That is with the desk. A coach will come back to you within one business day with two or
              three times that fit your week.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
