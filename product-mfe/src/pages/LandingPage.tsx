import { Link } from 'react-router'

export default function LandingPage() {
  return (
    <section className="product-page">
      <h2>This is the landing page component from product-mfe</h2>
      <nav className="page-links">
        <Link to="/30722/csc">→ /30722/csc</Link>
        <Link to="/30722/fav">→ /30722/fav</Link>
      </nav>
    </section>
  )
}
