# Brief — Pressroom Athletic (fitness studio, landing page)

Build the marketing landing page for **Pressroom Athletic**, a coached indoor-cycling
and strength studio in the old *Marlowe Gazette* printworks at 88 Hallam Fields Road,
Marlowe Quarter. It opened in 2019 in a room that still has the original cast-iron
press bed bolted to the floor; twenty-four Keiser bikes face a raised coach platform,
and behind them is a strength floor with eight lifting stations and a recovery room
with a sauna. The studio's whole pitch is that a 45-minute ride should be *coached*,
not shouted through: every bike shows watts, every class is capped, and the coach
knows your name by the third visit. The voice is confident, plain-spoken and a little
industrial — ink navy and press vermilion on warm paper stock, heavy condensed
headlines, letterpress texture — never bootcamp-shouty and never wellness-pastel.
Members are working adults in their thirties and forties who want a hard 45 minutes
before work and no lecture about their diet.

The page must sell six class formats by name, duration, price and capacity — The
Ride (45 min, £16), Ride + Lift (60 min, £19), Press Strength (50 min, £18), Sprint
Deck (30 min, £13), Long Haul (75 min, £22) and Reset (40 min, £14) — and it must
convert on one thing above all: the **£9 intro ride**. Give that its own section with
the next four open intro slots (day, time, coach, bikes left) and a button that opens
a booking dialog over the page: a short request form for name, mobile number, which
session suits them, and anything the coach should know, with a close control in the
corner. Because the dialog covers the page, it has to get out of the way the way
people expect — clicking the dimmed backdrop dismisses it, and so does pressing
Escape — while clicks that land inside the form itself leave it open. Nothing should
be submitted anywhere; a request just gets a confirmation line back.

Around that, ship a full-length page: a sticky header with the letterpress mark and
five destinations; a hero with the studio name, the 45-minute promise and live-feeling
class times; a proof band of member numbers, ratings, coach credentials and local
press; the class grid; the intro-ride booking section; three deep-dive blocks on the
room, the sound and the recovery loop; a four-step "how a first visit goes"; four
named coaches with their backgrounds; three membership tiers (drop-in £16, eight a
month £96, unlimited £139); three member stories with names, jobs and a number each;
six real FAQ answers about parking, shoes, injuries, cancellations, showers and
teenagers; a closing call to action with opening hours; and a four-column footer with
address, hours, contact and legal. Every visual is inline SVG or a CSS gradient —
the letterpress mark, the class icons, a wattage-curve illustration, the room
diagram, geometric coach portraits, local press wordmarks — because the build has no
network access and no image assets. Semantic landmarks, real labels on every form
control, and stable `data-testid` hooks on the intro-ride trigger, backdrop and
dialog.
