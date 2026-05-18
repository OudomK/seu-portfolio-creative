import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import cvFile from "@/assets/CV LEAB MENG SEU .pdf?url";

// ── Certificate images ──────────────────────────────────────────────
// Graphic Design category
import cert_premiere from "@/assets/certs/cert_premiere.jpg";
import cert_illustrator from "@/assets/certs/cert_illustrator.jpg";
import cert_photoshop from "@/assets/certs/cert_photoshop.png";
import cert_coreldraw from "@/assets/certs/cert_coreldraw.jpg";
import cert_graphicDesign_rec from "@/assets/certs/cert_graphicDesign_rec.png";
// Administration category
import cert_admin_rec from "@/assets/certs/cert_admin_rec.jpg";
import cert_excel from "@/assets/certs/cert_excel.jpg";
import cert_english from "@/assets/certs/cert_english.jpg";
// IT Support category
import cert_csharp1 from "@/assets/certs/cert_csharp1.png";
import cert_csharp2 from "@/assets/certs/cert_csharp2.png";
import cert_bitc_rec from "@/assets/certs/cert_bitc_rec.jpg";

import {
  Mail, Phone, MapPin, Instagram, Send, Briefcase, GraduationCap,
  Palette, Code2, Wrench, Languages, Sparkles, Download, FileText, X,
  Award, Star, ChevronLeft, ChevronRight, ExternalLink, ZoomIn,
  Facebook,
} from "lucide-react";

