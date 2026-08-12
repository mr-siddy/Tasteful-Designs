const TEAM = [
  {
    name: 'Wen Tso-lin',
    role: 'Chef-owner',
    initials: 'WT',
    tint: '#E4572E',
    bio: 'Grew up in her family’s breakfast shop in Taipei, then eleven years on wok stations across two cities. She works the third ring every service and calls the board at five.',
  },
  {
    name: 'Dai Okonjo',
    role: 'Front of house & drinks',
    initials: 'DO',
    tint: '#2F7A6B',
    bio: 'Runs the room, the waitlist and a tea-and-mezcal list nobody asked for and everybody now orders. If the queue is moving, that is Dai.',
  },
  {
    name: 'Marisol Vance',
    role: 'Noodle bench',
    initials: 'MV',
    tint: '#F5A623',
    bio: 'Rolls two doughs a day by the window and has opinions about alkalinity that she will share with anyone who slows down near the bench.',
  },
  {
    name: 'Theo Brandt-Ruiz',
    role: 'Charcoal & pickles',
    initials: 'TB',
    tint: '#8C4A2F',
    bio: 'Keeps the skewer trough lit and the forty-one crocks downstairs labelled, tasted and turned. Started here washing dishes on a Thursday.',
  },
]

const NIGHT = [
  {
    step: '01',
    time: '2:00pm',
    title: 'The dough goes up',
    detail:
      'Two batches on the bench by the window, rested under cloth, cut at four. Whatever is not cut is not served.',
  },
  {
    step: '02',
    time: '5:00pm',
    title: 'The board gets chalked',
    detail:
      'Wen writes the night on the proofing press — what came in from the market, what came out of the cupboard, what is finished.',
  },
  {
    step: '03',
    time: '6:00pm',
    title: 'Lanterns on, doors open',
    detail:
      'Booked tables along the north wall, everything else first-come. Dai starts the list on paper and it stays on paper.',
  },
  {
    step: '04',
    time: '12:30am',
    title: 'Last order off the coals',
    detail:
      'The wok range goes cold, the trough burns down, and the staff eat whatever the board could not finish.',
  },
]

export function KitchenTeam() {
  return (
    <section id="kitchen" className="bg-[#1D1512] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E4572E]">
            Four people and a very hot room
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#FBF5EC] sm:text-5xl">
            Who is cooking
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#FBF5EC]/70">
            There is no head-chef-in-absentia here. The people whose names are on the wall are the
            people at the range on a Friday night, and they will happily talk to you across the pass
            once the second wave has gone out.
          </p>
        </div>

        <div data-testid="team-grid" className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TEAM.map((person) => (
            <article
              key={person.name}
              data-testid="team-card"
              className="rounded-2xl border border-[#FBF5EC]/12 bg-[#241B18] p-6"
            >
              <svg viewBox="0 0 64 64" role="img" aria-label={`Portrait mark for ${person.name}`} className="h-16 w-16">
                <circle cx="32" cy="32" r="30" fill={person.tint} opacity="0.9" />
                <circle cx="32" cy="32" r="30" fill="none" stroke="#FBF5EC" strokeWidth="1.2" opacity="0.35" />
                <text
                  x="32"
                  y="40"
                  textAnchor="middle"
                  fill="#16110F"
                  fontSize="22"
                  fontFamily="serif"
                  fontWeight="600"
                >
                  {person.initials}
                </text>
              </svg>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#FBF5EC]">{person.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#2F7A6B]">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#FBF5EC]/65">{person.bio}</p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-serif text-3xl font-semibold text-[#FBF5EC]">How a night runs</h3>
          <ol data-testid="night-steps" className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {NIGHT.map((item) => (
              <li
                key={item.step}
                data-testid="night-step"
                className="relative rounded-2xl border border-[#FBF5EC]/10 bg-[#16110F] p-6"
              >
                <span className="font-serif text-4xl font-semibold text-[#E4572E]/40">{item.step}</span>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#F5A623]">{item.time}</p>
                <h4 className="mt-3 font-serif text-lg font-semibold text-[#FBF5EC]">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#FBF5EC]/60">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
