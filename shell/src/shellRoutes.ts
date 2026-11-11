export const PRODUCT = 'product'
export const CART = 'cart'
export const USER = 'user'

export type MfeName = typeof PRODUCT | typeof CART | typeof USER

export type ShellRoute = {
  path: string
  mfes: MfeName[]
}

export const shellRoutes: ShellRoute[] = [
  // list each entry's mfes in the order their pages should appear on screen, top to bottom. This order is the layout.
  { path: '/', mfes: [PRODUCT] },
  { path: '/30722/*', mfes: [PRODUCT] },
  { path: '/30723/cart', mfes: [CART, PRODUCT] },
  { path: '/30723/checkout', mfes: [CART, PRODUCT] },
  { path: '/30723/checkout/login', mfes: [CART, USER, PRODUCT] },
  { path: '/30723/checkout/register', mfes: [CART, USER, PRODUCT] },
  { path: '/30724/*', mfes: [USER] },
]
