import { useState } from 'react'

type Story = {
  org: string
  location: string
  headline: string
  quote: string
  person: string
  role: string
  metrics: { value: string; label: string }[]
}

const STORIES: Story[] = [
  {
    org: 'Ninth Street Land Trust',
    location: 'Providence, Rhode Island',
    headline: 'Two hundred and fourteen homes, one register, no more master workbook',
    quote:
      'We had a spreadsheet called MASTER_final_v7 and three people who each believed they owned it. The week we moved to Rooftree we found eleven homes whose affordability period had been recorded two different ways, and one that had quietly expired in 2021. Fixing that in month one paid for the software for a decade. Now our housing manager opens one screen in the morning and knows what the day is.',
    person: 'Adaeze Okonkwo',
    role: 'Executive Director',
    metrics: [
      { value: '214', label: 'homes stewarded' },
      { value: '11', label: 'data conflicts caught in week one' },
      { value: '0', label: 'missed recertifications since go-live' },
    ],
  },
  {
    org: 'Harbor Commons Housing',
    location: 'Bellingham, Washington',
    headline: 'The quarterly report went from nine days to one afternoon',
    quote:
      'Our CDBG report used to eat the last two weeks of every quarter. I would print the rent roll, sit at the kitchen table with a highlighter and rebuild household composition by hand, and I still got a correction letter most years. The first quarter on Rooftree I ran the export on a Tuesday afternoon, read it twice because I did not believe it, and sent it. No correction letter since.',
    person: 'Marcus Villanueva',
    role: 'Director of Finance',
    metrics: [
      { value: '9 days → 1', label: 'to produce the quarterly report' },
      { value: '4', label: 'funder formats generated from one dataset' },
      { value: '$2.6M', label: 'in grant funds reported last year' },
    ],
  },
  {
    org: 'Piedmont Mutual Homes',
    location: 'Durham, North Carolina',
    headline: 'A waitlist of six hundred that we can finally explain to anyone',
    quote:
      'When you run a waitlist this long, every ranking decision is a conversation someone deserves to have. Before Rooftree I could tell an applicant their number but not really why. Now the preference score breaks out on the screen, in words, and I can walk a family through it in four minutes. Our fair housing reviewer asked for the methodology and I sent her a link.',
    person: 'Rosalind Hartwell',
    role: 'Housing Director',
    metrics: [
      { value: '612', label: 'households on the waitlist' },
      { value: '4 min', label: 'to explain a ranking to an applicant' },
      { value: '38', label: 'duplicate applications merged' },
    ],
  },
  {
    org: 'Wabash Neighborhood Trust',
    location: 'Lafayette, Indiana',
    headline: 'Inspections in basements with no signal, filed before the van gets back',
    quote:
      'Half our buildings have a mechanical room where the phone gives up entirely. The inspection form keeps working down there, photos and all, and syncs when we surface. What used to be a clipboard, then an evening of typing, then a work order I forgot to raise, is now finished before I have driven back to the office. That is two evenings a week I got back.',
    person: 'Dee Brannigan',
    role: 'Stewardship Manager',
    metrics: [
      { value: '31', label: 'buildings walked each year' },
      { value: '2 evenings', label: 'a week returned to staff' },
      { value: '100%', label: 'of findings turned into work orders' },
    ],
  },
  {
    org: 'Saltmarsh Community Homes',
    location: 'Portland, Maine',
    headline: 'Forty years of resale formulas, no longer folklore',
    quote:
      'Our resale formula has been amended three times since 1987 and the arithmetic lived in the head of a bookkeeper who retired. Rooftree holds each version and which homes it applies to, so when an owner sells we produce the calculation in an hour instead of a fortnight of archaeology. The board stopped asking me whether we could still prove it.',
    person: 'Theo Marchetti',
    role: 'Board Treasurer',
    metrics: [
      { value: '3', label: 'formula versions kept side by side' },
      { value: '1 hr', label: 'to produce a resale calculation' },
      { value: '1987', label: 'earliest home on the books' },
    ],
  },
]

