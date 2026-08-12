const QUESTIONS = [
  {
    q: 'How far ahead do I need to book?',
    a: 'The book opens on the first of each month for the month after, and Fridays and Saturdays are usually gone within a day. Wednesdays and Sundays hold up far better, and the six stools at the pass are kept back for walk-ins from six o\'clock — turn up and ask.',
  },
  {
    q: 'Is there anything for someone who does not eat meat?',
    a: 'Every card carries at least two dishes from the fire that never see meat or fish, and the whole-table menu can be run vegetarian or vegan without any notice. The ash-roasted onion stock under the barley is entirely plant-based; the butter is not, so tell us and we will use olive oil.',
  },
  {
    q: 'Can you cook around allergies?',
    a: 'Yes, and better if we know a day ahead. Nadia writes a card for each guest with an allergy so your table gets the same number of courses at the same time as everybody else. The one thing we cannot promise is a flour-free room — the mill runs every morning forty feet from the pass.',
  },
  {
    q: 'Are children welcome?',
    a: 'Very. There is no children\'s menu because there is no fryer, but half plates of anything on the card are £8 and the kitchen is happy to send bread out early. Highchairs live under the stairs. After nine the room does get quiet and adult, which most families read correctly.',
  },
  {
    q: 'Where do we park, and how do we get in?',
    a: 'The Ironbridge Quarter multi-storey on Ferrin Lane is a four-minute walk and £3 after six. Entry from Dorwich Street is step-free, the Long Room and the WC are on one level, and the Mill Room upstairs is reachable only by the old stair — say the word and we will move that booking down.',
  },
  {
    q: 'What happens if we are running late?',
    a: 'Ring 0117 555 0184 and we will hold your table for forty minutes without a word about it. Beyond that the fire course goes out to the room whether or not everyone is sitting down, so you may arrive to find your first two dishes waiting under a cloth.',
  },
]

const HOURS = [
  { day: 'Wednesday – Thursday', time: '6:00pm – 11:00pm' },
  { day: 'Friday – Saturday', time: '5:30pm – midnight' },
  { day: 'Sunday', time: '12:30pm – 8:00pm · Miller\'s Table lunch' },
  { day: 'Monday – Tuesday', time: 'Closed · the mill and the larder run' },
]

export function VisitFaq() {
  return (
    <section id="visit" data-section="visit" className="bg-[#FBF6EC]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B7411F]">
              Visit
            </p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#1B1410]">
              The six things the front desk gets asked every week
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#2A211B]/75">
              Answered properly, so you do not have to ring to find out. Anything else, Aoife
              picks up the phone between two and five on service days.
            </p>

            <dl className="mt-12 divide-y divide-[#2A211B]/10 border-y border-[#2A211B]/10">
              {QUESTIONS.map((item) => (
                <div key={item.q} data-testid="faq-item" className="py-7">
                  <dt className="font-serif text-xl font-semibold leading-snug text-[#1B1410]">
                    {item.q}
                  </dt>
                  <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-[#2A211B]/75">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-[#F0E4D2] p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#1B1410]">Opening hours</h3>
              <dl className="mt-6 space-y-4">
                {HOURS.map((row) => (
                  <div key={row.day} className="border-b border-[#2A211B]/10 pb-4 last:border-0 last:pb-0">
                    <dt className="text-sm font-semibold text-[#1B1410]">{row.day}</dt>
                    <dd className="mt-1 text-sm text-[#2A211B]/70">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 rounded-3xl bg-[#2A211B] p-8 text-[#FBF6EC]">
              <h3 className="font-serif text-2xl font-semibold">Finding us</h3>
              <address className="mt-5 space-y-2 text-sm not-italic leading-relaxed text-[#F0E4D2]/80">
                <p>Lantern &amp; Rye</p>
                <p>62 Dorwich Street</p>
                <p>Ironbridge Quarter, Bristol BS1 4QN</p>
              </address>
              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <a href="tel:01175550184" className="font-semibold text-[#D8A244] hover:underline">
                    0117 555 0184
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:table@lanternandrye.co.uk"
                    className="font-semibold text-[#D8A244] hover:underline"
                  >
                    table@lanternandrye.co.uk
                  </a>
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#F0E4D2]/70">
                Four minutes from the Ferrin Lane multi-storey, eight from Ironbridge station,
                and directly on the towpath if you are coming along the canal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