const CV_URL = cvFile;

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
  { id: "certificates", label: "Certificates" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

// ── Certificate data ─────────────────────────────────────────────────
type Cert = { title: string; issuer: string; date: string; grade: string; gradeLabel: string; img: string };

const certCategories: { label: string; icon: string; color: string; items: Cert[] }[] = [
  {
    label: "Graphic Designer",
    icon: "🎨",
    color: "from-amber-500/20 to-rose-500/10",
    items: [
      { title: "Adobe Photoshop", issuer: "Baktouk IT Center, K. Cham", date: "July 2023 – Oct 2023", grade: "A", gradeLabel: "Grade", img: cert_photoshop },
      { title: "Adobe Illustrator", issuer: "Baktouk IT Center, K. Cham", date: "Aug 2024 – Jan 2025", grade: "A", gradeLabel: "Grade", img: cert_illustrator },
      { title: "CorelDRAW", issuer: "Baktouk IT Center, K. Cham", date: "Aug 2024 – Jan 2025", grade: "A", gradeLabel: "Grade", img: cert_coreldraw },
      { title: "Adobe Premiere Pro", issuer: "Baktouk IT Center, K. Cham", date: "Aug 2024 – Nov 2024", grade: "A", gradeLabel: "Grade", img: cert_premiere },
      { title: "Recommendation — Graphic Design", issuer: "Baktouk IT Center", date: "2025", grade: "Excellent", gradeLabel: "Performance", img: cert_graphicDesign_rec },
    ],
  },
  {
    label: "Administration",
    icon: "🗂️",
    color: "from-sky-500/20 to-indigo-500/10",
    items: [
      { title: "Microsoft Excel Advanced", issuer: "Baktouk IT Center, K. Cham", date: "Apr 2023 – Jul 2023", grade: "A", gradeLabel: "Grade", img: cert_excel },
      { title: "Special English Conversation Lv.1", issuer: "Baktouk IT Center, K. Cham", date: "Jan 2023 – Apr 2023", grade: "E", gradeLabel: "Grade", img: cert_english },
      { title: "Recommendation — Administration", issuer: "Baktouk IT Center", date: "2025", grade: "Excellent", gradeLabel: "Performance", img: cert_admin_rec },
    ],
  },
  {
    label: "IT Support",
    icon: "💻",
    color: "from-emerald-500/20 to-teal-500/10",
    items: [
      { title: "C# Programming Teaching (Sem 13)", issuer: "Polytechnic Institute, K. Cham", date: "2024–2025", grade: "4.04/5.00", gradeLabel: "Avg Score", img: cert_csharp1 },
      { title: "C# Programming Teaching (Sem 13)", issuer: "Polytechnic Institute, K. Cham", date: "2024–2025", grade: "4.00/5.00", gradeLabel: "Avg Score", img: cert_csharp2 },
      { title: "Recommendation — IT Instructor", issuer: "Baktouk IT Center", date: "Jan 2022 – Dec 2025", grade: "4 Years", gradeLabel: "Experience", img: cert_bitc_rec },
    ],
  },
];

// ── Portfolio projects ───────────────────────────────────────────────
const projects = [
  {
    title: "Brand Identity & Logo Design",
    tag: "Graphic Design",
    desc: "Custom logos, brand marks, and full visual identity packages crafted in Adobe Illustrator & Photoshop.",
    tech: ["Photoshop", "Illustrator", "CorelDRAW"],
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    icon: "✦",
    featured: true,
  },
  {
    title: "Poster & Banner Design",
    tag: "Graphic Design",
    desc: "Eye-catching event posters, promotional banners, and social media content for local businesses.",
    tech: ["Photoshop", "CorelDRAW", "Illustrator"],
    gradient: "from-rose-400 via-pink-500 to-purple-500",
    icon: "◈",
    featured: false,
  },
  {
    title: "Responsive Portfolio Websites",
    tag: "Web Design",
    desc: "Modern, mobile-first websites built with HTML, CSS, and JavaScript — clean layouts and smooth interactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    icon: "⬡",
    featured: true,
  },
  {
    title: "Promo & Event Video Editing",
    tag: "Video Editing",
    desc: "Short-form promotional videos and event highlight reels edited with Premiere Pro & After Effects.",
    tech: ["Premiere Pro", "After Effects"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    icon: "▶",
    featured: false,
  },
  {
    title: "Computer Lab Setup & Repair",
    tag: "IT Support",
    desc: "Hardware diagnostics, OS installation, network setup, and full lab configuration for educational centers.",
    tech: ["Hardware", "Windows OS", "Networking"],
    gradient: "from-violet-400 via-purple-500 to-pink-500",
    icon: "⚙",
    featured: false,
  },
  {
    title: "MS Office & Programming Classes",
    tag: "Teaching",
    desc: "Structured courses covering Advanced Excel, Word, C/C++, C# and web design for 100+ students.",
    tech: ["Excel", "C/C++", "C#", "HTML"],
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    icon: "◉",
    featured: false,
  },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "2", label: "Institutions Taught" },
  { value: "11+", label: "Certificates" },
  { value: "3", label: "Skills Areas" },
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
const tools = ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Adobe Premiere Pro", "After Effects", "HTML", "CSS", "JavaScript", "C/C++", "MS Word", "MS Excel", "MS Access"];
const softSkills = ["Communications", "Teamwork", "Time Management", "Problem Solving", "Adaptable"];
const languages = [
  { name: "Khmer", level: "Native" },
  { name: "English", level: "Basic – Intermediate" },
  { name: "Chinese", level: "Basic" },
];
const experiences = [
  { period: "2025 – 2026", role: "Machine Operator", org: "JZ Glory Enterprise Co., Ltd.", bullets: ["Operated and maintained machines efficiently", "Ensured product quality and safety standards"] },
  { period: "2021 – 2025", role: "IT & Computer Instructor", org: "Baktouk Information Technology Center", bullets: ["Taught Computer Repairing and Basic Computer", "Trained students in Microsoft Office (Word, Excel, Access)", "Introduced programming (C/C++) and Web Design", "Guided students in Adobe Photoshop & Illustrator"] },
  { period: "2021 – 2025", role: "Computer Teacher", org: "Polytechnic Institute of Kampong Cham", bullets: ["Taught C# Programming", "Provided computer repair training"] },
];
const education = [
  { period: "2021 – 2025", school: "Polytechnic Institute of Kampong Cham Province" },
  { period: "2018 – 2021", school: "Hun Sen Stung Trang High School" },
  { period: "2015 – 2018", school: "Hun Sen Stung Trang High School" },
  { period: "2009 – 2015", school: "Hun Neng Stung Trang High School" },
];

// ── Root component ───────────────────────────────────────────────────
function Portfolio() {
  const [cvOpen, setCvOpen] = useState(false);
  return (
    <div className="min-h-screen text-foreground">
      <Navbar onViewCv={() => setCvOpen(true)} />
      <Hero onViewCv={() => setCvOpen(true)} />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certificates />
      <PortfolioSection />
      <Contact />
      <Footer />
      {cvOpen && <CvModal onClose={() => setCvOpen(false)} />}
    </div>
  );
}

// ── CV Modal ─────────────────────────────────────────────────────────
function CvModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex flex-col">
      <div className="flex items-center justify-between px-6 h-14 border-b border-border">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-gold" />
          <span className="font-semibold">Leab Mengseu — CV</span>
        </div>
        <div className="flex items-center gap-2">
          <a href={CV_URL} download="Leab_Mengseu_CV.pdf" className="inline-flex items-center gap-2 text-xs bg-gold text-primary-foreground px-3 py-2 rounded-full font-medium hover:opacity-90 transition">
            <Download size={14} /> Download CV
          </a>
          <button onClick={onClose} className="w-9 h-9 grid place-items-center rounded-full border border-border hover:bg-secondary" aria-label="Close">
            <X size={18} />
          </button>
        </div>
      </div>
      <div className="flex-1 bg-black/40">
        <iframe src={CV_URL} title="Leab Mengseu CV" className="w-full h-full border-0" />
      </div>
    </div>
  );
}

