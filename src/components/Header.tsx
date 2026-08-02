import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/casos', label: 'Casos' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__logo" onClick={() => setIsOpen(false)}>
          Májda<span className="site-header__logo-dot">.</span>
        </NavLink>

        <button
          type="button"
          className="site-header__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="site-header-nav"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          id="site-header-nav"
          aria-label="Navegação principal"
          className={`site-header__nav ${isOpen ? 'is-open' : ''}`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? 'site-header__link is-active' : 'site-header__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
