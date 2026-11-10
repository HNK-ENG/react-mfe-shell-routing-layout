import type { MfeName } from './shellRoutes.ts'

type MfeSkeletonProps = {
  /** The MFE this placeholder stands in for, used for the accessible label. */
  name: MfeName
}

export default function MfeSkeleton({ name }: MfeSkeletonProps) {
  return (
    <div
      className="skeleton"
      role="status"
      aria-busy="true"
      aria-label={`Loading ${name}`}
    >
      <span className="skeleton-bar skeleton-title" />
      <span className="skeleton-bar skeleton-line" />
      <span className="skeleton-bar skeleton-line skeleton-line-short" />
    </div>
  )
}
