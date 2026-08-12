import { useState } from 'react'
import { ClockLeaf, ShieldCheck } from './Icons'

const REASONS = [
  'A checkup — it has been a while',
  'Something hurts right now',
  'Whitening, bonding or veneers',
  'Registering the children',
  'Moving my family from another practice',
]

export function ClosingCta() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [reason, setReason] = useState(REASONS[0])
  const [sent, setSent] = useState(false)

  return (
    <section id="book" className="bg-[#123B36] py-20 text-[#FBF7F0] lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5C458]">Book a visit</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Leave your number and Dilan rings you back before six
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#C8D8CD]">
            No account to make, no card to enter, nothing sold to anybody. Tell us roughly what you need and we
            will find a slot that suits — including the early ones at a quarter to seven, before work.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-sm text-[#DCE7DF]">
              <span className="text-[#F5C458]">
                <ClockLeaf className="h-5 w-5" />
              </span>
              Open 6:45am to 7:30pm Monday to Thursday, 8am to 4pm Friday
            </li>
            <li className="flex items-center gap-3 text-sm text-[#DCE7DF]">
              <span className="text-[#F5C458]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              Emergency slots held every weekday morning, registered or not
            </li>
          </ul>

          <p className="mt-8 text-2xl font-semibold">
            <a href="tel:5550172" className="underline decoration-[#E8A020] decoration-2 underline-offset-4">
              555 0172
            </a>
          </p>
        </div>

        <form
          data-testid="callback-form"
          className="rounded-3xl bg-[#FBF7F0] p-8 text-[#123B36] shadow-2xl shadow-black/20"
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
          }}
        >
          <h3 className="text-xl font-semibold">Request a callback</h3>
          <p className="mt-2 text-sm text-[#4A5A53]">We ring back the same working day. Two fields, that is all.</p>

          <label className="mt-6 block text-sm font-medium" htmlFor="callback-name">
            Your name
          </label>
          <input
            id="callback-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[#123B36]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#123B36]"
            placeholder="Hannah Vance"
          />

          <label className="mt-5 block text-sm font-medium" htmlFor="callback-phone">
            Phone number
          </label>
          <input
            id="callback-phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[#123B36]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#123B36]"
            placeholder="555 0148"
          />

          <label className="mt-5 block text-sm font-medium" htmlFor="callback-reason">
            What is it about?
          </label>
          <select
            id="callback-reason"
            name="reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[#123B36]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#123B36]"
          >
            {REASONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            type="submit"
            data-testid="callback-submit"
            className="mt-7 w-full rounded-full bg-[#E8A020] px-6 py-3.5 text-sm font-bold text-[#123B36] transition hover:bg-[#D69218]"
          >
            Ask for a callback
          </button>

          {sent ? (
            <p data-testid="callback-sent" className="mt-4 text-sm font-medium text-[#1B5049]">
              Thank you — Dilan has your details and will call before six today.
            </p>
          ) : (
            <p className="mt-4 text-xs leading-relaxed text-[#8A7A5C]">
              Your details stay on our practice system and are never passed to anyone else.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
