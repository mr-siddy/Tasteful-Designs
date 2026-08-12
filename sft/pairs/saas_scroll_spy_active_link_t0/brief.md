# Brief — Ledgerloom marketing landing page

Build the marketing landing page for **Ledgerloom**, a Portland-based B2B SaaS
platform that runs the month-end financial close for companies carrying more
than one legal entity — the controllers who today live inside a shared drive of
close checklists, a reconciliation workbook per entity, and a Slack thread that
nobody can audit six months later. The promise on the page is concrete and
measurable: *close the books in four days, not fourteen*, with every balance
tied out, every journal entry approved by a second pair of eyes, and an audit
trail your Big Four team can pull themselves. The voice is calm, senior and
numerate — it talks to a Corporate Controller, not to a growth marketer: no
exclamation marks, no "revolutionary", real numbers (days to close, entity
counts, tie-out percentages, price per month), and real accounting nouns
(subledger, intercompany elimination, flux analysis, SOX evidence, trial
balance). Visual identity is indigo `#4338ca` as the brand colour with a warm
amber `#f59e0b` accent on a cool slate neutral ramp: deep indigo gradient
surfaces for the hero and the closing call to action, white and slate-50 bands
alternating through the body so the page has rhythm as it scrolls, tight
tracking on large semibold headings, generous `py-20`-ish section padding, a
consistent `rounded-2xl` radius and a soft shadow language. Every visual is
inline SVG or a CSS gradient — a woven-thread monogram for the brand mark, a
close-progress dashboard illustration in the hero, customer wordmarks in the
trust bar, a line-art icon per platform capability, a connector diagram for the
integrations block and a shield/ledger motif for the controls block — because
the page must render with no network at all.

The page is a single scrolling document with a **sticky header whose nav is a
scroll spy**: as the reader moves down the page, the link for the section
currently in the viewport is the one highlighted — amber underline, indigo
text, `aria-current` set — so the nav doubles as a "you are here" rail through a
long page. Ship, in order: the sticky header (brand mark, seven anchored
destinations, a *Book a demo* action); a hero with the four-days headline, a
subhead of real substance, two calls to action and the dashboard illustration; a
trust bar of customer wordmarks and hard stats; **Platform**, six capability
cards with icons; **Workflow**, the five numbered stages of a close from cutoff
to sign-off; **Integrations**, alternating copy-and-diagram blocks about the
ERPs and banks it reads from; **Controls**, the security, approval and evidence
story; **Pricing**, three tiers with real monthly prices and what is in each;
**Customers**, three named testimonials with role and company plus a case-study
stat strip; an **FAQ** of five questions a controller actually asks during
procurement; a closing call to action; and a four-column footer with product,
company, resources and contact details for the Portland office.
