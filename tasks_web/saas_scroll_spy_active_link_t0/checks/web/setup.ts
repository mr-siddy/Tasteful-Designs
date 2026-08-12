import '@testing-library/jest-dom/vitest'
import { vi, beforeEach } from 'vitest'

// Deterministic + offline: no real network, fixed clock and RNG. The Python
// network guard does not reach node's subprocess, so this is mandatory here.
beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => new Response('{}', { status: 200 })),
  )
  vi.spyOn(Date, 'now').mockReturnValue(new Date('2026-01-01T00:00:00Z').valueOf())
  vi.spyOn(Math, 'random').mockReturnValue(0.42)
})

// ---------------------------------------------------------------------------
// IntersectionObserver
//
// jsdom ships no IntersectionObserver and has no layout engine, so a scroll-spy
// nav cannot be exercised — or even rendered — without a stub. This one is
// inert: it records what the page asked to watch and NEVER delivers an entry by
// itself. Callbacks fire only when a test calls `intersectionDriver.scrollTo()`,
// which keeps every run deterministic.
// ---------------------------------------------------------------------------

type EntryLike = {
  target: Element
  isIntersecting: boolean
  intersectionRatio: number
  boundingClientRect: DOMRectReadOnly
  intersectionRect: DOMRectReadOnly
  rootBounds: DOMRectReadOnly | null
  time: number
}

type ObserverCallback = (entries: EntryLike[], observer: unknown) => void

const liveObservers = new Set<TestIntersectionObserver>()

class TestIntersectionObserver {
  readonly root: Element | Document | null
  readonly rootMargin: string
  readonly thresholds: number[]
  readonly targets = new Set<Element>()
  private readonly callback: ObserverCallback

  constructor(callback: ObserverCallback, options: IntersectionObserverInit = {}) {
    this.callback = callback
    this.root = (options.root as Element | Document | null) ?? null
    this.rootMargin = options.rootMargin ?? '0px'
    this.thresholds = Array.isArray(options.threshold)
      ? options.threshold
      : [options.threshold ?? 0]
    liveObservers.add(this)
  }

  observe(target: Element) {
    this.targets.add(target)
  }

  unobserve(target: Element) {
    this.targets.delete(target)
  }

  disconnect() {
    this.targets.clear()
    liveObservers.delete(this)
  }

  takeRecords(): EntryLike[] {
    return []
  }

  /** Test-only: hand a batch of entries to the page's own callback. */
  deliver(entries: EntryLike[]) {
    this.callback(entries, this)
  }
}

const rect = (top: number, height: number): DOMRectReadOnly =>
  ({
    x: 0,
    y: top,
    top,
    left: 0,
    right: 1280,
    bottom: top + height,
    width: 1280,
    height,
    toJSON: () => ({}),
  }) as DOMRectReadOnly

const inDocumentOrder = (a: Element, b: Element) =>
  a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1

export const intersectionDriver = {
  /** Everything the page has asked to be told about, in document order. */
  observedElements(): Element[] {
    const seen = new Set<Element>()
    liveObservers.forEach((observer) => observer.targets.forEach((target) => seen.add(target)))
    return [...seen].sort(inDocumentOrder)
  },

  /**
   * Scroll `element` into the viewport band: every live observer is handed a
   * batch covering all of its targets, with `element` the only intersecting
   * one and the rest laid out above and below it. That is the batch shape a
   * real IntersectionObserver delivers, so any correct reading of the entries
   * works — first intersecting, highest ratio, topmost rect, or one at a time.
   */
  scrollTo(element: Element | null | undefined) {
    if (!element) throw new Error('intersectionDriver.scrollTo: no element to scroll to')
    liveObservers.forEach((observer) => {
      const targets = [...observer.targets].sort(inDocumentOrder)
      if (targets.length === 0) return
      const anchor = targets.indexOf(element)
      const entries: EntryLike[] = targets.map((target, index) => {
        const isIntersecting = target === element
        const top = anchor === -1 ? (index + 1) * 720 : (index - anchor) * 720
        return {
          target,
          isIntersecting,
          intersectionRatio: isIntersecting ? 1 : 0,
          boundingClientRect: rect(top, 640),
          intersectionRect: isIntersecting ? rect(top, 640) : rect(0, 0),
          rootBounds: rect(0, 900),
          time: 0,
        }
      })
      observer.deliver(entries)
    })
  },
}

vi.stubGlobal('IntersectionObserver', TestIntersectionObserver)
vi.stubGlobal('intersectionDriver', intersectionDriver)

// A fresh registry per test: observers from a torn-down render never linger.
beforeEach(() => {
  liveObservers.clear()
})
