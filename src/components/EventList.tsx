import { Link } from 'react-router-dom'
import {
  formatEventDate,
  type SocietyEvent,
  typeLabel,
} from '../lib/events'
import './EventList.css'

type Props = {
  events: SocietyEvent[]
  emptyMessage?: string
  showType?: boolean
}

export function EventList({
  events,
  emptyMessage = 'No upcoming events listed right now. Please check back—some months we skip meetings, so always confirm the calendar in advance.',
  showType = false,
}: Props) {
  if (events.length === 0) {
    return <p className="event-list__empty">{emptyMessage}</p>
  }

  return (
    <ul className="event-list">
      {events.map((event) => (
        <li key={event.id} className="event-list__item">
          <div className="event-list__meta">
            <time dateTime={event.date}>{formatEventDate(event.date)}</time>
            {event.time ? <span>{event.time}</span> : null}
            {showType ? (
              <span className="event-list__type">{typeLabel(event.type)}</span>
            ) : null}
          </div>
          <h3 className="event-list__title">{event.title}</h3>
          <p className="event-list__summary">{event.summary}</p>
          {event.location ? (
            <p className="event-list__location">{event.location}</p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export function EventPreview({ events }: { events: SocietyEvent[] }) {
  if (events.length === 0) {
    return (
      <p className="event-list__empty">
        Nothing on the calendar just yet—check back soon, and always confirm
        meetings in advance.
      </p>
    )
  }

  return (
    <ul className="event-preview">
      {events.map((event) => (
        <li key={event.id}>
          <Link to={pathForType(event.type)} className="event-preview__link">
            <span className="event-preview__type">{typeLabel(event.type)}</span>
            <span className="event-preview__title">{event.title}</span>
            <span className="event-preview__date">
              {formatEventDate(event.date)}
              {event.time ? ` · ${event.time}` : ''}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function pathForType(type: SocietyEvent['type']): string {
  switch (type) {
    case 'meeting':
      return '/meetings'
    case 'tour':
      return '/tours'
    case 'class':
      return '/classes'
  }
}
