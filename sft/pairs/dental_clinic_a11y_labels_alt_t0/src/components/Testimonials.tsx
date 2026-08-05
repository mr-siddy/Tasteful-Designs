const QUOTES = [
  {
    quote:
      'I work nights at Ashbourne General and I had not seen a dentist in six years, purely because I could never stay awake for a two o’clock appointment. My check-up is 7:00am on the way home from a shift. That is the entire reason I am a patient here.',
    name: 'Odile Brandt',
    detail: 'Night-shift nurse · Patient since 2022',
    initials: 'OB',
  },
  {
    quote:
      'Two kids, one hour, one trip. Theo let my youngest hold the little mirror and count his own teeth before anyone touched him, and she came out asking when she could go back. I have never written a review in my life and here I am.',
    name: 'Callum Whitcroft',
    detail: 'Father of two, Kell Lane · Patient since 2023',
    initials: 'CW',
  },
  {
    quote:
      'I am the person who cancels dental appointments at midnight. The quiet room, the hand signal and being told exactly what was about to happen got me through a crown in two visits without one panic attack. Priya never once made me feel ridiculous.',
    name: 'Marisol Quintero',
    detail: 'Teacher · Patient since 2019',
    initials: 'MQ',
  },
]

export function Testimonials() {
  return (
    <section data-testid="testimonials" className="bg-[#eaf4f5]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#128a72]">
            In their words
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Three patients, three reasons they stayed
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              data-testid="testimonial"
              className="flex flex-col rounded-3xl border border-[#0b2d45]/10 bg-white p-8 shadow-sm"
            >
              <svg
                viewBox="0 0 40 32"
                className="h-8 w-8 text-[#2fb99b]"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M16 0v12c0 11-5.6 18-15 20v-6c5-2 7.4-5.6 7.4-9H0V0zM40 0v12c0 11-5.6 18-15 20v-6c5-2 7.4-5.6 7.4-9H24V0z"
                  fill="currentColor"
                  opacity="0.9"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[#0b2d45]/80">
                {entry.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-[#0b2d45]/10 pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b2d45] text-sm font-semibold text-white"
                >
                  {entry.initials}
                </span>
                <span>
                  <span className="block font-serif text-lg font-semibold">{entry.name}</span>
                  <span className="block text-xs uppercase tracking-[0.12em] text-[#0b2d45]/50">
                    {entry.detail}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
