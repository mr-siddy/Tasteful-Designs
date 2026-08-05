/** The site's destinations, shared by the desktop bar and the mobile sheet. */

export type NavLink = {
  href: string
  label: string
  blurb: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '#platform', label: 'Platform', blurb: 'Everything dispatch touches, on one screen' },
  { href: '#board', label: 'Dispatch board', blurb: 'How the day rebuilds itself when plans change' },
  { href: '#pricing', label: 'Pricing', blurb: 'Per technician, per month, billed annually' },
  { href: '#customers', label: 'Customers', blurb: 'Shops running 5 to 80 trucks on Taskflow' },
  { href: '#faq', label: 'Answers', blurb: 'Migration, offline work, contracts and support' },
]

export default function PrimaryNav() {
  return (
    <nav aria-label="Primary" data-testid="desktop-nav" className="hidden items-center gap-7 md:flex">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          data-testid="desktop-nav-link"
          className="text-sm font-medium text-slate-300 transition hover:text-amber-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
