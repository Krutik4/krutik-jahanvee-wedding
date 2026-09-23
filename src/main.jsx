import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Howl } from 'howler'
import { wedding } from './data/wedding'
import './styles.css'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
const decorAsset = (file) => `${import.meta.env.BASE_URL}assets/decor/${file}`

function Ornament({ asset, className, alt = '' }) {
  return <img className={`ornament ${className}`} src={asset} alt={alt} onError={(event) => { event.currentTarget.hidden = true }} />
}
function Diya() { return <span className="diya" aria-hidden="true"><i /></span> }
function Countdown() {
  const [left, setLeft] = useState({})
  useEffect(() => {
    const tick = () => {
      const ms = Math.max(0, new Date(wedding.date) - Date.now())
      setLeft({ Days: Math.floor(ms / 864e5), Hours: Math.floor(ms / 36e5) % 24, Minutes: Math.floor(ms / 6e4) % 60, Seconds: Math.floor(ms / 1e3) % 60 })
    }
    tick(); const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])
  return <div className="countdown" aria-label="Countdown to wedding">{Object.entries(left).map(([label, value]) => <div key={label}><b>{String(value).padStart(2, '0')}</b><small>{label}</small></div>)}</div>
}
function ScratchCard() {
  const canvasRef = useRef(); const [done, setDone] = useState(false)
  useEffect(() => {
    const canvas = canvasRef.current; const context = canvas.getContext('2d'); let drawing = false; let lastPoint
    const paint = () => { const box = canvas.getBoundingClientRect(); const dpr = devicePixelRatio || 1; canvas.width = box.width * dpr; canvas.height = box.height * dpr; context.setTransform(dpr, 0, 0, dpr, 0, 0); const gradient = context.createLinearGradient(0, 0, box.width, box.height); gradient.addColorStop(0, '#9c6428'); gradient.addColorStop(.5, '#e8c46f'); gradient.addColorStop(1, '#69321e'); context.globalCompositeOperation = 'source-over'; context.fillStyle = gradient; context.fillRect(0, 0, box.width, box.height); context.fillStyle = 'rgba(255,246,212,.6)'; context.font = '12px serif'; context.textAlign = 'center'; context.fillText('TOUCH TO REVEAL', box.width / 2, box.height / 2) }
    const point = (event) => { const rect = canvas.getBoundingClientRect(); return { x: event.clientX - rect.left, y: event.clientY - rect.top } }
    const scratch = (event) => { if (!drawing) return; const current = point(event); context.globalCompositeOperation = 'destination-out'; context.lineWidth = 38; context.lineCap = 'round'; context.beginPath(); context.moveTo(lastPoint.x, lastPoint.y); context.lineTo(current.x, current.y); context.stroke(); lastPoint = current; const alpha = context.getImageData(0, 0, canvas.width, canvas.height).data; let clear = 0; for (let i = 3; i < alpha.length; i += 80) if (alpha[i] < 20) clear++; if (clear / (alpha.length / 80) > .32) { context.clearRect(0, 0, canvas.width, canvas.height); setDone(true) } }
    paint(); addEventListener('resize', paint); canvas.addEventListener('pointerdown', (event) => { drawing = true; lastPoint = point(event) }); canvas.addEventListener('pointermove', scratch); addEventListener('pointerup', () => { drawing = false })
    return () => removeEventListener('resize', paint)
  }, [])
  return <section className="reveal"><div className="invite-card"><p className="eyebrow">A date to remember</p><h2>11 <em>December</em> 2026</h2><p>{wedding.couple}</p><canvas ref={canvasRef} aria-label="Scratch to reveal wedding date" role="img" /><span>{done ? 'With love, revealed' : 'Touch and scratch to reveal'}</span></div><Countdown /></section>
}
function TempleScene() {
  const sceneRef = useRef()
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: sceneRef.current, start: 'top top', end: '+=180%', scrub: 1, pin: true, anticipatePin: 1 } })
      timeline.fromTo('.temple', { opacity: .3, scale: .9 }, { opacity: 1, scale: 1, duration: .8 })
        .from('.scroll-ornament', { opacity: 0, y: 70, stagger: .12, duration: .8 }, .15)
        .to('.doors .left', { xPercent: -94, duration: 1 }, .75).to('.doors .right', { xPercent: 94, duration: 1 }, .75)
        .from('.scene-names', { opacity: 0, y: 36, scale: .95, duration: .7 }, 1.45)
    }, sceneRef)
    return () => context.revert()
  }, [])
  const decor = wedding.decor
  return <section ref={sceneRef} className="temple-world" aria-label="A journey through the temple">
    <div className="lantern-row" aria-hidden="true">{[0, 1, 2, 3].map((index) => <Ornament key={index} asset={decorAsset(decor.lantern)} className={`lantern lantern-${index + 1}`} />)}</div>
    <Ornament asset={decorAsset(decor.lotusLeft)} className="scroll-ornament lotus lotus-left" />
    <Ornament asset={decorAsset(decor.lotusRight)} className="scroll-ornament lotus lotus-right" />
    <Ornament asset={decorAsset(decor.leafLeft)} className="scroll-ornament leaf leaf-left" />
    <Ornament asset={decorAsset(decor.flowerLeft)} className="scroll-ornament flower flower-left" />
    <Ornament asset={decorAsset(decor.flowerRight)} className="scroll-ornament flower flower-right" />
    <Ornament asset={decorAsset(decor.peacockLeft)} className="scroll-ornament peacock peacock-left" alt="Decorative peacock" />
    <Ornament asset={decorAsset(decor.peacockRight)} className="scroll-ornament peacock peacock-right" alt="Decorative peacock" />
    <div className="temple"><div className="shikhara">✦</div><div className="arch" /><div className="doors"><div className="door left" /><div className="door right" /></div></div>
    <div className="scene-names"><p>{wedding.invocation}</p><h2>{wedding.groom} <i>&</i> {wedding.bride}</h2><span>{wedding.dateLabel}</span></div>
    <div className="scene-diyas"><Diya /><Diya /><Diya /><Diya /></div>
  </section>
}
function Events() { return <section className="events"><header><p className="eyebrow">The wedding journey</p><h2>Our <em>celebrations</em></h2></header><ol>{wedding.events.map((event) => <li key={`${event.date}-${event.name}`}><div className="event-date"><b>{event.displayDate.slice(0, 2)}</b><span>{event.displayDate.slice(3)}</span></div><article><p className="eyebrow">{event.day} · {event.gujarati}</p><h3>{event.name}</h3><p>{event.description}</p><footer><span>{event.time}</span><a href={event.location.url} target="_blank" rel="noreferrer">{event.location.name} ↗</a></footer>{event.dressCode && <small>Dress code: {event.dressCode}</small>}<small>{event.location.address}</small></article></li>)}</ol></section> }
function Music() { const [on, setOn] = useState(false); const sound = useRef(); const toggle = () => { if (!sound.current) sound.current = new Howl({ src: [`${import.meta.env.BASE_URL}${wedding.music}`], loop: true, volume: 0, onloaderror: () => setOn(false) }); if (on) { sound.current.fade(.28, 0, 350); setTimeout(() => sound.current.pause(), 350); setOn(false) } else { sound.current.play(); sound.current.fade(0, .28, 600); setOn(true) } }; return <button className="music" onClick={toggle} aria-pressed={on}>Music {on ? 'on' : 'off'}</button> }
function App() { return <><Music /><div id="smooth-wrapper"><main id="smooth-content"><section className="hero"><p>{wedding.invocation}</p><h1>Krutik <i>&</i> Jahanvee</h1><span>11 · 12 · 2026</span><a href="#temple">Scroll to enter ↓</a></section><div id="temple"><TempleScene /></div><ScratchCard /><Events /><section className="closing"><p>With the blessings of our families</p><h2>Come, celebrate <em>love with us.</em></h2><p>{wedding.location.name}<br />{wedding.location.address}</p><a href={wedding.location.url} target="_blank" rel="noreferrer">Get directions</a></section></main></div></> }
createRoot(document.getElementById('root')).render(<App />)
