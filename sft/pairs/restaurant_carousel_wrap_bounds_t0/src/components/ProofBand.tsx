import { StarIcon } from './Icons'

const STATS = [
  { figure: '4.8', unit: 'of 5', label: 'across 1,240 verified diner reviews' },
  { figure: '11', unit: 'years', label: 'on Foundry Lane, same room, same fire' },
  { figure: '92%', unit: 'local', label: 'of produce grown inside the valley' },
  { figure: '3', unit: 'nights', label: 'median wait for a Saturday two-top' },
]

const PRESS = [
  {
    quote:
      'The best argument in this city for cooking over wood, and the only kitchen I know that treats a leek with the seriousness of a rib roast.',
    outlet: 'The Ironside Review',
    writer: 'Halley Vandermeer, restaurant critic',
  },
  {
    quote:
      'Okonkwo runs the calmest hot line in town. Nothing is theatre; everything tastes like smoke that knew where it was going.',
    outlet: 'Provisions Quarterly',
    writer: 'Emmett Cho, features editor',
  },
  {
    quote:
      'Braddock has built a wine list of fifty-one bottles with no filler and no ego. Ask him for the odd one — he means it.',
    outlet: 'Cellar Notes Annual',
    writer: 'Ilse Brandt, contributing editor',
  },
]

export function ProofBand() {
  return (
    <section id="proof" className="bg-stone-100 text-stone-900" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
              Since 2015
            </p>
            <h2 id="proof-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A neighbourhood room that critics keep coming back to
            </h2>
          </div>
          <div className="flex items-center gap-2 text-amber-600" aria-label="Rated 4.8 out of 5">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
            <span className="ml-2 text-sm font-medium text-stone-600">4.8 average</span>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-testid="proof-stat"
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-300/40"
            >
              <dt className="text-3xl font-semibold tracking-tight text-stone-900">
                {stat.figure}
                <span className="ml-1.5 text-sm font-medium text-stone-500">{stat.unit}</span>
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-stone-600">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-16 text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
          What the press wrote
        </h3>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {PRESS.map((item) => (
            <figure
              key={item.outlet}
              data-testid="press-quote"
              className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6"
            >
              <blockquote className="text-sm leading-relaxed text-stone-700">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-stone-200 pt-4 text-sm">
                <span className="block font-semibold text-stone-900">{item.outlet}</span>
                <span className="mt-0.5 block text-stone-500">{item.writer}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
