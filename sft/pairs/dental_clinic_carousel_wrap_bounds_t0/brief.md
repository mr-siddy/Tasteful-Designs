# Brief — Harbourline Dental (dental clinic, landing page)

Build the marketing landing page for **Harbourline Dental**, a nine-person family
and implant practice at 4 Quay Parade in Saltmere, a working harbour town. The
practice was bought out of a chain in 2016 by Dr. Neve Ashworth and rebuilt
around one promise: nobody gets a treatment plan they did not ask for and nobody
gets a bill they did not see coming. Every price is published on the page. The
practice runs a dedicated nervous-patient clinic on Wednesday mornings, does its
own implant surgery in-house rather than referring out, and keeps a two-hour
emergency window every weekday at 8am for registered families. It has a small
in-house lab, so a crack in a denture gets fixed the same afternoon instead of
posted to a lab in another county. Tone: plain-spoken, warm, a bit salty and
local, allergic to the airbrushed-teeth register of most dental marketing —
prices in pounds, real named staff, no stock-photo smiles.

The page runs long and should read like something the practice actually paid a
designer for: a sticky header with the harbour-light brand mark and a Book a
visit action; a hero pairing the promise with a hand-drawn harbour-and-chair
illustration; a strip of trust numbers and regulator credentials; a published
price list of eight treatments; **a patient-stories slider that steps through
five quotes one at a time with Back / Next arrows, a "3 of 5" counter and a row
of jump-to dots**; a three-block deep dive on how the in-house implant route
works; a nervous-patient section; a five-step first-visit timeline; the four
named clinicians with their qualifications and something human about each; three
membership plans with monthly prices; an FAQ of six real questions; a visit-us
block with opening hours, the address, a drawn map of the quay and a callback
request form; a closing call to action; and a multi-column footer with
navigation, contact details, hours and regulatory small print.

Visual direction: harbour navy `#0F2E4A` as the anchor, a coral `#F2683C` for
actions and highlights, a seafoam `#3FA394` as the supporting brand colour, and a
warm shell-white `#FAF6F1` page ground with a sand `#F1E7DA` for alternating
bands. Big tracking-tight display headings against relaxed body copy, pill
buttons, 2xl radii, soft coloured shadows. Everything visual must be inline SVG
or a CSS gradient — the site ships offline, so there is no network and no image
host. Semantic landmarks and real ARIA throughout: the slider is an APG carousel
(`region` + `aria-roledescription="carousel"`, each slide a `group` labelled
"n of 5"), form controls carry real labels, and every decorative flourish is
`aria-hidden`.
