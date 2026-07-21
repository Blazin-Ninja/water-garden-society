import { useEffect } from 'react'

type Props = {
  title: string
  description: string
}

const SITE = 'Water Garden Society'

export function PageMeta({ title, description }: Props) {
  useEffect(() => {
    document.title = title === SITE ? SITE : `${title} · ${SITE}`

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setOg('og:title', document.title)
    setOg('og:description', description)
    setOg('og:type', 'website')
  }, [title, description])

  return null
}
