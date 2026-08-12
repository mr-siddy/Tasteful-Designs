# Brief — Colophon (SaaS landing page)

Build the marketing landing page for **Colophon**, production-control software for
independent book publishers, made by a nine-person company in Providence, Rhode Island
whose founders used to run production departments themselves. The buyer is a production
director at a press that publishes ten to sixty titles a year with three or four people,
and who currently runs the whole season out of one spreadsheet that only they can read.
The page must argue that Colophon replaces that spreadsheet without pretending the press
is bigger than it is: it prices on titles rather than seats, gives authors, designers and
freelance copyeditors free guest access, does the catalogue import for you in week one,
and ships valid ONIX 3.0 metadata to the wholesaler, the distributor and the review-copy
platforms on a nightly schedule with a receipt for every drop. Voice: plain, exact, a
little dry, written by someone who has done a press check — trade-specific nouns (trim
size, bulk, spine width, press-ready, sell-through, BISAC, galley) used correctly and
never explained down. Visual identity: ink navy `#141B2E` and a warm paper cream
`#FBF8F2`/`#F3EDE1`, a vermilion press-ink accent `#C0462A` and a bindery green `#1F5E57`;
serif display headings against a sans body, generous 6rem section padding, 1.5rem radii,
soft shadows, section backgrounds alternating cream / navy / paper so the page has rhythm
as it scrolls. Every visual is inline SVG or a CSS gradient — a printer's-mark logotype,
a six-week proof-turnaround sparkline, a proof-queue mock, portrait glyphs for the named
customers — with no network images anywhere.

**Sections, in order:** sticky header with the printer's mark, six nav destinations and a
"Book a walkthrough" button; hero with a season-board preview card showing four titles at
different stages; a trust bar naming six presses (Harrow & Wick, Ninth Street Editions,
Bright Kiln Press, Sable Row Books, Quarry & Quill, Tidewater House) plus four stats;
a six-card platform grid (season board, proof rounds, printer purchase orders, metadata
feeds, review copies, reprints and stock); a deep dive rendering a real eight-title spring
list with ISBNs, stages, printers and on-sale dates; a proof-rounds deep dive naming the
five rounds with their owners and working-day budgets; a metadata deep dive showing last
night's drop to six destinations; a four-step three-week rollout ending with Beatriz
Salgado, who runs onboarding; three pricing tiers (List $180, Season $420, Imprint $940,
billed yearly, 40% off for non-profit and university presses); three testimonials with
named attribution — Marisol Ferrer at Harrow & Wick in Portland, Maine; Dev Raghunathan
at Ninth Street Editions in Chicago; Ada Okonjo at Bright Kiln Press in Bristol; a
seven-question FAQ accordion covering the spreadsheet import, metadata ownership,
onboarding time, email-only printers, what happens when a pub date moves, freelancer
access and what support looks like on a Tuesday; a closing CTA with a five-field
walkthrough request form; and a four-column footer with address, phone, product links and
legal row.

**The FAQ accordion is the interactive piece that matters:** seven questions, all collapsed
on load, each button carrying `aria-expanded` and controlling its own answer region, and
**only one answer open at a time** — opening a question closes whichever answer was already
open, and clicking the open question closes it and leaves nothing expanded.
