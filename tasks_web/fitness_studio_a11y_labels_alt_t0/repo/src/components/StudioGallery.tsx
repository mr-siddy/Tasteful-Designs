import { useState } from 'react'
import { Figure, IconButton, SectionHeading, type Shot } from './PageKit'
import { ArrowLeftIcon, ArrowRightIcon } from './Icons'
import { ROOM_ART } from '../art'

type Room = {
  id: string
  name: string
  shot: Shot
  caption: string
  detail: string
}

const ROOMS: Room[] = [
  {
    id: 'platform',
    name: 'The Platform Room',
    shot: {
      src: ROOM_ART.platform,
      alt: 'The Platform Room — six lifting platforms under the old coal-chute skylights',
    },
    caption: 'Six competition platforms, calibrated plates, and daylight down the chutes until about four.',
    detail:
      'This is where Foundations and Barbell Club run. The platforms came out of a closed weightlifting club in Allentown and were re-decked here in 2019; the chalk bowls are refilled twice a day and nobody has ever been asked to wipe one down mid-set.',
  },
  {
    id: 'racks',
    name: 'The Rack Wall',
    shot: {
      src: ROOM_ART.racks,
      alt: 'The Rack Wall — eight power racks along the east wall of the depot',
    },
    caption: 'Eight racks, spaced far enough apart that two people can bail at once without meeting.',
    detail:
      'Every rack carries its own bar, a full set of plates and a bench, so an open gym session never turns into queueing. The numbers stencilled on the uprights are the ones written on your programme card, which is how a coach can say "rack four, second pin" across the room.',
  },
  {
    id: 'engine',
    name: 'The Engine Room',
    shot: {
      src: ROOM_ART.engine,
      alt: 'The Engine Room — rowers, bikes and the sled track on the lower floor',
    },
    caption: 'Six rowers, four air bikes, two ski ergs and thirty metres of turf for the sleds.',
    detail:
      'Conditioning runs down here, away from the platforms, so nobody is doing intervals beside somebody setting up for a heavy single. The sled track is the full length of the old loading bay and the floor is sprung, which your knees will notice within a week.',
  },
  {
    id: 'rebuild',
    name: 'The Rebuild Studio',
    shot: {
      src: ROOM_ART.rebuild,
      alt: 'The Rebuild Studio — the private treatment room where Rebuild sessions run',
    },
    caption: 'A door that closes, a plinth, and a coach who has read your imaging before you arrive.',
    detail:
      'Rebuild sessions happen in here rather than on the main floor, because relearning to hinge after a discectomy is nobody else’s business. Priya keeps notes for each member and sends a summary to your physical therapist after every block if you ask her to.',
  },
  {
    id: 'lounge',
    name: 'The Boiler Room',
    shot: {
      src: ROOM_ART.lounge,
      alt: 'The Boiler Room — the members’ lounge built around the depot’s original boiler',
    },
    caption: 'The original 1908 boiler, four armchairs, and the coffee that keeps the 6am class civil.',
    detail:
      'We were told to scrap the boiler during the fit-out and did not. It now anchors the lounge where the masters group sits for an hour after Thursday sessions, and where most people end up on their first visit before they have agreed to anything.',
  },
]

export default function StudioGallery() {
  const [index, setIndex] = useState(0)
  const room = ROOMS[index]
  const step = (delta: number) => setIndex((current) => (current + delta + ROOMS.length) % ROOMS.length)

  return (
    <section id="rooms" className="bg-[#12141A] text-[#F7F3EC]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          tone="dark"
          eyebrow="The rooms"
          title="A coal depot with five rooms in it"
          blurb="Most people decide about a gym in the first ninety seconds of walking in, so here is the whole building before you spend a Saturday morning on us."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <Figure
              shot={room.shot}
              testId="gallery-stage"
              className="w-full rounded-3xl border border-white/10 object-cover"
              frameClassName="flex flex-col"
            />
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <IconButton
                control={{ name: 'Show the previous room', icon: <ArrowLeftIcon /> }}
                testId="gallery-nav"
                onClick={() => step(-1)}
              />
              <IconButton
                control={{ name: 'Show the next room', icon: <ArrowRightIcon /> }}
                testId="gallery-nav"
                onClick={() => step(1)}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F3EC]/50">
                Room {index + 1} of {ROOMS.length}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black tracking-tight text-[#E1552B]">{room.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-[#F7F3EC]/85" data-testid="gallery-caption">
              {room.caption}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#F7F3EC]/60">{room.detail}</p>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ROOMS.map((entry, position) => (
            <li key={entry.id}>
              <button
                type="button"
                data-testid="room-pick"
                onClick={() => setIndex(position)}
                className={`h-full w-full rounded-2xl border p-3 text-left transition-colors ${
                  position === index
                    ? 'border-[#E1552B] bg-[#E1552B]/10'
                    : 'border-white/10 bg-white/5 hover:border-white/30'
                }`}
              >
                <Figure
                  shot={entry.shot}
                  testId="room-shot"
                  caption={entry.name}
                  className="w-full rounded-xl object-cover"
                  frameClassName="flex flex-col"
                  captionClassName="mt-3 text-sm font-semibold text-[#F7F3EC]/85"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
