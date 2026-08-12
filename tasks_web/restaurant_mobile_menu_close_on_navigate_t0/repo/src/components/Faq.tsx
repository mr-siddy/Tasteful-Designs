const QUESTIONS = [
  {
    q: 'Where do we park?',
    a: 'There is free two-hour street parking on NW 54th after 6pm, and a paid lot on 22nd Ave NW half a block east that runs $8 for the evening. The RapidRide D stops at Market and 22nd, forty seconds from our door.',
  },
  {
    q: 'Can you cook around allergies and dietary needs?',
    a: 'Yes, and we would rather know when you book than when you sit down. Gluten, dairy, shellfish and nightshades are all straightforward; the tasting menu goes fully vegetable-led with a day of notice. The one thing we cannot do is cook without wood smoke.',
  },
  {
    q: 'Is Copperfern good for children?',
    a: 'Early tables are the easy ones — before 6:30pm the room is quiet and the kitchen will happily grill a plain piece of fish or a bowl of buttered pasta. After eight it gets loud, and we are honest with parents about that.',
  },
  {
    q: 'Do you allow corkage?',
    a: 'One 750ml bottle per table at $35, waived if you also buy a bottle from our list. We ask that it is not something already on the wine card, and we would love to pour the sommelier a taste.',
  },
  {
    q: 'What if we could not get a reservation?',
    a: 'Twelve bar seats and the chef’s counter are held for walk-ins every single night, first come from 5pm. Turn up before 5:30 on a weeknight and you will almost always get in; on Saturdays the wait runs to an hour and we will text you when your seat is ready.',
  },
  {
    q: 'How far ahead do bookings open?',
    a: 'Thirty days, at 9am Pacific. Tables for six or more should call us on (206) 555-0142 instead — the online system caps at five and we like to talk those through.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-[#F7F1E8]">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#C4653A]">Before you come</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#12261F] sm:text-5xl">
            The questions we get asked most
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#12261F]/75">
            If your question is not here, the front-of-house team answers the phone between 2pm
            and 9pm, Wednesday to Sunday.
          </p>
        </div>

        <dl className="mt-14 divide-y divide-[#12261F]/10 border-y border-[#12261F]/10">
          {QUESTIONS.map((item) => (
            <div key={item.q} className="grid gap-3 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
              <dt>
                <h3 className="font-serif text-2xl leading-snug text-[#12261F]">{item.q}</h3>
              </dt>
              <dd className="text-base leading-relaxed text-[#12261F]/75">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
