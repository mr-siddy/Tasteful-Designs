const QUOTES = [
  {
    id: 'quintero',
    quote:
      'We were running 40 styles a season off a whiteboard and a shared sheet that three people edited at once. The first thing Grainline did was tell me the truth about how late we already were. That was unpleasant and then it was useful.',
    name: 'Marisol Quintero',
    role: 'Owner',
    company: 'Pell Street Denim',
    detail: '22 machines · Providence, RI',
  },
  {
    id: 'bregenz',
    quote:
      'I cut for eighteen years before this and I do not like new systems. It took me two days. It asks for ply count and lay length, which I was already writing on a clipboard, and then it stops asking me anything else.',
    name: 'Tomas Bregenz',
    role: 'Cut floor lead',
    company: 'Juniper Tide',
    detail: '14 machines · Asheville, NC',
  },
  {
    id: 'okonkwo',
    quote:
      'Our labels used to call every Monday. Now they open their own run page and see units sewn, units boxed and the honest date. I got about four hours a week back and I have not given them up since.',
    name: 'Adaeze Okonkwo',
    role: 'Production manager',
    company: 'Bright Anvil Athletics',
    detail: '48 machines · Chicago, IL',
  },
]

export default function Testimonials() {
  return (
    <section
      id="customers"
      aria-labelledby="customers-heading"
      className="border-b border-[#E0D6C6] bg-[#F6F2EC]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2
          id="customers-heading"
          className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl"
        >
          What the people standing on the floor say about it
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.id}
              className="flex h-full flex-col rounded-2xl border border-[#DCCFB8] bg-[#FFFDF8] p-7"
            >
              <svg viewBox="0 0 32 24" aria-hidden="true" className="h-6 w-8">
                <path
                  d="M13 2C7 4 3 9 3 15v7h11V11H8c.4-3 2.4-5.4 5-6.5zM31 2c-6 2-10 7-10 13v7h11V11h-6c.4-3 2.4-5.4 5-6.5z"
                  fill="#E6DCCD"
                />
              </svg>
              <blockquote className="mt-4 flex-1 leading-relaxed text-[#4A4455]">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#E6DCCD] pt-5">
                <span className="block text-sm font-bold tracking-tight">
                  {q.name}
                </span>
                <span className="block text-sm text-[#4A4455]">
                  {q.role}, {q.company}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-[#7A7286]">
                  {q.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
