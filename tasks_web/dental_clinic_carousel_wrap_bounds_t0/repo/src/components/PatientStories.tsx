import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, QuoteGlyph, StarRow } from './Icons'

type Story = {
  quote: string
  name: string
  detail: string
  treatment: string
  registered: string
}

const STORIES: Story[] = [
  {
    quote:
      'I had not been to a dentist in eleven years and I was genuinely frightened of being told off. Nobody told me off. Neve went through what was actually there, wrote down four options with the prices next to them, and let me go home and think about it for a fortnight.',
    name: 'Marta Kowalczyk',
    detail: 'Fishmonger on the quay',
    treatment: 'Two fillings and a hygienist course',
    registered: 'Registered since 2019',
  },
  {
    quote:
      'My denture snapped on a Tuesday morning halfway through breakfast. I walked it down at half nine, Bram had it clamped up before I finished my tea, and I collected it at four the same day. Try getting that out of a chain practice.',
    name: 'Alan Prideaux',
    detail: 'Retired harbourmaster',
    treatment: 'Same-day denture repair',
    registered: 'Registered since 2003',
  },
  {
    quote:
      'The implant took fourteen weeks from the first scan to the crown going on, and I saw the same dentist at every single appointment. What sold me was that they talked me out of doing three at once and told me to start with the one that was actually bothering me.',
    name: 'Deborah Finch',
    detail: 'Head teacher, Fenn Bay Primary',
    treatment: 'Single implant, lower left',
    registered: 'Registered since 2016',
  },
  {
    quote:
      'Our youngest screamed the building down at his first appointment somewhere else. Here they gave him the chair to ride up and down for ten minutes and counted his teeth with a mirror and no instruments. Second visit he opened his mouth without being asked.',
    name: 'Sam Okonjo',
    detail: 'Father of three, Marram Lane',
    treatment: 'Family check-ups on the Wednesday clinic',
    registered: 'Registered since 2021',
  },
  {
    quote:
      'I cracked a molar on a Sunday and rang expecting an answerphone. Someone actually picked up, put me in the eight o’clock slot on Monday, and the £55 came straight off the crown afterwards, exactly as they said it would on the phone.',
    name: 'Priya Raghunathan',
    detail: 'Ferry engineer',
    treatment: 'Emergency visit and a crown',
    registered: 'Registered since 2022',
  },
]

export function PatientStories() {
  const [index, setIndex] = useState(0)
  const total = STORIES.length

  // Step the slider to a position. The arrows hand us index - 1 and index + 1,
  // the dots hand us an absolute position.
  const goTo = (target: number) => setIndex(target)

  return (
    <section id="stories" className="relative overflow-hidden bg-[#F1E7DA] py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3FA394]/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A7C70]">In their words</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2E4A] sm:text-4xl">
            Five people who let us print what they said
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3B4A54]">
            These are lifted straight off our review page and used with permission — first names, surnames, jobs and
            all. Step through them with the arrows, or jump to whichever one sounds like your situation.
          </p>
        </div>

        <div
          data-testid="stories-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient stories"
          className="mt-12 rounded-3xl border border-[#0F2E4A]/10 bg-[#FAF6F1] p-6 shadow-lg shadow-[#0F2E4A]/5 sm:p-10"
        >
          <div className="min-h-[300px] sm:min-h-[260px]" aria-live="polite">
            {STORIES.map((story, i) => (
              <figure
                key={story.name}
                data-testid="story-slide"
                data-slide-index={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
                hidden={i !== index}
              >
                <span className="text-[#F2683C]/30">
                  <QuoteGlyph />
                </span>
                <blockquote className="mt-4 text-xl leading-relaxed text-[#22384A] sm:text-2xl sm:leading-relaxed">
                  {story.quote}
                </blockquote>
                <figcaption className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#0F2E4A]/10 pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F2E4A] text-base font-bold text-[#FAF6F1]">
                    {story.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-[#0F2E4A]">{story.name}</span>
                    <span className="block text-sm text-[#4A5A64]">{story.detail}</span>
                  </span>
                  <span className="ml-auto text-right">
                    <span className="block text-sm font-medium text-[#2A7C70]">{story.treatment}</span>
                    <span className="block text-xs uppercase tracking-widest text-[#8A7A66]">{story.registered}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-[#0F2E4A]/10 pt-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                data-testid="stories-prev"
                aria-label="Previous patient story"
                onClick={() => goTo(index - 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0F2E4A]/20 text-[#0F2E4A] transition hover:border-[#F2683C] hover:text-[#F2683C]"
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                data-testid="stories-next"
                aria-label="Next patient story"
                onClick={() => goTo(index + 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0F2E4A]/20 text-[#0F2E4A] transition hover:border-[#F2683C] hover:text-[#F2683C]"
              >
                <ArrowRightIcon />
              </button>
            </div>

            <p data-testid="stories-counter" className="text-sm font-semibold tabular-nums text-[#0F2E4A]">
              {index + 1} of {total}
            </p>

            <ul className="ml-auto flex items-center gap-2.5">
              {STORIES.map((story, i) => (
                <li key={story.name}>
                  <button
                    type="button"
                    data-testid="story-dot"
                    aria-label={`Show story ${i + 1}, ${story.name}`}
                    aria-current={i === index ? 'true' : undefined}
                    onClick={() => goTo(i)}
                    className={
                      i === index
                        ? 'h-2.5 w-8 rounded-full bg-[#F2683C] transition-all'
                        : 'h-2.5 w-2.5 rounded-full bg-[#0F2E4A]/25 transition-all hover:bg-[#0F2E4A]/50'
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
          <span className="text-[#F7A93C]">
            <StarRow className="h-4 w-4" />
          </span>
          <p className="text-sm text-[#3B4A54]">
            847 reviews across Google and Healthwatch, averaging 4.9. We publish the one-star ones too.
          </p>
        </div>
      </div>
    </section>
  )
}
