# Brief — Weirline marketing site (landing page)

**Task:** `saas_tabs_active_panel_t0` · seed `tabs_active_panel` · industry `saas` · archetype `landing`

## One-paragraph brief (the SFT input)

Build the single-page marketing site for **Weirline**, B2B compliance software for
small drinking-water systems, made by a six-person team in Belfast, Maine. Weirline
is the workspace a licensed operator lives in for the two days a month that
paperwork eats: it pulls the SCADA day-file and the lab's electronic data
deliverable into one place, keeps the sampling calendar for coliform, lead and
copper, disinfection by-products and nitrate, drafts the monthly operating report
in the exact format the state primacy agency wants, and keeps a signed, timestamped
record of every submittal so the sanitary survey stops being a week of digging
through banker's boxes. Its customers are utilities most software ignores — the
Wallace Brook Water District, Kennebec Valley Utilities, the Village of Sablefield,
Tidewater Regional, Cape Anselm Water & Sewer, Ledgemont Public Works — systems
serving 800 to 60,000 people where one Grade II operator is also the billing clerk
and the on-call plumber. The voice is plain, exact and a little dry: written by
operators for operators, no "revolutionise", no exclamation marks, real numbers
instead of adjectives (a monthly operating report that took a full Thursday now
takes 19 minutes; 312 systems on the platform; 0 late filings across the fleet in
2025; 97% of scheduled samples collected on time). The look is a deep marine
`#08312F` shell with a tide-teal accent (`#17A398`), a copper secondary (`#D97742`)
and a warm sand neutral ramp (`#FBF8F3` / `#F1E9DC`), generous 20–28 unit section
padding, `rounded-2xl` cards with soft ring borders, and a type scale that jumps
hard from a 5xl/6xl hero headline to 15px body copy. Alternate sand, white and deep
marine section backgrounds so the page has rhythm as you scroll. There is no
network available: every logo, icon, illustration, chart and divider must be inline
`<svg>` or a CSS gradient — no image URLs.

Ship, in order: a sticky header with the Weirline weir mark, five destinations and
a "Book a walkthrough" action; a hero with a real subhead and an SVG report-desk
illustration; a proof bar with six utility wordmarks and three hard numbers; six
capability cards with their own icons; **an interactive "One workspace, four jobs"
block where four tabs — Sampling, Lab results, Reporting, Audits — each reveal
their own panel with a heading, a paragraph, four capability lines, an SVG diagram
and a stat, and where choosing a tab shows that panel and only that panel**; three
alternating deep-dive blocks (the sampling calendar, the report engine, the audit
binder) with their own SVG art; an integrations strip of eight SCADA and lab
systems; the four-step rollout; the founders' story with an SVG coastline map;
three pricing tiers priced per connection; three named testimonials from operators
with their systems; a five-question FAQ answered properly; a closing CTA; and a
four-column footer with navigation, contact, the Belfast address and legal links.

The tab block is the centrepiece interaction: it is a real ARIA tablist — exactly
one tab carries `aria-selected="true"`, exactly one panel is on screen at any
moment, the page opens on Sampling, and clicking a tab swaps the panel underneath
rather than scrolling to it.
