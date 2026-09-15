export const ENABLE_ANIMATION_DEBUG = import.meta.env.DEV && import.meta.env.VITE_ENABLE_ANIMATION_DEBUG === 'true'

export const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

export function getSceneDistance() {
  if (window.innerWidth < 640) return window.innerHeight * 3
  if (window.innerWidth < 1024) return window.innerHeight * 3.5
  return window.innerHeight * 4
}
