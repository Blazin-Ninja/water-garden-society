import { useEffect, useState } from 'react'
import galleryData from '../content/gallery.json'
import './GalleryGrid.css'

type GalleryItem = {
  id: string
  src: string
  caption: string
  credit?: string
}

const items = galleryData as GalleryItem[]

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryItem | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <ul className="gallery-grid">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="gallery-grid__item"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <button
              type="button"
              className="gallery-grid__btn"
              onClick={() => setActive(item)}
              aria-label={`View larger: ${item.caption}`}
            >
              <img src={item.src} alt={item.caption} loading="lazy" />
              <span className="gallery-grid__caption">{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <figure
            className="gallery-lightbox__figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.caption} />
            <figcaption>
              <strong>{active.caption}</strong>
              {active.credit ? <span>{active.credit}</span> : null}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
