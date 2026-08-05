const STORIES = [
  {
    quote:
      'I work three twelve-hour nights a week and I had given up on training around them. Marisol rewrote my block so the heavy day lands on my second day off, and I have not missed a week since March. First time in my adult life that a gym has adapted to my roster instead of the other way round.',
    name: 'Alina Petrov',
    role: 'Emergency nurse, Harbor General',
    since: 'Member since 2022',
    stat: 'Back squat 52kg to 90kg',
  },
  {
    quote:
      'I came in at fifty-eight having not touched a barbell since college, and honestly expecting to be the oldest person in the room by twenty years. I was not, and nobody made a thing of it. Dez started me at an empty bar and I deadlifted 120 kilos in front of the whole Saturday class last month.',
    name: 'Wendell Boakye',
    role: 'Middle-school principal, Canton',
    since: 'Member since 2023',
    stat: 'Deadlift 120kg at 59',
  },
  {
    quote:
      'Kitchen hours mean I am useless before eleven and finished at midnight. The Sunday Long Lift and the Thursday lunch class are the two hours a week that are actually mine, and the printed plan means I do not have to think about what I am doing when I am tired.',
    name: 'Ruth Kanellis',
    role: 'Sous chef, Marrow & Vine',
    since: 'Member since 2024',
    stat: 'Two sessions a week for 61 weeks',
  },
]

const RESULTS = [
  { value: '86%', label: 'of members are still training a year after joining' },
  { value: '38kg', label: 'average back squat added across four blocks' },
  { value: '19', label: 'members who had never lifted before 2024' },
]

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" className="h-8 w-10" aria-hidden="true" focusable="false">
      <path
        d="M6 32c-4-6-6-12-6-18C0 6 5 0 13 0v8c-3 0-5 2-5 5 0 1 .4 2 1 3 3 1 5 4 5 7 0 5-3 9-8 9zm22 0c-4-6-6-12-6-18C22 6 27 0 35 0v8c-3 0-5 2-5 5 0 1 .4 2 1 3 3 1 5 4 5 7 0 5-3 9-8 9z"
        fill="#E4682A"
        fillOpacity="0.35"
      />
    </svg>
  )
}

export function MemberStories() {
  return (
    <section id="members" className="border-b border-[#0B2A33]/10 bg-[#F7F2EA]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D7A6B]">
            Members, in their own words
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Three people who had every reason not to keep training
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              data-testid="member-story"
              className="flex flex-col rounded-3xl border border-[#0B2A33]/10 bg-white p-8 shadow-sm"
            >
              <QuoteMark />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-[#3C4E54]">
                {story.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#0B2A33]/10 pt-5">
                <p className="text-base font-black tracking-tight">{story.name}</p>
                <p className="mt-1 text-sm text-[#5B6B70]">{story.role}</p>
                <p className="mt-3 inline-block rounded-full bg-[#1D7A6B]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1D7A6B]">
                  {story.stat}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#5B6B70]">
                  {story.since}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <dl className="mt-12 grid gap-6 rounded-3xl bg-[#0B2A33] px-8 py-10 text-[#F7F2EA] sm:grid-cols-3">
          {RESULTS.map((result) => (
            <div key={result.label}>
              <dt className="text-3xl font-black tracking-tight text-[#E4682A]">{result.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-[#F7F2EA]/75">{result.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
