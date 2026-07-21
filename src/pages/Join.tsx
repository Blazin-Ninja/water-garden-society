import { JoinForm } from '../components/JoinForm'
import { PageMeta } from '../components/PageMeta'
import { Link } from 'react-router-dom'

export function Join() {
  return (
    <>
      <PageMeta
        title="Join"
        description="Share your interest in joining the Water Garden Society—Oklahoma City’s community for pond keepers and friends."
      />
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1>Join the society</h1>
          <p>
            Tell us a little about yourself. You’re also welcome to simply show
            up at the next meeting.
          </p>
        </div>
      </section>
      <section className="section section--narrow">
        <h2>Membership interest</h2>
        <p className="section__lede">
          We will follow up with meeting details and how to get involved. No
          pressure—community first.
        </p>
        <JoinForm />
        <p className="form-aside">
          Prefer to start in person? See our{' '}
          <Link to="/meetings">meeting schedule and location</Link>.
        </p>
      </section>
    </>
  )
}
