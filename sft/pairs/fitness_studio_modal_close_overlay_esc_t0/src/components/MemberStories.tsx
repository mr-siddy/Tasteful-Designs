import { QuoteIcon, StarIcon } from './Icons'

const STORIES = [
  {
    quote:
      'I had not exercised in a room with other people since school, and I spent the whole week before my intro ride inventing reasons not to come. Nadia set my bike up, told me exactly which interval would feel unreasonable, and then it did — and it was fine. Two years later I am on the 6:15 three times a week.',
    name: 'Hannah Beecroft',
    detail: 'Pharmacist · member since 2023 · 284 rides',
    stat: '284 rides',
  },
  {
    quote:
      'Ride + Lift is the only reason I still train at all. One hour, one trip, half of it on the bike and half of it under a bar, with someone actually watching the bar. My deadlift went up thirty kilos in a year while I was also riding more than I ever have.',
    name: 'Femi Adeyemi',
    detail: 'Site manager · member since 2022 · Ride + Lift regular',
    stat: '+30 kg',
  },
  {
    quote:
      'I came back six months after a knee reconstruction and expected to be handed a leaflet. Instead Dermot rebuilt my intro ride around what the surgeon had written, capped my resistance for eight weeks, and checked in after every single class. That is not normal at a gym.',
    name: 'Rosalind Pike',
    detail: 'Secondary school teacher · member since 2021 · Reset and Long Haul',
    stat: '8-week return',
  },
]

export function MemberStories() {
  return (
    <section id="stories" className="bg-[#101826] text-[#faf5ee]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#efa63c]">
            812 reviews, and these three keep coming up
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            What members say when nobody is selling
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              data-testid="member-story"
              className="flex flex-col rounded-3xl border border-[#faf5ee]/12 bg-[#1b2436] p-7"
            >
              <QuoteIcon className="h-7 w-7 text-[#d94a2b]" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#faf5ee]/80">
                {story.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#faf5ee]/12 pt-5">
                <h3 className="text-base font-bold tracking-tight text-[#faf5ee]">{story.name}</h3>
                <p className="mt-1 text-xs text-[#faf5ee]/55">{story.detail}</p>
                <p className="mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#efa63c]">
                  <span className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5" />
                    ))}
                  </span>
                  {story.stat}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
