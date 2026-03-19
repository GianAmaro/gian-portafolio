const CONTACT_LINKS = [
  {
    id: "email",
    label: "EMAIL",
    value: "gian.am.pozo@gmail.com",
    href: "mailto:gian.am.pozo@gmail.com",
    pin: "P1"
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "gian-carlo-amaro-pozos",
    href: "https://www.linkedin.com/in/gian-carlo-amaro-pozos-9245902bb",
    pin: "P2"
  },
  {
    id: "github",
    label: "GITHUB",
    value: "github.com",
    href: "https://github.com",
    pin: "P3"
  },
  {
    id: "phone",
    label: "PHONE",
    value: "+52 221 183 7112",
    href: "tel:+522211837112",
    pin: "P4"
  }
]

export default function Contact() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-trace">
        <svg width="100%" height="24" viewBox="0 0 1440 24" preserveAspectRatio="none">
          <line x1="0" y1="12" x2="1440" y2="12" stroke="#1a6b3c" strokeWidth="1.5" />
          {[120, 340, 560, 720, 900, 1100, 1320].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={12} r={4} fill="#060A0F" stroke="#FFD700" strokeWidth="1.2" />
              <circle cx={x} cy={12} r={1.8} fill="#FFD700" opacity="0.8" />
            </g>
          ))}
        </svg>
      </div>

      <div className="footer-content">

        <div className="footer-col">
          <div className="footer-logo">
            <span className="footer-logo-bracket">[</span>GCA<span className="footer-logo-bracket">]</span>
          </div>

          
          
          <div className="footer-status">
            <span className="footer-status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h2 className="contact-title">DO YOU HAVE ANY PROJECTS?</h2>
          <p className="contact-desc">
            Available for internships, freelance projects<br />
            and collaborations. Feel free to contact me.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">// OUTPUT PINS</p>
          <div className="footer-pins">
            {CONTACT_LINKS.map((c) => (
              <a
                key={c.id}
                href={c.href}
                target={c.id !== "email" && c.id !== "phone" ? "_blank" : undefined}
                rel="noreferrer"
                className="footer-pin"
              >
                <span className="footer-pin-id">{c.pin}</span>
                <span className="footer-pin-label">{c.label}</span>
                <span className="footer-pin-value">{c.value}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">// BUILT WITH</p>
          <div className="footer-stack">
            {["React", "Vite", "CSS3", "SVG", "Vercel"].map((s) => (
              <span key={s} className="footer-stack-tag">{s}</span>
            ))}
          </div>
          <p className="footer-col-title" style={{marginTop: "20px"}}>// LANGUAGES</p>
          <div className="footer-stack">
            <span className="footer-stack-tag">Spanish — Native</span>
            <span className="footer-stack-tag">English — B2</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>GCA · SYS · REV_2026</span>
        <span>© 2026 GIAN CARLO AMARO POZOS</span>
      </div>

    </footer>
  )
}