import { StarIcon } from './icons'

const QUOTES = [
  {
    quote:
      'I used to keep the whole afternoon in my head and on three sticky notes. The first week on Taskflow I sent a tech home on time twice, which had not happened since 2019. When somebody calls out now I redistribute eleven jobs in about a minute.',
    name: 'Dana Whitfield',
    role: 'Dispatch lead, Halverson Mechanical — Erie, PA',
    initials: 'DW',
  },
  {
    quote:
      'The part that sold my crew was the offline app. Half our work is in crawlspaces and basements with no signal at all, and the old system lost a job write-up every couple of weeks. We have not lost one since we moved.',
    name: 'Marcus Bell',
    role: 'Owner, Ridgeline Plumbing — Tulsa, OK',
    initials: 'MB',
  },
  {
    quote:
      'Invoices used to go out on Friday for work we did on Monday. Now they leave the same night, and our days-to-payment dropped from thirty-one to nine. That is a bigger number for us than anything on the sales page.',
    name: 'Priya Raghavan',
    role: 'Operations manager, Brightwater Solar — Asheville, NC',
    initials: 'PR',
  },
]

export default function Testimonials() {
  return (
    <section id="customers" data-testid="testimonials" className="border-y border-slate-800 bg-slate-900/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Customers</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The people who answer the phone at 7am
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.name}
              data-testid="testimonial"
              className="flex flex-col rounded-3xl border border-slate-800 bg-slate-950/70 p-8"
            >
              <div className="flex gap-0.5 text-amber-400">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-slate-300">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-5">
                <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" role="img" aria-label={`${item.name} portrait`}>
                  <circle cx="20" cy="20" r="20" fill="#f59e0b" fillOpacity="0.18" />
                  <text
                    x="20"
                    y="25"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#fcd34d"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    {item.initials}
                  </text>
                </svg>
                <span>
                  <span className="block text-sm font-semibold text-white">{item.name}</span>
                  <span className="block text-xs text-slate-400">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
