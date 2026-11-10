export type MfeName = 'product' | 'cart' | 'user'

export type ShellRoute = {
  path: string
  mfes: MfeName[]
}

export const shellRoutes: ShellRoute[] = [
  // list each entry's mfes in the order their pages should appear on screen, top to bottom. This order is the layout.
  { path: '/', mfes: ['product'] },
  { path: '/30722/*', mfes: ['product'] },
  { path: '/30723/cart', mfes: ['cart', 'product'] },
  { path: '/30723/checkout', mfes: ['cart', 'product'] },
  { path: '/30723/checkout/login', mfes: ['cart', 'user', 'product'] },
  { path: '/30723/checkout/register', mfes: ['cart', 'user', 'product'] },
  { path: '/30724/*', mfes: ['user'] },
]
