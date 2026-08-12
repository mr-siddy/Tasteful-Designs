# Brief — Postlude marketing site (landing page)

Build the single-page marketing site for **Postlude**, a B2B SaaS incident-review
workspace made by a nine-person team in Lisbon. Postlude is where infrastructure
teams run the *after* of an outage: it assembles the incident timeline from the
alerts, deploys and Slack threads that were already flying, hands the on-call
engineer a retro doc that is 80% written before the review meeting starts, and
then chases the action items until they close. Its customers are platform and SRE
teams at mid-size companies — Northwind Freight, Cadence Health, Alder Bank,
Tessellate, Havenline, Pinewood Robotics — who have PagerDuty and Datadog and a
`#incidents` channel but no discipline around what happens the week after. The
voice is calm, exact and slightly wry: engineers writing for engineers, no
"revolutionise", no exclamation marks; concrete numbers over adjectives (median
time-to-retro of 2 days instead of 11, 94% of action items with a named owner,
1,900 reviews closed last quarter). The look is a dark ink-navy `#0B1220` shell
with an ember-orange accent (`#F97316`) and a cool teal secondary, a warm slate
neutral ramp for the light sections, generous 20–28 unit section padding,
`rounded-2xl` cards with soft ring borders, and a type scale that jumps hard from
a 5xl/6xl hero headline to 15px body copy. Alternate dark and light section
backgrounds so the page has rhythm as you scroll. There is no network available:
every logo, icon, illustration, chart and divider must be inline `<svg>` or a CSS
gradient — no image URLs.

Ship, in order: a sticky header with the Postlude mark, five destinations and a
"Start a review" action; a hero with a real subhead and an SVG incident-timeline
illustration; a proof bar with six customer wordmarks and three hard numbers; six
capability cards; the four-step review workflow; **an interactive "Set up your
workspace" block where the visitor types their workspace name, work email and a
note about their stack into a form and a live preview panel beside it echoes what
they typed back — the workspace URL slug, the invite address, the note — and a
Reserve button that confirms the reservation using the exact text they entered**;
three alternating deep-dive blocks (timeline assembly, action-item follow-through,
cross-incident patterns) with their own SVG art; an integrations grid of eight
tools; three pricing tiers; three named testimonials with roles and companies; a
five-question FAQ answered properly; a closing CTA; and a four-column footer with
navigation, contact, the Lisbon address and legal links.

The setup block is the centrepiece interaction: it must be a genuinely controlled
form — every keystroke lands in React state, the fields render that state back,
and the preview and the confirmation are computed from it, so what the visitor
sees is always exactly what they typed.
