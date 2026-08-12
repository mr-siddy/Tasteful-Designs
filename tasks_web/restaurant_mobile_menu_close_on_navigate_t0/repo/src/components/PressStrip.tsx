import { StarIcon } from './Icons'

const STATS = [
  { value: '4.8', label: 'Average of 1,240 guest reviews' },
  { value: '11', label: 'Growers and boats we buy from directly' },
  { value: '340', label: 'Covers on a Saturday night' },
  { value: '6yrs', label: 'Same crew on the fire' },
]

export default function PressStrip() {
  return (
    <section id="press" className="border-b border-[#12261F]/10 bg-[#F1E7D8]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-[11px] uppercase tracking-[0.28em] text-[#4C6B54]">
          Written about around the Sound
        </h2>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 text-[#12261F]/70">
          <svg viewBox="0 0 190 34" className="h-7 w-auto" role="img" aria-label="Seattle Met">
            <text x="0" y="25" fontFamily="Georgia, serif" fontSize="25" letterSpacing="1.5" fill="currentColor">
              Seattle Met
            </text>
          </svg>
          <svg viewBox="0 0 210 34" className="h-6 w-auto" role="img" aria-label="The Ballard Ledger">
            <text x="0" y="25" fontFamily="Georgia, serif" fontSize="22" letterSpacing="2" fill="currentColor">
              THE BALLARD LEDGER
            </text>
          </svg>
          <svg viewBox="0 0 160 34" className="h-6 w-auto" role="img" aria-label="Northwest Table">
            <text x="0" y="25" fontFamily="Helvetica, Arial, sans-serif" fontSize="20" letterSpacing="3" fill="currentColor">
              NW TABLE
            </text>
          </svg>
          <svg viewBox="0 0 150 40" className="h-9 w-auto" role="img" aria-label="James Beard Foundation semifinalist seal">
            <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M20 9c4 3.6 6 6.8 6 9.8a6 6 0 1 1-12 0c0-3 2-6.2 6-9.8Z" fill="currentColor" opacity=".7" />
            <text x="46" y="17" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" letterSpacing="1.6" fill="currentColor">
              BEARD FDN
            </text>
            <text x="46" y="31" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" letterSpacing="1.6" fill="currentColor">
              SEMIFINALIST
            </text>
          </svg>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-serif text-xl leading-relaxed text-[#12261F]">
          “The most confident cooking in Ballard, and the only dining room in the city where the
          fire is the loudest thing in the room.”
          <span className="mt-3 block text-sm font-sans not-italic text-[#4C6B54]">
            Priya Raghunathan, Seattle Met
          </span>
        </p>

        <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-[#12261F]/10 pt-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-serif text-4xl font-semibold text-[#C4653A]">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-[#12261F]/70">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 flex items-center justify-center gap-1.5 text-sm text-[#4C6B54]">
          <StarIcon className="h-4 w-4 text-[#C4653A]" />
          <StarIcon className="h-4 w-4 text-[#C4653A]" />
          <StarIcon className="h-4 w-4 text-[#C4653A]" />
          <StarIcon className="h-4 w-4 text-[#C4653A]" />
          <StarIcon className="h-4 w-4 text-[#C4653A]" />
          <span className="ml-2">Rated 4.8 out of 5 by guests who booked through this page.</span>
        </p>
      </div>
    </section>
  )
}
