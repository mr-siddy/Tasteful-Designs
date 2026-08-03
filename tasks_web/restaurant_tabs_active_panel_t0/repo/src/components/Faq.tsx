const QUESTIONS = [
  {
    q: 'Do you take walk-ins?',
    a: 'The eleven bar stools are held back for walk-ins every night and are never bookable. Tables in the dining room are reserved, and Friday and Saturday usually fill about two weeks out.',
  },
  {
    q: 'Is there enough here if we do not eat meat or fish?',
    a: 'Yes, and not as an afterthought. The escalivada, the coca, the kitchen-garden rice and the pa amb tomàquet are all vegetable dishes off the same fire. Tell us when you book and the kitchen will build a full menu.',
  },
  {
    q: 'Can you cook around allergies?',
    a: 'Almost always, with notice. The one we cannot fully guarantee is shellfish — the rice stock and the grill are shared — so we will say so plainly rather than take a risk with you.',
  },
  {
    q: 'Where do we park?',
    a: 'The Rope Walk lot behind the building is free after five, and the bollards on Larkspur Street come down at six. Do not use the marina lot; they tow, and they enjoy it.',
  },
  {
    q: 'Is there a dress code?',
    a: 'None whatsoever. It is a room with an open fire in it, so if anything you will want a layer you can take off. People come in from the boats most nights.',
  },
  {
    q: 'Can we bring a cake?',
    a: 'Bring it. We will hold it, plate it and bring it out with candles, and there is no cakeage charge. We will also happily make the crema catalana instead and burn it at the table.',
  },
]

export function Faq() {
  return (
    <section id="faq" data-testid="faq" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
            Before you come
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Questions we get on the phone
          </h2>
        </div>

        <dl className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {QUESTIONS.map((item) => (
            <div key={item.q} data-testid="faq-item">
              <dt>
                <h3 className="font-serif text-xl font-semibold text-stone-900">{item.q}</h3>
              </dt>
              <dd className="mt-3 leading-relaxed text-stone-600">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-14 rounded-2xl border border-stone-200 bg-stone-50 p-6 text-sm text-stone-600">
          Anything we have not answered:{' '}
          <a href="mailto:hola@casamarisol.com" className="font-semibold text-amber-700 underline">
            hola@casamarisol.com
          </a>{' '}
          or ring{' '}
          <a href="tel:+14015550164" className="font-semibold text-amber-700 underline">
            (401) 555-0164
          </a>{' '}
          between two and four in the afternoon, when someone is actually free to talk.
        </p>
      </div>
    </section>
  )
}
