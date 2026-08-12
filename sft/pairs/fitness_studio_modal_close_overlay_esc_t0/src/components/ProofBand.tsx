import { PressWordmark, StarIcon, QuoteIcon } from './Icons'

const FIGURES = [
  { value: '1,240', label: 'Members riding out of Hallam Fields Road' },
  { value: '4.9', label: 'Average of 812 reviews left after a class' },
  { value: '31,600', label: 'Coached rides delivered since we opened' },
  { value: '9 of 10', label: 'Intro riders who book a second class that week' },
]

const CREDENTIALS = [
  {
    title: 'Coaches, not playlist DJs',
    body: 'Every coach on the platform holds a Level 3 instructor qualification plus indoor-cycling certification, and four of the six also coach outdoors with Marlowe Wheelers.',
  },
  {
    title: 'Capped classes, always',
    body: 'Twenty-four bikes and twenty-four riders. We would rather run an extra 7:10 than sell a bike that does not exist, so nobody shares and nobody rides in the doorway.',
  },
  {
    title: 'Numbers you can keep',
    body: 'Your power, cadence and heart-rate averages land in your inbox by lunchtime, in a plain table you can export. No score, no ranking, no badge you have to earn back.',
  },
]

const PRESS = [
  'The Marlowe Dispatch',
  'Quarter Weekly',
  'Kindling Magazine',
  'Hallam Fields Guide',
]

export function ProofBand() {
  return (
    <section id="proof" className="border-b border-[#101826]/10 bg-[#f2e9db]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#101826]/50">
          What eleven hundred mornings look like
        </h2>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FIGURES.map((figure) => (
            <div key={figure.value} className="border-l-2 border-[#d94a2b] pl-4">
              <dt className="text-4xl font-black tracking-tight text-[#101826]">{figure.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-[#40485a]">{figure.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CREDENTIALS.map((item) => (
            <article key={item.title} className="rounded-2xl bg-[#faf5ee] p-6 shadow-[0_18px_40px_-30px_rgba(16,24,38,0.6)]">
              <h3 className="text-lg font-bold tracking-tight text-[#101826]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#40485a]">{item.body}</p>
            </article>
          ))}
        </div>

        <figure className="mt-14 rounded-3xl border border-[#101826]/10 bg-[#faf5ee] p-8 sm:p-10">
          <QuoteIcon className="h-8 w-8 text-[#d94a2b]" />
          <blockquote className="mt-4 text-xl font-semibold leading-snug tracking-tight text-[#101826] sm:text-2xl">
            The best forty-five minutes of exercise available in this postcode, and the only
            spin room in the city where somebody corrects your saddle height before the first
            song rather than after the last one.
          </blockquote>
          <figcaption className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#40485a]">
            <span className="flex text-[#efa63c]">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span className="font-semibold text-[#101826]">Ellen Marsh</span>
            <span aria-hidden="true">·</span>
            <span>fitness column, The Marlowe Dispatch</span>
          </figcaption>
        </figure>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[#101826]/40">
          {PRESS.map((name) => (
            <PressWordmark key={name} name={name} className="h-6" />
          ))}
        </div>
      </div>
    </section>
  )
}
