import { CompassIcon, HeartIcon, OarIcon, StopwatchIcon } from './icons'

const STATS = [
  { value: '640', label: 'Members on the roster', note: 'Capped, with a waitlist since 2022' },
  { value: '2018', label: 'Rowing at Cordage Lane', note: 'Eight years of eight-week blocks' },
  { value: '11.4s', label: 'Average 2k split gain', note: 'Across a member’s first two blocks' },
  { value: '4.9', label: 'Rating from 412 reviews', note: 'Google, Yelp and the local sports board' },
]

const CREDENTIALS = [
  { icon: OarIcon, text: 'British Rowing indoor coaching accreditation' },
  { icon: StopwatchIcon, text: 'UKSCA-accredited strength staff' },
  { icon: HeartIcon, text: 'Two coaches with clinical rehab backgrounds' },
  { icon: CompassIcon, text: 'Bellhaven Masters squad winter home since 2019' },
]

export function ProofBar() {
  return (
    <section id="proof" className="border-b border-[#0b3a41]/10 bg-[#f1e7d7]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="sr-only">Why people trust Tidemark</h2>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-l-2 border-[#e0813d] pl-5">
              <dt className="text-4xl font-semibold tracking-tight text-[#0b3a41]">{stat.value}</dt>
              <dd className="mt-2 text-sm font-medium text-[#2c565c]">{stat.label}</dd>
              <dd className="mt-1 text-sm text-[#5b7c81]">{stat.note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-5 border-t border-[#0b3a41]/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#12626c]" />
              <p className="text-sm leading-relaxed text-[#2c565c]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
