import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, MemberPortrait, QuoteMark } from './Icons'

type Story = {
  name: string
  initials: string
  tint: string
  role: string
  program: string
  tenure: string
  milestone: string
  quote: string
}

const STORIES: Story[] = [
  {
    name: 'Delphine Okonkwo-Barr',
    initials: 'DO',
    tint: '#bef264',
    role: 'Pediatric nurse, Union Square',
    program: 'Barbell Club',
    tenure: 'Member since March 2021',
    milestone: 'Deadlift 135 lb to 275 lb',
    quote:
      'I came in after two years of night shifts convinced I was fragile. Nobody here told me to push through anything — they gave me a warm-up, a program on paper, and a coach who counted my reps out loud until I stopped bracing wrong. Four years later I carry my own kayak to the water.',
  },
  {
    name: 'Marcus Trelawney',
    initials: 'MT',
    tint: '#7dd3fc',
    role: 'Bus operator, MTA route 40',
    program: 'Masters 50+',
    tenure: 'Member since September 2019',
    milestone: 'Off two blood-pressure prescriptions',
    quote:
      'I am fifty-eight and I drive a bus for nine hours a day, so my back was the whole story. The 9:30 Masters class rebuilt my hips before it ever asked me to lift anything heavy. My doctor took me off the second prescription in January and asked what changed.',
  },
  {
    name: 'Rosalind Achebe-Whitfield',
    initials: 'RA',
    tint: '#fdba74',
    role: 'Sous chef, Hollins Market',
    program: 'Conditioning',
    tenure: 'Member since June 2023',
    milestone: 'Rowed her first sub-8:00 2k',
    quote:
      'Restaurant hours mean my week never looks the same twice, and Foundry Hill is the only gym that never made me feel guilty about it. I book what I can, the coaches adjust the program to what I actually did, and the work still adds up.',
  },
  {
    name: 'Jonah Villareal-Kim',
    initials: 'JV',
    tint: '#c4b5fd',
    role: 'Software engineer, Federal Hill',
    program: 'Foundations then Barbell Club',
    tenure: 'Member since January 2024',
    milestone: 'First strict pull-up at thirty-four',
    quote:
      'I had never touched a barbell and I was quietly terrified of the room. Foundations gave me six sessions with a coach two feet away, and by week three the bar felt like a tool instead of a test. I got my first pull-up the week before my thirty-fifth birthday.',
  },
  {
    name: 'Priscilla Naadu Mensah',
    initials: 'PN',
    tint: '#f9a8d4',
    role: 'High-school track coach, Poppleton',
    program: 'Open Training',
    tenure: 'Member since August 2018',
    milestone: 'Squats 1.75x bodyweight at forty-one',
    quote:
      'I write programs for teenagers all day, so I did not need another coach telling me what to do. I needed eight real platforms, calibrated plates, and someone to glance at my third single. That is exactly what I get here, and I have never once waited for a rack.',
  },
]

export default function MemberStories() {
  const [index, setIndex] = useState(0)

  const goPrev = () => setIndex((current) => (current - 1 + STORIES.length) % STORIES.length)
  const goNext = () => setIndex((current) => (current + 1) % STORIES.length)

  const story = STORIES[index]

  return (
    <section id="stories" data-testid="member-stories" className="bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">Member stories</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Five people, five reasons they stayed
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              These are members of the current roster, quoted with permission and with the numbers
              they were happy to have printed. Page through them — nobody here was an athlete first.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              data-testid="story-prev"
              aria-label="Previous member story"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-slate-100 transition hover:border-lime-300 hover:text-lime-300"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={goNext}
              data-testid="story-next"
              aria-label="Next member story"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-slate-100 transition hover:border-lime-300 hover:text-lime-300"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl sm:p-12">
          {story && (
            <article data-testid="story-slide" aria-live="polite">
              <span className="text-lime-300">
                <QuoteMark />
              </span>
              <blockquote
                data-testid="story-quote"
                className="mt-5 text-xl leading-relaxed text-slate-100 sm:text-2xl sm:leading-relaxed"
              >
                {story.quote}
              </blockquote>

              <div className="mt-9 flex flex-wrap items-center gap-5 border-t border-white/10 pt-8">
                <MemberPortrait tint={story.tint} initials={story.initials} />
                <div className="min-w-[14rem]">
                  <p data-testid="story-name" className="text-lg font-bold text-white">
                    {story.name}
                  </p>
                  <p className="text-sm text-slate-400">{story.role}</p>
                  <p className="mt-1 text-sm text-slate-400">{story.tenure}</p>
                </div>
                <dl className="ml-auto grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <dt className="text-[11px] uppercase tracking-widest text-slate-400">Trains in</dt>
                    <dd className="mt-1 font-semibold text-lime-300">{story.program}</dd>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <dt className="text-[11px] uppercase tracking-widest text-slate-400">Moved</dt>
                    <dd className="mt-1 font-semibold text-lime-300">{story.milestone}</dd>
                  </div>
                </dl>
              </div>
            </article>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <ul className="flex items-center gap-3">
            {STORIES.map((option, position) => (
              <li key={option.name}>
                <button
                  type="button"
                  data-testid="story-dot"
                  onClick={() => setIndex(position)}
                  aria-current={position === index}
                  aria-label={`Show the story from ${option.name}`}
                  className={
                    position === index
                      ? 'h-2.5 w-8 rounded-full bg-lime-300 transition'
                      : 'h-2.5 w-2.5 rounded-full bg-white/25 transition hover:bg-white/50'
                  }
                />
              </li>
            ))}
          </ul>
          <p data-testid="story-position" className="text-sm font-semibold tracking-widest text-slate-400">
            {index + 1} / {STORIES.length}
          </p>
        </div>
      </div>
    </section>
  )
}
