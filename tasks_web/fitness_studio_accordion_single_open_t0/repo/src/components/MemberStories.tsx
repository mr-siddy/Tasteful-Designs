const STORIES = [
  {
    quote:
      'I had walked past this place for two years assuming it was for people who already lifted. Six months later I deadlift 120 kilos and I know exactly why my back stopped hurting. Nobody ever made me feel like the beginner I was.',
    name: 'Priya Nandakumar',
    detail: 'Member since March · Barbell Foundations, then Strong Hour',
    stat: '120 kg deadlift',
  },
  {
    quote:
      'After my hip replacement the hospital gave me a photocopied sheet of exercises and a shrug. Tomas rebuilt me over twelve weeks and sent notes to my surgeon the whole way. I carried my own suitcase through the airport in June.',
    name: 'Gerald Okonkwo',
    detail: 'Age 68 · Return to Lifting, now Masters 55+',
    stat: '12-week protocol',
  },
  {
    quote:
      'The bit that keeps me here is the loft. I lift heavy on Wednesday, sit in the sauna for fifteen minutes, and turn up on Friday actually able to train. That never happened at the big chain gym across the river.',
    name: 'Sofia Brandt',
    detail: 'Member since 2021 · Full floor and Conditioning Club',
    stat: '4 years training',
  },
]

export function MemberStories() {
  return (
    <section className="border-y border-[#E2D8C6] bg-[#EFE6D8]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A7F6C]">Member stories</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#123B31]">
          Three people who walked past the door for a while first
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STORIES.map((s) => (
            <figure
              key={s.name}
              data-testid="member-story"
              className="flex flex-col rounded-3xl border border-[#D6C8AE] bg-[#FBF7F1] p-8 shadow-sm"
            >
              <svg viewBox="0 0 40 32" className="h-8 w-10" aria-hidden="true">
                <path
                  d="M0 32V18C0 8 5 2 15 0l2 6c-5 2-7 5-7 9h7v17zm23 0V18C23 8 28 2 38 0l2 6c-5 2-7 5-7 9h7v17z"
                  fill="#D2683F"
                  opacity="0.5"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#3F3A31]">
                {s.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-[#E2D8C6] pt-5">
                <span className="block text-sm font-semibold text-[#1B1A17]">{s.name}</span>
                <span className="mt-1 block text-xs leading-relaxed text-[#6B6355]">{s.detail}</span>
                <span className="mt-3 inline-block rounded-full bg-[#123B31] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E8A33D]">
                  {s.stat}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
