# Brief — Salt Quarry (restaurant landing page)

Build the marketing landing page for **Salt Quarry**, a wood-fired coastal
kitchen that opened in 2019 inside a disused granite cutting shed on the harbour
at 18 Quarry Landing, Rockport, Massachusetts. Chef **Marisol Bevan** cooks
almost everything over a twelve-foot open hearth of white oak and apple; her
partner **Tobias Renn** keeps a cellar of Atlantic-coast and Loire bottles
behind the counter. Fish comes off the Pigeon Cove day boats each afternoon, so
the board is printed at four o'clock and changes nightly. Dinner is Wednesday to
Sunday, 5:00–10:00 pm; the oyster counter opens at noon on weekends. Reservations
run 30 days out, the counter and the terrace hold walk-in seats, and the room is
loud, warm and deliberately unfussy — granite walls, butcher paper, cast iron,
one long fire everybody can see.

The page should read like a restaurant that is confident about one thing: fire.
Design it around a deep slate-teal ink, an ember orange accent and a warm sand
neutral, serif display headings against a clean sans body, generous section
padding and alternating backgrounds so the page has rhythm as you scroll. There
is no network available, so every visual has to be inline SVG, a CSS gradient,
or an `<img>` pointed at a `data:` URI — no remote image URLs anywhere.

Ship, in order: a sticky header with the brand mark, five destinations, a row of
small round icon-only utility controls (tonight's hours, directions and parking,
gift cards, call the host stand) each of which opens a short panel, and a "Book a
table" action; a hero with the campaign line, a real subhead and two calls to
action over a hearth illustration; a press and awards strip; the board — seven
dishes across raw / fire / sweet with prices and a sentence each; a gallery of
the five rooms (the hearth, the oyster counter, the cutting shed, the harbour
terrace, the cellar) as a large featured photograph with a caption, five
thumbnails you can pick between, and a pair of round arrow controls to step
through them; three alternating deep-dive blocks on the fire, the boats and the
cellar, with a portrait of the chef at the pass; a four-step walkthrough of how
a night actually runs; three testimonials with named attribution and roles; a
private-events block for the cellar; a five-question FAQ; a reservation request
panel with seven controls (full name, email address, phone number, party size,
seating area, a note field, and an opt-in for the Friday board) that confirms
back to the guest on submit; a closing call to action; and a four-column footer
with navigation, contact details, hours and legal lines.

Write it as a real restaurant would: specific dishes, specific prices, named
people, a real address and phone number, no filler. Every image, icon-only
control and form field must be announceable by a screen reader — images carry
alt text that says what they show, icon buttons carry an accessible name that
says what they do, and every field is tied to the wording printed beside it.
