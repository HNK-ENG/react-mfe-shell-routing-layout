import { lazy, Suspense } from 'react'
import { useLocation, matchPath } from 'react-router'
import { shellRoutes } from './shellRoutes.ts'
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
  product: lazy(slow(() => import('productMfe/App'), 2000)),
  //@ts-ignore
  cart: lazy(slow(() => import('cartMfe/App'), 4000)),
  //@ts-ignore
  user: lazy(slow(() => import('userMfe/App'), 6000)),
}

export default function MfeOutlet() {
  const { pathname } = useLocation()
  const matched = shellRoutes.find((route) => matchPath(route.path, pathname))

  if (!matched) return <NotFoundPage />

  return matched.mfes.map((name) => {
    const RemoteApp = remotes[name]
    return (
      <section key={name} className="mfe-region" data-mfe={name}>
        <Suspense fallback={<MfeSkeleton name={name} />}>
          <RemoteApp />
        </Suspense>
      </section>
    )
  })
}
