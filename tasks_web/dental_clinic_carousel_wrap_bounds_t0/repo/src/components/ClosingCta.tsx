import { ClockIcon, PoundIcon, ShieldCheck } from './Icons'

const REASSURANCES = [
  { icon: <PoundIcon className="h-5 w-5" />, text: '£68 for the examination, and that is the whole first-visit cost' },
  { icon: <ClockIcon className="h-5 w-5" />, text: 'Usually seen within nine days, same week if something hurts' },
  { icon: <ShieldCheck className="h-5 w-5" />, text: 'No sign-up fee, no plan required, nothing to cancel later' },
]

export function ClosingCta() {
  return (
    <section id="register" className="relative overflow-hidden bg-[#F2683C] py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <svg viewBox="0 0 1200 300" className="h-full w-full" preserveAspectRatio="none">
          <path d="M0 190c120-46 240-46 360 0s240 46 360 0 240-46 480 0v110H0V190Z" fill="#0F2E4A" />
          <path d="M0 232c120-46 240-46 360 0s240 46 360 0 240-46 480 0v68H0v-68Z" fill="#0F2E4A" opacity="0.6" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Come and get the plan. Decide about the rest later.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          You do not have to commit to anything to find out where you stand. Book the examination, take the written
          plan home, and if you never book a second appointment we will not chase you for one. Most people who have
          been avoiding it for years say the same thing afterwards: it was the not-knowing that was the hard part.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#visit"
            data-testid="closing-primary-cta"
            className="rounded-full bg-[#0F2E4A] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#0F2E4A]/25 transition hover:bg-[#0A2237]"
          >
            Book your examination
          </a>
          <a
            href="tel:01998442610"
            data-testid="closing-phone-cta"
            className="rounded-full border-2 border-white/70 px-8 py-4 text-base font-semibold text-white transition hover:border-white"
          >
            Or ring 01998 442 610
          </a>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
          {REASSURANCES.map((item) => (
            <li key={item.text} className="flex gap-3 rounded-2xl bg-white/12 p-5 text-sm leading-relaxed backdrop-blur">
              <span className="mt-0.5 shrink-0">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
