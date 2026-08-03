const STEPS = [
  {
    step: '01',
    time: '7:42am',
    title: 'The call comes in',
    body: 'Whoever answers types the address once. Taskflow pulls up the equipment already installed there, the last four visits and the balance on the account before the customer has finished describing the noise.',
  },
  {
    step: '02',
    time: '7:44am',
    title: 'The board finds the truck',
    body: 'Three technicians can take it today. Taskflow ranks them by licence, by the parts already on the van and by how much of an existing route the detour costs, then books the one that hurts least.',
  },
  {
    step: '03',
    time: '1:15pm',
    title: 'The tech closes it out',
    body: 'Photos before and after, the model and serial off the plate, parts pulled from truck stock and a signature on the tailgate. All of it captures offline in a crawlspace and syncs at the curb.',
  },
  {
    step: '04',
    time: '6:00pm',
    title: 'The invoice goes out',
    body: 'The nightly run bills every job closed that day, syncs it to your accounting, files the warranty against the serial number, and drops tomorrow first thing onto the board so dispatch opens to a full day.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" data-testid="how-it-works" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">One job, end to end</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From the phone ringing to the invoice sending
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Here is a single no-heat call as Taskflow handles it, with the real timestamps from a
            Tuesday in February at a nineteen-truck shop outside Cleveland.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.step}
              data-testid="how-step"
              className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-7"
            >
              <span className="text-sm font-bold tracking-widest text-amber-400">{step.step}</span>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">{step.time}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
