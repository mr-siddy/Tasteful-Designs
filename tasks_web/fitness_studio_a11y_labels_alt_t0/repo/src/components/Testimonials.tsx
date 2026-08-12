import { SectionHeading } from './PageKit'

const QUOTES = [
  {
    quote:
      'I came in at forty-three having never picked up a barbell, mostly because my back had been going out twice a year since my second kid. Nadia spent the whole first session watching me bend over. Three years later I deadlift 205 and my back has not gone out once.',
    name: 'Della Marchetti',
    detail: 'Hospice nurse, Port Richmond · member since 2022',
  },
  {
    quote:
      'I drove a bus for thirty-one years and I expected a gym full of twenty-five year olds shouting. What I found was the Thursday masters group and four people my age arguing about the Phillies in the lounge afterwards. I am sixty-two and I squat below parallel now, which my doctor did not believe.',
    name: 'Ray Sunderland',
    detail: 'Retired SEPTA operator, Fishtown · member since 2019',
  },
  {
    quote:
      'After my shoulder reconstruction the hospital gave me a printout of band exercises and nothing else. Priya read the operative report, rang my surgeon, and had me pressing an empty bar overhead eleven weeks post-op. Nobody else was willing to touch it.',
    name: 'Joanne Pryce',
    detail: 'Ceramicist, Kensington · member since 2021',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Members"
          title="Three people who are still here"
          blurb="Every quote below is from somebody who has trained at Coalhouse for at least three years, and every one of them agreed to have their name printed."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              data-testid="testimonial"
              className="flex h-full flex-col rounded-3xl border border-[#12141A]/10 bg-[#F7F3EC] p-8"
            >
              <svg viewBox="0 0 32 24" className="h-6 w-8 text-[#E1552B]" aria-hidden focusable="false">
                <path
                  d="M0 24V12C0 5.4 4.6 0.6 12 0v5.4C8 6.4 6 8.6 6 12h6v12H0zm20 0V12C20 5.4 24.6 0.6 32 0v5.4c-4 1-6 3.2-6 6.6h6v12H20z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#12141A]/85">
                {entry.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#12141A]/10 pt-5">
                <p className="text-sm font-black tracking-tight text-[#12141A]">{entry.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[#12141A]/50">{entry.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
