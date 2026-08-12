import { QuoteMark, StarIcon } from './Icons'

const STORIES = [
  {
    quote:
      'Eleven years of avoiding it, and the thing that got me through the door was being told I could come and just sit in the room first. I did. Then I booked properly a fortnight later. Four appointments in, and nothing has hurt yet.',
    name: 'Devon Achebe',
    detail: 'Kelso Park · patient since 2021',
  },
  {
    quote:
      'My crown was scanned, milled and glued in before lunch. My old practice had me in a temporary for three weeks and it fell out twice on the train. I did not know the one-visit version existed.',
    name: 'Priya Raman',
    detail: 'Fenwick Road · patient since 2019',
  },
  {
    quote:
      'Marta found us a Thursday evening slot for all three kids on the same night, which if you have three kids you will understand is the whole review right there. Nadia showed the eight-year-old how to brush without once making her feel stupid.',
    name: 'Tomas Lindqvist',
    detail: 'Family Lantern member since 2022',
  },
]

export default function PatientStories() {
  return (
    <section id="stories" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2704a]">
            Patients
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#152046] sm:text-4xl">
            Three we asked if we could print
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#1f2a4d]/75">
            These are real reviews left on the practice page, quoted in full with permission
            and with nothing trimmed out of the middle. The average across all 1,142 of them
            is 4.9, and we publish the one-star ones too.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <li
              key={story.name}
              className="flex flex-col rounded-3xl border border-[#152046]/10 bg-[#faf6f0] p-8 shadow-sm"
            >
              <QuoteMark className="h-8 w-8 text-[#2b3a7a]" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#1f2a4d]/85">
                {story.quote}
              </blockquote>
              <div className="mt-6 border-t border-[#152046]/10 pt-5">
                <span className="flex gap-0.5 text-[#f2704a]">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-[#152046]">{story.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#2b3a7a]/60">
                  {story.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
