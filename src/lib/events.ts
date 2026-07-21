import eventsData from '../content/events.json'

export type EventType = 'meeting' | 'tour' | 'class'

export type SocietyEvent = {
  id: string
  title: string
  type: EventType
  date: string
  time?: string
  location?: string
  summary: string
  cancelled?: boolean
}

export const events = eventsData as SocietyEvent[]

function startOfToday(): Date {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

export function parseEventDate(iso: string): Date {
  const [y, m, day] = iso.split('-').map(Number)
  return new Date(y, m - 1, day)
}

export function formatEventDate(iso: string): string {
  return parseEventDate(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getUpcoming(type?: EventType, limit?: number): SocietyEvent[] {
  const today = startOfToday()
  let list = events
    .filter((e) => !e.cancelled)
    .filter((e) => parseEventDate(e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date))

  if (type) list = list.filter((e) => e.type === type)
  if (limit != null) list = list.slice(0, limit)
  return list
}

export function getPast(type?: EventType, limit?: number): SocietyEvent[] {
  const today = startOfToday()
  let list = events
    .filter((e) => parseEventDate(e.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date))

  if (type) list = list.filter((e) => e.type === type)
  if (limit != null) list = list.slice(0, limit)
  return list
}

export function typeLabel(type: EventType): string {
  switch (type) {
    case 'meeting':
      return 'Meeting'
    case 'tour':
      return 'Pond Tour'
    case 'class':
      return 'Class'
  }
}
