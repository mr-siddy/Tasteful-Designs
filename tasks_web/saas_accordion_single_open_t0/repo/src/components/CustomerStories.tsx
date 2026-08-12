const STORIES = [
  {
    quote:
      'We publish twenty-two titles a year with four and a half people, and the season used to live in a spreadsheet only I could read. The week I stopped being the single point of failure for our pub dates was the week I stopped waking up at four in the morning.',
    name: 'Marisol Ferrer',
    role: 'Production director, Harrow & Wick',
    place: 'Portland, Maine',
    metric: '22 titles a year, one production department',
    tone: '#C0462A',
  },
  {
    quote:
      'Our distributor rejected feeds constantly and we never knew until a rep called. Colophon validates before it sends, and the receipt trail settled a two-month argument about a price change in about ninety seconds.',
    name: 'Dev Raghunathan',
    role: 'Publisher, Ninth Street Editions',
    place: 'Chicago, Illinois',
    metric: 'Feed rejections down from 31 a season to 2',
    tone: '#1F5E57',
  },
  {
    quote:
      'The thing that sold it was cascading dates. Our printer moved a slot by nine days and Colophon rescheduled the cover proof, the galley mailing and the sales conference deck before I had finished reading the email.',
    name: 'Ada Okonjo',
    role: 'Managing editor, Bright Kiln Press',
    place: 'Bristol, England',
    metric: 'Four lists shipped on the announced date',
    tone: '#8A6B3A',
  },
]

export function CustomerStories() {
  return (
    <section id="customers" className="bg-[#141B2E] text-[#F3EDE1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E0C4B8]">
            Presses on Colophon
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#FBF8F2] sm:text-5xl">
            Three production departments, in their own words
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#C6CBDC]">
            We asked the presses who had been on Colophon for at least two full seasons what actually
            changed. Nobody mentioned the software. They talked about the Thursday afternoon when the
            printer moved a slot and nothing caught fire.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              data-testid="customer-story"
              className="flex flex-col rounded-3xl border border-[#2F3A5C] bg-[#1B2440] p-8"
            >
              <svg viewBox="0 0 32 24" aria-hidden="true" className="h-6 w-8" style={{ color: story.tone }}>
                <path
                  d="M0 24V12C0 5.4 4.6 0.6 12 0v5.4C8.2 6.2 6 8.6 6 12h6v12zm20 0V12C20 5.4 24.6 0.6 32 0v5.4c-3.8.8-6 3.2-6 6.6h6v12z"
                  fill="currentColor"
                />
              </svg>

              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-[#E4E7F0]">
                {story.quote}
              </blockquote>

              <figcaption className="mt-8 border-t border-[#2F3A5C] pt-6">
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 48 48" role="img" aria-label={`Portrait illustration of ${story.name}`} className="h-12 w-12 flex-none">
                    <circle cx="24" cy="24" r="24" fill={story.tone} opacity="0.25" />
                    <circle cx="24" cy="20" r="8" fill={story.tone} />
                    <path d="M8 46c1.6-9 8-13.5 16-13.5S38.4 37 40 46z" fill={story.tone} opacity="0.7" />
                  </svg>
                  <div>
                    <span className="block font-semibold text-[#FBF8F2]">{story.name}</span>
                    <span className="block text-sm text-[#8892B4]">{story.role}</span>
                    <span className="block text-xs text-[#8892B4]">{story.place}</span>
                  </div>
                </div>
                <p className="mt-5 rounded-xl bg-[#141B2E] px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#E0C4B8]">
                  {story.metric}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
