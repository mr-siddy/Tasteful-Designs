import { ClockIcon, FernMark, PhoneIcon, PinIcon } from './Icons'

const EXPLORE = [
  { label: 'Menus', href: '#menus' },
  { label: 'The Fire', href: '#fire' },
  { label: 'Sourcing', href: '#sourcing' },
  { label: 'Private Events', href: '#events' },
  { label: 'Guest reviews', href: '#reviews' },
]

const HOURS = [
  { day: 'Wednesday – Thursday', time: '5:00pm – 10:00pm' },
  { day: 'Friday – Saturday', time: '5:00pm – 11:00pm' },
  { day: 'Sunday roast', time: '11:00am – 2:00pm' },
  { day: 'Sunday dinner', time: '5:00pm – 9:00pm' },
  { day: 'Monday – Tuesday', time: 'Closed, private hire only' },
]

export default function SiteFooter() {
  return (
    <footer id="visit" className="bg-[#0C1D17] text-[#F7F1E8]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <FernMark className="h-11 w-11" />
              <span className="font-serif text-2xl font-semibold">Copperfern</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#F7F1E8]/70">
              A wood-fire restaurant two blocks off the ship canal in Ballard. One hearth, eleven
              producers, and a menu that changes when they say it does.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#E08B4F]">
              Est. 2019 · Seattle
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs uppercase tracking-[0.22em] text-[#E08B4F]">Explore</h2>
            <ul className="mt-5 space-y-3">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#F7F1E8]/75 transition-colors hover:text-[#E08B4F]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.22em] text-[#E08B4F]">Find us</h2>
            <address className="mt-5 space-y-4 text-sm not-italic text-[#F7F1E8]/75">
              <p className="flex gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 flex-none text-[#4C6B54]" />
                <span>
                  2140 NW Market Street
                  <br />
                  Ballard, Seattle, WA 98107
                </span>
              </p>
              <p className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 flex-none text-[#4C6B54]" />
                <a href="tel:+12065550142" className="transition-colors hover:text-[#E08B4F]">
                  (206) 555-0142
                </a>
              </p>
              <p className="flex gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 flex-none text-[#4C6B54]" />
                <a
                  href="mailto:reservations@copperfern.co"
                  className="transition-colors hover:text-[#E08B4F]"
                >
                  reservations@copperfern.co
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.22em] text-[#E08B4F]">Hours</h2>
            <dl className="mt-5 space-y-3 text-sm text-[#F7F1E8]/75">
              {HOURS.map((slot) => (
                <div key={slot.day} className="flex flex-col">
                  <dt className="text-[#F7F1E8]">{slot.day}</dt>
                  <dd className="text-[#F7F1E8]/60">{slot.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-[#F7F1E8]/12 pt-8 text-xs text-[#F7F1E8]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Copperfern Restaurant Group LLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#faq" className="transition-colors hover:text-[#E08B4F]">
              Guest policies
            </a>
            <a href="#events" className="transition-colors hover:text-[#E08B4F]">
              Private hire
            </a>
            <a href="#reserve" className="transition-colors hover:text-[#E08B4F]">
              Accessibility & access
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
