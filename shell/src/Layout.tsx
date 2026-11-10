import { NavLink } from 'react-router'
import MfeOutlet from './MfeOutlet.tsx'

type NavItem = {
  readonly to: string
  readonly label: string
}

const NAV: readonly NavItem[] = [
  { to: '/30722', label: 'Home' },
  { to: '/30723/cart', label: 'cart' },
  { to: '/30724/user', label: 'user' },
]

export default function Layout() {
  return (
    <div className="shell">
      <header className="shell-header">
        <nav className="shell-nav">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="shell-content">
        <MfeOutlet />
      </main>

      <footer className="shell-footer">
        <span>App footer</span>
      </footer>
    </div>
  )
}
