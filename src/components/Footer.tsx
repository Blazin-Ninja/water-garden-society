import { Link } from 'react-router-dom'
import { MEETING_NOTE, VENUE } from '../lib/venue'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">Water Garden Society</p>
          <p className="site-footer__tagline">
            Community ponds, shared knowledge, and lifelong friends in Oklahoma City.
          </p>
        </div>
        <div className="site-footer__meet">
          <p className="site-footer__label">We meet at</p>
          <p>
            {VENUE.name}
            <br />
            {VENUE.street}
            <br />
            {VENUE.city}
          </p>
          <p className="site-footer__note">{MEETING_NOTE}</p>
        </div>
        <div className="site-footer__links">
          <Link to="/meetings">Meetings</Link>
          <Link to="/tours">Pond Tours</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/join">Join</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <p className="site-footer__copy">
        © {new Date().getFullYear()} Water Garden Society · Oklahoma City
      </p>
    </footer>
  )
}
