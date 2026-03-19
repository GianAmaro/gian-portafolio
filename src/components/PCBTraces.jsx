export default function PCBTraces() {
  return (
    <div className="traces-wrapper">
      <svg className="pcb-svg" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">

        {/* ── Traza superior ── */}
        <line x1="0" y1="18" x2="1440" y2="18" stroke="#0D4A30" strokeWidth="1" strokeDasharray="6 5" />

        {/* ── Traza inferior ── */}
        <line x1="0" y1="62" x2="1440" y2="62" stroke="#0D4A30" strokeWidth="1" strokeDasharray="6 5" />

        {/* ── Traza central principal ── */}
        <line x1="0" y1="40" x2="1440" y2="40" stroke="#00FFB2" strokeWidth="2.5" />

        {/* ── IC largo tipo bus ── */}
        <rect x="480" y="22" width="480" height="36" fill="#071510" stroke="#00FFB2" strokeWidth="1.2" />
        {/* Notch */}
        <path d="M 700 22 Q 720 17 740 22" fill="none" stroke="#22854a" strokeWidth="1" />
        {/* Label */}
        <text x="680" y="43" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#1a6b3c" letterSpacing="2">BUS CONTROLLER</text>

        {/* ── Pines arriba del IC ── */}
        {Array.from({length: 16}, (_, i) => 500 + i * 28).map((x, i) => (
          <g key={`top-${i}`}>
            <line x1={x} y1="18" x2={x} y2="22" stroke="#1a6b3c" strokeWidth="2" />
            <rect x={x-4} y="12" width="8" height="6" fill="#071510" stroke="#FFD700" strokeWidth="0.8" rx="1" />
          </g>
        ))}

        {/* ── Pines abajo del IC ── */}
        {Array.from({length: 16}, (_, i) => 500 + i * 28).map((x, i) => (
          <g key={`bot-${i}`}>
            <line x1={x} y1="58" x2={x} y2="62" stroke="#1a6b3c" strokeWidth="2" />
            <rect x={x-4} y="62" width="8" height="6" fill="#071510" stroke="#FFD700" strokeWidth="0.8" rx="1" />
          </g>
        ))}

        {/* ── Bifurcaciones izquierda ── */}
        <polyline points="200,40 200,18 340,18" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinejoin="round" />
        <polyline points="340,62 200,62 200,40" fill="none" stroke="#135230" strokeWidth="1.2" strokeLinejoin="round" />
        <polyline points="80,40 80,18 180,18"   fill="none" stroke="#135230" strokeWidth="1" strokeLinejoin="round" />

        {/* ── Bifurcaciones derecha ── */}
        <polyline points="1100,18 1240,18 1240,40" fill="none" stroke="#1a6b3c" strokeWidth="1.5" strokeLinejoin="round" />
        <polyline points="1240,40 1240,62 1100,62" fill="none" stroke="#135230" strokeWidth="1.2" strokeLinejoin="round" />
        <polyline points="1360,18 1440,18"          fill="none" stroke="#135230" strokeWidth="1" />

        {/* ── Resistencia izquierda ── */}
        <line x1="280" y1="40" x2="310" y2="40" stroke="#1a6b3c" strokeWidth="1.5" />
        <rect x="310" y="34" width="28" height="12" fill="#071510" stroke="#22854a" strokeWidth="1" rx="2" />
        <line x1="338" y1="40" x2="370" y2="40" stroke="#1a6b3c" strokeWidth="1.5" />
        <text x="316" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#0d4a2a">R1</text>

        {/* ── Resistencia derecha ── */}
        <line x1="1070" y1="40" x2="1100" y2="40" stroke="#1a6b3c" strokeWidth="1.5" />
        <rect x="1020" y="34" width="28" height="12" fill="#071510" stroke="#22854a" strokeWidth="1" rx="2" />
        <line x1="1000" y1="40" x2="1020" y2="40" stroke="#1a6b3c" strokeWidth="1.5" />
        <text x="1026" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#0d4a2a">R2</text>

        {/* ── Vías doradas ── */}
        {[200, 340, 480, 960, 1100, 1240].map((x, i) => (
          <g key={`via-${i}`}>
            <circle cx={x} cy={40} r={5} fill="#071510" stroke="#FFD700" strokeWidth="1.3" />
            <circle cx={x} cy={40} r={2.2} fill="#FFD700" opacity="0.8" />
          </g>
        ))}

        {/* ── Vías secundarias ── */}
        {[80, 180, 1360].map((x, i) => (
          <g key={`svia-${i}`}>
            <circle cx={x} cy={40} r={3.5} fill="#071510" stroke="#b8860b" strokeWidth="1" />
            <circle cx={x} cy={40} r={1.5} fill="#b8860b" opacity="0.6" />
          </g>
        ))}

      </svg>
    </div>
  )
}