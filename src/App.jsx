import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

// Easing for smooth transitions — use a value accepted by framer-motion / WAAPI
const ease = [0.6, 0.01, 0.99, 0.99];

/* -----------------------------
   Hero Section
----------------------------- */
function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -100]);
  const y2 = useTransform(scrollY, [0, 600], [0, -200]);

  return (
    <header className="relative overflow-hidden">
      <motion.div style={{ y: y2 }} className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-600/30 blur-3xl" />
      <motion.div style={{ y: y1 }} className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-pink-600/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]"
        >
          Krishna Chaithanya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Cybersecurity Analyst · UI Designer — combining digital defense and luminous design for futuristic web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center gap-6 mt-10"
        >
          {[{ icon: <Github />, href: "https://github.com/chaithanyakrishnasn" }, { icon: <Linkedin />, href: "https://linkedin.com/in/krishna-chaithanya-730b49322" }, { icon: <Mail />, href: "mailto:chaithanyakrishnasn@gmail.com" }].map((link, i) => (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              key={i}
              href={link.href}
              className="text-cyan-400 hover:text-purple-400 transition-colors text-2xl"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}

/* -----------------------------
   Skills Section
----------------------------- */
function Skills() {
  const skillGroups = [
    { title: "Languages & Frameworks", items: ["Java", "JavaScript", "Python", "React", "Tailwind CSS"] },
    { title: "Cloud & Infra", items: ["AWS", "GCP", "Docker", "Kubernetes"] },
    { title: "Cybersecurity Tools", items: ["CrowdStrike Falcon", "Splunk", "Wireshark", "Nmap"] },
  ];

  return (
    <section className="mt-24" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300"
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.3)" }}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#0b0320]/40 to-[#090014]/40 border border-cyan-500/10 backdrop-blur-md shadow-lg hover:shadow-cyan-400/30"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.15, textShadow: "0 0 8px rgba(0,255,255,0.8)" }}
                  className="px-3 py-1 rounded-full bg-[#071026] border border-cyan-600/20 text-sm text-cyan-100"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------
   Projects Section
----------------------------- */
function Projects() {
  const projects = [
    { title: "Threat Detection Engine", desc: "Built automated log analysis and SIEM rules with Python and Splunk to detect anomalies.", tags: ["Python", "Splunk", "SIEM", "Automation"] },
    { title: "Cloud Security Hardening", desc: "Applied CIS benchmarks across AWS; automated IAM least privilege enforcement.", tags: ["AWS", "CIS", "IAM", "Compliance"] },
    { title: "Incident Response Dashboard", desc: "React dashboard visualizing incident severity and response time metrics.", tags: ["React", "DataViz", "SecurityOps"] },
  ];

  return (
    <section className="mt-32" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.9, ease }}
            whileHover={{ y: -10, boxShadow: "0 0 30px rgba(0,255,255,0.4)" }}
            className="p-6 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-cyan-600/10 shadow-lg hover:shadow-cyan-400/30 transition-all"
          >
            <motion.h3 className="text-xl font-semibold text-white mb-2">{p.title}</motion.h3>
            <p className="text-gray-300 text-sm mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#081028] border border-cyan-600/10">{tag}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -----------------------------
   Experience Section
----------------------------- */
function Experience() {
  const experiences = [
    {
      role: "ghf",
      org: "ghg",
      date: "ghg",
      bullets: []
    },
    {
      role: "ghg",
      org: "ghgf",
      date: "jjh",
      bullets: [
      ]
    }
  ];

  return (
    <section className="mt-32 mb-32 relative" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 1.5, ease }} className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-400 to-cyan-400/40" />
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className={`relative p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-cyan-600/10 backdrop-blur-md shadow-lg ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
            >
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-cyan-300 text-sm">{exp.org}</p>
              <p className="text-gray-400 text-sm mb-3">{exp.date}</p>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                {exp.bullets.map((b, j) => (
                  <motion.li key={j} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: j * 0.2 }}>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Footer Section
----------------------------- */
function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text-center py-12 text-gray-500 border-t border-gray-800"
    >
      © {new Date().getFullYear()} Krishna Chaithanya — Designed with ⚡ Framer Motion
    </motion.footer>
  );
}

/* -----------------------------
   Root App
----------------------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#020214,_#07041a_40%,_#040014_100%)] text-gray-100 overflow-x-hidden">
      <Hero />
      <main className="max-w-7xl mx-auto px-6">
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
