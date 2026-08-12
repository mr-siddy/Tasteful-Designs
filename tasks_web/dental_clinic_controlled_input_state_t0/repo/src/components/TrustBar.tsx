import { ShieldIcon, StarIcon } from './Icons'

const NUMBERS = [
  { value: '4.9', label: 'average of 1,142 reviews' },
  { value: '26', label: 'years on Lantern Lane' },
  { value: '7,800', label: 'patients on the books' },
  { value: '94%', label: 'seen within ten minutes of their slot' },
]

const CREDENTIALS = [
  'State Dental Board — practice #DP-40118',
  'Academy of General Dentistry, member practice',
  'Accredited sedation provider (inhalation)',
  'Living-wage employer, verified 2024',
]

export default function TrustBar() {
  return (
    <section id="trust" className="border-y border-[#152046]/10 bg-[#faf6f0]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#2b3a7a]/70">
          What the neighbourhood already knows
        </h2>

        <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-[#152046]">{item.value}</p>
              <p className="mt-2 text-sm leading-snug text-[#1f2a4d]/70">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1 text-[#f2704a]">
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
          </span>
          {CREDENTIALS.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-[#152046]/12 bg-white px-4 py-2 text-xs font-medium text-[#2b3a7a]"
            >
              <ShieldIcon className="h-4 w-4 text-[#f2704a]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
