import { useState } from 'react'

type ClassSlot = {
  id: string
  name: string
  category: 'Strength' | 'Conditioning' | 'Mobility'
  day: string
  time: string
  length: string
  coach: string
}

const CATEGORIES = ['All', 'Strength', 'Conditioning', 'Mobility']

const CLASSES: ClassSlot[] = [
  {
    id: 'barbell-basics',
    name: 'Barbell Basics',
    category: 'Strength',
    day: 'Mon',
    time: '6:00 AM',
    length: '60 min',
    coach: 'Nadia Fierro',
  },
  {
    id: 'sunrise-intervals',
    name: 'Sunrise Intervals',
    category: 'Conditioning',
    day: 'Tue',
    time: '6:00 AM',
    length: '45 min',
    coach: 'Theo Marsh',
  },
  {
    id: 'heavy-hour',
    name: 'Heavy Hour',
    category: 'Strength',
    day: 'Wed',
    time: '6:30 PM',
    length: '60 min',
    coach: 'Theo Marsh',
  },
  {
    id: 'deep-stretch',
    name: 'Deep Stretch',
    category: 'Mobility',
    day: 'Wed',
    time: '12:00 PM',
    length: '30 min',
    coach: 'Priya Anand',
  },
  {
    id: 'row-and-recover',
    name: 'Row & Recover',
    category: 'Conditioning',
    day: 'Thu',
    time: '7:00 PM',
    length: '50 min',
    coach: 'Nadia Fierro',
  },
  {
    id: 'hips-and-shoulders',
    name: 'Hips & Shoulders',
    category: 'Mobility',
    day: 'Fri',
    time: '5:30 PM',
    length: '40 min',
    coach: 'Marcus Bell',
  },
  {
    id: 'kettlebell-ladders',
    name: 'Kettlebell Ladders',
    category: 'Strength',
    day: 'Sat',
    time: '9:00 AM',
    length: '45 min',
    coach: 'Priya Anand',
  },
  {
    id: 'hill-repeats',
    name: 'Hill Repeats',
    category: 'Conditioning',
    day: 'Sun',
    time: '8:30 AM',
    length: '45 min',
    coach: 'Marcus Bell',
  },
]

export function ClassSchedule() {
  const [active, setActive] = useState('All')

  const [visible, setVisible] = useState(CLASSES)

  function selectCategory(category: string) {
    setActive(category)
    // Narrow the schedule down to the type that is now selected.
    setVisible(active === 'All' ? CLASSES : CLASSES.filter((c) => c.category === active))
  }

  return (
    <section id="schedule" className="mx-auto max-w-4xl px-4 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight">This week on the floor</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-stone-600">
        Every class is coached in person and capped at ten. Narrow the week down to the kind of
        training you came for.
      </p>

      <div
        role="group"
        aria-label="Filter classes by type"
        data-testid="class-filter"
        className="mt-10 flex flex-wrap justify-center gap-2"
      >
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            data-testid="class-filter-button"
            aria-pressed={category === active}
            onClick={() => selectCategory(category)}
            className={
              category === active
                ? 'rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-stone-900'
                : 'rounded-full border border-stone-300 px-5 py-2 text-sm font-medium text-stone-600 hover:border-stone-500 hover:text-stone-900'
            }
          >
            {category}
          </button>
        ))}
      </div>

      <p
        data-testid="class-count"
        aria-live="polite"
        className="mt-4 text-center text-sm text-stone-500"
      >
        Showing {visible.length} of {CLASSES.length} classes
      </p>

      <ul data-testid="class-list" className="mt-8 grid gap-4 sm:grid-cols-2">
        {visible.map((c) => (
          <li
            key={c.id}
            data-testid="class-card"
            className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-700">
              {c.category}
            </span>
            <h3 className="mt-2 text-lg font-semibold">{c.name}</h3>
            <p className="mt-2 text-sm text-stone-600">
              {c.day} · {c.time} · {c.length}
            </p>
            <p className="mt-1 text-sm text-stone-500">with {c.coach}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
