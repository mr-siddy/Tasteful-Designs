const VOICES = [
  {
    quote:
      'We queued forty minutes on the standing bench with a beer and I would do it again next week. The cumin lamb turned up first and the conversation stopped for a while.',
    name: 'Rosalind Achebe',
    detail: 'Fourth visit, lives two streets over on Kiln',
  },
  {
    quote:
      'I booked the long table for my father’s seventieth and asked them to keep the heat sensible. They sent the Full Lantern with the mapo dialled down and nobody, including him, noticed a thing missing.',
    name: 'Peter Lindqvist',
    detail: 'Booked the long table in March',
  },
  {
    quote:
      'As the only vegetarian in a group of six I have low expectations of places like this. I ate the aubergine, the king oyster skewers and most of somebody else’s sesame noodles.',
    name: 'Nadia Ferreira',
    detail: 'Regular since the second month',
  },
]

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" aria-hidden="true" className="h-8 w-8 fill-[#E4572E]/35">
      <path d="M0 32V18C0 8 5 1.6 15 0l2 5c-5 1.6-7.6 4.6-7.8 9H16v18zm23 0V18c0-10 5-16.4 15-18l2 5c-5 1.6-7.6 4.6-7.8 9H39v18z" />
    </svg>
  )
}

export function GuestVoices() {
  return (
    <section id="voices" className="bg-[#FBF5EC] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2F7A6B]">
            Left in the book by the door
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#16110F] sm:text-5xl">
            What guests keep telling us
          </h2>
        </div>

        <div data-testid="voice-grid" className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {VOICES.map((voice) => (
            <figure
              key={voice.name}
              data-testid="voice-card"
              className="flex h-full flex-col rounded-2xl border border-[#16110F]/10 bg-white p-7 shadow-sm shadow-[#16110F]/5"
            >
              <QuoteMark />
              <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-[#16110F]/85">
                {voice.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#16110F]/10 pt-5">
                <p className="font-semibold text-[#16110F]">{voice.name}</p>
                <p className="mt-1 text-sm text-[#16110F]/55">{voice.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
