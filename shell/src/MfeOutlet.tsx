import { lazy, Suspense } from 'react'
import { useLocation, matchPath } from 'react-router'
import { PRODUCT, CART, USER, shellRoutes, type MfeName } from './shellRoutes.ts'
import NotFoundPage from './pages/NotFoundPage.tsx'
import MfeSkeleton from './MfeSkeleton.tsx'

// Deliberately adds a timeout before each remote loads.
const slow =
  //@ts-ignore
  (loader, delay) => async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, delay))
    return loader()
  }

const remotes = {
  //@ts-ignore
  [PRODUCT]: lazy(slow(() => import('productMfe/App'), 2000)),
  //@ts-ignore
  [CART]: lazy(slow(() => import('cartMfe/App'), 4000)),
  //@ts-ignore
  [USER]: lazy(slow(() => import('userMfe/App'), 6000)),
} satisfies Record<MfeName, unknown>

export default function MfeOutlet() {
  const { pathname } = useLocation()
  const matched = shellRoutes.find((route) => matchPath(route.path, pathname))

  if (!matched) return <NotFoundPage />

  return matched.mount.map(({ mfe, page }) => {
    const RemoteApp = remotes[mfe]
    return (
      <section key={mfe} className="mfe-region" data-mfe={mfe}>
        <Suspense fallback={<MfeSkeleton name={mfe} />}>
          <RemoteApp page={page} />
        </Suspense>
      </section>
    )
  })
}
