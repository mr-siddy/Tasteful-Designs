import { QuoteGlyph, StarRow } from './Icons'
import { SectionHeading, Shell } from './PageKit'

const QUOTES = [
  {
    quote:
      'I joined on Open Floor because I have lifted for years and did not think I needed coaching. Six weeks in I moved to Coached because Marisol pointed out — politely — that I had been doing the same three exercises since 2018. My deadlift has gone up thirty kilos since.',
    name: 'Tomas Beier',
    role: 'Member since 2021 · signwriter',
    stat: 'Deadlift 145 kg → 175 kg',
  },
  {
    quote:
      'I came back six months after a C-section and was terrified of everything. Dev put me in the annex with a bar that weighed nothing and would not let me rush. The retest at week eight was the first time in a year I had proof I was getting stronger rather than just tired.',
    name: 'Aisling Moreau',
    role: 'Member since 2023 · paediatric nurse',
    stat: 'Return to Strength, then Coached',
  },
  {
    quote:
      'I am sixty-one and every other gym either treated me like glass or handed me a program written for a twenty-five year old. Sam does neither. I train three mornings a week with people my own age and I carry my own bags up the stairs at the airport now.',
    name: 'Winston Ekpo',
    role: 'Member since 2020 · retired surveyor',
    stat: 'Masters 50+, 143 sessions last year',
  },
]

export default function Testimonials() {
  return (
    <section id="members" className="bg-[#FBF7F1] py-20 sm:py-24">
      <Shell>
        <SectionHeading
          eyebrow="Members"
          title="What people say once they have been here a while"
          lede="Pulled from our annual member survey. We asked permission before printing any of them, and nobody was paid or given a free month for a quote."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              data-testid="testimonial"
              className="flex h-full flex-col rounded-3xl border border-[#E2D6C6] bg-white p-8 shadow-sm"
            >
              <QuoteGlyph className="h-8 w-8 text-[#D9481F]/25" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#4A4438]">
                {entry.quote}
              </blockquote>
              <span className="mt-6 flex gap-0.5 text-[#F0A33F]" aria-label="Rated five out of five">
                <StarRow className="h-4 w-4" />
                <StarRow className="h-4 w-4" />
                <StarRow className="h-4 w-4" />
                <StarRow className="h-4 w-4" />
                <StarRow className="h-4 w-4" />
              </span>
              <figcaption className="mt-4 border-t border-[#F2EAE0] pt-4">
                <p className="text-sm font-black tracking-tight text-[#14181D]">{entry.name}</p>
                <p className="mt-0.5 text-xs text-[#7A6E60]">{entry.role}</p>
                <p className="mt-2 inline-flex rounded-full bg-[#12554D]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#12554D]">
                  {entry.stat}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Shell>
    </section>
  )
}
