const FAQS = [
  {
    q: 'Can I get a table tonight?',
    a: 'Possibly. The nine bar stools are walk-in only and are never held for reservations, so if you can be here before six there is usually a seat. Otherwise tables for the following month go live on the first, and the hearth counter is gone within about ten minutes of that.',
  },
  {
    q: 'Is there anything for someone who does not eat meat?',
    a: 'Yes, and not as an afterthought. Four dishes on the printed menu are vegetarian as written, the ember-baked sweet potato is a genuine main course, and the kitchen will run a full vegetarian sequence at the counter if you say so when you book.',
  },
  {
    q: 'How do you handle allergies if everything is cooked on one fire?',
    a: 'Carefully, and honestly. We can work around almost anything except shellfish traces during the Tuesday and Friday oyster service, when we will tell you plainly that the room is not the right place that night. Call (615) 555 0192 and speak to Nell rather than leaving it in the booking notes.',
  },
  {
    q: 'Is it loud? Can we talk?',
    a: 'It is a hard-surfaced room with an open fire, so it carries. The loft is quieter, the two window tables are the calmest downstairs, and Wednesday is noticeably gentler than Saturday if conversation is the point of the evening.',
  },
  {
    q: 'Do you take children?',
    a: 'Gladly, particularly at Sunday supper, where they eat the same food for $22. We do not have a separate menu — most children work their way through the cornbread and the chicken quite happily, and there is a step by the pass so they can watch the fire.',
  },
  {
    q: 'Where do we park in Germantown?',
    a: 'There is metered street parking along Monroe and a paid lot on Fifth Avenue North about three minutes on foot. Free after 6pm on the street. We do not validate, but we will call you a car at the end of the night.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-b border-[#241C17]/10">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A5D3A]">
            The six things the phone asks
          </p>
          <h2 id="faq-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Questions we answer several times a night
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-[#241C17]/12 border-y border-[#241C17]/12">
          {FAQS.map((item) => (
            <div key={item.q} className="grid gap-4 py-8 md:grid-cols-[1fr_1.4fr] md:gap-10">
              <dt>
                <h3 className="text-lg font-black leading-snug tracking-tight">{item.q}</h3>
              </dt>
              <dd className="leading-relaxed text-[#544940]">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm leading-relaxed text-[#6B5F55]">
          Anything else, the phone is answered from two o&rsquo;clock every afternoon by an actual
          person standing in the room you are asking about.
        </p>
      </div>
    </section>
  )
}
