const QUESTIONS = [
  {
    q: 'Do you take walk-ins?',
    a: 'Yes — the eight seats at the kitchen counter are held back for walk-ins every night and go on a first-come list from 5:00pm. The three long tables are all by request, because we seat parties together and need to know who is coming.',
  },
  {
    q: 'How long does an evening take?',
    a: 'Plan on two and a half hours for a table of four, three or more for anything larger. We only seat a table once, so the evening ends when your table decides it does, not when the next booking arrives.',
  },
  {
    q: 'Can you cook for vegetarians and vegans?',
    a: 'Comfortably. Georgian cooking has an enormous meat-free repertoire because of the Orthodox fasting calendar — lobio, pkhali, badrijani, mushroom ketsi, ajapsandali. Tell us in the note when you request a table and we will build the whole supra that way.',
  },
  {
    q: 'Is there anything for children?',
    a: 'Children love khinkali more than any adult does, and we will happily bring them a plain cheese khachapuri and a jug of tarragon soda. High chairs live by the cellar stairs; ask anyone.',
  },
  {
    q: 'What does a bottle of wine cost?',
    a: 'The list runs from $46 for a Kartli rkatsiteli to $180 for a ten-year-old Saperavi from Kakheti, with fifteen bottles under $70. Everything by the glass is $13 to $18, and corkage on a Georgian bottle you brought yourself is waived if you pour us a taste.',
  },
  {
    q: 'Where do we park, and is the room accessible?',
    a: 'Street parking on Alberta and 19th, free after 7pm, plus a lot behind the barber shop on 18th. The dining room, the counter and both bathrooms are step-free from the sidewalk; only the qvevri cellar is down a flight of stairs.',
  },
]

export function Faq() {
  return (
    <section id="faq" data-testid="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-800">
          Before you write to us
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Questions we get every week
        </h2>

        <dl className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
          {QUESTIONS.map((item) => (
            <div key={item.q} data-testid="faq-item" className="grid gap-3 py-7 md:grid-cols-[1fr_1.4fr] md:gap-8">
              <dt>
                <h3 className="font-serif text-xl font-semibold text-stone-900">{item.q}</h3>
              </dt>
              <dd className="text-base leading-relaxed text-stone-600">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm leading-relaxed text-stone-500">
          Anything we have not covered, put it in the note when you request a table — Nino reads
          every one of them herself with her first coffee.
        </p>
      </div>
    </section>
  )
}
