import { StarRow } from './Icons'

const QUOTES = [
  {
    quote:
      'I came in eleven weeks after a C-section, convinced I was going to be handed a mat and left alone. Camille screened me on day one, told me exactly which two things we were not doing yet, and had me back under a barbell by August. I have never been coached like that anywhere.',
    name: 'Nadia Ferreira',
    detail: 'Pharmacist · member since 2022',
  },
  {
    quote:
      'Fifty-eight, two bad discs, and I had written off lifting entirely. Desmond spent my whole first month on a broomstick and a twenty-kilo bar and I was furious about it. Two years later I pull a hundred and ten kilos off the floor and my back has never been quieter.',
    name: 'Gideon Park',
    detail: 'Sous chef at Marlow & Vine · member since 2023',
  },
  {
    quote:
      'The thing nobody tells you about a twelve-person cap is that you stop being able to hide. Priya knows when I am holding my breath before I do. I moved across the river in March and I still make the trip four mornings a week, which tells you everything.',
    name: 'Alma Whitcombe',
    detail: 'Structural engineer · member since 2019',
  },
]

export default function Testimonials() {
  return (
    <section data-testid="testimonials" aria-labelledby="testimonials-heading" className="bg-[#FAF6F0]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C4623A]">Members</p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[#16211C] sm:text-4xl"
          >
            Three people who did not think this was for them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5A52]">
            Every quote below is from someone still on the books, printed with
            their permission and their real job. We will introduce you to any of
            them if you want to ask a question we cannot answer honestly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.name}
              data-testid="testimonial"
              className="flex flex-col rounded-2xl border border-[#E4DCD0] bg-[#FFFCF8] p-7 shadow-[0_18px_42px_-36px_rgba(22,33,28,0.7)]"
            >
              <StarRow title="Five out of five" className="h-4" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#3C4A42]">
                <p>“{item.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-[#EDE3D6] pt-4">
                <p className="text-sm font-black text-[#16211C]">{item.name}</p>
                <p className="mt-0.5 text-sm text-[#5C6B63]">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
