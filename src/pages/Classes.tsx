import { EventList } from '../components/EventList'
import { PageMeta } from '../components/PageMeta'
import { getPast, getUpcoming } from '../lib/events'

export function Classes() {
  const upcoming = getUpcoming('class')
  const recent = getPast('class', 4)

  return (
    <>
      <PageMeta
        title="Classes"
        description="Instructional classes from the Water Garden Society—practical skills for building, planting, and caring for ponds in Oklahoma City."
      />
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1>Instructional classes</h1>
          <p>
            Hands-on learning so you can build and care for the pond you have
            been imagining.
          </p>
        </div>
      </section>

      <section className="section section--narrow">
        <h2>What you’ll learn</h2>
        <p className="section__lede">
          Classes cover practical topics—from first builds and water quality to
          plants, fish, and seasonal care—taught by experienced members.
        </p>
        <p>
          Bring your questions. We focus on approaches that work in Oklahoma
          weather and help you avoid common (and expensive) mistakes.
        </p>
      </section>

      <section className="section">
        <h2>Upcoming classes</h2>
        <EventList
          events={upcoming}
          emptyMessage="No classes are listed at the moment. Please check back—and always confirm the calendar in advance."
        />
      </section>

      {recent.length > 0 ? (
        <section className="section section--muted">
          <h2>Recent classes</h2>
          <EventList events={recent} />
        </section>
      ) : null}
    </>
  )
}
