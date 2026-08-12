const STORIES = [
  {
    quote:
      'I had not been to a dentist since 2014 and I genuinely expected a lecture. What I got was fifteen minutes of talking with the chair upright and a printed plan for £612 that I could actually read. It took four visits and none of them hurt.',
    name: 'Dermot Vasey',
    detail: 'Registered 2024 · Stone Reach',
    initials: 'DV',
  },
  {
    quote:
      'A molar broke on a Tuesday morning while I was eating toast. I rang at twenty past eight, was in the chair by half eleven, and the crown was milled and fitted before I picked the kids up. It cost exactly what the board said it would.',
    name: 'Priya Ellwood',
    detail: 'Registered 2019 · Wyeford Quarter',
    initials: 'PE',
  },
  {
    quote:
      'Two children, one Saturday morning, back-to-back slots in the same room, and both check-ups free. My youngest asked when we were coming back. I have never once been made to feel awkward about the noise they make.',
    name: 'Callum Nkemelu',
    detail: 'Registered 2021 · Halyard',
    initials: 'CN',
  },
]

export function PatientStories() {
  return (
    <section id="stories" className="bg-[#332A56]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A99CE0]">
            In their words
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Three patients, three very different starts
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#C7BEEE]">
            Taken from the review book at reception and reprinted with permission. All three were
            happy to have their names on them.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              data-testid="patient-story"
              className="flex h-full flex-col rounded-3xl bg-[#3F3568] p-8 shadow-lg"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 text-[#E4735B]">
                <path
                  d="M12 8c-4 1.5-7 5-7 10 0 4 2.5 6 5.5 6S16 22 16 19s-2-5-4.5-5c-.6 0-1.2.1-1.7.3C10.5 12 12 10 14 9l-2-1Zm14 0c-4 1.5-7 5-7 10 0 4 2.5 6 5.5 6S30 22 30 19s-2-5-4.5-5c-.6 0-1.2.1-1.7.3C24.5 12 26 10 28 9l-2-1Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-[#EDE9F8]">
                {story.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-white/15 pt-6">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#E4735B] text-sm font-semibold text-white">
                  {story.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{story.name}</span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-[#A99CE0]">
                    {story.detail}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
