const QUOTES = [
  {
    quote:
      'Our emergency calls used to get dispatched by whoever answered the phone loudest. Now the board puts the closest licensed tech on it and texts the customer a window we can actually hit. Callbacks are down by a third.',
    name: 'Marcus Ferrer',
    role: 'Dispatch lead, Ferrer Plumbing Co.',
    city: 'Toledo, Ohio',
  },
  {
    quote:
      'The van stock piece paid for the whole thing. We found eleven thousand dollars of material sitting on trucks nobody had counted since the previous fall, and the restock list means my techs stop making the parts-house run at 9am.',
    name: 'Priya Raman',
    role: 'Operations manager, Northgate Electric',
    city: 'Fort Wayne, Indiana',
  },
  {
    quote:
      'I was dreading the switch in the middle of a season. The shadow week is what sold my dispatcher — she ran both systems for five days, saw the board beat her whiteboard every afternoon, and asked to go live early.',
    name: 'Tom Bell',
    role: 'Owner, Bell & Cutler HVAC',
    city: 'Dayton, Ohio',
  },
]

export default function Testimonials() {
  return (
    <section id="customers" className="border-b border-[#EADFCF] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C25A2B]">In their words</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-[2.7rem]">
            From the people on the desk, not the ones who signed the contract
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3D555F]">
            We ask dispatchers and operations managers, because they are the ones who find out on the first hot Saturday
            whether the software is any good.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.name}
              data-testid="testimonial"
              className="flex flex-col rounded-2xl border border-[#EADFCF] bg-[#FBF6EE] p-8"
            >
              <svg viewBox="0 0 32 24" className="h-6 w-8 text-[#E8813F]" aria-hidden="true" focusable="false">
                <path
                  d="M13 24V13.5C13 6.6 8.4 1.9 1.6 0L0 3.5c4 1.4 6.2 4.1 6.4 7.2H1.6V24zM32 24V13.5C32 6.6 27.4 1.9 20.6 0L19 3.5c4 1.4 6.2 4.1 6.4 7.2h-4.8V24z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-5 flex-1 leading-relaxed text-[#12242C]">{item.quote}</blockquote>
              <figcaption className="mt-6 border-t border-[#EADFCF] pt-5 text-sm">
                <span className="block font-semibold text-[#12242C]">{item.name}</span>
                <span className="block text-[#3D555F]">{item.role}</span>
                <span className="block text-[#6A7F87]">{item.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
