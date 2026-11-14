import { useEffect, useRef, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import logoSrc from './assets/rudrax-logo-white.png'

const LOAD_MS = 2000
const FILL_MS = 450
const EXIT_MS = 900
const MAX_WAIT_MS = 5000 // never hold the page hostage to a slow font CDN
const SCRAMBLE_CHARS = 'RX#/+0186'
const skipLoader = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Preloader({ onReveal }) {
  const rootRef = useRef(null)
  const percentRef = useRef(null)
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    let frame
    let assetsReady = false
    const timers = []
    const start = performance.now()

    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', resolve, { once: true })
    })
    Promise.race([
      Promise.all([pageLoaded, document.fonts.ready]),
      new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS)),
    ]).then(() => {
      assetsReady = true
    })

    const tick = (now) => {
      const t = Math.min((now - start) / LOAD_MS, 1)
      const eased = t * t * (3 - 2 * t)
      // Holds at 90% until the assets have really arrived
      const progress = assetsReady ? eased : Math.min(eased, 0.9)

      rootRef.current.style.setProperty('--p', progress)
      percentRef.current.textContent = Math.floor(progress * 100)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
        return
      }
      setPhase('fill')
      timers.push(
        setTimeout(() => {
          setPhase('exit')
          onReveal(true)
        }, FILL_MS),
        setTimeout(() => setPhase('done'), FILL_MS + EXIT_MS),
      )
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      timers.forEach(clearTimeout)
    }
  }, [onReveal])

  if (phase === 'done') return null

  return (
    <div
      ref={rootRef}
      className="preloader"
      data-phase={phase}
      style={{ '--fill': `${FILL_MS}ms`, '--exit': `${EXIT_MS}ms` }}
      aria-hidden="true"
    >
      <div className="preloader-panel" />
      <div className="preloader-logo">
        <img src={logoSrc} alt="" />
        <img src={logoSrc} alt="" className="preloader-logo-fill" />
      </div>
      <div className="preloader-line" />
      <span className="preloader-label preloader-label--left">Loading</span>
      <span className="preloader-label preloader-label--right">
        (<span ref={percentRef}>0</span>%)
      </span>
    </div>
  )
}

// Each moving ring is its own <svg> so the browser can rotate it on the GPU.
// Ticks are stroke dashes; pathLength="360" makes the dash values degrees.
function Pattern() {
  return (
    <div className="pattern" aria-hidden="true">
      <div className="pattern-dial">
        <div className="pattern-sweep" />
        <svg viewBox="-500 -500 1000 1000" fill="none">
          <circle r="420" className="pattern-line" />
          <circle r="150" className="pattern-line" />
          <path
            className="pattern-line"
            d="M-297-297-106-106M297-297 106-106M-297 297-106 106M297 297 106 106"
          />
          <path className="pattern-x" d="M-70-70 0-14 70-70 14 0 70 70 0 14-70 70-14 0Z" />
          <g className="pattern-label" textAnchor="middle">
            <text y="-431">000</text>
            <text x="438" y="6">090</text>
            <text y="443">180</text>
            <text x="-438" y="6">270</text>
          </g>
        </svg>
        <svg viewBox="-500 -500 1000 1000" fill="none" className="pattern-spin">
          <circle r="478" pathLength="360" strokeWidth="14" strokeDasharray="0.5 2.5" opacity="0.55" />
          <circle r="470" pathLength="360" strokeWidth="30" strokeDasharray="1 29" opacity="0.9" />
        </svg>
        <svg viewBox="-500 -500 1000 1000" fill="none" className="pattern-spin pattern-spin--reverse">
          <circle r="380" pathLength="360" strokeWidth="2" strokeDasharray="62 28" opacity="0.5" />
          <circle r="300" pathLength="360" strokeWidth="10" strokeDasharray="0.4 1.6" opacity="0.3" />
        </svg>
      </div>
    </div>
  )
}

function App() {
  const [ready, setReady] = useState(skipLoader)
  const statusRef = useRef(null)

  useEffect(() => {
    // Optional: Set theme based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      // Theme is already handled by CSS media query, but you can add manual override here
    }
  }, [])

  // Decodes the status line once the top bar is uncovered
  useEffect(() => {
    if (!ready || skipLoader) return
    const el = statusRef.current
    const text = el.textContent
    let revealed = -25 // ticks spent fully scrambled while the panel lifts

    const id = setInterval(() => {
      el.textContent = [...text]
        .map((char, i) =>
          char === ' ' || i < revealed
            ? char
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
        )
        .join('')
      revealed += 1
      if (revealed > text.length) {
        clearInterval(id)
        el.textContent = text
      }
    }, 18)

    return () => {
      clearInterval(id)
      el.textContent = text
    }
  }, [ready])

  return (
    <>
      <Analytics />
      {!skipLoader && <Preloader onReveal={setReady} />}

      <main className={ready ? 'app is-ready' : 'app'}>
        <Pattern />

        <header className="topbar">
          <img src={logoSrc} alt="RudraX Aerospace" className="logo" />
          <p ref={statusRef} className="status">We are currently preparing for our launch.</p>
        </header>

        <section className="hero">
          <h1 className="headline">
            <span>Securing the Skies.</span> <span>Advancing the Future.</span>
          </h1>

          <div className="hero-copy">
            <h2 className="subheadline">
              The next generation of unmanned aerial dominance is almost here.
            </h2>
            <p className="body-copy">
              At RudraX Aerospace, we are engineering the future of tactical and strategic UAV operations. From mission-critical defence and offence capabilities to unparalleled vigilance and advanced data R&D, our autonomous systems are built to perform where others cannot.
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <p>© 2026 RUDRAX AEROSPACE. All rights reserved.</p>
          <nav aria-label="Footer">
            <a href="/privacy">Privacy Policy</a>
          </nav>
        </footer>
      </main>
    </>
  )
}

export default App
