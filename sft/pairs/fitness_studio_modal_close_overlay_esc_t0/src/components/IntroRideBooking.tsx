import { useEffect, useState } from 'react'
import { ArrowIcon, BikeIcon, CheckIcon, ClockIcon } from './Icons'

const SLOTS = [
  { day: 'Tuesday', time: '6:15 am', format: 'The Ride', coach: 'Nadia Okonjo', left: '3 bikes open' },
  { day: 'Wednesday', time: '7:10 am', format: 'Ride + Lift', coach: 'Tomás Rivera', left: '1 bike open' },
  { day: 'Thursday', time: '6:45 pm', format: 'The Ride', coach: 'Priya Raman', left: '3 bikes open' },
  { day: 'Saturday', time: '9:30 am', format: 'The Ride', coach: 'Dermot Slane', left: '6 bikes open' },
]

const SESSIONS = [
  'Tuesday 6:15 am · The Ride',
  'Wednesday 7:10 am · Ride + Lift',
  'Thursday 6:45 pm · The Ride',
  'Saturday 9:30 am · The Ride',
  'Send me the full timetable instead',
]

const BRING = [
  'Nothing on your feet — we lend cycling shoes in sizes 3 to 13, or ride in trainers.',
  'A bottle if you have a favourite one; if not, there are cold ones by the desk.',
  'Twelve minutes of slack before the class, so a coach can set your saddle and bars.',
  'Anything you would tell a physiotherapist. Knees, backs and new hips are all welcome.',
]

export function IntroRideBooking() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [riderName, setRiderName] = useState('')
  const [mobile, setMobile] = useState('')
  const [session, setSession] = useState(SESSIONS[0])
  const [note, setNote] = useState('')

  // Escape gets you out of the dialog wherever the keyboard focus happens to be.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const openDialog = () => {
    setSent(false)
    setOpen(true)
  }

  const closeDialog = () => setOpen(false)

  const submitRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="intro" className="border-y border-[#101826]/10 bg-[#f2e9db]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d94a2b]">
            <BikeIcon className="h-4 w-4" />
            The way in
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#101826] sm:text-5xl">
            Your first ride costs £9, and it is the whole class
          </h2>

          <p className="mt-5 text-[17px] leading-relaxed text-[#40485a]">
            Not a tour, not a taster, not fifteen minutes at the back while the real class
            happens. You get a bike on the deck, a coach who sets it up with you beforehand, and
            the same forty-five minutes as the member who has been riding here since the printworks
            still smelled of ink. Three bikes are still open on Thursday evening this week.
          </p>

          <p className="mt-4 text-[17px] leading-relaxed text-[#40485a]">
            Send the request and Marta at the desk replies the same day — by text if you would
            rather not talk on the phone. Nothing is charged until you turn up, and if the week
            falls apart on you, tell us and we will move it.
          </p>

          <button
            type="button"
            data-testid="open-intro"
            onClick={openDialog}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#d94a2b] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#faf5ee] shadow-[0_18px_40px_-18px_rgba(217,74,43,0.95)] transition hover:bg-[#c03f22]"
          >
            Book an intro ride
            <ArrowIcon />
          </button>

          <h3 className="mt-12 text-sm font-bold uppercase tracking-[0.22em] text-[#101826]">
            What to bring
          </h3>
          <ul className="mt-4 space-y-3">
            {BRING.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#40485a]">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#d94a2b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[#101826]/10 bg-[#faf5ee] p-7 shadow-[0_28px_70px_-50px_rgba(16,24,38,0.8)]">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#101826]">
            <ClockIcon className="h-4 w-4 text-[#d94a2b]" />
            Open intro rides this week
          </h3>

          <ul className="mt-5 divide-y divide-[#101826]/10">
            {SLOTS.map((slot) => (
              <li key={`${slot.day}-${slot.time}`} data-testid="intro-slot" className="py-4">
                <p className="text-[15px] font-bold text-[#101826]">
                  {slot.day} · {slot.time}
                </p>
                <p className="mt-1 text-sm text-[#40485a]">
                  {slot.format} with {slot.coach}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#d94a2b]">
                  {slot.left}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs leading-relaxed text-[#40485a]/80">
            Times are held for twenty-four hours once you send a request. The 5:30 am rides fill
            first from October onwards, so if you want a dark-morning class, ask early.
          </p>
        </div>
      </div>

      {open && (
        <div
          data-testid="intro-overlay"
          onClick={closeDialog}
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#101826]/80 p-4 backdrop-blur-sm sm:items-center"
        >
          <div
            data-testid="intro-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="intro-dialog-title"
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#faf5ee] shadow-[0_50px_90px_-40px_rgba(0,0,0,0.7)]"
          >
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close the intro ride form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#faf5ee]/15 text-lg font-bold text-[#faf5ee] transition hover:bg-[#d94a2b]"
            >
              <span aria-hidden="true">✕</span>
            </button>

            <div className="bg-[#101826] px-7 py-6 pr-16 text-[#faf5ee]">
              <h3
                id="intro-dialog-title"
                className="text-2xl font-black uppercase tracking-tight"
              >
                Claim your intro ride
              </h3>
              <p className="mt-2 text-sm text-[#efa63c]">
                £9 · 45 minutes · shoes, towel and a cold bottle included
              </p>
            </div>

            {sent ? (
              <div className="px-7 py-8" data-testid="intro-sent">
                <CheckIcon className="h-8 w-8 text-[#d94a2b]" />
                <p className="mt-4 text-lg font-bold tracking-tight text-[#101826]">
                  That is with Marta at the desk.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#40485a]">
                  She confirms intro rides in the order they arrive, usually within a few hours
                  and always the same day. Nothing is charged now — you pay the £9 when you get
                  here, and you can move the booking once for free.
                </p>
              </div>
            ) : (
              <form className="space-y-5 px-7 py-7" onSubmit={submitRequest}>
                <div>
                  <label
                    htmlFor="intro-name"
                    className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#101826]"
                  >
                    Your name
                  </label>
                  <input
                    id="intro-name"
                    name="intro-name"
                    type="text"
                    value={riderName}
                    onChange={(event) => setRiderName(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#101826]/15 bg-white px-4 py-3 text-sm text-[#101826] outline-none focus:border-[#d94a2b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="intro-mobile"
                    className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#101826]"
                  >
                    Mobile number
                  </label>
                  <input
                    id="intro-mobile"
                    name="intro-mobile"
                    type="tel"
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#101826]/15 bg-white px-4 py-3 text-sm text-[#101826] outline-none focus:border-[#d94a2b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="intro-session"
                    className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#101826]"
                  >
                    Which session suits you
                  </label>
                  <select
                    id="intro-session"
                    name="intro-session"
                    value={session}
                    onChange={(event) => setSession(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#101826]/15 bg-white px-4 py-3 text-sm text-[#101826] outline-none focus:border-[#d94a2b]"
                  >
                    {SESSIONS.map((choice) => (
                      <option key={choice} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="intro-note"
                    className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#101826]"
                  >
                    Anything the coach should know
                  </label>
                  <textarea
                    id="intro-note"
                    name="intro-note"
                    rows={3}
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#101826]/15 bg-white px-4 py-3 text-sm text-[#101826] outline-none focus:border-[#d94a2b]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#101826] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#faf5ee] transition hover:bg-[#d94a2b]"
                >
                  Send the request
                </button>

                <p className="text-xs leading-relaxed text-[#40485a]/80">
                  We use your number for this booking and the reminder the night before, and for
                  nothing else. No card details are taken on this page.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
