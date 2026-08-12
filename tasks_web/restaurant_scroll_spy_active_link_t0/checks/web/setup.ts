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
// jsdom implements no IntersectionObserver, and a page that tracks which section
// the reader is looking at cannot exist without one. This stub is deterministic:
// it NEVER fires on its own. A spec drives elements in and out of view with
// globalThis.__intersect(...), and only the observers that are actually watching
// those elements are called back — the same contract as the real browser API.

type IoRecord = {
  callback: IntersectionObserverCallback
  targets: Set<Element>
  instance: IntersectionObserver
}

const ioRecords = new Set<IoRecord>()

const inViewRect = {
  x: 0,
  y: 120,
  top: 120,
  left: 0,
  bottom: 720,
  right: 1024,
  width: 1024,
  height: 600,
  toJSON: () => ({}),
} as DOMRectReadOnly

const emptyRect = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: 0,
  height: 0,
  toJSON: () => ({}),
} as DOMRectReadOnly

class StubIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null
  readonly rootMargin: string
  readonly thresholds: ReadonlyArray<number>
  private readonly record: IoRecord

  constructor(callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}) {
    this.root = (options.root as Element | Document | null) ?? null
    this.rootMargin = options.rootMargin ?? '0px 0px 0px 0px'
    const threshold = options.threshold ?? 0
    this.thresholds = Array.isArray(threshold) ? threshold : [threshold]
    this.record = { callback, targets: new Set<Element>(), instance: this }
    ioRecords.add(this.record)
  }

  observe(target: Element) {
    this.record.targets.add(target)
  }

  unobserve(target: Element) {
    this.record.targets.delete(target)
  }

  disconnect() {
    this.record.targets.clear()
    ioRecords.delete(this.record)
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

function entryFor(target: Element, isIntersecting: boolean): IntersectionObserverEntry {
  return {
    target,
    isIntersecting,
    intersectionRatio: isIntersecting ? 1 : 0,
    boundingClientRect: isIntersecting ? inViewRect : emptyRect,
    intersectionRect: isIntersecting ? inViewRect : emptyRect,
    rootBounds: inViewRect,
    time: 0,
  } as IntersectionObserverEntry
}

/**
 * Drive elements into or out of view.
 *
 * Pass [element, isIntersecting] pairs; every observer watching at least one of
 * those elements receives one batched callback with just its own entries.
 * Observers watching none of them hear nothing, exactly as in a real browser.
 */
function intersect(changes: Array<[Element | null, boolean]>) {
  const pairs = changes.filter((pair): pair is [Element, boolean] => pair[0] != null)
  for (const record of Array.from(ioRecords)) {
    const mine = pairs.filter(([element]) => record.targets.has(element))
    if (mine.length === 0) continue
    record.callback(
      mine.map(([element, isIntersecting]) => entryFor(element, isIntersecting)),
      record.instance,
    )
  }
}

beforeEach(() => {
  ioRecords.clear()
  vi.stubGlobal('IntersectionObserver', StubIntersectionObserver)
  vi.stubGlobal('__intersect', intersect)
})
