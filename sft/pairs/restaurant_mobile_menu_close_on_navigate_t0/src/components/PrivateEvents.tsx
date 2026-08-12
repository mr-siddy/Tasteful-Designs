import { ArrowIcon } from './Icons'

const SPACES = [
  {
    name: 'The Loft',
    seats: 'Up to 28 seated, 40 standing',
    price: 'From $2,400 food and beverage minimum',
    body: 'The upstairs room looks down over the hearth through a cut in the floor, so your table hears the fire without sitting in the middle of service. Its own bar, its own service team, and a door you can close.',
    details: [
      'Family-style menu written with you, three courses from the fire',
      'Available Wednesday to Sunday from 5pm, or all day on Mondays',
      'Wine pairings from our Pacific Northwest and Basque list',
    ],
  },
  {
    name: 'The Chef’s Counter',
    seats: '12 seats in a single row',
    price: '$95 per guest, five courses',
    body: 'Twelve stools facing the coals, close enough that you will feel the heat when the grate comes up. Nadia and Tomás cook and talk you through every course as it lands. The best seat we have.',
    details: [
      'Thursday to Saturday, one seating at 6pm and one at 8:30pm',
      'Vegetable-led version available with 24 hours notice',
      'Buy out all twelve seats for a private counter dinner',
    ],
  },
]

export default function PrivateEvents() {
  return (
    <section id="events" className="bg-[#12261F] text-[#F7F1E8]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#E08B4F]">Private events</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Two rooms to take over
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#F7F1E8]/80">
            Rehearsal dinners, birthdays, and the occasional company night that ends with everyone
            standing around the fire. We host roughly ninety private dinners a year, and Marguerite
            Boisvert plans every one of them personally.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {SPACES.map((space) => (
            <article
              key={space.name}
              className="flex flex-col rounded-[1.75rem] border border-[#F7F1E8]/12 bg-[#F7F1E8]/5 p-9"
            >
              <h3 className="font-serif text-3xl">{space.name}</h3>
              <p className="mt-2 text-sm text-[#E08B4F]">{space.seats}</p>
              <p className="mt-5 text-base leading-relaxed text-[#F7F1E8]/80">{space.body}</p>
              <ul className="mt-6 space-y-3 border-t border-[#F7F1E8]/12 pt-6">
                {space.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm text-[#F7F1E8]/75">
                    <svg className="mt-0.5 h-4 w-4 flex-none text-[#E08B4F]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm font-medium text-[#F7F1E8]">{space.price}</p>
              <a
                href="#reserve"
                className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-[#E08B4F] px-6 py-3 text-sm font-semibold text-[#E08B4F] transition-colors hover:bg-[#E08B4F] hover:text-[#12261F]"
              >
                Ask about {space.name}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
