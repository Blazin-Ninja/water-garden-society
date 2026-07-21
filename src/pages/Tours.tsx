import { EventList } from '../components/EventList'
import { PageMeta } from '../components/PageMeta'
import { getPast, getUpcoming } from '../lib/events'

export function Tours() {
  const upcoming = getUpcoming('tour')
  const recent = getPast('tour', 4)

  return (
    <>
      <PageMeta
        title="Pond Tours"
        description="Explore member ponds around Oklahoma City with the Water Garden Society—see what’s possible and gather ideas for your own garden."
      />
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1>Pond tours around town</h1>
          <p>
            Visit water gardens across Oklahoma City, meet the people who built
            them, and leave with fresh inspiration.
          </p>
        </div>
      </section>

      <section className="section section--narrow">
        <h2>How tours work</h2>
        <p className="section__lede">
          A few times a year we open a route of member ponds for an afternoon of
          walking, talking, and learning from one another.
        </p>
        <p>
          Details—start times, addresses, and parking notes—are shared ahead of
          each tour. Guests and curious neighbors are welcome; please check the
          calendar so you have the latest information.
        </p>
      </section>

      <section className="section">
        <h2>Upcoming tours</h2>
        <EventList
          events={upcoming}
          emptyMessage="No pond tours are scheduled right now. Check back soon, and confirm details closer to the date."
        />
      </section>

      {recent.length > 0 ? (
        <section className="section section--muted">
          <h2>Past tours</h2>
          <EventList events={recent} />
        </section>
      ) : null}
    </>
  )
}
