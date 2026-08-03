const STORIES = [
  {
    quote:
      'I joined at forty-one having never lifted anything heavier than a class set of readers. Eighteen months later I deadlift my own body weight for five and I carry the shopping up two flights without thinking about it. Nobody here has ever once talked to me about my body.',
    name: 'Danielle Fontaine',
    role: 'Primary school teacher, Coburg',
    stat: 'Member since 2023',
  },
  {
    quote:
      'Couriering wrecked my lower back by thirty. Ines built the return-to-lifting hours around what my physio actually wrote down, and Marcus kept the loads slower than I wanted. First winter in six years I have not lost a fortnight of work.',
    name: 'Wes Ikeda',
    role: 'Bike courier, Fitzroy',
    stat: 'Back to full shifts in 14 weeks',
  },
  {
    quote:
      'I am fifty-eight and I was told, in those words, to take it easy. Priya asked what I wanted instead, wrote it down and had me squatting to a box in week one. The 6am crowd now saves me a rack. It is the only appointment in my week I never move.',
    name: 'Margaret Ng',
    role: 'Retired nurse, Brunswick East',
    stat: 'Trains three mornings a week',
  },
]

export function MemberStories() {
  return (
    <section id="stories" className="bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400">
            Members
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Teachers, couriers, nurses, nobody&rsquo;s idea of an athlete
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-300">
            The median Northline member is forty-three and came to us after something stopped
            working. These three said we could print their names.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              data-testid="member-story"
              className="flex flex-col rounded-2xl border border-stone-800 bg-stone-900 p-7"
            >
              <svg viewBox="0 0 40 30" width="34" height="26" aria-hidden="true">
                <path
                  d="M2 28c0-10 4-17 12-20l2 5c-4 2-6 5-6 8h6v15H2zM22 28c0-10 4-17 12-20l2 5c-4 2-6 5-6 8h6v15H22z"
                  fill="#fbbf24"
                  opacity="0.55"
                  transform="translate(0,-13)"
                />
              </svg>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-stone-200">
                &ldquo;{story.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 border-t border-stone-800 pt-5">
                <p className="text-sm font-bold text-stone-100">{story.name}</p>
                <p className="mt-1 text-sm text-stone-400">{story.role}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-amber-400">
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
