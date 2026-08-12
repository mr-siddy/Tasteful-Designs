const QUESTIONS = [
  {
    q: 'It has been years. Will I get a lecture?',
    a: 'No. About a third of our adults arrive after five years or more away, usually because something hurt or because a photograph bothered them. We chart what is there, tell you plainly what it means and start wherever you want to start. Nobody here is interested in making you feel worse about a gap you already know about.',
  },
  {
    q: 'How much will the first appointment cost me?',
    a: 'The new patient exam is £68 and that is the whole bill for day one, including any scans we take. You leave with a written plan and prices for everything on it, and you are under no obligation to book a single thing from that plan.',
  },
  {
    q: 'Do you take children, and what does that cost?',
    a: 'Yes. Checkups, fluoride varnish and fissure sealants are free for children under twelve when a parent is registered with us. The first visit is deliberately dull — a ride in the chair, counting teeth, a sticker — because a five-year-old who enjoys the room becomes a fifteen-year-old who still turns up.',
  },
  {
    q: 'What happens if something breaks on a Saturday?',
    a: 'Ring the practice number and the answerphone gives you the Fernbank weekend rota, which is answered by a dentist rather than a call centre. On weekdays we hold four emergency slots every morning, so phoning before nine almost always means being seen the same day.',
  },
  {
    q: 'Can I be sedated for treatment?',
    a: 'We offer inhalation sedation for anyone who wants it, and Dr. Raghunathan runs intravenous sedation lists on Wednesday afternoons for longer surgical appointments. Most nervous patients find they do not need either once they have had a couple of appointments where nothing was rushed.',
  },
  {
    q: 'Do you have parking, and is the practice step-free?',
    a: 'There are six spaces behind the building off Kestrel Lane, two of them wide bays, and the whole ground floor including both surgeries and the accessible toilet is step-free from the Pennant Street door. The 14 and 27 buses stop forty metres away.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#EFF4EE] py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B98B22]">Questions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123B36] sm:text-4xl">
            The six we are asked every week
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-[#123B36]/10 border-y border-[#123B36]/10">
          {QUESTIONS.map((item) => (
            <div key={item.q} data-testid="faq-item" className="grid gap-4 py-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
              <dt>
                <h3 className="text-lg font-semibold leading-snug text-[#123B36]">{item.q}</h3>
              </dt>
              <dd className="leading-relaxed text-[#4A5A53]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
