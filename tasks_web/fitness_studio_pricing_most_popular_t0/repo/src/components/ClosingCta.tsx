import { ArrowRight, BarbellIcon, CheckMark } from './Icons'
import { Shell } from './PageKit'

const REASSURANCE = [
  'Ninety minutes with a coach, free, no card taken',
  'A movement screen and an aerobic test you keep',
  'An honest answer about which tier fits — including none',
]

export default function ClosingCta() {
  return (
    <section id="intro" className="relative overflow-hidden bg-[#14181D] py-20 text-[#FBF7F1] sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[-30%] h-[30rem] w-[30rem] rounded-full bg-[#D9481F]/20 blur-3xl"
      />
      <Shell className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FBF7F1]/25 bg-[#FBF7F1]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E2D6C6]">
              <BarbellIcon className="h-4 w-4" />
              Book the free intro
            </span>
            <h2 className="mt-5 text-3xl font-black leading-[1.06] tracking-tight sm:text-[2.75rem]">
              Come and get measured. Decide afterwards.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#E2D6C6]">
              Weekday intro slots run at 9:30am, 1:00pm and 7:00pm, and Saturdays at 11:00am. Leave your
              details and a coach will confirm a time with you the same day, usually within the hour.
            </p>
            <ul className="mt-7 space-y-3">
              {REASSURANCE.map((line) => (
                <li key={line} data-testid="reassurance" className="flex items-start gap-2.5 text-[15px] text-[#E2D6C6]">
                  <CheckMark className="mt-0.5 h-5 w-5 shrink-0 text-[#F0803F]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-8">
            <h3 className="text-xl font-black tracking-tight">Ask us for a time</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#E2D6C6]">
              Or just call (312) 555-0184 and skip the form entirely. The desk is staffed whenever the floor is.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="intro-name" className="block text-xs font-bold uppercase tracking-[0.14em] text-[#E2D6C6]">
                  Your name
                </label>
                <input
                  id="intro-name"
                  name="name"
                  type="text"
                  data-testid="intro-name"
                  placeholder="Marisol Enders"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#0E1216] px-4 py-3 text-sm text-[#FBF7F1] outline-none focus:border-[#D9481F]"
                />
              </div>
              <div>
                <label htmlFor="intro-email" className="block text-xs font-bold uppercase tracking-[0.14em] text-[#E2D6C6]">
                  Email
                </label>
                <input
                  id="intro-email"
                  name="email"
                  type="email"
                  data-testid="intro-email"
                  placeholder="you@yourdomain.co"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#0E1216] px-4 py-3 text-sm text-[#FBF7F1] outline-none focus:border-[#D9481F]"
                />
              </div>
              <div>
                <label htmlFor="intro-slot" className="block text-xs font-bold uppercase tracking-[0.14em] text-[#E2D6C6]">
                  Preferred slot
                </label>
                <select
                  id="intro-slot"
                  name="slot"
                  data-testid="intro-slot"
                  defaultValue="weekday-morning"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#0E1216] px-4 py-3 text-sm text-[#FBF7F1] outline-none focus:border-[#D9481F]"
                >
                  <option value="weekday-morning">Weekday 9:30am</option>
                  <option value="weekday-afternoon">Weekday 1:00pm</option>
                  <option value="weekday-evening">Weekday 7:00pm</option>
                  <option value="saturday">Saturday 11:00am</option>
                </select>
              </div>
              <a
                href="tel:+13125550184"
                data-testid="closing-cta"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D9481F] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                Request my intro session
                <ArrowRight />
              </a>
              <p className="text-xs leading-relaxed text-[#E2D6C6]/70">
                We use your details to book the session and nothing else. No mailing list, no partner offers.
              </p>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  )
}
