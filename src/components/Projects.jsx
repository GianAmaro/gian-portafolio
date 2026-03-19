const PROJECTS = [
  {
    id: "beebot",
    name: "BEEBOT",
    subtitle: "Smart Support Virtual Assistant",
    description: "Intelligent virtual assistant designed to improve technical support efficiency and user experience.",
    role: ["Full-stack development", "API consumption", "Project manager"],
    event: "PELLERA",
    award: "2nd Place",
    awardType: "gold",
    stack: ["React", "Node.js", "REST API"],
    date: "May – Aug 2025"
  },
  {
    id: "datarunners",
    name: "DATA RUNNERS",
    subtitle: "SQL Interactive Game",
    description: "Educational game that challenges users to solve SQL queries on sample databases.",
    role: ["Frontend development", "Game scenarios & levels", "UI/UX"],
    event: "HACKRUSH",
    award: "3rd Place",
    awardType: "teal",
    stack: ["React", "Node.js", "PostgreSQL"],
    date: "September 2025"
  },
  {
    id: "illuminati",
    name: "ILLUMINATI",
    subtitle: "Real-Time Air Traffic Manager",
    description: "Air traffic management system for use at airports for security and reconnaissance purposes.",
    role: ["Interface development", "Real-time data", "Frontend"],
    event: "HACKRUSH",
    award: "3rd Place",
    awardType: "teal",
    stack: ["React", "Node.js", "WebSockets"],
    date: "October 2025"
  }
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-label">
        <span>⬡ MODULES — PROJECTS</span>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.id} className={`project-card project-card--${p.awardType}`}>

            {/* Barra lateral de color */}
            <div className={`project-accent-bar project-accent-bar--${p.awardType}`} />

            {/* Header */}
            <div className="project-header">
              <div>
                <span className={`project-award project-award--${p.awardType}`}>
                  {p.event} · {p.award}
                </span>
                <p className="project-date">{p.date}</p>
              </div>
              <div className="project-id">{`[${p.id.toUpperCase()}]`}</div>
            </div>

            {/* Nombre */}
            <h3 className="project-name">{p.name}</h3>
            <p className="project-subtitle">{p.subtitle}</p>

            {/* Descripción */}
            <p className="project-desc">{p.description}</p>

            {/* Rol */}
            <div className="project-roles">
              {p.role.map((r) => (
                <span key={r} className="project-role">▸ {r}</span>
              ))}
            </div>

            {/* Stack */}
            <div className="project-stack">
              {p.stack.map((s) => (
                <span key={s} className="project-stack-tag">{s}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
