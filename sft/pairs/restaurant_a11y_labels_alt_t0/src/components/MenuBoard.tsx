const COURSES = [
  {
    heading: 'From the ice',
    note: 'Shucked to order at the counter from noon on weekends.',
    dishes: [
      {
        name: 'Fire-cracked oysters',
        price: '$19',
        detail:
          'Half a dozen Pigeon Cove oysters flashed shell-down on the oak coals for ninety seconds, cultured butter, sea lettuce, a squeeze of preserved lemon.',
      },
      {
        name: 'Buckwheat crab toast',
        price: '$22',
        detail:
          'Jonah crab picked at four o’clock, folded with brown butter mayonnaise and chives onto griddled buckwheat, with pickled quarry rhubarb.',
      },
    ],
  },
  {
    heading: 'From the hearth',
    note: 'White oak and apple, no gas, no induction, nothing held under a lamp.',
    dishes: [
      {
        name: 'Hearth cod and drawn brine',
        price: '$34',
        detail:
          'A thick Gloucester cod loin cooked skin-down against the embers until it flakes in sheets, served in its own drawn brine with new potatoes and dill.',
      },
      {
        name: 'Lobster on the coals',
        price: '$52',
        detail:
          'A pound and a quarter split live, basted with apple-wood butter and tarragon, finished cut-side down so the shell chars and the tail steams inside it.',
      },
      {
        name: 'Salt-crust monkfish for two',
        price: '$68',
        detail:
          'Whole monkfish tail packed in Cape Ann sea salt and egg white, cracked at the table, with charred leeks and a green sauce of parsley, caper and anchovy.',
      },
      {
        name: 'Charred cabbage, cured yolk',
        price: '$18',
        detail:
          'A wedge of sweetheart cabbage buried in the ash until the outer leaves blacken, dressed with brown butter, hazelnut and a yolk cured in salt for six days.',
      },
    ],
  },
  {
    heading: 'To finish',
    note: 'One pastry, one cheese, and Tobias will find you something to drink with either.',
    dishes: [
      {
        name: 'Burnt honey custard',
        price: '$12',
        detail:
          'Set custard under a hard cap of honey burnt on the grill bars, with a spoon of sour cream and a little smoked sea salt.',
      },
    ],
  },
]

export default function MenuBoard() {
  return (
    <section id="board" className="bg-[#fbf7ef]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d2601a]">Tonight&rsquo;s board</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Printed at four, cooked over wood, gone by ten
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#0b2027]/75">
            The board below is what we served last night, which is the closest thing to a promise we can make. Roughly
            two thirds of it holds from one night to the next; the fish moves with the boats, and so does the price.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {COURSES.map((course) => (
            <div key={course.heading} data-testid="menu-course">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-[#0b2027]/15 pb-3">
                <h3 className="font-serif text-2xl font-semibold">{course.heading}</h3>
                <p className="text-sm text-[#0b2027]/55">{course.note}</p>
              </div>
              <ul className="mt-6 grid gap-6 md:grid-cols-2">
                {course.dishes.map((dish) => (
                  <li
                    key={dish.name}
                    data-testid="dish"
                    className="rounded-2xl border border-[#0b2027]/10 bg-white p-6 shadow-[0_1px_0_rgba(11,32,39,0.04)] transition hover:border-[#d2601a]/40"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-xl font-semibold">{dish.name}</h4>
                      <span className="shrink-0 font-serif text-lg font-semibold text-[#d2601a]">{dish.price}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#0b2027]/70">{dish.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 rounded-2xl bg-[#0b2027]/5 px-6 py-5 text-sm leading-relaxed text-[#0b2027]/70">
          Bread, cultured butter and a bowl of the day&rsquo;s brine broth come to every table and are not charged for.
          We add no service fee; tips are pooled across the kitchen and the floor.
        </p>
      </div>
    </section>
  )
}
