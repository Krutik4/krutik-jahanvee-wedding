import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { reducedMotionQuery } from './animationUtils'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function createSmoothScroll() {
  const reducedMotion = window.matchMedia(reducedMotionQuery).matches
  const touch = ScrollTrigger.isTouch === 1

  if (reducedMotion) return null

  return ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: touch ? 0 : 0.75,
    smoothTouch: 0.08,
    effects: false,
    normalizeScroll: true,
    ignoreMobileResize: true,
  })
}
