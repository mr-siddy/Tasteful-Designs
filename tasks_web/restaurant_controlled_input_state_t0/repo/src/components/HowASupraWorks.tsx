const STEPS = [
  {
    n: '01',
    title: 'The cold table is already set',
    body: 'Pkhali, lobio, tomato and cucumber with walnut, sulguni, pickled jonjoli buds. You sit down to a table that is two-thirds full and it stays that way all evening.',
  },
  {
    n: '02',
    title: 'Someone is made tamada',
    body: 'The toastmaster. Usually the eldest, occasionally the loudest, and on Thursdays it is whoever is sitting closest to the qvevri hatch. The tamada sets the order of the toasts and nobody drinks out of turn.',
  },
  {
    n: '03',
    title: 'The first toast is to peace',
    body: 'Then to the reason you came, then to your parents, then to the people who are not at the table. There are traditionally seven or more and they get longer as they go.',
  },
  {
    n: '04',
    title: 'Hot dishes land in waves',
    body: 'Khachapuri, khinkali, chakapuli, mtsvadi. Nothing is cleared to make room; plates get stacked on plates until the table is a small architectural problem.',
  },
  {
    n: '05',
    title: 'It ends when it ends',
    body: 'Usually with churchkhela, matsoni and a toast to the person who cooked. We hold each table for the whole evening, so there is no second seating waiting on your chair.',
  },
]

export function HowASupraWorks() {
  return (
    <section id="supra" data-testid="supra" className="bg-stone-900 py-24 text-stone-100">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            How a supra works
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            You are not ordering dinner, you are joining a feast
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            If you have never sat at a supra before, here is the whole shape of it, so that nothing
            arrives as a surprise except the food. You can also ignore every word of this and just
            eat — plenty of people do, and the tamada will forgive you.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              data-testid="supra-step"
              className="rounded-3xl border border-stone-700 bg-stone-800/60 p-7"
            >
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 44 44" aria-hidden="true" className="h-11 w-11 shrink-0">
                  <circle cx="22" cy="22" r="21" fill="none" stroke="#fbbf24" strokeWidth="2" />
                  <text
                    x="22"
                    y="28"
                    textAnchor="middle"
                    fontSize="15"
                    fontFamily="Georgia, serif"
                    fill="#fbbf24"
                  >
                    {step.n}
                  </text>
                </svg>
                <h3 className="font-serif text-xl font-semibold text-amber-50">{step.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone-300">{step.body}</p>
            </li>
          ))}

          <li className="rounded-3xl border border-dashed border-amber-500/60 bg-amber-500/10 p-7">
            <h3 className="font-serif text-xl font-semibold text-amber-300">
              A word on the drinking
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">
              Nobody is obliged to empty a glass, and half our toasts are drunk in Borjomi water or
              tarragon soda. The point of a toast is the sentence, not the wine.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}
