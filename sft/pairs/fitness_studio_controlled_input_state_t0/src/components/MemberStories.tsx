const STORIES = [
  {
    quote:
      'I had never picked up a barbell and I was fairly sure everyone would watch me fail. Three sessions in, Tobias had written 42.5kg on my sheet and I did it twice. Nobody watched. That is the whole trick of the place.',
    name: 'Ilse Bergström',
    role: 'Ceramicist, member since 2022',
    metric: 'Deadlift 40kg to 105kg',
  },
  {
    quote:
      'Two kids, shift work, a back that goes out if I sneeze wrong. Priya rewrote my block around a fortnight of night shifts without me asking. I have trained through three winters now, which has never happened before.',
    name: 'Andrew Quist',
    role: 'Paramedic, member since 2019',
    metric: 'Nine months without a flare-up',
  },
  {
    quote:
      'I joined at sixty-one to stop being wobbly on ladders. Marguerite had me carrying two 24kg kettlebells the length of the shed by autumn. My grandson asked me to spot him, which I consider a formal knighthood.',
    name: 'Colleen Baptiste',
    role: 'Retired schoolteacher, member since 2021',
    metric: 'Farmer carry 48kg for 20m',
  },
]

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" className="h-8 w-10 text-[#D9622B]" aria-hidden="true">
      <path
        d="M0 32V18C0 8 6 1 16 0v6c-5 1-8 4-8 8h8v18zm22 0V18C22 8 28 1 38 0v6c-5 1-8 4-8 8h8v18z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  )
}

export function MemberStories() {
  return (
    <section id="stories" className="bg-[#F4F1EA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#D9622B]">
            Members, in their own words
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Three people who did not think this was for them
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <li
              key={story.name}
              data-testid="member-story"
              className="flex flex-col rounded-3xl border border-[#10161C]/10 bg-white p-8"
            >
              <QuoteMark />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[#2A3630]">
                {story.quote}
              </blockquote>
              <div className="mt-7 border-t border-[#10161C]/10 pt-5">
                <p className="text-sm font-black tracking-tight">{story.name}</p>
                <p className="text-sm text-[#6E7A72]">{story.role}</p>
                <p className="mt-3 inline-block rounded-full bg-[#10161C] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#C7F04A]">
                  {story.metric}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
