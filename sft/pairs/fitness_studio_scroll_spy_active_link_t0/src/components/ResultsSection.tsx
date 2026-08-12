type Member = {
  quote: string
  name: string
  detail: string
  metric: string
  metricLabel: string
}

const MEMBERS: Member[] = [
  {
    quote:
      'I had been going to gyms for fifteen years and could not tell you what I was working towards in any of them. Here I have a card, a coach who reads it back to me, and a number that has gone up every quarter for two years.',
    name: 'Elena Márquez',
    detail: 'Member since 2023 · trains three days',
    metric: '+38 kg',
    metricLabel: 'back squat in eighteen months',
  },
  {
    quote:
      'I came in six months after a lumbar disc injury, terrified of deadlifting again. Priya spent an entire block on trap bar work and hip hinging before she let me near a straight bar. That patience is the whole product.',
    name: 'Tom Berrigan',
    detail: 'Member since 2024 · referred by Harbour Physio',
    metric: '110 kg',
    metricLabel: 'deadlift, pain-free',
  },
  {
    quote:
      'I am sixty-one and I row twice a week with people half my age. The masters class is not a watered-down version of the main session — it is the same programme with a warm-up that respects my shoulders.',
    name: 'Ida Reinholt',
    detail: 'Member since 2019 · Masters Strength',
    metric: '4th',
    metricLabel: 'in her class at state masters',
  },
]

function QuoteGlyph() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true" fill="none">
      <path
        d="M13 22c-3.3 0-6-2.7-6-6 0-5 3.5-9 8-11l1.4 2.6C13.7 9 11.6 11 11 13.4c.6-.3 1.3-.4 2-.4 3.3 0 5 2.2 5 4.6S16.3 22 13 22Zm13 0c-3.3 0-6-2.7-6-6 0-5 3.5-9 8-11l1.4 2.6c-2.7 1.4-4.8 3.4-5.4 5.8.6-.3 1.3-.4 2-.4 3.3 0 5 2.2 5 4.6S29.3 22 26 22Z"
        fill="#bef264"
      />
    </svg>
  )
}

export function ResultsSection() {
  return (
    <section id="results" data-testid="results-section" className="border-b border-white/10 bg-stone-950">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">Results</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-50">
            What members actually got
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            No before-and-after photographs on this page. What we track is what people can do with
            a barbell, how often they train, and whether they are still here in a year.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {MEMBERS.map((member) => (
            <li
              key={member.name}
              data-testid="result-card"
              className="flex flex-col rounded-2xl bg-stone-900 p-8 ring-1 ring-white/10"
            >
              <QuoteGlyph />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-stone-200">
                {member.quote}
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-3xl font-black text-lime-300">{member.metric}</p>
                <p className="text-xs uppercase tracking-wide text-stone-500">{member.metricLabel}</p>
                <p className="mt-4 text-sm font-bold text-stone-50">{member.name}</p>
                <p className="text-xs text-stone-400">{member.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <dl className="mt-14 grid gap-6 rounded-2xl bg-stone-900 p-8 ring-1 ring-white/10 sm:grid-cols-3">
          <div>
            <dt className="text-3xl font-black text-amber-400">84%</dt>
            <dd className="mt-1 text-sm text-stone-400">
              of members who finish a first block are still training here a year later
            </dd>
          </div>
          <div>
            <dt className="text-3xl font-black text-amber-400">412</dt>
            <dd className="mt-1 text-sm text-stone-400">
              people through the doors in an average week across all sessions
            </dd>
          </div>
          <div>
            <dt className="text-3xl font-black text-amber-400">27</dt>
            <dd className="mt-1 text-sm text-stone-400">
              members who competed at a regional or masters meet last season
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
