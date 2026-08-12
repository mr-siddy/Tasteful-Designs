# Brief — Lantern & Rye (restaurant / landing)

Build a long-form marketing landing page for **Lantern & Rye**, a nine-year-old
hearth-fired supper house at 62 Dorwich Street in the Ironbridge Quarter, run by
chef-owner Nadia Fenwick in a former rope factory. The whole restaurant is built
around two things a guest can see from their seat: a single oak fire that is lit
at six in the morning and never rebuilt during service, and a stone mill in the
back room that grinds Turkey Red, rye and einkorn the same morning it is baked.
The personality is *patient and unfussy* — no tweezers, no foam, no eighteen-course
theatre; 38 seats downstairs, a 12-seat Mill Room upstairs, one seating a night,
and a menu that is short because the fire only has so much room on it. It sells to
two people at once: the couple booking a proper anniversary dinner who want to be
looked after rather than performed at, and the local regular who eats at the bar on
a Wednesday — so the copy has to be warm and specific in the same breath, quoting
real numbers (£38 for 28-day sirloin, four-day levain, 1,284 reviews at 4.9, a
£62 Mill Room supper) instead of adjectives.

Ship it as a flat React tree of one component per section: a sticky header
carrying the lantern mark and a six-destination section nav, a hero with the
restaurant name, a thirty-word promise and an inline-SVG hearth illustration over
a warm ember gradient, a trust bar of awards and guest numbers, a six-dish menu
with real prices and a sentence of provenance each, three alternating deep-dive
blocks on the fire, the mill and the October larder, the room itself with an SVG
floorplan and private-dining terms, the shape of an evening as five timed steps,
a cellar list of six pours and three non-alcoholic ferments with tasting notes,
three guest stories with names and occasions, a visit section with six real
front-of-house questions, a closing reservation call-to-action with a working
request form, and a four-column footer with hours, address and legal links.

**The section nav is the interactive centrepiece.** The page is one long scroll
with six anchored destinations — Menu, The Hearth, The Room, The Evening, Cellar,
Visit — and the sticky nav has to tell the guest where they are: whichever section
is currently in the middle band of the viewport gets its link lit, with
`aria-current` set on exactly that one link and cleared from the rest. It is
driven by an `IntersectionObserver` watching **every** anchored section (a
`-45% 0px -45% 0px` band, so a tall section cannot steal the highlight from the
one being read), the page opens with Menu lit, and the highlight moves both ways
as the guest scrolls down and back up again.

Palette: ember `#B7411F` and brass `#D8A244` against a bark `#2A211B` / coal
`#14100D` deep ramp, on warm oat `#FBF6EC` and sand `#F0E4D2` neutrals with
`#1B1410` ink and a single moss `#3F5D4B` accent. Serif display headings with
tight tracking against wide-tracked uppercase eyebrows; generous section padding;
`rounded-3xl` cards with soft shadows; alternating oat / sand / bark section
backgrounds so the page has rhythm as you scroll. All artwork is inline SVG and
CSS gradients — no network requests anywhere on the page.
