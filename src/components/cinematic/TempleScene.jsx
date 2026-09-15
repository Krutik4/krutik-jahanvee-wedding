import { useLayoutEffect, useRef } from 'react'
import { createTempleTimeline } from '../../animations/templeTimeline'
import { SceneLayer } from './SceneLayer'

const particles = Array.from({ length: 12 }, (_, index) => index)
const diyas = Array.from({ length: 5 }, (_, index) => index)

function Diya() {
  return <span className="diya" data-reveal="ornament"><i className="diya-flame" /></span>
}

export function TempleScene() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const context = createTempleTimeline(root.current)
    return () => context?.revert()
  }, [])

  return <section ref={root} className="temple-scene" aria-label="Scroll to enter the wedding temple">
    <SceneLayer className="temple-background" depth="background"><div className="moon-glow" /><div className="horizon" /></SceneLayer>
    <SceneLayer className="atmosphere" depth="midground" aria-hidden="true">{particles.map((particle) => <i className="particle" key={particle} />)}</SceneLayer>
    <SceneLayer className="toran-wrap" depth="architecture"><div className="toran" data-reveal="ornament"><span>✦</span><b /><span>✦</span><b /><span>✦</span></div></SceneLayer>
    <SceneLayer className="temple-shell" depth="architecture">
      <div className="temple-silhouette"><div className="shikhara">✦</div><div className="temple-pillar temple-pillar--left" /><div className="temple-pillar temple-pillar--right" /><div className="temple-arch" /></div>
      <div className="inner-light" />
      <div className="temple-doors"><div className="temple-door temple-door--left" /><div className="temple-door temple-door--right" /></div>
    </SceneLayer>
    <SceneLayer className="wedding-environment" depth="midground"><div className="mandap"><div className="mandap-roof"><span>✦</span></div><i /><i /><i /><i /></div><div className="rangoli">✦</div></SceneLayer>
    <SceneLayer className="foreground-arch" depth="foreground"><div className="flower-garland">{Array.from({ length: 8 }, (_, index) => <i className="flower" key={index}>✿</i>)}</div><div className="scene-diyas">{diyas.map((diya) => <Diya key={diya} />)}</div></SceneLayer>
    <div className="scene-intro"><p>શ્રી ગણેશાય નમઃ</p><h1>Enter the <em>celebration</em></h1><span>Scroll to open the temple doors</span></div>
    <div className="arrival-copy"><p>Krutik <i>&amp;</i> Jahanvee</p><span>11 December 2026</span></div>
  </section>
}
