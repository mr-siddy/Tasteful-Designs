const STEPS = [
  {
    number: '01',
    title: 'Connect one pipeline',
    duration: 'about an afternoon',
    body: 'Install the adapter for whatever runs your builds, point it at a single non-critical service, and let Halyard start reading deploys. Nothing is blocked and nothing changes for the team that owns it.',
  },
  {
    number: '02',
    title: 'Model the rules you already have',
    duration: 'one working week',
    body: 'Take the change policy out of the wiki page nobody reads and write it as a reviewed file: who approves what, in which environment, with which exceptions. Halyard ships starter policies for SOC 2, PCI DSS, HIPAA and DORA.',
  },
  {
    number: '03',
    title: 'Run in shadow mode',
    duration: 'two to four weeks',
    body: 'Halyard evaluates every change and records what it would have blocked, without blocking anything. This is where the arguments happen — and it is much cheaper to have them against a report than against a stalled release.',
  },
  {
    number: '04',
    title: 'Enforce, service by service',
    duration: 'at your pace',
    body: 'Flip enforcement on one service at a time. Most customers run the whole estate under policy inside six weeks, and the first audit after that is the one where nobody books a war room.',
  },
]

export default function RolloutSteps() {
  return (
    <section id="rollout" className="bg-[#F7F5F1] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B57A16]">Getting there</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1524] sm:text-[2.75rem]">
            Four steps, and none of them is a migration
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Nobody adopts change control on a Monday. The path below is the one every Halyard customer has taken, and
            the only irreversible decision in it is the last one.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              data-testid="rollout-step"
              className="relative rounded-2xl border border-[#E3DDD2] bg-white p-7 shadow-sm"
            >
              <span className="text-4xl font-bold tracking-tight text-[#E3DDD2]">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#0B1524]">{step.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#B57A16]">{step.duration}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#0B1524]/10 bg-[#0B1524] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">Bring your own change policy</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              Send us the policy document you already hand to auditors and a solutions engineer will translate it into
              Halyard rules before your trial starts. It usually comes back in two working days.
            </p>
          </div>
          <a
            href="#trial"
            className="flex-none rounded-xl bg-[#F2A93B] px-6 py-3.5 text-center text-sm font-semibold text-[#0B1524] transition hover:bg-[#ffc063]"
          >
            Send us your policy
          </a>
        </div>
      </div>
    </section>
  )
}
