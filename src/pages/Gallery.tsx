import { Link } from 'react-router-dom'
import { GalleryGrid } from '../components/GalleryGrid'
import { PageMeta } from '../components/PageMeta'

export function Gallery() {
  return (
    <>
      <PageMeta
        title="Gallery"
        description="Photos of mature ponds, exotic koi, and lush water plants from Water Garden Society members and past tours around Oklahoma City."
      />
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1>Member ponds &amp; past tours</h1>
          <p>
            Mature ponds, exotic koi, and the lush plants that make a water
            garden feel alive—glimpses from our community and past tours.
          </p>
        </div>
      </section>
      <section className="section">
        <GalleryGrid />
        <p className="gallery-note">
          Have photos to share? Bring them to a meeting or mention it when you{' '}
          <Link to="/join">join</Link>—we love adding new gardens to the gallery.
          Replace placeholder images in <code>public/gallery/</code> and update{' '}
          <code>src/content/gallery.json</code> anytime.
        </p>
      </section>
    </>
  )
}
