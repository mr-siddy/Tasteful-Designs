const FAQS = [
  {
    q: 'I have never been on an indoor bike. Am I going to hold the class up?',
    a: 'No, because nothing in the class waits for you. Every target is called as a range of watts and a cadence, and the coach says out loud which end of the range a first-timer should be at. Roughly a third of any given Tuesday morning class has been riding here for under three months.',
  },
  {
    q: 'Where do I park, and how do I get in?',
    a: 'There are eleven free bays in the yard off Hallam Fields Road and unrestricted street parking on Sanderson Row after 6 pm. The bus 14 and 14A stop outside; Marlowe Quarter station is a seven-minute walk under the viaduct. The door is the black one with the press mark on it, not the loading shutter.',
  },
  {
    q: 'Do I need cycling shoes?',
    a: 'Not to start. The bikes take SPD cleats on one side and a toe cage on the other, so trainers with a firm sole are fine. We keep loan shoes in sizes 3 to 13 by the desk and there is no charge for them, ever. If you end up riding three times a week, buy your own pair — around £70 for something perfectly good.',
  },
  {
    q: 'I am coming back from an injury. Can you work around it?',
    a: 'Usually yes, and Dermot Slane handles those bookings himself. Tell us what happened in the request form, bring whatever a physiotherapist or surgeon has written down, and we will cap resistance, change movements or move you to Reset for a few weeks. We will also say plainly if we think you should wait.',
  },
  {
    q: 'What happens if I book and then cannot come?',
    a: 'Cancel more than six hours before the class and the credit goes straight back. Inside six hours it counts as used, because the bike sat empty while somebody was on the waitlist. Intro rides are the exception: tell us any time and we will move it once, no charge and no lecture.',
  },
  {
    q: 'Are showers, towels and lockers actually included?',
    a: 'Yes — two shower blocks, soap in them, towels on the shelf outside the recovery room, and thirty-two lockers that take a £1 coin and give it back. The only thing we sell in the building is coffee, and that is £2.40 because the machine cost us a fortune.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#faf5ee]">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d94a2b]">
            The six things people email about
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#101826] sm:text-5xl">
            Questions we get every week
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-[#101826]/10">
          {FAQS.map((faq) => (
            <div key={faq.q} data-testid="faq-item" className="py-7">
              <dt>
                <h3 className="text-lg font-bold leading-snug tracking-tight text-[#101826]">
                  {faq.q}
                </h3>
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-[#40485a]">{faq.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 rounded-2xl border border-[#101826]/10 bg-[#f2e9db] px-6 py-5 text-sm leading-relaxed text-[#40485a]">
          Something else? The desk answers email between classes on
          <a href="mailto:desk@pressroomathletic.co.uk" className="mx-1 font-bold text-[#d94a2b] underline">
            desk@pressroomathletic.co.uk
          </a>
          and the phone is answered by a person on Hallam Fields Road, not a call centre.
        </p>
      </div>
    </section>
  )
}
