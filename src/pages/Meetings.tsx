import { EventList } from '../components/EventList'
import { PageMeta } from '../components/PageMeta'
import { getPast, getUpcoming } from '../lib/events'
import { MEETING_NOTE, VENUE } from '../lib/venue'

export function Meetings() {
  const upcoming = getUpcoming('meeting')
  const recent = getPast('meeting', 3)

  return (
    <>
      <PageMeta
        title="Meetings"
        description="Monthly Water Garden Society meetings at Lakeview Nazarene in Oklahoma City. Some months may not have meetings—please check the calendar in advance."
      />
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1>Monthly meetings</h1>
          <p>
            Informative gatherings to share ideas, ask questions, and stay
            connected with fellow pond keepers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__split">
          <div>
            <h2>Where we meet</h2>
            <p className="venue-block">
              <strong>{VENUE.name}</strong>
              <br />
              {VENUE.street}
              <br />
              {VENUE.city}
            </p>
            <p className="callout">{MEETING_NOTE}</p>
            <p>
              <a
                href={VENUE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
          <div>
            <h2>Upcoming meetings</h2>
            <EventList events={upcoming} />
          </div>
        </div>
      </section>

      {recent.length > 0 ? (
        <section className="section section--muted">
          <h2>Recent meetings</h2>
          <EventList
            events={recent}
            emptyMessage="No recent meetings listed."
          />
        </section>
      ) : null}
    </>
  )
}
