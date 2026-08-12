import { QuoteMark, StarRow } from './Icons'

const STORIES = [
  {
    quote:
      'I had not sat in a dentist chair since 2009 and I cried in the car park before the first appointment. Priya spent the whole forty minutes just looking and talking. Nothing was done that day. I have had eleven appointments since.',
    name: 'Hannah Vance',
    detail: 'Registered 2022 · Fernbank',
  },
  {
    quote:
      'My crown snapped on a Tuesday morning and I had a wedding on the Saturday. They scanned it at nine, milled the replacement in the back room and I was out by half eleven with the shade matched. I still cannot tell which tooth it is.',
    name: 'Owen Brackley',
    detail: 'Same-day ceramic crown',
  },
  {
    quote:
      'Two kids, both under ten, both convinced the dentist was a punishment. Marta let them ride the chair up and down for the first visit and did nothing else. Now they argue about whose turn it is to go first.',
    name: 'Rosalind Ade',
    detail: 'Household membership',
  },
]

export function PatientStories() {
  return (
    <section id="stories" className="bg-[#FBF7F0] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B98B22]">Patient stories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123B36] sm:text-4xl">
              Three people who put it off for years
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <StarRow />
            <span className="text-sm font-semibold text-[#123B36]">4.9 average · 612 reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              data-testid="story-card"
              className="flex h-full flex-col rounded-2xl border border-[#123B36]/10 bg-white p-8 shadow-sm"
            >
              <span className="text-[#E8A020]">
                <QuoteMark />
              </span>
              <blockquote className="mt-5 flex-1 leading-relaxed text-[#33443D]">{story.quote}</blockquote>
              <figcaption className="mt-6 border-t border-[#123B36]/10 pt-5">
                <p className="font-semibold text-[#123B36]">{story.name}</p>
                <p className="mt-1 text-sm text-[#8A7A5C]">{story.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
