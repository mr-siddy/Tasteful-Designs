const ROOMS = [
  {
    name: 'The Hearth Counter',
    seats: '9 seats',
    price: 'From $95 per guest',
    detail:
      'Nine stools facing the fire, close enough that the cooks hand you the plate themselves. Booked as a whole counter after 9pm only; no menu choice, and that is the point.',
    tone: 'from-amber-500/20 to-orange-700/10',
  },
  {
    name: 'The Brass Room',
    seats: '14 seats',
    price: 'From $130 per guest',
    detail:
      'The old foundry office upstairs, with the original brass fittings and a door that actually closes. One long walnut table, four courses from the fire, and a bottle chosen for each course.',
    tone: 'from-stone-500/20 to-stone-700/10',
  },
  {
    name: 'The Whole Room',
    seats: '38–47 seats',
    price: 'From $155 per guest',
    detail:
      'Take the dining room and the counter together for a wedding lunch, a launch or a fiftieth. Sundays and Mondays only. Nadia will cook a menu written specifically for your evening.',
    tone: 'from-lime-600/20 to-emerald-800/10',
  },
]

export function PrivateRooms() {
  return (
    <section id="rooms" className="bg-stone-900 text-stone-100" aria-labelledby="rooms-heading">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            Larger tables
          </p>
          <h2 id="rooms-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three ways to take over part of the building
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-400">
            Every private booking is cooked on the same fire by the same team. There is no separate
            events kitchen and no separate events menu.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <article
              key={room.name}
              data-testid="room-card"
              className="flex h-full flex-col rounded-3xl border border-stone-800 bg-stone-950 p-8"
            >
              <div className={`h-28 rounded-2xl bg-gradient-to-br ${room.tone}`} aria-hidden="true" />
              <h3 className="mt-7 text-xl font-semibold tracking-tight">{room.name}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-amber-400">
                {room.seats}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">{room.detail}</p>
              <p className="mt-6 border-t border-stone-800 pt-5 text-sm font-semibold text-stone-200">
                {room.price}
              </p>
              <a
                href="#reserve"
                data-testid="room-cta"
                className="mt-5 inline-block rounded-full border border-stone-700 px-5 py-2.5 text-center text-sm font-semibold transition-colors hover:border-amber-400 hover:text-amber-300"
              >
                Enquire about {room.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
