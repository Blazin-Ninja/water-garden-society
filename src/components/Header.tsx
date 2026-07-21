import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'

const links = [
  { to: '/about', label: 'About' },
  { to: '/meetings', label: 'Meetings' },
  { to: '/tours', label: 'Pond Tours' },
  { to: '/classes', label: 'Classes' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/join', label: 'Join' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          Water Garden Society
        </Link>
        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
        <nav id="site-nav" className={`site-header__nav${open ? ' is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `site-header__link${isActive ? ' is-active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
