import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ENABLE_ANIMATION_DEBUG, getSceneDistance, reducedMotionQuery } from './animationUtils'

gsap.registerPlugin(ScrollTrigger)

export function createTempleTimeline(root) {
  const reducedMotion = window.matchMedia(reducedMotionQuery).matches

  if (reducedMotion) {
    gsap.set(root.querySelectorAll('[data-reveal]'), { autoAlpha: 1 })
    return undefined
  }

  return gsap.context(() => {
    const q = gsap.utils.selector(root)
    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: () => `+=${getSceneDistance()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: ENABLE_ANIMATION_DEBUG,
      },
    })

    timeline
      .fromTo(q('.temple-shell'), { autoAlpha: 0, scale: 0.91, yPercent: 5 }, { autoAlpha: 1, scale: 1, yPercent: 0, duration: 1.5 })
      .fromTo(q('.temple-silhouette'), { autoAlpha: 0.45 }, { autoAlpha: 1, duration: 0.8 }, 0.3)
      .fromTo(q('[data-reveal="ornament"]'), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 1.2 }, 1.35)
      .to(q('.toran'), { rotate: 1.4, y: 7, duration: 1.2, ease: 'sine.inOut' }, 2.25)
      .to(q('.temple-door--left'), { xPercent: -103, rotateY: -18, duration: 2.1, ease: 'power1.inOut' }, 3.35)
      .to(q('.temple-door--right'), { xPercent: 103, rotateY: 18, duration: 2.1, ease: 'power1.inOut' }, 3.35)
      .to(q('.foreground-arch'), { scale: 1.18, yPercent: 11, duration: 1.8, ease: 'power1.in' }, 5.1)
      .to(q('.temple-shell'), { scale: 1.16, yPercent: 8, duration: 2.2, ease: 'power1.in' }, 5.1)
      .to(q('.inner-light'), { autoAlpha: 1, scale: 1.06, duration: 1.4 }, 5.45)
      .to(q('.wedding-environment'), { autoAlpha: 1, scale: 1, yPercent: 0, duration: 1.8, ease: 'power1.out' }, 6.55)
      .to(q('.temple-shell'), { autoAlpha: 0.12, duration: 1.4 }, 7.1)
      .fromTo(q('.arrival-copy'), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 7.85)

    gsap.to(q('.particle'), { y: -18, x: 'random(-7, 7)', opacity: 0.25, duration: 'random(3, 5)', repeat: -1, yoyo: true, stagger: 0.22, ease: 'sine.inOut' })
    gsap.to(q('.diya-flame'), { scaleY: 1.22, opacity: 0.78, duration: 0.65, repeat: -1, yoyo: true, stagger: 0.13, transformOrigin: '50% 100%', ease: 'sine.inOut' })
    gsap.to(q('.flower'), { rotate: 'random(-4, 4)', y: 'random(-4, 4)', duration: 'random(2.5, 4)', repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 0%' })
  }, root)
}
