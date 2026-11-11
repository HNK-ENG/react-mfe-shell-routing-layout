export const PRODUCT = 'product'
export const CART = 'cart'
export const USER = 'user'
export type MfeName = typeof PRODUCT | typeof CART | typeof USER

export const USER_PAGES = {
  LOGIN: 'login',
  REGISTER: 'register',
} as const

export const PRODUCT_PAGES = {
  RECOMMENDATION: 'recommendation',
} as const

export type UserPageName = (typeof USER_PAGES)[keyof typeof USER_PAGES]
export type ProductPageName = (typeof PRODUCT_PAGES)[keyof typeof PRODUCT_PAGES]

export type Mount = {
  mfe: MfeName
  page?: UserPageName | ProductPageName
}

export type ShellRoute = {
  path: string
  mount: Mount[]
}

export const shellRoutes: ShellRoute[] = [
  // list each entry's mounts in the order their pages should appear on screen,
  // top to bottom. This order is the layout. 
  { path: '/', mount: [{ mfe: PRODUCT }] },
  { path: '/30722/*', mount: [{ mfe: PRODUCT }] },
  {
    path: '/30723/cart',
    mount: [
      { mfe: CART },
      { mfe: PRODUCT, page: PRODUCT_PAGES.RECOMMENDATION },
    ],
  },
  {
    path: '/30723/checkout',
    mount: [
      { mfe: CART },
      { mfe: PRODUCT, page: PRODUCT_PAGES.RECOMMENDATION },
    ],
  },
  {
    path: '/30723/checkout/login',
    mount: [
      { mfe: CART },
      { mfe: USER, page: USER_PAGES.LOGIN },
      { mfe: PRODUCT, page: PRODUCT_PAGES.RECOMMENDATION },
    ],
  },
  {
    path: '/30723/checkout/register',
    mount: [
      { mfe: CART },
      { mfe: USER, page: USER_PAGES.REGISTER },
      { mfe: PRODUCT, page: PRODUCT_PAGES.RECOMMENDATION },
    ],
  },
  { path: '/30724/*', mount: [{ mfe: USER }] },
]
