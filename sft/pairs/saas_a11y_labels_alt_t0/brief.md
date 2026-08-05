# Brief — Halyard (saas · landing)

Build the marketing landing page for **Halyard**, a B2B release-control platform
sold to engineering teams that deploy into audited production — banks, health
systems, freight and energy operators who have to satisfy SOC 2, PCI DSS, HIPAA
or DORA every quarter. Halyard sits between the customer's CI system and their
production estate: it evaluates a change-policy file before a deploy starts,
routes the change to the right approver with its blast radius attached, keeps the
previous known-good release warm for 72 hours, and emits a signed evidence record
for every change so nobody has to reassemble screenshots in April. The company is
Halyard, Inc., 88 Dorrance Street, Suite 400, Providence, Rhode Island; support
runs 24/7 on (401) 555 0168; the flagship line is **"Ship on Friday. Prove it on
Monday."** The voice is calm, concrete and slightly dry — this is sold to staff
engineers and heads of platform who have been burned by change-advisory boards,
so the copy should name real mechanics (approval SLAs, freeze windows,
break-glass records, blast-radius resolution) rather than adjectives. Named
customers to reference throughout: Fernpost Bank, Ombra Health, Tidemark
Logistics, Basalt Energy, Verrick Insurance and Kestrel Payments.

Ship a long-form landing page, dark-navy (`#0B1524`) with a copper accent
(`#F2A93B`) and a mint signal (`#4ADEC0`), on a bone-white lower half. It needs:
a sticky site header carrying the brand mark, five destinations, a row of
icon-only utility controls (docs search, changelog, system status, account) that
open a small utility panel, and a trial CTA; a hero with the flagship line, a
subhead of at least twenty words and two calls to action; a trust bar with six
customer wordmarks and four hard numbers; a six-card capability grid; a **product
gallery** — the anchor section — with a large featured product screenshot,
previous/next icon controls that step through five screens (deploy timeline,
approval queue, evidence bundle, blast-radius preview, freeze calendar) and a
grid of all five as captioned figures; three alternating deep-dive blocks that
actually explain the approval model, the evidence model and where Halyard sits in
a pipeline; a four-step rollout path (connect, model, shadow, enforce); three
priced plans (Team $480/mo, Scale $1,900/mo, Regulated custom) with the middle
one highlighted; three testimonials attributed to named people with real job
titles at the named customers; a five-question FAQ answering the questions a
platform lead would actually ask; a closing conversion block built around a
**trial signup form** with seven labelled controls (work email, full name,
company, seats, compliance regime, what you want to automate first, and a digest
opt-in) that confirms in place; and a four-column footer with the address, the
support line and the legal row.

Every product screenshot must be a real `<img>` rendered from an inline
`data:image/svg+xml` URI — no network is available — and every icon must be
inline SVG. The page must be fully announceable to assistive technology: each
screenshot carries alt text naming the screen it shows, each icon-only control
carries an `aria-label` saying what it does, and each form control is tied to its
visible label with `htmlFor`/`id`.
