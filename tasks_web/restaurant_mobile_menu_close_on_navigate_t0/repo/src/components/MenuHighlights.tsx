import { FlameIcon } from './Icons'

const DISHES = [
  {
    name: 'Ember-roasted Totten Inlet oysters',
    price: '$19',
    course: 'To begin',
    note: 'Six oysters set straight on the coals until they open, finished with alder butter, lemon zest and a spoon of the liquor they cooked in.',
  },
  {
    name: 'Hearth bread & cultured butter',
    price: '$11',
    course: 'To begin',
    note: 'June Sasaki bakes this on the hearth floor twice a service. Dark crust, open crumb, and butter we culture upstairs for four days.',
  },
  {
    name: 'Charred little gems, buttermilk, hazelnut',
    price: '$16',
    course: 'Between',
    note: 'Lettuce halves seared cut-side down for forty seconds, dressed while still warm with buttermilk, toasted Lynden hazelnuts and dill.',
  },
  {
    name: 'Plank-roasted king salmon',
    price: '$38',
    course: 'From the fire',
    note: 'A whole side pinned to cedar and leaned toward the flame for twenty minutes, served over braised chard with a green garlic vinaigrette.',
  },
  {
    name: 'Coal-buried lamb shoulder for two',
    price: '$74',
    course: 'From the fire',
    note: 'Rubbed with fennel pollen and buried in the cooling embers overnight, pulled at service and finished over open flame with charred onion.',
  },
  {
    name: 'Buckwheat honey tart, smoked cream',
    price: '$14',
    course: 'To finish',
    note: 'Buckwheat shortcrust, honey from the hives on the Ballard Locks green roof, and cream we smoke briefly over the dying alder.',
  },
]

export default function MenuHighlights() {
  return (
    <section id="menus" className="bg-[#F7F1E8]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#C4653A]">The menu tonight</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#12261F] sm:text-5xl">
            Six things worth crossing the bridge for
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#12261F]/75">
            The full card changes every Wednesday with whatever the boats and the farms send us,
            but these six have earned a permanent spot. Prices include the kitchen's share of
            service; there is no separate service charge on your bill.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish) => (
            <li
              key={dish.name}
              data-testid="menu-dish"
              className="flex flex-col rounded-2xl border border-[#12261F]/10 bg-white/70 p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#4C6B54]">
                  <FlameIcon className="h-4 w-4 text-[#C4653A]" />
                  {dish.course}
                </span>
                <span className="font-serif text-xl text-[#C4653A]">{dish.price}</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-[#12261F]">{dish.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#12261F]/70">{dish.note}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-[#12261F] px-8 py-7 text-[#F7F1E8]">
          <p className="max-w-xl text-sm leading-relaxed text-[#F7F1E8]/80">
            A five-course hearth tasting runs at the chef's counter for $95 a seat, Thursday
            through Saturday. We cook it in front of you, and we will happily rebuild it around
            vegetables with a day's notice.
          </p>
          <a
            href="#reserve"
            className="rounded-full bg-[#E08B4F] px-6 py-3 text-sm font-semibold text-[#12261F] transition-colors hover:bg-[#F3C98B]"
          >
            Book the counter
          </a>
        </div>
      </div>
    </section>
  )
}
