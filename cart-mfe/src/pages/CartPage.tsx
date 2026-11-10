import { Link } from 'react-router'

export default function CartPage() {
  return (
    <section className="cart-page">
      <h2>This is the cart page from cart-mfe</h2>
      <nav className="page-links">
        <Link to="/30723/checkout">→ /30723/checkout</Link>
        <Link to="/30723/checkout/login">→ /30723/checkout/login</Link>
        <Link to="/30723/checkout/register">→ /30723/checkout/register</Link>
      </nav>
    </section>
  )
}
