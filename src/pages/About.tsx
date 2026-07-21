import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

export function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="The Water Garden Society is an Oklahoma City community focused on helping each other create the ponds we imagine and making lifelong friends."
      />
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1>About our community</h1>
          <p>
            We are a group of people who enjoy our ponds—and the friendships that
            grow alongside them.
          </p>
        </div>
      </section>
      <section className="section section--narrow">
        <h2>What we care about</h2>
        <p className="section__lede">
          Community comes first. We help each other create the ponds we can
          imagine, share what we learn, and make lifelong friends along the way.
        </p>
        <p>
          Some members are just dreaming of their first water garden. Others have
          tended ponds for decades. Everyone is welcome to ask questions, offer
          advice, and celebrate the work in progress.
        </p>
        <h2>How we gather</h2>
        <p>
          We host informative monthly meetings, arrange pond tours around
          Oklahoma City, and offer instructional classes so more people can build
          and care for healthy water gardens with confidence.
        </p>
        <p>
          <Link to="/meetings" className="text-link">
            See where and when we meet
          </Link>
        </p>
      </section>
    </>
  )
}
