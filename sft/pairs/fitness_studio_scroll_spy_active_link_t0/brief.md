# Brief — Northline Strength Club (fitness_studio · landing)

Build the single-page marketing site for **Northline Strength Club**, a 6,000 sq ft
barbell-and-conditioning gym at 12 Alder Way in Bellwater, two blocks up from the
grain terminal. It is not a big-box gym and not a boutique bootcamp: it is a
coached strength club where every member trains off a written twelve-week block,
lifts on one of eight platforms, and gets re-tested every quarter. The audience is
adults 28–55 who have bounced off gyms before and want someone to tell them what
to do with a barbell — plus a smaller group of masters athletes and post-rehab
clients who need the coaching to be genuinely competent. The tone is plain,
confident, and a little blue-collar; no hustle-culture shouting, no "crush it", no
transformation photos. Prices are stated out loud because hiding them is what the
competition does.

Visual identity: a dark iron-foundry palette — near-black `stone-950`/`stone-900`
fields broken up by two lighter `stone-100` sections for rhythm — with a **lime-300
accent** for anything live or current and **amber-400** as the secondary
(schedule, ratings, numbers). Heavy condensed uppercase display type for headlines
against a quiet body sans, generous 20–28 unit section padding, `rounded-2xl`
cards, and hairline `ring-white/10` borders instead of drop shadows. Every visual
is inline SVG or a CSS gradient — a stacked-plate brand mark, a barbell-and-plate
hero illustration, an overhead floor plan of the eight platforms, coach portraits
drawn as abstract geometric busts, and gradient mesh blobs behind the hero and the
closing CTA. No photography, no external assets, no network.

The page runs long and reads top to bottom: a sticky header whose nav follows the
reader down the page, a hero, a proof strip of hard numbers, the six class
formats with times and intensity, the floor itself explained in three
copy-and-drawing blocks, the four-phase coaching method, the real weekly
schedule, the four coaches with their actual credentials, three membership tiers
with prices, three member results with names and numbers, six honest FAQs, a
closing intro-session form, and a four-column footer with hours, address and
legal. Write the club's real copy — named coaches (Dana Whitlock, Ruben Okafor,
Priya Sandhu, Marcus Feld), named members, real dollar figures, real class
names like Barbell Foundations and Engine Room.

**The interaction this page is anchored on:** the sticky header nav lists six
destinations — Classes, The floor, The method, Membership, Results, Questions —
and as the reader scrolls the club's very long page, the nav must mark whichever
section is currently under the top of the viewport as the one they are in, both
visually and for a screen reader (`aria-current`). Exactly one destination is
current at a time, it must follow the reader back up the page as well as down,
and it must keep up when they jump straight to the bottom.
