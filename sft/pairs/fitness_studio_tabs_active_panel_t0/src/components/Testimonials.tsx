import { StarIcon } from './icons'

const QUOTES = [
  {
    quote:
      'I had been going to a big gym for six years and could not have told you a single number about myself. Fourteen months here and my 2k is down from 8:41 to 7:58, and I know exactly which eight weeks did it. Ines rewrote my block twice when work fell apart and never once made me feel like I had failed at it.',
    name: 'Priya Raghunathan',
    role: 'Member since 2023 · Hospital pharmacist',
    initials: 'PR',
  },
  {
    quote:
      'I came in with a lower back that went twice a year and a physio who had run out of ideas. Callum spent my first six weeks doing what felt like almost nothing, and I have not had an episode since the spring of 2024. I lift more now at forty-eight than I did at thirty.',
    name: 'Douglas Ferreira',
    role: 'Member since 2022 · Structural engineer',
    initials: 'DF',
  },
  {
    quote:
      'Our masters eight trains here every winter and it is the only indoor programme we have found that treats us like rowers rather than like a spin class with handles. Three of us took club records off the back of last year’s block. The sauna is also, frankly, the reason half the crew turns up.',
    name: 'Helen Marchetti',
    role: 'Bellhaven Masters · Crew captain',
    initials: 'HM',
  },
]

export function Testimonials() {
  return (
    <section id="members" className="bg-[#062b30] text-[#e9f2f1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8fc0c5]">Members</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#faf6ef] md:text-5xl">
            What eight weeks at a time adds up to
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#cfe0e0]">
            We asked three members who have been here longest to say what actually changed. None of
            them mentioned the playlist.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              className="flex h-full flex-col rounded-3xl border border-[#8fc0c5]/20 bg-[#0b3a41]/60 p-8"
            >
              <div className="flex gap-1 text-[#f3b27a]">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-[#e2eeed]">
                “{entry.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#8fc0c5]/20 pt-5">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#12626c] text-sm font-semibold text-[#faf6ef]"
                  aria-hidden="true"
                >
                  {entry.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#faf6ef]">{entry.name}</span>
                  <span className="block text-xs text-[#8fc0c5]">{entry.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
