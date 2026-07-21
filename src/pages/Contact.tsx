import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { MEETING_NOTE, VENUE } from '../lib/venue'

export function Contact() {
  return (
    <>
      <PageMeta
        title="Contact"
        description="Contact the Water Garden Society and find our monthly meeting location at Lakeview Nazarene in Oklahoma City."
      />
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1>Contact</h1>
          <p>
            Reach out through our join form, or meet us at Lakeview Nazarene.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section__split">
          <div>
            <h2>Meeting place</h2>
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
            <h2>Get in touch</h2>
            <p>
              The best way to introduce yourself is our{' '}
              <Link to="/join" className="text-link">
                membership interest form
              </Link>
              , or come say hello at the next meeting.
            </p>
            <p>
              Looking for tours or classes? Browse the{' '}
              <Link to="/tours" className="text-link">
                pond tours
              </Link>{' '}
              and{' '}
              <Link to="/classes" className="text-link">
                classes
              </Link>{' '}
              calendars.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
