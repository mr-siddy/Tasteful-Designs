const PROPS = [
  {
    title: 'Every channel, one thread',
    body: 'Email, live chat and your contact form land in the same conversation, so nobody answers the same question twice.',
  },
  {
    title: 'Routing that reads the room',
    body: 'Rules assign by topic, language and current workload, then hand off cleanly when someone goes offline.',
  },
  {
    title: 'Answers your team can trust',
    body: 'Saved replies and a shared knowledge base keep tone and detail consistent across every shift.',
  },
]

export function ValueProps() {
  return (
    <section id="how-it-works" className="mx-auto max-w-5xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-3">
        {PROPS.map((item) => (
          <div key={item.title} data-testid="value-prop">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
