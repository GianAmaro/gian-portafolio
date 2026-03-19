import { useEffect, useState } from "react"

const LINKS = ["PROJECTS", "SKILLS", "CERTIFICATIONS", "CONTACT"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

      {/* Logo / nombre corto */}
      <div className="navbar-logo">
        <span className="navbar-logo-bracket">[</span>
        GCA
        <span className="navbar-logo-bracket">]</span>
        <span className="navbar-logo-sub">// SYS</span>
      </div>

      {/* Links */}
<ul className="navbar-links">
  {LINKS.map((link) => (
    <li key={link}>
      
        <a href={"#" + link.toLowerCase()}
        className={"navbar-link" + (active === link ? " navbar-link--active" : "")}
        onClick={() => setActive(link)}
      >
        {link}
      </a>
    </li>
  ))}
</ul>

      {/* Status */}
      <div className="navbar-status">
        <span className="navbar-status-dot" />
        AVAILABLE
      </div>

    </nav>
  )
}