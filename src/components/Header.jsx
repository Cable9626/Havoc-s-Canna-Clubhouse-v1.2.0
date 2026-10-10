import { useState } from 'react'
import './Header.css'

const links = [
  { label: 'Hours', href: '#hours' },
  { label: 'Membership', href: '#membership' },
  { label: "What's on", href: '#whats-on' },
  { label: 'Merch', href: '#merch' },
  { label: 'Find us', href: '#find-us' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="logo" href="#top">
        Havoc's <span className="logo-sub">Cannabis Clubhouse</span>
      </a>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        ☰
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <span className="age-pill">18+</span>
      </nav>
    </header>
  )
}

export default Header