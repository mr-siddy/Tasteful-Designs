const COLUMNS = [
  {
    heading: 'Eat here',
    links: [
      { label: 'The board tonight', href: '#board' },
      { label: 'Alley Feast', href: '#feasts' },
      { label: 'Full Lantern', href: '#feasts' },
      { label: 'Tea and mezcal list', href: '#feasts' },
    ],
  },
  {
    heading: 'The place',
    links: [
      { label: 'The room and hours', href: '#room' },
      { label: 'How a night runs', href: '#kitchen' },
      { label: 'Fire, ferment, noodles', href: '#craft' },
      { label: 'Guest book', href: '#voices' },
    ],
  },
  {
    heading: 'Practical',
    links: [
      { label: 'Request a table', href: '#reserve' },
      { label: 'Common questions', href: '#questions' },
      { label: 'Allergies and diets', href: '#questions' },
      { label: 'Working here', href: 'mailto:jobs@persimmonalley.co' },
    ],
  },
]

const SOCIAL = [
  {
    label: 'Persimmon Alley on Instagram',
    href: '#social-instagram',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 10.6a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4zm6.6-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
  },
  {
    label: 'Persimmon Alley on the neighbourhood forum',
    href: '#social-forum',
    path: 'M12 2C6.5 2 2 5.9 2 10.7c0 2.8 1.5 5.3 3.9 6.9-.2 1.5-.9 2.9-1.9 3.9 1.7-.2 3.3-.9 4.7-1.9 1 .3 2.2.4 3.3.4 5.5 0 10-3.9 10-8.7S17.5 2 12 2zm-4 9.9a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zm4 0a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zm4 0a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8z',
  },
  {
    label: 'Email Persimmon Alley',
    href: 'mailto:hello@persimmonalley.co',
    path: 'M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13zm2.6.5l7.4 5.4L19.4 6H4.6z',
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[#FBF5EC]/10 bg-[#0E0A09]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#FBF5EC]">Persimmon Alley</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#FBF5EC]/55">
              22 Dunbar Lane
              <br />
              Ashgrove Works
              <br />
              Six minutes from Ashgrove Works station, exit two
            </p>
            <p className="mt-4 text-sm text-[#FBF5EC]/70">
              <a href="tel:5550172" className="hover:text-[#E4572E]">
                555 0172
              </a>
              <br />
              <a href="mailto:hello@persimmonalley.co" className="hover:text-[#E4572E]">
                hello@persimmonalley.co
              </a>
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  data-testid="social-link"
                  className="rounded-full border border-[#FBF5EC]/15 p-2.5 text-[#FBF5EC]/70 transition hover:border-[#E4572E] hover:text-[#E4572E]"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E4572E]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-testid="footer-link"
                      className="text-sm text-[#FBF5EC]/60 transition hover:text-[#FBF5EC]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#FBF5EC]/10 pt-8 text-xs text-[#FBF5EC]/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Persimmon Alley. Cooked to order, so give us a minute.</p>
          <p>Kitchen closes thirty minutes before the door does · Licensed until 1am Thu–Sat</p>
        </div>
      </div>
    </footer>
  )
}
