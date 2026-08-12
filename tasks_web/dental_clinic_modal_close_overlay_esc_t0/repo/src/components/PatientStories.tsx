import { StarIcon } from './Icons'

const STORIES = [
  {
    quote:
      'I had not sat in a dental chair since 2011 and I was honest about why. Nobody lectured me. Dr. Okonkwo booked me at seven in the morning so the place would be quiet, gave me the headphones, and we did it in four visits over a year. The bill was the number she wrote down in February.',
    name: 'Kenji Watanabe',
    role: 'Boat builder, Fishermen’s Terminal',
  },
  {
    quote:
      'Cracked a molar on a Sunday at the end of a night shift. They saw me Monday at seven, scanned it, milled the crown while I slept in the chair, and I was home by ten. I have worked in healthcare for eleven years and I have rarely seen anything run that cleanly.',
    name: 'Adaeze Nwosu',
    role: 'ICU nurse, night rotation',
  },
  {
    quote:
      'We are a two-person coffee shop with no dental plan, so the membership was the thing that got us back in. Forty-nine dollars a month, three cleanings, and Marisol quoted my husband’s bridge to the dollar before he agreed to it. That never happens.',
    name: 'Marta Lindqvist',
    role: 'Owner, Sunset Hill Coffee',
  },
]

export function PatientStories() {
  return (
    <section id="stories" aria-labelledby="stories-heading" className="bg-[#F4EDE3]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">In their words</p>
          <h2 id="stories-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0B2540] sm:text-4xl">
            Patients who let us print their names
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#42566A]">
            These are real reviews from real neighbours, used with permission and unedited apart from
            trimming for length. The full set lives on our public listing, including the two-star one
            about parking, which is fair.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              className="flex flex-col rounded-3xl border border-[#E4D8C8] bg-white p-8 shadow-sm"
            >
              <div className="flex gap-1 text-[#C2703D]" aria-label="Five out of five stars">
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-[#42566A]">“{story.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-[#EFE6DA] pt-5">
                <span className="block text-sm font-semibold text-[#0B2540]">{story.name}</span>
                <span className="mt-0.5 block text-xs text-[#9A8973]">{story.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
