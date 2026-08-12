import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, QuoteMark, StarIcon } from './Icons'

type Story = {
  name: string
  role: string
  since: string
  monogram: string
  quote: string
}

const STORIES: Story[] = [
  {
    name: 'Marguerite Sowande',
    role: 'runs the flower stall at Ironside Market',
    since: 'Regular since 2016',
    monogram: 'MS',
    quote:
      'I closed the stall late one Tuesday and walked in at ten to nine with soil on my hands. Nobody blinked. They sat me at the fire, poured something cold, and Nadia sent out the charred leeks because she knew I would not order them for myself. That is the whole restaurant in one plate.',
  },
  {
    name: 'Danny Reyes-Whitlock',
    role: 'sound engineer, four blocks over',
    since: 'Regular since 2019',
    monogram: 'DR',
    quote:
      'I eat here after load-out more nights than I should admit. The room is loud in the right way — you can hear the person across from you and still feel like something is happening. And the kitchen never once made me feel like the last table of the night.',
  },
  {
    name: 'Priya Venkataraman',
    role: 'brought her parents for their fortieth anniversary',
    since: 'First visit 2023',
    monogram: 'PV',
    quote:
      'My mother does not eat beef and my father does not trust restaurants. Theo asked three questions when I booked and then built an entire menu around both of them without ever making it a thing. My father has since told nine people about the squash.',
  },
  {
    name: 'Owen Fitzsimmons',
    role: 'Tuesday bar regular since opening week',
    since: 'Regular since 2015',
    monogram: 'OF',
    quote:
      'Eleven years, same nine stools at the hearth, and the fire still gets my full attention. I have watched three cooks come up through that kitchen and leave to open their own rooms. They all still come back on Sundays, which tells you more than any review will.',
  },
]

function StoryPortrait({ monogram }: { monogram: string }) {
  return (
    <svg viewBox="0 0 96 96" className="h-16 w-16" role="img" aria-label={`Portrait mark ${monogram}`}>
      <defs>
        <linearGradient id={`portrait-${monogram}`} x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" />
          <stop offset="1" stopColor="#9a3412" />
        </linearGradient>
      </defs>
      <circle cx="48" cy="48" r="46" fill={`url(#portrait-${monogram})`} />
      <circle cx="48" cy="48" r="40" fill="#1c1917" opacity="0.82" />
      <text
        x="48"
        y="58"
        textAnchor="middle"
        fontSize="28"
        fontWeight="600"
        fill="#fcd34d"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {monogram}
      </text>
    </svg>
  )
}

export function GuestStories() {
  const [index, setIndex] = useState(0)

  // One story is on screen at a time — a single-slide window into the list.
  const visible = STORIES.slice(index, index + 1)

  function showPrevious() {
    setIndex((current) => (current - 1 + STORIES.length) % STORIES.length)
  }

  function showNext() {
    setIndex((current) => (current + 1) % STORIES.length)
  }

  return (
    <section
      id="stories"
      className="bg-stone-950 text-stone-100"
      aria-labelledby="stories-heading"
      data-testid="guest-stories"
    >
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            Guest stories
          </p>
          <h2 id="stories-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Eleven years of regulars
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-400">
            We asked four people who have been eating here longer than most of our staff have worked
            here to tell us about a night they remember.
          </p>
        </div>

        <div
          className="relative mt-14 rounded-3xl border border-stone-800 bg-gradient-to-br from-stone-900 to-stone-950 p-8 shadow-2xl shadow-black/50 sm:p-12"
          role="group"
          aria-roledescription="carousel"
          aria-label="Guest stories"
        >
          <QuoteMark className="h-10 w-10 text-amber-500/40" />

          {visible.map((story) => (
            <figure key={story.name} data-testid="story-slide" className="mt-4">
              <blockquote
                data-testid="story-quote"
                className="text-xl leading-relaxed text-stone-200 sm:text-2xl sm:leading-relaxed"
              >
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-9 flex items-center gap-5 border-t border-stone-800 pt-7">
                <StoryPortrait monogram={story.monogram} />
                <div>
                  <p data-testid="story-name" className="text-lg font-semibold text-stone-100">
                    {story.name}
                  </p>
                  <p className="mt-1 text-sm text-stone-400">{story.role}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-amber-500">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                    <span className="ml-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                      {story.since}
                    </span>
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-stone-800 pt-7">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPrevious}
                data-testid="story-prev"
                aria-label="Previous guest story"
                className="rounded-full border border-stone-700 p-3 text-stone-200 transition-colors hover:border-amber-400 hover:text-amber-300"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                data-testid="story-next"
                aria-label="Next guest story"
                className="rounded-full border border-stone-700 p-3 text-stone-200 transition-colors hover:border-amber-400 hover:text-amber-300"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <p
                data-testid="story-position"
                className="ml-2 text-sm font-medium tabular-nums text-stone-400"
              >
                {index + 1} / {STORIES.length}
              </p>
            </div>

            <ul className="flex items-center gap-3">
              {STORIES.map((story, i) => (
                <li key={story.name}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    data-testid="story-dot"
                    aria-current={i === index ? 'true' : 'false'}
                    aria-label={`Show the story from ${story.name}`}
                    className={
                      i === index
                        ? 'h-2.5 w-8 rounded-full bg-amber-500'
                        : 'h-2.5 w-2.5 rounded-full bg-stone-700 transition-colors hover:bg-stone-500'
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
