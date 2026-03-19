export default function PCBBackground() {
  return (
    <div className="pcb-bg-wrapper">
      <svg className="pcb-bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">

        {/* ══ TRAZOS PRINCIPALES ══ */}
<line x1="0"    y1="80"  x2="340"  y2="80"  stroke="#1a6b3c" strokeWidth="7" />
<line x1="340"  y1="80"  x2="340"  y2="220" stroke="#1a6b3c" strokeWidth="7" />
<line x1="340"  y1="220" x2="680"  y2="220" stroke="#1a6b3c" strokeWidth="5" />
<line x1="680"  y1="220" x2="680"  y2="60"  stroke="#1a6b3c" strokeWidth="5" />
<line x1="680"  y1="60"  x2="1100" y2="60"  stroke="#1a6b3c" strokeWidth="9" />
<line x1="1100" y1="60"  x2="1100" y2="300" stroke="#1a6b3c" strokeWidth="9" />
<line x1="1100" y1="300" x2="1440" y2="300" stroke="#1a6b3c" strokeWidth="9" />

<line x1="0"    y1="320" x2="200"  y2="320" stroke="#1a6b3c" strokeWidth="6" />
<line x1="200"  y1="320" x2="200"  y2="460" stroke="#1a6b3c" strokeWidth="6" />
<line x1="200"  y1="460" x2="560"  y2="460" stroke="#1a6b3c" strokeWidth="6" />
<line x1="560"  y1="460" x2="560"  y2="380" stroke="#1a6b3c" strokeWidth="6" />
<line x1="560"  y1="380" x2="900"  y2="380" stroke="#1a6b3c" strokeWidth="6" />
<line x1="900"  y1="380" x2="900"  y2="500" stroke="#1a6b3c" strokeWidth="6" />
<line x1="900"  y1="500" x2="1440" y2="500" stroke="#1a6b3c" strokeWidth="6" />

<line x1="0"    y1="620" x2="420"  y2="620" stroke="#1a6b3c" strokeWidth="4" />
<line x1="420"  y1="620" x2="420"  y2="740" stroke="#1a6b3c" strokeWidth="4" />
<line x1="420"  y1="740" x2="820"  y2="740" stroke="#1a6b3c" strokeWidth="4" />
<line x1="820"  y1="740" x2="820"  y2="580" stroke="#1a6b3c" strokeWidth="4" />
<line x1="820"  y1="580" x2="1200" y2="580" stroke="#1a6b3c" strokeWidth="4" />
<line x1="1200" y1="580" x2="1200" y2="900" stroke="#1a6b3c" strokeWidth="4" />

<polyline points="120,0 120,160 280,160 280,320"         fill="none" stroke="#135230" strokeWidth="3" strokeLinejoin="round" />
<polyline points="460,0 460,140 600,140 600,220"         fill="none" stroke="#135230" strokeWidth="3" strokeLinejoin="round" />
<polyline points="860,0 860,60"                          fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="1280,0 1280,100 1380,100 1380,300"     fill="none" stroke="#135230" strokeWidth="3" strokeLinejoin="round" />
<polyline points="0,180 80,180 80,320"                   fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="340,320 340,460"                       fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="680,220 780,220 780,380"               fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="1100,60 1100,0"                        fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="0,500 100,500 100,620"                 fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="260,460 260,620"                       fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="680,380 680,500"                       fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="1020,500 1020,580"                     fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="560,620 560,740"                       fill="none" stroke="#135230" strokeWidth="3" />
<polyline points="1000,580 1000,740 1200,740"            fill="none" stroke="#135230" strokeWidth="3" strokeLinejoin="round" />
<polyline points="420,900 420,800 640,800 640,740"       fill="none" stroke="#135230" strokeWidth="3" strokeLinejoin="round" />
<polyline points="820,900 820,820 1000,820 1000,740"     fill="none" stroke="#135230" strokeWidth="3" strokeLinejoin="round" />
<polyline points="1440,180 1340,180 1340,300"            fill="none" stroke="#135230" strokeWidth="3" strokeLinejoin="round" />
<polyline points="1440,680 1380,680 1380,580"            fill="none" stroke="#135230" strokeWidth="3" strokeLinejoin="round" />
        
        {/* ══ TRAZOS FINOS DECORATIVOS ══ */}
        <line x1="0"    y1="440" x2="120"  y2="440" stroke="#0d3d22" strokeWidth="3" strokeDasharray="6 4" />
        <line x1="700"  y1="0"   x2="700"  y2="60"  stroke="#0d3d22" strokeWidth="3" strokeDasharray="6 4" />
        <line x1="1440" y1="420" x2="1300" y2="420" stroke="#0d3d22" strokeWidth="3" strokeDasharray="6 4" />
        <line x1="200"  y1="900" x2="200"  y2="740" stroke="#0d3d22" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="1440" y1="760" x2="1200" y2="760" stroke="#0d3d22" strokeWidth="3" strokeDasharray="4 4" />

        {/* ══ IC CHIP grande — zona superior ══ */}
        <rect x="380" y="60" width="60" height="40" fill="#071510" stroke="#22854a" strokeWidth="1.2" />
        {[68,78,88].map((y,i) => <line key={i} x1="368" y1={y} x2="380" y2={y} stroke="#1a6b3c" strokeWidth="1.2" />)}
        {[68,78,88].map((y,i) => <line key={i} x1="440" y1={y} x2="452" y2={y} stroke="#1a6b3c" strokeWidth="1.2" />)}
        <path d="M 398 60 Q 410 55 422 60" fill="none" stroke="#22854a" strokeWidth="0.8" />

        {/* ══ IC CHIP mediano — zona media ══ */}
        <rect x="600" y="400" width="50" height="32" fill="#071510" stroke="#22854a" strokeWidth="1" />
        {[408,418,424].map((y,i) => <line key={i} x1="588" y1={y} x2="600" y2={y} stroke="#1a6b3c" strokeWidth="1" />)}
        {[408,418,424].map((y,i) => <line key={i} x1="650" y1={y} x2="662" y2={y} stroke="#1a6b3c" strokeWidth="1" />)}
        <path d="M 614 400 Q 625 396 636 400" fill="none" stroke="#22854a" strokeWidth="0.8" />

        {/* ══ IC CHIP pequeño — zona inferior ══ */}
        <rect x="900" y="700" width="40" height="26" fill="#071510" stroke="#22854a" strokeWidth="1" />
        {[706,716].map((y,i) => <line key={i} x1="888" y1={y} x2="900" y2={y} stroke="#1a6b3c" strokeWidth="1" />)}
        {[706,716].map((y,i) => <line key={i} x1="940" y1={y} x2="952" y2={y} stroke="#1a6b3c" strokeWidth="1" />)}

        {/* ══ RESISTENCIAS ══ */}
        <line x1="0"    y1="140" x2="50"   y2="140" stroke="#1a6b3c" strokeWidth="1.4" />
        <rect  x="50"   y="134"  width="30" height="12" fill="#071510" stroke="#22854a" strokeWidth="1" rx="2" />
        <line  x1="80"  y1="140" x2="120"  y2="140" stroke="#1a6b3c" strokeWidth="1.4" />

        <line x1="900"  y1="140" x2="950"  y2="140" stroke="#1a6b3c" strokeWidth="1.2" />
        <rect  x="950"  y="134"  width="28" height="12" fill="#071510" stroke="#22854a" strokeWidth="1" rx="2" />
        <line  x1="978" y1="140" x2="1100" y2="140" stroke="#1a6b3c" strokeWidth="1.2" />

        <line x1="700"  y1="560" x2="700"  y2="610" stroke="#1a6b3c" strokeWidth="1.2" />
        <rect  x="694"  y="610"  width="12" height="26" fill="#071510" stroke="#22854a" strokeWidth="1" rx="2" />
        <line  x1="700" y1="636" x2="700"  y2="680" stroke="#1a6b3c" strokeWidth="1.2" />

        <line x1="1300" y1="380" x2="1300" y2="420" stroke="#1a6b3c" strokeWidth="1.2" />
        <rect  x="1294" y="420"  width="12" height="22" fill="#071510" stroke="#22854a" strokeWidth="1" rx="2" />
        <line  x1="1300" y1="442" x2="1300" y2="500" stroke="#1a6b3c" strokeWidth="1.2" />

        {/* ══ CAPACITORES ══ */}
        <line x1="160"  y1="220" x2="160"  y2="255" stroke="#1a6b3c" strokeWidth="1.4" />
        <line x1="147"  y1="255" x2="173"  y2="255" stroke="#22854a" strokeWidth="2.2" />
        <line x1="147"  y1="262" x2="173"  y2="262" stroke="#22854a" strokeWidth="2.2" />
        <line x1="160"  y1="262" x2="160"  y2="320" stroke="#1a6b3c" strokeWidth="1.4" />

        <line x1="1020" y1="460" x2="1020" y2="490" stroke="#1a6b3c" strokeWidth="1.4" />
        <line x1="1007" y1="490" x2="1033" y2="490" stroke="#22854a" strokeWidth="2.2" />
        <line x1="1007" y1="497" x2="1033" y2="497" stroke="#22854a" strokeWidth="2.2" />
        <line x1="1020" y1="497" x2="1020" y2="500" stroke="#1a6b3c" strokeWidth="1.4" />

        <line x1="500"  y1="740" x2="530"  y2="740" stroke="#1a6b3c" strokeWidth="1.2" />
        <line x1="530"  y1="728" x2="530"  y2="752" stroke="#22854a" strokeWidth="2" />
        <line x1="537"  y1="728" x2="537"  y2="752" stroke="#22854a" strokeWidth="2" />
        <line x1="537"  y1="740" x2="560"  y2="740" stroke="#1a6b3c" strokeWidth="1.2" />

        {/* ══ HEADER DE PINES ══ */}
        <rect x="20"   y="600" width="72" height="14" fill="#071510" stroke="#22854a" strokeWidth="1" />
        {[28,40,52,64,76,88].map((x,i) => (
          <rect key={i} x={x-3} y={604} width={6} height={6} fill="#071510" stroke="#FFD700" strokeWidth="0.8" />
        ))}
        <rect x="1180" y="280" width="60" height="14" fill="#071510" stroke="#22854a" strokeWidth="1" />
        {[1188,1198,1208,1218,1228].map((x,i) => (
          <rect key={i} x={x-3} y={284} width={6} height={6} fill="#071510" stroke="#FFD700" strokeWidth="0.8" />
        ))}

        {/* ══ VÍAS DORADAS principales ══ */}
        {[
          [340,80],[680,60],[1100,60],[200,320],[560,460],
          [900,380],[420,620],[820,740],[1200,580],[120,160],
          [280,320],[600,140],[780,380],[1020,500],[260,620],
          [680,500],[560,740],[1000,740],[340,460],[1340,300],
        ].map(([x,y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={5.5} fill="#071510" stroke="#FFD700" strokeWidth="1.4" />
            <circle cx={x} cy={y} r={2.5} fill="#FFD700" opacity="0.8" />
          </g>
        ))}

        {/* ══ VÍAS SECUNDARIAS (más pequeñas) ══ */}
        {[
          [120,0],[460,0],[860,0],[1280,0],[80,320],[700,0],
          [100,500],[1020,580],[640,800],[1000,820],[1380,580],
          [1340,180],[460,140],[368,68],[368,78],[368,88],
          [452,68],[452,78],[452,88],[160,220],[1100,140],
        ].map(([x,y], i) => (
          <g key={`sv-${i}`}>
            <circle cx={x} cy={y} r={3.5} fill="#071510" stroke="#b8860b" strokeWidth="1" />
            <circle cx={x} cy={y} r={1.5} fill="#b8860b" opacity="0.65" />
          </g>
        ))}

        {/* ══ TEXTOS HEX DECORATIVOS ══ */}
        <text x="350" y="74"   fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#0d4a2a" letterSpacing="1">U1</text>
        <text x="610" y="394"  fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#0d4a2a" letterSpacing="1">U2</text>
        <text x="910" y="694"  fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#0d4a2a" letterSpacing="1">U3</text>
        <text x="22"  y="596"  fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#0d4a2a" letterSpacing="1">J1</text>
        <text x="1182" y="276" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#0d4a2a" letterSpacing="1">J2</text>
        <text x="60"  y="134"  fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#0d4a2a">R1</text>
        <text x="958" y="130"  fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#0d4a2a">R2</text>
        <text x="703" y="602"  fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#0d4a2a">R3</text>
        <text x="148" y="250"  fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#0d4a2a">C1</text>
        <text x="1024" y="485" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#0d4a2a">C2</text>

        {/* ══ OVERLAY OSCURO ══ */}
        <rect width="1440" height="900" fill="#000000ff" opacity="0.75" />      </svg>
    </div>
  )
}