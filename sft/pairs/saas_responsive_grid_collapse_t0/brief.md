# Brief — Grainline (B2B SaaS landing page)

Build the marketing landing page for **Grainline**, production-floor software for
small-batch apparel manufacturing. Grainline was built in Fall River,
Massachusetts by two people who ran a 22-machine sew floor for nine years, and it
sells to the people actually standing on that floor: the cutter, the floor lead,
the pattern maker, and the small label waiting on a 400-unit run. Its one promise
is that every cut ticket, fabric lot, bundle and subcontractor handoff lives on
one board instead of in a spreadsheet, a whiteboard and three group chats — so
the number the owner quotes on Monday is the number the sew line is actually
running. The voice is plain, specific and shop-floor literate: it says "ply
count", "shade lot", "marker efficiency" and "bundle ticket" without explaining
them, and it never oversells — no "revolutionize", no "AI-powered", no exclamation
points. Prices are real and posted: Bench at $180/month for a single floor under
twelve machines, Cut Floor at $460/month, Mill at $1,150/month for multi-site
manufacturers, all flat-rate with unlimited sew-line seats because nobody is
paying per stitcher.

The page must be a full-length landing page, not a teaser: a sticky header with
five destinations and a "Book a floor walk" action; a hero with a blunt headline,
a real subhead and a substantial inline-SVG illustration of a marker/cut plan; a
proof bar with customer wordmarks and three hard numbers; a **six-card capability
grid** covering cut tickets, fabric lots, sew-line boards, size runs, subcontractor
handoffs and the reject/rework log — this grid is the centrepiece of the page and
must **stack to one card per row on a phone and open back up to a multi-column
grid on tablets and laptops**; three alternating deep-dive blocks that explain the
ticket lifecycle, fabric costing and the Monday production number properly; a
five-step onboarding sequence; an integrations row; three posted pricing tiers; a
named customer story (Cormorant Workwear, 600 duck-canvas chore coats across two
shade lots); three testimonials from named people with real roles at named labels;
a five-question FAQ that answers the objections a skeptical floor owner actually
raises; a closing conversion block with an email capture; and a four-column footer
with address, hours and legal.

Visual identity: raw-canvas neutral `#F6F2EC`, ink `#1E1B26`, spruce green
`#2C5C4F` as the primary, rust `#C1552F` as the accent, linen `#E6DCCD` for
tinted panels. Heavy tracking-tight display headings against relaxed body copy,
generous section padding, a consistent 1rem-ish radius, and alternating section
backgrounds so the page has rhythm as you scroll. All artwork is inline SVG —
pattern pieces, grainline arrows, a spool, a marker layout, icons — plus CSS
gradients; there is no network, so no remote images. Every section is its own
flat component under `src/components/`, one per section, with stable
`data-testid` hooks on the capability grid and its cards.
