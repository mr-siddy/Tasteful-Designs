const STORIES = [
  {
    quote:
      'We booked the Mill Room for my father\'s eightieth because he is deaf in one ear and hates shouting across a restaurant. Twelve of us, one table, and the kitchen came up between every course to explain what had just happened to a leek. He talked about the bread for a month.',
    name: 'Priya Ramanathan',
    role: 'Mill Room, twelve guests · March 2025',
    tone: '#B7411F',
  },
  {
    quote:
      'I eat at the pass on Wednesdays, on my own, with a book I never open. You get the fire on your face and Ollie muttering at the coals and a glass of the Jacquère, and it is the only ninety minutes of my week where nobody needs anything from me.',
    name: 'Daniel Okoro',
    role: 'Regular since 2019 · seat four at the pass',
    tone: '#D8A244',
  },
  {
    quote:
      'Coeliac, and I have stopped expecting much. Nadia rang me the day before to ask what I actually like rather than what I avoid, and sent out a barley dish rebuilt on buckwheat that was better than the thing on the card. Nobody made a performance of it at the table.',
    name: 'Hélène Marchetti',
    role: 'Long Room, two guests · November 2024',
    tone: '#3F5D4B',
  },
]

function Portrait({ tone, initials }: { tone: string; initials: string }) {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label={`Portrait mark for ${initials}`} className="h-14 w-14">
      <circle cx="32" cy="32" r="30" fill={tone} opacity="0.16" />
      <circle cx="32" cy="32" r="30" fill="none" stroke={tone} strokeWidth="2" />
      <circle cx="32" cy="25" r="10" fill={tone} opacity="0.55" />
      <path d="M13 55 a19 19 0 0 1 38 0 Z" fill={tone} opacity="0.35" />
      <text x="32" y="37" textAnchor="middle" fontSize="15" fontFamily="serif" fill="#1B1410">
        {initials}
      </text>
    </svg>
  )
}

export function GuestStories() {
  return (
    <section data-section="stories" className="bg-[#2A211B] text-[#FBF6EC]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D8A244]">
            Guest stories
          </p>
          <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight">
            Three tables, in their own words
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#F0E4D2]/70">
            Collected from the notes people leave in the book by the door, and used here with
            their permission. We have not tidied the grammar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              data-testid="guest-story"
              className="flex h-full flex-col rounded-3xl border border-[#F0E4D2]/12 bg-[#14100D] p-8"
            >
              <svg viewBox="0 0 32 24" className="h-6 w-8" aria-hidden="true">
                <path
                  d="M0 24 V12 A12 12 0 0 1 12 0 V6 A6 6 0 0 0 6 12 h6 v12 Z M18 24 V12 A12 12 0 0 1 30 0 V6 A6 6 0 0 0 24 12 h6 v12 Z"
                  fill="#D8A244"
                  opacity="0.7"
                />
              </svg>
              <blockquote className="mt-6 flex-1 font-serif text-lg leading-relaxed text-[#F0E4D2]">
                {story.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-[#F0E4D2]/12 pt-6">
                <Portrait
                  tone={story.tone}
                  initials={story.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                />
                <span>
                  <span className="block font-semibold text-[#FBF6EC]">{story.name}</span>
                  <span className="mt-0.5 block text-xs uppercase tracking-[0.14em] text-[#F0E4D2]/55">
                    {story.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