// ── Navbar ───────────────────────────────────────────────────────────
function Navbar({ onViewCv }: { onViewCv: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight"><span className="text-gold">Leab</span> Mengseu</a>
        <ul className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((l) => (
            <li key={l.id}><a href={`#${l.id}`} className="text-muted-foreground hover:text-gold transition-colors">{l.label}</a></li>
          ))}
          <li>
            <button onClick={onViewCv} className="inline-flex items-center gap-1.5 bg-gold text-primary-foreground px-4 py-2 rounded-full font-medium text-xs hover:opacity-90 transition">
              <FileText size={14} /> View CV
            </button>
          </li>
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold" aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="md:hidden bg-background/95 border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((l) => (<li key={l.id}><a onClick={() => setOpen(false)} href={`#${l.id}`} className="block text-muted-foreground hover:text-gold">{l.label}</a></li>))}
          <li><button onClick={() => { setOpen(false); onViewCv(); }} className="w-full inline-flex items-center justify-center gap-1.5 bg-gold text-primary-foreground px-4 py-2 rounded-full font-medium text-sm"><FileText size={14} /> View CV</button></li>
        </ul>
      )}
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────
function Hero({ onViewCv }: { onViewCv: () => void }) {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up order-2 md:order-1">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Leab <span className="text-gold">Mengseu</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">Graphic Designer · IT Support · Web Developer</p>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Creative and detail-oriented professional with 4+ years of experience in Graphic Design, IT Support, and Teaching at two institutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:leabmengseu1212@gmail.com" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-5 py-3 rounded-full font-medium hover:opacity-90 transition shadow-[var(--shadow-gold)]">
                <Mail size={18} /> Hire Me
              </a>
              <button onClick={onViewCv} className="inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-3 rounded-full font-medium hover:bg-gold/10 transition">
                <FileText size={18} /> View CV
              </button>
              <a href={CV_URL} download="Leab_Mengseu_CV.pdf" className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-3 rounded-full font-medium hover:bg-secondary transition">
                <Download size={18} /> Download CV
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Creative Thinker", "Fast Learner", "Team Player", "Goal Oriented"].map((t) => (
                <span key={t} className="text-xs bg-secondary border border-border px-3 py-1.5 rounded-full text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-4 gap-4 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gold">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gold/5 border border-gold/10 animate-pulse" />
              <div className="absolute -inset-4 rounded-full bg-[var(--gradient-gold)] blur-2xl opacity-30" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold shadow-[var(--shadow-gold)]">
                <img src={profileImg} alt="Leab Mengseu" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-gold/40 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg whitespace-nowrap">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About ────────────────────────────────────────────────────────────
function About() {
  const items = [
    { icon: Phone, label: "Phone", value: "071 836 6100 / 011 916 612" },
    { icon: Mail, label: "Email", value: "leabmengseu1212@gmail.com" },
    { icon: MapPin, label: "Location", value: "Kampong Cham, Cambodia" },
    { icon: Facebook, label: "Social", value: "@seu.1212" },
  ];
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="About" title="Get to know me" />
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>I'm a Cambodian creative based in Kampong Cham Province, blending the precision of IT with the imagination of design. Over four years I've taught at two institutions — Baktouk IT Center and Polytechnic Institute of Kampong Cham — while also designing brand visuals and building websites.</p>
            <p>My goal is simple — craft work that's both useful and beautiful. Whether it's a poster, a website, or a classroom demo, I show up curious and committed.</p>
            <p className="text-sm">Born: 08 April 2003</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 text-gold mb-1"><Icon size={18} /><span className="text-xs uppercase tracking-wider">{label}</span></div>
                <p className="text-sm break-words">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Skills ───────────────────────────────────────────────────────────
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
            <div className="flex flex-wrap gap-2">{tools.map((t) => <span key={t} className="text-xs bg-secondary border border-border px-2.5 py-1 rounded-md">{t}</span>)}</div>
          </InfoCard>
          <InfoCard icon={Sparkles} title="Soft Skills">
            <ul className="space-y-1.5 text-sm text-muted-foreground">{softSkills.map((s) => <li key={s} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />{s}</li>)}</ul>
          </InfoCard>
          <InfoCard icon={Languages} title="Languages">
            <ul className="space-y-2 text-sm">{languages.map((l) => <li key={l.name} className="flex justify-between border-b border-border/50 pb-1.5"><span>{l.name}</span><span className="text-gold text-xs">{l.level}</span></li>)}</ul>
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
            <div className="flex justify-between text-sm mb-1.5"><span>{s.name}</span><span className="text-gold">{s.value}%</span></div>
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

// ── Timeline ─────────────────────────────────────────────────────────
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
                  {item.bullets.map((b: string) => <li key={b} className="flex gap-2"><span className="text-gold">▸</span>{b}</li>)}
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
        <div className="mt-10"><Timeline items={experiences} icon={Briefcase} /></div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Education" title="Academic background" />
        <div className="mt-10"><Timeline items={education} icon={GraduationCap} /></div>
      </div>
    </section>
  );
}

