import { Link } from "react-router";


export default function AskToLoginPage() {
  return (
    <section className="cart-page">
      <h2>This is the AskToLogin page from cart-mfe</h2>
      <nav className="page-links">
        <Link to="/30723/checkout/login">→ /30723/checkout/login</Link>
        <Link to="/30723/checkout/register">→ /30723/checkout/register</Link>
      </nav>
    </section>
  );
}
