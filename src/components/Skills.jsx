const SKILL_GROUPS = [
  {
    id: "hardware",
    label: "MCU / HARDWARE",
    color: "accent",
    skills: ["Arduino", "ESP32", "C++", "Circuit design", "Prototyping"]
  },
  {
    id: "frontend",
    label: "FRONTEND LAYER",
    color: "accent",
    skills: ["React", "HTML", "CSS", "JavaScript", "REST API"]
  },
  {
    id: "backend",
    label: "BACKEND LAYER",
    color: "gold",
    skills: ["Python", "Java", "SpringBoot", "Node.js"]
  },
  {
    id: "data",
    label: "DATA LAYER",
    color: "gold",
    skills: ["PostgreSQL", "MySQL", "SQL", "Query optimization"]
  },
  {
    id: "cloud",
    label: "CLOUD / TOOLS",
    color: "accent",
    skills: ["Git", "GitHub", "Vercel", "Notion"]
  },
  {
    id: "soft",
    label: "SOFT SKILLS",
    color: "gold",
    skills: ["Team work", "Self-learning", "Proactivity", "Project management"]
  }
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-label">
        <span>⬡ COMPONENTS — SKILLS</span>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div key={group.id} className="skill-block">
            <div className={`skill-block-title ${group.color === "gold" ? "gold-title" : ""}`}>
                <span className={`led ${group.color === "gold" ? "led-gold" : ""}`} />
                {group.label}
            </div>
            
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}