// ── CERTIFICATES ─────────────────────────────────────────────────────
function Certificates() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCert, setActiveCert] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const category = certCategories[activeTab];
  const cert = category.items[activeCert];

  const prevCert = () => setActiveCert((c) => (c === 0 ? category.items.length - 1 : c - 1));
  const nextCert = () => setActiveCert((c) => (c === category.items.length - 1 ? 0 : c + 1));
  const switchTab = (i: number) => { setActiveTab(i); setActiveCert(0); };

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Certificates" title="Recognized achievements" />

        {/* Summary */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5">
            <Award size={16} className="text-gold" /><span className="text-sm">11+ Certificates & Recognitions</span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5">
            <Star size={16} className="text-gold" /><span className="text-sm">2 Teaching Institutions</span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {certCategories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => switchTab(i)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                activeTab === i
                  ? "bg-gold text-primary-foreground border-gold shadow-[var(--shadow-gold)]"
                  : "bg-card border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              <span>{cat.icon}</span> {cat.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === i ? "bg-white/20" : "bg-secondary"}`}>
                {cat.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Main viewer */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Certificate image */}
          <div className="relative group">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} blur-xl opacity-60`} />
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full object-contain max-h-[420px] cursor-zoom-in"
                onClick={() => setLightbox(cert.img)}
              />
              <button
                onClick={() => setLightbox(cert.img)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur border border-border grid place-items-center opacity-0 group-hover:opacity-100 transition hover:border-gold hover:text-gold"
              >
                <ZoomIn size={16} />
              </button>
            </div>

            {/* Prev/Next */}
            <div className="flex items-center justify-between mt-4 px-1">
              <button onClick={prevCert} className="w-9 h-9 rounded-full border border-border grid place-items-center hover:border-gold hover:text-gold transition">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {category.items.map((_, i) => (
                  <button key={i} onClick={() => setActiveCert(i)} className={`h-1.5 rounded-full transition-all ${i === activeCert ? "bg-gold w-5" : "bg-border w-1.5"}`} />
                ))}
              </div>
              <button onClick={nextCert} className="w-9 h-9 rounded-full border border-border grid place-items-center hover:border-gold hover:text-gold transition">
                <ChevronRight size={18} />
              </button>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">{activeCert + 1} of {category.items.length} — click image to enlarge</p>
          </div>

          {/* Details panel + thumbnail strip */}
          <div className="space-y-4">
            {/* Active cert details */}
            <div className={`bg-gradient-to-br ${category.color} border border-border rounded-2xl p-6`}>
              <div className="text-3xl mb-3">{category.icon}</div>
              <span className="text-xs text-gold uppercase tracking-wider font-semibold">{category.label}</span>
              <h3 className="text-xl font-bold mt-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                <Award size={16} className="text-gold" />
                <span className="text-sm">
                  <span className="text-muted-foreground">{cert.gradeLabel}: </span>
                  <span className="text-gold font-bold text-base">{cert.grade}</span>
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-3 gap-2">
              {category.items.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCert(i)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-[3/4] ${
                    i === activeCert ? "border-gold shadow-[var(--shadow-gold)]" : "border-border hover:border-gold/50"
                  }`}
                >
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  {i === activeCert && (
                    <div className="absolute inset-0 bg-gold/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-gold grid place-items-center">
                        <span className="text-[10px] text-primary-foreground font-bold">✓</span>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card border border-border grid place-items-center hover:border-gold" onClick={() => setLightbox(null)}>
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

// ── PORTFOLIO ─────────────────────────────────────────────────────────
function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", ...Array.from(new Set(projects.map((p) => p.tag)))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Portfolio" title="Selected work" />

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === tag
                  ? "bg-gold text-primary-foreground border-gold"
                  : "bg-card border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.title}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/60 transition-all hover:-translate-y-2 hover:shadow-[var(--shadow-gold)] ${p.featured ? "ring-1 ring-gold/30" : ""}`}
            >
              {p.featured && (
                <div className="absolute top-3 right-3 z-10 bg-gold text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  FEATURED
                </div>
              )}
              {/* Visual header */}
              <div className={`h-44 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 left-4 text-8xl font-black text-white/30 select-none">{p.icon}</div>
                  <div className="absolute bottom-2 right-4 text-5xl font-black text-white/20 select-none">{p.icon}</div>
                </div>
                {/* Center icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 grid place-items-center">
                  <span className="text-3xl">{p.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-gold uppercase tracking-wider font-semibold">{p.tag}</span>
                <h4 className="font-bold text-base mt-1 group-hover:text-gold transition leading-tight">{p.title}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] bg-secondary border border-border px-2 py-0.5 rounded-md text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">Want to see more or collaborate?</p>
          <a
            href="mailto:leabmengseu1212@gmail.com"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition shadow-[var(--shadow-gold)]"
          >
            <ExternalLink size={16} /> Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────
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
            <a href={CV_URL} download="Leab_Mengseu_CV.pdf" className="flex items-start gap-4 bg-card border border-gold/40 rounded-xl p-5 hover:border-gold transition group">
              <div className="w-11 h-11 rounded-lg bg-gold/15 grid place-items-center text-gold shrink-0"><Download size={18} /></div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Curriculum Vitae</p>
                <p className="text-sm mt-0.5 group-hover:text-gold transition">Download my CV (PDF)</p>
              </div>
            </a>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-card border border-border rounded-2xl p-6 space-y-4">
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