import { useEffect } from 'react'
import './App.css'
import logoSrc from './assets/rudrax-logo.png'
import patternSrc from './assets/rxa-pattern.png'

function App() {
  useEffect(() => {
    // Optional: Set theme based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      // Theme is already handled by CSS media query, but you can add manual override here
    }
  }, [])

  return (
    <main className="app">
      <img src={patternSrc} alt="RXA Pattern" className="top-pattern" />
      <div className="container">
        <div className="logo">
          <img src={logoSrc} alt="RudraX Aerospace" />
        </div>

        <h1 className="headline">
          Securing the Skies. Advancing the Future.
        </h1>

        <h2 className="subheadline">
          The next generation of unmanned aerial dominance is almost here.
        </h2>

        <div className="body-copy">
          <p>
            At RudraX Aerospace, we are engineering the future of tactical and strategic UAV operations. From mission-critical defence and offence capabilities to unparalleled vigilance and advanced data R&D, our autonomous systems are built to perform where others cannot.
          </p>
          <p>
            We are currently preparing for our official launch.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2026 RUDRAX AEROSPACE. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
