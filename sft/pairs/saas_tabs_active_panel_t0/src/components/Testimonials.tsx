const QUOTES = [
  {
    quote:
      'I used to block out the first Thursday of the month and tell the office I was unreachable. Last month I signed the report from the truck between two hydrant flushes and still made my daughter’s game. Nothing about the job got easier — the paperwork just stopped being the job.',
    name: 'Dale Ouellette',
    role: 'Grade II operator, Wallace Brook Water District',
    detail: '1,140 connections · on Weirline since 2023',
  },
  {
    quote:
      'Our sanitary survey took two hours. The inspector asked for four years of coliform results and corrective actions and I exported it while she was setting up her laptop. She asked what we were using and wrote the name down.',
    name: 'Priya Raghunathan',
    role: 'Superintendent, Kennebec Valley Utilities',
    detail: '18,400 connections · on Weirline since 2022',
  },
  {
    quote:
      'We run eleven small systems under contract and every one of them kept its numbers somewhere different. Now they are all in one place and I can see on a Monday morning which system is behind on its sampling week. We have not filed late since.',
    name: 'Marcus Feeley',
    role: 'Operations director, Tidewater Regional',
    detail: '11 systems · on Weirline since 2024',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 id="testimonials-heading" className="max-w-3xl text-4xl font-semibold tracking-tight lg:text-[42px]">
          From the people who sign the bottom of the form
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              data-testid="testimonial"
              className="flex flex-col rounded-2xl bg-[#FBF8F3] p-8 ring-1 ring-[#08312F]/10"
            >
              <svg viewBox="0 0 32 24" className="h-6 w-8 text-[#17A398]" aria-hidden="true">
                <path
                  d="M13 3C7 5 3 9.5 3 15v6h11v-11H8c.4-3 2.4-5 5-6Zm16 0c-6 2-10 6.5-10 12v6h11v-11h-6c.4-3 2.4-5 5-6Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-[#08312F]/80">
                {q.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-[#08312F]/10 pt-5">
                <span className="block text-[15px] font-semibold">{q.name}</span>
                <span className="mt-1 block text-[14px] text-[#08312F]/65">{q.role}</span>
                <span className="mt-0.5 block text-[13px] text-[#08312F]/45">{q.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
