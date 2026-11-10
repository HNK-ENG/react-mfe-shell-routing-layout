export type MfeName = 'product' | 'cart' | 'user'

export type ShellRoute = {
  path: string
  mfes: MfeName[]
}

export const shellRoutes: ShellRoute[] = [
  {path: '/', mfes: ['product']},
  { path: '/30722/*', mfes: ['product'] },
  { path: '/30723/cart', mfes: ['cart', 'product'] },
  { path: '/30723/checkout', mfes: ['cart', 'product'] },
  { path: '/30723/checkout/login', mfes: ['cart', 'user', 'product'] },
  { path: '/30723/checkout/register', mfes: ['cart', 'user', 'product'] },
  { path: '/30724/*', mfes: ['user'] },
]
