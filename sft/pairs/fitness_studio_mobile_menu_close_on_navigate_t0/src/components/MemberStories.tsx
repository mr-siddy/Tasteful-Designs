const STORIES = [
  {
    quote:
      'I do twelve-hour shifts and I have been told to strengthen my back by roughly every doctor I have ever worked beside. Sundial is the first place that asked what my week actually looks like before selling me anything. I book two classes on a Sunday night around the roster and I have not had to take a day off with my back in fourteen months.',
    name: 'Marguerite Sowande',
    detail: '46, charge nurse at Blackstone General · member since 2022',
  },
  {
    quote:
      'Forty-one years standing on a deck gives you a hip that does not rotate and a set of opinions about exercise classes. Dara measured me, told me the truth, and put me in a two-person block for six weeks. I can now get down to the floor to play with my granddaughter and get back up without using the couch.',
    name: 'Colin Tsukamoto',
    detail: '61, retired Narragansett Bay ferry captain · member since 2023',
  },
  {
    quote:
      'I throw pots all day with my arms above my head, so my shoulders were finished by thirty. What I did not expect was that fixing it would be mostly breathing and ribcage work in the loft. Yuki spent three weeks on my exhale before she let me load anything, and it was the right call.',
    name: 'Hattie Brannigan',
    detail: '33, ceramicist at the Almond Court studios · member since 2021',
  },
]

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" className="h-7 w-9" aria-hidden="true">
      <path
        d="M4 30 C 4 14, 10 4, 20 2 L20 10 C 14 12, 12 18, 14 20 L20 20 L20 30 Z"
        fill="#C2571F"
        opacity="0.8"
      />
      <path
        d="M22 30 C 22 14, 28 4, 38 2 L38 10 C 32 12, 30 18, 32 20 L38 20 L38 30 Z"
        fill="#C2571F"
        opacity="0.5"
      />
    </svg>
  )
}

export function MemberStories() {
  return (
    <section id="stories" className="bg-[#F7F1E6]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
            Members
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Three people who were sceptical first
          </h2>
        </div>
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <li
              key={story.name}
              className="flex flex-col rounded-3xl border border-[#E3D6BE] bg-[#FFFCF5] p-8 shadow-sm"
            >
              <QuoteMark />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-[#3D372E]">
                “{story.quote}”
              </blockquote>
              <div className="mt-6 border-t border-[#EFE4CE] pt-5">
                <p className="text-base font-semibold tracking-tight">{story.name}</p>
                <p className="mt-1 text-xs text-[#7A7263]">{story.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
