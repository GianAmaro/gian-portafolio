import { useEffect, useState } from "react"
import PCBTraces from "./PCBTraces"

const TYPING_TEXT = "ACCESSING NEURAL NETWORK..."

export default function Hero() {
  const [displayed, setDisplayed] = useState("")
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(TYPING_TEXT.slice(0, i + 1))
      i++
      if (i === TYPING_TEXT.length) {
        clearInterval(interval)
        setTimeout(() => setShowContent(true), 400)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-inner">

        
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        {/* Typing effect */}
        <p className="hero-tag">
          // {displayed}<span className="cursor">▋</span>
        </p>

        {/* Contenido principal */}
        <div className={`hero-content ${showContent ? "visible" : ""}`}>
          <p className="hero-chip-label">U1 — PRIMARY UNIT</p>
          <h1 className="hero-name">GIAN CARLO<br />AMARO POZOS</h1>
          <p className="hero-sub">CS ENGINEER · BUAP · PUEBLA, MX</p>

          <p className="hero-bio">
            Full-stack developer &amp; hardware enthusiast.<br />
            Building software by day, soldering circuits by night.
          </p>

          <div className="hero-badges">
            {["FULL-STACK", "HARDWARE", "8° SEM", "ENGLISH B2", "HACKATHONER"].map(b => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">VIEW PROJECTS</a>
            <a href="#contact" className="btn-ghost">CONTACT</a>
          </div>
        </div>

        {/* Dato técnico decorativo */}
        <p className="hero-hex">0xGCA · REV_2025 · ONLINE</p>
      </div>

      
    </section>
  )
}