const FAQS = [
  {
    q: 'Do you take my insurance?',
    a: 'We are in network with Sound Health, Cascadia Dental, Evergreen PPO, Rainier Benefits and Northlake Trust, and we file those claims for you the same day. Any other plan we bill as an out-of-network provider, which usually still reimburses you directly. Marisol checks your benefits before your first appointment so the estimate you get is a real one.',
  },
  {
    q: 'I am genuinely frightened of dentists. Is that a problem?',
    a: 'It is the single most common thing people tell us on the phone, and it is why the seven o’clock chairs exist. Nitrous oxide is available at no charge on a first visit, oral sedation is available with a driver, and you are never asked to justify any of it. A raised hand stops the appointment immediately.',
  },
  {
    q: 'Where do I park on Ballard Avenue?',
    a: 'There is free patient parking in the lot behind the building — the entrance is off NW 54th, and the two spaces nearest the door are kept for us. Street parking out front is two hours and enforced enthusiastically. The D Line stops a block away at 22nd.',
  },
  {
    q: 'What happens if I chip a tooth on a Saturday?',
    a: 'Call the studio line and it forwards to the on-call doctor, not an answering service. We keep two emergency slots open every weekday morning and will usually see you the next business day. An emergency visit is $95 and always includes an exam and a film.',
  },
  {
    q: 'Can I really get a crown in one appointment?',
    a: 'Yes, for most teeth. We scan, design and mill it here, which takes about ninety minutes end to end. A few situations — a tooth that needs a post, a deep margin below the gum, some bridges — still go to our lab in Kirkland, and we will tell you that up front rather than halfway through.',
  },
  {
    q: 'Do you see children?',
    a: 'From about three years old. We do simple, preventive work for kids: exams, cleanings, sealants and fluoride. Anything more involved, or a child who needs sedation, we refer to Dr. Hana Bergström’s paediatric practice on Market Street, which is four minutes away and excellent.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-[#FAF6F1]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">Questions</p>
            <h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0B2540] sm:text-4xl">
              The things people ask before they call
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#42566A]">
              If yours is not here, the studio phone is answered by a person between seven and five,
              Monday to Thursday. There is no phone tree.
            </p>
          </div>

          <dl className="divide-y divide-[#E4D8C8] border-t border-[#E4D8C8]">
            {FAQS.map((item) => (
              <div key={item.q} className="py-7">
                <dt>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#0B2540]">{item.q}</h3>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-[#42566A]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
