// The component product-mfe contributes to cart-mfe's four cart / checkout
// routes. The same component answers all four, so walking
// cart -> checkout -> checkout/login keeps this instance mounted rather than
// remounting it per route.
export default function RecommendationAtCartPage() {
  return (
    <section className="product-page">
      <h2>This is the RecommendationAtCart page from product-mfe</h2>
    </section>
  )
}
