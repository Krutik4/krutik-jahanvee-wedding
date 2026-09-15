import { useLayoutEffect } from 'react'
import { createSmoothScroll } from '../../animations/smoothScroll'

export function SmoothScrollProvider({ children }) {
  useLayoutEffect(() => {
    const smoother = createSmoothScroll()
    return () => smoother?.kill()
  }, [])

  return <div id="smooth-wrapper"><main id="smooth-content">{children}</main></div>
}
