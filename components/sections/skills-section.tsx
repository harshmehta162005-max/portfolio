"use client"

import { motion } from "framer-motion"
import { Database, Layout, Server, Cpu, Wrench, Shield, Languages, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Languages,
    accent: "#00F5FF",
    accentClass: "text-cyan-400",
    borderClass: "border-cyan-500/30",
    glowClass: "hover:shadow-[0_0_40px_rgba(0,245,255,0.15)]",
    bgAccent: "bg-cyan-500/10",
    dotColor: "bg-cyan-400",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    icon: Layout,
    accent: "#FF007A",
    accentClass: "text-pink-500",
    borderClass: "border-pink-500/30",
    glowClass: "hover:shadow-[0_0_40px_rgba(255,0,122,0.15)]",
    bgAccent: "bg-pink-500/10",
    dotColor: "bg-pink-500",
    skills: ["React.js", "Next.js", "HTML5", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Backend & Databases",
    icon: Server,
    accent: "#B026FF",
    accentClass: "text-purple-500",
    borderClass: "border-purple-500/30",
    glowClass: "hover:shadow-[0_0_40px_rgba(176,38,255,0.15)]",
    bgAccent: "bg-purple-500/10",
    dotColor: "bg-purple-500",
    skills: ["Node.js", "Express.js", "MongoDB", "Supabase (PostgreSQL)", "Convex"],
  },
  {
    title: "DevOps & Cloud",
    icon: Wrench,
    accent: "#3B82F6",
    accentClass: "text-blue-400",
    borderClass: "border-blue-400/30",
    glowClass: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    bgAccent: "bg-blue-400/10",
    dotColor: "bg-blue-400",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD Pipelines", "Redis"],
  },
  {
    title: "AI & Modern Tech",
    icon: Cpu,
    accent: "#A3E635",
    accentClass: "text-lime-400",
    borderClass: "border-lime-400/30",
    glowClass: "hover:shadow-[0_0_40px_rgba(163,230,53,0.15)]",
    bgAccent: "bg-lime-400/10",
    dotColor: "bg-lime-400",
    skills: ["Groq LLM", "Prompt Engineering", "RAG", "LangChain", "NLP"],
  },
  {
    title: "Real-Time & Auth",
    icon: Shield,
    accent: "#FACC15",
    accentClass: "text-yellow-400",
    borderClass: "border-yellow-400/30",
    glowClass: "hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]",
    bgAccent: "bg-yellow-400/10",
    dotColor: "bg-yellow-400",
    skills: ["Socket.IO", "JWT Auth", "Clerk Auth", "RLS (Supabase)", "RBAC"],
  },
]

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-end gap-4 mb-4 text-right">
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
            <h2 className="text-4xl md:text-5xl font-bold font-sora tracking-tight">
              Tech<span className="text-cyan-500">.Arsenal</span>
            </h2>
          </div>
          <p className="text-right text-white/40 font-mono text-xs uppercase tracking-[0.25em]">
            // stack &amp; toolchain
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08, duration: 0.6 }}
                className={`glass-panel p-6 border ${category.borderClass} ${category.glowClass} transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Corner accent line */}
                <div
                  className="absolute top-0 left-0 w-12 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${category.accent}, transparent)` }}
                />
                <div
                  className="absolute top-0 left-0 w-[2px] h-12"
                  style={{ background: `linear-gradient(180deg, ${category.accent}, transparent)` }}
                />

                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${category.bgAccent} border ${category.borderClass} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-4 h-4 ${category.accentClass}`} />
                  </div>
                  <h3 className="text-sm font-bold font-sora uppercase tracking-widest text-white/80">
                    {category.title}
                  </h3>
                  {/* Animated status dot */}
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${category.dotColor} animate-pulse`} />
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      custom={catIdx * 5 + skillIdx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={chipVariants}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`
                        relative px-3 py-1.5 rounded-full text-xs font-mono font-medium
                        bg-white/5 border border-white/10 text-white/70
                        cursor-default select-none
                        transition-all duration-200
                        hover:bg-white/10 hover:border-current hover:text-white
                        hover:shadow-[0_0_12px_currentColor]
                        ${category.accentClass}
                      `}
                      style={
                        {
                          "--tw-shadow-color": category.accent,
                        } as React.CSSProperties
                      }
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom ticker strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 overflow-hidden"
        >
          <div className="flex items-center gap-3 py-3 px-4 rounded-lg border border-white/5 bg-white/[0.02]">
            <Zap className="w-3.5 h-3.5 text-cyan-500 shrink-0 animate-pulse" />
            <div className="relative overflow-hidden w-full">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 whitespace-nowrap"
              >
                {[...skillCategories, ...skillCategories].flatMap((cat, copyIdx) =>
                  cat.skills.map((skill, i) => (
                    <span key={`${copyIdx}-${cat.title}-${i}`} className={`text-xs font-mono ${cat.accentClass} opacity-60`}>
                      {skill}
                    </span>
                  ))
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
