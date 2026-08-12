# Brief — Tamada, a Georgian supper house (restaurant · landing page)

Build the marketing landing page for **Tamada**, a forty-four seat Georgian
supper house at 1830 NE Alberta Street in Portland, Oregon, opened in 2018 by
**Nino Abashidze**, who cooked in her mother's guesthouse kitchen in Kutaisi
before moving to Oregon. The whole restaurant is built around the *supra* — the
Georgian feast where a **tamada**, the toastmaster, walks the table through a
sequence of toasts and the food keeps arriving until it stops. Nino bakes
khachapuri against the wall of a clay *tone* oven she had shipped from Tbilisi,
pleats khinkali by hand every morning, and pours amber wine from Kakhetian
producers who still ferment in buried clay *qvevri*. The voice is warm,
hospitable and unhurried, with concrete specifics — pleat counts, oven
temperatures, grape names, street corners — never generic restaurant language.

**Palette and type:** deep wine/aubergine and pomegranate as the brand darks,
marigold amber as the accent, a warm stone neutral ramp, cream page background.
Serif display headings with real weight contrast against a clean sans body;
generous section padding, `rounded-3xl` cards, soft warm shadows, alternating
section backgrounds so the page has rhythm as you scroll. All visuals are inline
SVG (the clay oven, the qvevri buried in the cellar floor, the pleated khinkali,
press wordmarks, step icons, the footer map) plus CSS gradients — no network is
available, so no remote images.

**Sections, in order:** sticky header with the wordmark, five destinations and a
reserve button · hero with the headline, a long subhead, two CTAs, three house
facts and a large oven illustration · accolades strip (press quotes, awards,
ratings) · "The table, course by course" — six named dishes with prices and a
sentence each · **the reservation request form** — the seed's component: a
guest types their name, email, party size, date, seating preference and a note
for the kitchen, watches a live "your table so far" summary rewrite itself as
they type, and gets a confirmation panel that reads their details back · the
qvevri cellar deep dive · the bakehouse and the tone oven deep dive · "How a
supra works" in five numbered steps · the long-table private supra block ·
three named testimonials · a six-question FAQ · a closing visit CTA with hours
and address · a four-column footer with nav, contact, hours and legal.

**The interaction that matters:** every control in the reservation form is a
controlled React input. Typing must immediately show the typed text in the
field, rewrite the live summary above the button, and be read back verbatim in
the confirmation panel after the guest sends the request. Nothing on the page
uses the network, timers or randomness.
