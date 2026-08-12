import { QuoteMark, StarIcon } from './Icons'

const STORIES = [
  {
    quote:
      'I had not been to a dentist since 2009 and I told them so on the phone. Nadia gave me the 8am quiet slot, showed me the whole plan on paper before touching anything, and the first appointment cost exactly the $130 the website said it would. Three visits later I am done.',
    name: 'Rachel Okonjo',
    detail: 'Bookbinder, Marlowe Quarter · patient since 2022',
  },
  {
    quote:
      'Cracked a molar on a Sunday and rang at 8:02 on the Monday. They had me in at 9:20, triaged it for $85, and I had a milled crown cemented the same afternoon. My old practice would have had me in a temporary until the following month.',
    name: 'Daniel Ferreira',
    detail: 'Ferry engineer · patient since 2019',
  },
  {
    quote:
      'What sold me was the price list being on the website at all. I brought both boys in for their first checkups, paid $60 each, and nobody tried to sell me anything on the way out. Alina got my eldest to actually enjoy having his teeth cleaned, which I did not think was possible.',
    name: 'Priya Venkataraman',
    detail: 'Parent of two · household membership since 2021',
  },
]

export function PatientStories() {
  return (
    <section id="stories" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2AA79B]">
            Patient stories
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12263F] sm:text-4xl">
            Three people who had put it off for years
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              className="flex flex-col rounded-2xl border border-[#12263F]/8 bg-[#F1F5F7] p-7"
            >
              <QuoteMark className="h-8 w-8 text-[#2AA79B]/45" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-[#12263F]/85">
                {story.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#12263F]/8 pt-5">
                <span className="mb-2 flex text-[#F2B45B]" aria-hidden="true">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
                <p className="font-semibold tracking-tight text-[#12263F]">{story.name}</p>
                <p className="mt-1 text-sm text-[#5B7089]">{story.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
