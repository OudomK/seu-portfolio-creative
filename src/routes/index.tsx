import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import {
  Mail, Phone, MapPin, Instagram, Send, Briefcase, GraduationCap,
  Palette, Code2, Wrench, Languages, Sparkles, Download,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leab Mengseu — Graphic Designer | IT Support | Web Developer" },
      { name: "description", content: "Portfolio of Leab Mengseu — Cambodian Graphic Designer, IT Support specialist, and Web Developer based in Kampong Cham." },
      { property: "og:title", content: "Leab Mengseu — Portfolio" },
      { property: "og:description", content: "Creative & detail-oriented professional in Graphic Design, IT Support, and Web Development." },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const designSkills = [
  { name: "Graphic Design", value: 85 },
  { name: "Video Editing", value: 70 },
  { name: "Web Design", value: 85 },
];
const itSkills = [
  { name: "Advanced Excel", value: 85 },
  { name: "Advanced Word", value: 70 },
  { name: "Computer Repairing", value: 85 },
  { name: "Web Development", value: 85 },
];
const tools = [
  "Adobe Photoshop", "Adobe Illustrator", "CorelDRAW",
  "Adobe Premiere Pro", "After Effects", "HTML", "CSS",
  "JavaScript", "C/C++", "MS Word", "MS Excel", "MS Access",
];
const softSkills = ["Communications", "Teamwork", "Time Management", "Problem Solving", "Adaptable"];
const languages = [
  { name: "Khmer", level: "Native" },
  { name: "English", level: "Basic – Intermediate" },
  { name: "Chinese", level: "Basic" },
];

const experiences = [
  {
    period: "2025 – 2026",
    role: "Machine Operator",
    org: "JZ Glory Enterprise Co., Ltd.",
    bullets: [
      "Operated and maintained machines efficiently",
      "Ensured product quality and safety standards",
    ],
  },
  {
    period: "2021 – 2025",
    role: "IT & Computer Instructor",
    org: "Baktouk Information Technology Center",
    bullets: [
      "Taught Computer Repairing and Basic Computer",
      "Trained students in Microsoft Office (Word, Excel, Access)",
      "Introduced programming (C/C++) and Web Design",
      "Guided students in Adobe Photoshop & Illustrator",
    ],
  },
  {
    period: "2021 – 2025",
    role: "Computer Teacher",
    org: "Polytechnic Institute of Kampong Cham",
    bullets: ["Taught C# Programming", "Provided computer repair training"],
  },
];

const education = [
  { period: "2021 – 2025", school: "Polytechnic Institute of Kampong Cham Province" },
  { period: "2018 – 2021", school: "Hun Sen Stung Trang High School" },
  { period: "2015 – 2018", school: "Hun Sen Stung Trang High School" },
  { period: "2009 – 2015", school: "Hun Neng Stung Trang High School" },
];

const projects = [
  { title: "Brand Posters & Logos", tag: "Graphic Design", desc: "Custom posters, brand marks and visual identities crafted in Illustrator & Photoshop.", color: "from-amber-500/30 to-rose-500/20" },
  { title: "Responsive Websites", tag: "Web Design", desc: "Modern responsive websites built with HTML, CSS, and JavaScript.", color: "from-sky-500/30 to-indigo-500/20" },
  { title: "Promo Video Edits", tag: "Video Editing", desc: "Short promotional and event videos edited with Premiere Pro & After Effects.", color: "from-emerald-500/30 to-teal-500/20" },
  { title: "Computer Lab Setup", tag: "IT Support", desc: "Hardware repair, software installation and student training programs.", color: "from-purple-500/30 to-pink-500/20" },
  { title: "C/C++ Tutorials", tag: "Teaching", desc: "Programming courses introducing students to C and C++ fundamentals.", color: "from-orange-500/30 to-yellow-500/20" },
  { title: "MS Office Training", tag: "Productivity", desc: "Advanced Excel & Word workshops for institute students.", color: "from-cyan-500/30 to-blue-500/20" },
];

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <PortfolioSection />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight">
          <span className="text-gold">Leab</span> Mengseu
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-muted-foreground hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold" aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="md:hidden bg-background/95 border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a onClick={() => setOpen(false)} href={`#${l.id}`} className="block text-muted-foreground hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up order-2 md:order-1">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Leab <span className="text-gold">Mengseu</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Graphic Designer · IT Support · Web Developer
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            Creative and detail-oriented professional with 4+ years of experience in Graphic Design,
            IT Support, and Teaching. Skilled in creating visually engaging designs and solving
            technical problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:leabmengseu1212@gmail.com" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-5 py-3 rounded-full font-medium hover:opacity-90 transition shadow-[var(--shadow-gold)]">
              <Mail size={18} /> Hire Me
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-3 rounded-full font-medium hover:bg-gold/10 transition">
              <Sparkles size={18} /> View Work
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Creative Thinker", "Fast Learner", "Team Player", "Goal Oriented"].map((t) => (
              <span key={t} className="text-xs bg-secondary border border-border px-3 py-1.5 rounded-full text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-fade-up">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-[var(--gradient-gold)] blur-2xl opacity-40" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold shadow-[var(--shadow-gold)]">
              <img src={profileImg} alt="Leab Mengseu" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const items = [
    { icon: Phone, label: "Phone", value: "071 836 6100 / 011 916 612" },
    { icon: Mail, label: "Email", value: "leabmengseu1212@gmail.com" },
    { icon: MapPin, label: "Location", value: "Kampong Cham, Cambodia" },
    { icon: Instagram, label: "Social", value: "@seu20012" },
  ];
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="About" title="Get to know me" />
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Cambodian creative based in Kampong Cham Province, blending the precision of IT
              with the imagination of design. Over the past four years I've taught students,
              repaired computers, designed brand visuals, and built websites.
            </p>
            <p>
              My goal is simple — craft work that's both useful and beautiful. Whether it's a poster,
              a website, or a classroom demo, I show up curious and committed.
            </p>
            <p className="text-sm">Born: 08 April 2003</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 text-gold mb-1">
                  <Icon size={18} />
                  <span className="text-xs uppercase tracking-wider">{label}</span>
                </div>
                <p className="text-sm break-words">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Skills" title="What I bring to the table" />
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <SkillCard icon={Palette} title="Design & Creative" skills={designSkills} />
          <SkillCard icon={Code2} title="IT & Computer" skills={itSkills} />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <InfoCard icon={Wrench} title="Technical Tools">
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-xs bg-secondary border border-border px-2.5 py-1 rounded-md">{t}</span>
              ))}
            </div>
          </InfoCard>
          <InfoCard icon={Sparkles} title="Soft Skills">
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {softSkills.map((s) => (
                <li key={s} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />{s}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard icon={Languages} title="Languages">
            <ul className="space-y-2 text-sm">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between border-b border-border/50 pb-1.5">
                  <span>{l.name}</span><span className="text-gold text-xs">{l.level}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon: Icon, title, skills }: { icon: any; title: string; skills: { name: string; value: number }[] }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-9 h-9 rounded-lg bg-gold/15 grid place-items-center text-gold"><Icon size={18} /></div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-sm mb-1.5">
              <span>{s.name}</span><span className="text-gold">{s.value}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-[var(--gradient-gold)] animate-fill-bar" style={{ width: `${s.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-lg bg-gold/15 grid place-items-center text-gold"><Icon size={18} /></div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Timeline({ items, icon: Icon }: { items: any[]; icon: any }) {
  return (
    <div className="relative pl-8 md:pl-10">
      <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gold/30" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-8 md:-left-10 top-1 w-6 h-6 rounded-full bg-background border-2 border-gold grid place-items-center">
              <Icon size={12} className="text-gold" />
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <span className="text-xs text-gold font-semibold tracking-wider">{item.period}</span>
              <h4 className="text-lg font-semibold mt-1">{item.role || item.school}</h4>
              {item.org && <p className="text-sm text-muted-foreground">{item.org}</p>}
              {item.bullets && (
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {item.bullets.map((b: string) => (
                    <li key={b} className="flex gap-2"><span className="text-gold">▸</span>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        <div className="mt-10">
          <Timeline items={experiences} icon={Briefcase} />
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Education" title="Academic background" />
        <div className="mt-10">
          <Timeline items={education} icon={GraduationCap} />
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Portfolio" title="Selected work" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((p) => (
            <div key={p.title} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/60 transition-all hover:-translate-y-1">
              <div className={`aspect-video bg-gradient-to-br ${p.color} relative`}>
                <div className="absolute inset-0 grid place-items-center text-5xl font-bold text-foreground/20">
                  {p.tag.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-gold uppercase tracking-wider">{p.tag}</span>
                <h4 className="font-semibold mt-1 group-hover:text-gold transition">{p.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Contact" title="Let's work together" />
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-4">
            <ContactRow icon={Phone} label="Phone" value="071 836 6100 / 011 916 612" href="tel:0718366100" />
            <ContactRow icon={Mail} label="Email" value="leabmengseu1212@gmail.com" href="mailto:leabmengseu1212@gmail.com" />
            <ContactRow icon={MapPin} label="Location" value="Kampong Cham Province, Cambodia" />
            <ContactRow icon={Instagram} label="Social" value="@seu20012" href="https://instagram.com/seu20012" />
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border rounded-2xl p-6 space-y-4"
          >
            <input required maxLength={100} placeholder="Your name" className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:border-gold outline-none" />
            <input required type="email" maxLength={255} placeholder="Email address" className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:border-gold outline-none" />
            <textarea required maxLength={1000} rows={5} placeholder="Your message..." className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:border-gold outline-none resize-none" />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-5 py-3 rounded-lg font-medium hover:opacity-90 transition">
              <Send size={16} /> {sent ? "Thanks! I'll be in touch." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-gold/60 transition">
      <div className="w-11 h-11 rounded-lg bg-gold/15 grid place-items-center text-gold shrink-0"><Icon size={18} /></div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm mt-0.5 break-all">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[var(--gradient-gold)]" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Leab Mengseu. Crafted with care in Kampong Cham.
    </footer>
  );
}
