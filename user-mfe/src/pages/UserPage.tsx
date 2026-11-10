import { Link } from 'react-router'

export default function UserPage() {
  return (
    <section className="user-page">
      <h2>This is the user page from user-mfe</h2>
      <nav className="page-links">
        <Link to="/30724/login">→ /30724/login</Link>
        <Link to="/30724/register">→ /30724/register</Link>
      </nav>
    </section>
  )
}
