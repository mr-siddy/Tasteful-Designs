import { BoardIcon, GaugeIcon, InvoiceIcon, RouteIcon, SignalIcon, VanIcon } from './icons'

const FEATURES = [
  {
    icon: BoardIcon,
    title: 'Live dispatch board',
    body: 'Drag a job onto another technician and the rest of the day rebuilds itself — drive time, arrival windows and the customer text message all move with it.',
  },
  {
    icon: RouteIcon,
    title: 'Routing that knows the van',
    body: 'Stops are ordered by traffic, by which tech holds the licence for the work, and by the parts already loaded that morning. Not by who called first.',
  },
  {
    icon: SignalIcon,
    title: 'A field app that works in a basement',
    body: 'Photos, meter readings, parts used and the signature all capture with no bars at all. Everything syncs the moment the tech gets back above ground.',
  },
  {
    icon: InvoiceIcon,
    title: 'Quote to invoice, once',
    body: 'An approved estimate becomes a scheduled job, then a sent invoice, without anybody retyping a line item or hunting for the model number again.',
  },
  {
    icon: VanIcon,
    title: 'Truck stock you can trust',
    body: 'Every van carries a running inventory, so dispatch stops sending someone forty minutes out to a call without the right capacitor on board.',
  },
  {
    icon: GaugeIcon,
    title: "The owner's numbers",
    body: 'First-time fix rate, revenue per truck, callback rate and overtime hours, recalculated every night at close and waiting in your inbox by six.',
  },
]

export default function FeatureGrid() {
  return (
    <section id="platform" data-testid="feature-grid" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">The platform</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Six things dispatch does every day, in one place
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Taskflow is not a suite of modules you assemble. It is the board, the field app and the
            billing run — built together, so a change in one shows up in the others before the phone
            stops ringing.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                data-testid="feature-card"
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:border-amber-400/40 hover:bg-slate-900"
              >
                <span className="inline-flex rounded-xl bg-amber-400/10 p-3 text-amber-300">
                  <Icon />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{feature.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
