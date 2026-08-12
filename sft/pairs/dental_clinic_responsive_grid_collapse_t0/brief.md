# Brief — Quarry Hill Dental (landing page)

Build the marketing landing page for **Quarry Hill Dental**, a nine-year-old
family and restorative dental practice at 218 Water Street in Burlington,
Vermont, in the old marble-cutters' block below the hill the practice is named
for. Two dentists and a hygiene team of four look after about 2,400 households
from Burlington, Winooski and the Champlain islands. The practice's whole pitch
is *one street, one visit*: they mill their own crowns chairside on a CEREC unit,
they take their own 3D scans, and they do not send families across town for
things a general office can finish in-house. Their patients are working parents,
UVM staff, and a lot of people who have not seen a dentist since the pandemic and
are quietly embarrassed about it — so the tone must be warm, plain-spoken and
completely free of hard-sell dentistry language. Nothing about "transforming your
smile"; a lot about parking, price transparency and not being lectured.

**Voice and content.** Write real copy for this specific practice. Prices are
posted openly (that is the point of the page): a new-patient exam with x-rays at
$149, a same-day crown at $1,290, whitening at $290. Invent named staff — Dr.
Nadia Okonkwo (restorative, runs the mill), Dr. Elliot Braga (family and kids),
Ruth Vandermeer RDH (hygiene lead) — and named patients for the testimonials
with plausible Vermont detail. The FAQ should answer the questions people
actually call about: insurance, whether the crown really takes one appointment,
dental anxiety, kids' first visits, and parking on Water Street.

**Sections, in order.** A sticky header with the brand mark, five destinations, a
phone number and a "Book a visit" action. A hero with the practice name as the
page's `h1`, a real subhead, two calls to action and a supporting illustration.
A proof bar of stats and credentials. **A services section presenting six
treatment cards in a responsive card grid** — this is the page's centrepiece and
the component the engineering task is anchored on. Then two alternating
copy/visual deep dives (the chairside crown mill; comfort and sedation), a
four-step first-visit timeline, a team section, three membership tiers for
uninsured families, three testimonials with named attribution, a five-question
FAQ, a closing call to action carrying hours and address, and a four-column
footer.

**The rule the services grid must obey.** The six treatment cards are laid out
one per row on a phone and open up to multiple columns from the `md` breakpoint
onward — mobile-first `grid-cols-1`, then `md:grid-cols-2`, then
`lg:grid-cols-3`. Cards must never be forced into a cramped multi-column track
list at phone width.

**Craft.** Commit to a palette: deep quarry teal `#0f4c4f` and `#134e4a` for
ink-dark bands, a brass accent `#c68a3e`, cream `#faf5ec` and sand `#f2e9da` for
the light bands, with white cards. Serif display headings against a sans body for
weight contrast, generous section padding, one consistent radius and shadow
language, and alternating band backgrounds so the page has rhythm as you scroll.
There is no network: every visual is an inline `<svg>` or a CSS gradient — a
quarry-hill brand mark, an icon per service, a spot illustration in the hero, a
milling-unit diagram, monogram portraits for the team, and a soft topographic
divider. Semantic HTML throughout, real `alt`/`aria-label`/heading structure, and
no timers, randomness or network calls anywhere in the page code.