export default function StoryCarousel() {
  const [index, setIndex] = useState(0)
  const total = STORIES.length

  const goPrev = () => setIndex((current) => current - 1)
  const goNext = () => setIndex((current) => current + 1)
  const goTo = (position: number) => setIndex(position)

  return (
    <section id="stories" className="border-b border-[#DDE3F0] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4EE0]">Customer stories</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Five organisations, in their own words
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4B5670]">
              Land trusts and housing nonprofits from Providence to Portland on what actually changed after the
              spreadsheets went away. Move through them with the arrows.
            </p>
          </div>
          <p data-testid="story-counter" className="text-sm font-semibold text-[#6B7690]">
            Story {index + 1} of {total}
          </p>
        </div>

        <div
          data-testid="story-carousel"
          aria-roledescription="carousel"
          aria-label="Customer stories"
          className="relative mt-12 rounded-3xl border border-[#DDE3F0] bg-gradient-to-br from-[#F7F9FE] to-white p-8 shadow-sm sm:p-12"
        >
          <svg viewBox="0 0 48 40" className="h-9 w-9" aria-hidden="true">
            <path
              d="M20 4C10 8 4 16 4 26c0 6 4 10 9 10s9-4 9-9c0-5-3.6-8.6-8.4-8.9C15 13 18 9.6 22 7.6zM44 4c-10 4-16 12-16 22 0 6 4 10 9 10s9-4 9-9c0-5-3.6-8.6-8.4-8.9C39 13 42 9.6 46 7.6z"
              fill="#3D4EE0"
              opacity="0.16"
            />
          </svg>

          <div data-testid="story-track" className="mt-6">
            {STORIES.map((story, position) => {
              const isActive = position === index
              return (
                <figure
                  key={story.org}
                  data-testid="story-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${story.org}, story ${position + 1} of ${total}`}
                  aria-hidden={!isActive}
                  className={isActive ? 'block' : 'hidden'}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#3D4EE0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3D4EE0]">
                      {story.org}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#6B7690]">
                      {story.location}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold leading-snug tracking-tight sm:text-[1.7rem]">
                    {story.headline}
                  </h3>

                  <blockquote data-testid="story-quote" className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5670]">
                    “{story.quote}”
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#131A2A] text-sm font-bold text-white"
                    >
                      {story.person
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </span>
                    <span>
                      <span data-testid="story-person" className="block text-sm font-semibold text-[#131A2A]">
                        {story.person}
                      </span>
                      <span data-testid="story-role" className="block text-sm text-[#6B7690]">
                        {story.role}, {story.org}
                      </span>
                    </span>
                  </figcaption>

                  <dl className="mt-8 grid gap-6 border-t border-[#DDE3F0] pt-7 sm:grid-cols-3">
                    {story.metrics.map((metric) => (
                      <div key={metric.label} data-testid="story-metric">
                        <dt className="text-xl font-bold tracking-tight text-[#0E8F6F]">{metric.value}</dt>
                        <dd className="mt-1 text-sm leading-snug text-[#4B5670]">{metric.label}</dd>
                      </div>
                    ))}
                  </dl>
                </figure>
              )
            })}
          </div>

          <div className="mt-10 flex items-center justify-between gap-6 border-t border-[#DDE3F0] pt-7">
            <div className="flex items-center gap-3">
              <button
                type="button"
                data-testid="story-prev"
                aria-label="Previous story"
                onClick={goPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE3F0] bg-white text-[#131A2A] transition hover:border-[#3D4EE0] hover:text-[#3D4EE0]"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                  <path d="M12.5 4 6.5 10l6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                data-testid="story-next"
                aria-label="Next story"
                onClick={goNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE3F0] bg-white text-[#131A2A] transition hover:border-[#3D4EE0] hover:text-[#3D4EE0]"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                  <path d="m7.5 4 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              {STORIES.map((story, position) => (
                <button
                  key={story.org}
                  type="button"
                  data-testid="story-dot"
                  aria-label={`Show story ${position + 1}: ${story.org}`}
                  aria-current={position === index ? 'true' : undefined}
                  onClick={() => goTo(position)}
                  className={`h-2.5 rounded-full transition-all ${
                    position === index ? 'w-8 bg-[#3D4EE0]' : 'w-2.5 bg-[#C9D2E6] hover:bg-[#8E9AB8]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
