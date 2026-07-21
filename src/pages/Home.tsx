import { Link } from 'react-router-dom'
import { EventPreview } from '../components/EventList'
import { PageMeta } from '../components/PageMeta'
import { getUpcoming } from '../lib/events'
import './Home.css'

export function Home() {
  const upcoming = getUpcoming(undefined, 2)

  return (
    <>
      <PageMeta
        title="Water Garden Society"
        description="Oklahoma City water garden community for monthly meetings, pond tours, and instructional classes—helping each other create the ponds we imagine."
      />
      <section className="hero">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__brand animate-rise">Water Garden Society</p>
          <h1 className="hero__headline animate-rise animate-rise--delay-1">
            Grow the pond you imagine—together.
          </h1>
          <p className="hero__lede animate-rise animate-rise--delay-2">
            An Oklahoma City community for monthly meetings, pond tours, and
            hands-on classes—where neighbors become lifelong friends.
          </p>
          <div className="hero__actions animate-rise animate-rise--delay-3">
            <Link to="/meetings" className="btn btn--primary">
              See meetings
            </Link>
            <Link to="/join" className="btn btn--ghost">
              Join us
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--narrow">
        <h2>Community first</h2>
        <p className="section__lede">
          We help each other create the ponds we can imagine—sharing tips,
          tools, and encouragement along the way.
        </p>
        <p>
          Whether you are planning your first liner or refining a mature water
          garden, you will find people who care about clear water, healthy
          plants, and the friendships that grow around them.
        </p>
        <Link to="/about" className="text-link">
          Learn about our community
        </Link>
      </section>

      <section className="section section--band">
        <div className="section__split">
          <div>
            <h2>What we do</h2>
            <p className="section__lede">
              Informative meetings, pond tours around town, and instructional
              classes—open to curious beginners and seasoned keepers alike.
            </p>
          </div>
          <ul className="path-list">
            <li>
              <Link to="/meetings">Monthly meetings</Link>
              <span>Gather, learn, and catch up in person.</span>
            </li>
            <li>
              <Link to="/tours">Pond tours</Link>
              <span>Visit member gardens across Oklahoma City.</span>
            </li>
            <li>
              <Link to="/classes">Instructional classes</Link>
              <span>Practical skills for building and caring for ponds.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--upcoming">
        <div className="section__upcoming-inner">
          <div>
            <h2>Coming up</h2>
            <p className="section__lede section__lede--light">
              Always check the calendar in advance—some months we may not meet.
            </p>
          </div>
          <EventPreview events={upcoming} />
        </div>
      </section>
    </>
  )
}
