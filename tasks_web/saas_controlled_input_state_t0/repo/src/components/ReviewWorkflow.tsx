const STEPS = [
  {
    step: '01',
    title: 'Declare',
    duration: 'minute zero',
    body:
      'Type /postlude sev2 checkout in Slack. A channel, a timeline and an empty review already exist before the second page goes out, and the incident commander gets a pinned checklist instead of a bare channel.',
  },
  {
    step: '02',
    title: 'Capture',
    duration: 'during the incident',
    body:
      'React with a 📌 to any message and it becomes a timeline entry. Deploys, alert transitions and flag changes arrive on their own. Nobody has to remember to take notes while the graph is red.',
  },
  {
    step: '03',
    title: 'Review',
    duration: 'within five days',
    body:
      'Postlude opens a draft with the impact window, the sequence of events and a first pass at contributing factors. The team argues about causes, not about who is writing the doc.',
  },
  {
    step: '04',
    title: 'Follow through',
    duration: 'the next two sprints',
    body:
      'Each action item leaves with an owner and a date, syncs to your tracker, and reports back. When something stalls, the reminder arrives with the incident it came from — not as an anonymous ticket.',
  },
]

export function ReviewWorkflow() {
  return (
    <section id="workflow" className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">The loop</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Four steps, and only one of them is a meeting
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
            Teams do not skip post-mortems because they disagree with them. They skip them because the work of
            assembling one lands on a tired engineer three days later. Postlude moves that work to the moment it
            is cheap: while the incident is happening.
          </p>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.step}
              data-testid="workflow-step"
              className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-orange-400">{s.step}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-teal-300">{s.duration}</p>
              <p className="mt-3.5 text-sm leading-relaxed text-slate-300">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
