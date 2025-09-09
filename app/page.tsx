"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, ShieldCheck, Sparkles, Gauge, Globe, Mail, Phone, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// ------- EINSTELLUNGEN (bitte anpassen) -------
const CONFIG = {
  name: "Christoph Rosner",
  brand: "Web entwicklungen",
  email: "rosner-christoph@web.de",
  phone: "+49 0176 61223032", // optional
  location: "Augsburg & Remote",
  // Tip: Erstelle kostenlos ein Formspree-Formular und trage hier die ID ein, z.B. "xqkwylnn"
  formspreeId: "xqkwylnn",
};
// ----------------------------------------------

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

function BgDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* weiche Farbflächen */}
      <div className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl opacity-30" style={{
        background:
          "radial-gradient(55% 55% at 50% 50%, rgba(56,189,248,0.35) 0%, rgba(59,130,246,0.25) 50%, rgba(168,85,247,0.15) 100%)",
      }} />
      {/* sanftes Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.5\"/></svg>')" }} />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 bg-slate-950/70 border-b border-white/5">
      <Section className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/80 to-violet-500/80">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-sm text-slate-300">{CONFIG.name}</p>
            <p className="font-semibold tracking-tight">{CONFIG.brand}</p>
          </div>
          <Badge variant="secondary" className="ml-2 bg-white/10 text-white border-white/10">Freelance</Badge>
        </div>
        <div className="hidden md:flex items-center gap-1 text-sm">
          <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#leistungen">Leistungen</a>
          <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#projekte">Projekte</a>
          <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#prozess">Prozess</a>
          <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#faq">FAQ</a>
          <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#kontakt">Kontakt</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#kontakt">
            <Button className="group">
              Kostenlose Beratung
              <ArrowRight className="ml-1 h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
            </Button>
          </a>
        </div>
      </Section>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <BgDecor />
      <Section className="pt-24 pb-20">
        <motion.div initial="hidden" animate="show" variants={fade} className="mx-auto max-w-3xl text-center">
          <Badge className="mx-auto mb-6 bg-white/10 text-slate-100 border-white/10">{CONFIG.location}</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Webseiten, die <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Umsatz</span> machen.
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Ich entwickle schnelle, suchmaschinenstarke und konversionsfokussierte Websites & Web-Apps für Unternehmen,
            die online wachsen wollen. Klar, modern, messbar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#kontakt">
              <Button size="lg" className="h-12 px-6">Projekt anfragen</Button>
            </a>
            <a href="#projekte">
              <Button size="lg" variant="secondary" className="h-12 px-6 bg-white/10 text-white border-white/10 hover:bg-white/20">Arbeitsbeispiele</Button>
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-left">
            {[
              { icon: <Gauge className="h-5 w-5" />, title: "<1s LCP", text: "Performance, die rankt & konvertiert." },
              { icon: <ShieldCheck className="h-5 w-5" />, title: "Clean Code", text: "Nachhaltig, erweiterbar, sicher." },
              { icon: <Rocket className="h-5 w-5" />, title: "Go‑Live schnell", text: "MVP in Tagen statt Wochen." },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mt-1 text-sky-300">{f.icon}</div>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  <p className="text-sm text-slate-300">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

function LogosBar() {
  return (
    <Section className="pb-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-80">
        {["Next.js", "React", "Tailwind", "Node.js", "PostgreSQL", "Docker"].map((t) => (
          <div key={t} className="flex h-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-sm font-medium">
            {t}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Leistungen() {
  const cards = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Websites & Web-Apps",
      text: "Individuelle Frontends mit React/Next.js. Design, Development, Hosting – alles aus einer Hand.",
      bullets: ["Responsive UI/UX", "CMS auf Wunsch", "Barrierearm"],
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Brand & Konversion",
      text: "Klares Messaging, psychologisch gute Nutzerführung und A/B-Tests für mehr Leads.",
      bullets: ["Copywriting", "Designsystem", "Tracking & A/B"],
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Performance & SEO",
      text: "Technisches SEO, rasante Ladezeiten und saubere Struktur für Top-Rankings.",
      bullets: ["Core Web Vitals", "Strukturierte Daten", "On-Page SEO"],
    },
  ];
  return (
    <Section id="leistungen" className="py-14">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Leistungen
        </h2>
        <p className="mt-2 text-slate-300">
          Alles, was du für eine überzeugende Präsenz brauchst.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="border-white/10 bg-white/5"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-sky-400/30 to-violet-500/30 p-2 text-sky-300">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {c.title}
                </h3>
              </div>
            </CardHeader>
            <CardContent className="text-slate-300">
              <p>{c.text}</p>
              <ul className="mt-4 space-y-2">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-300" /> {b}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}


function Projekte() {
  const items = [
    { name: "Laborzähler-App", tag: "Web-App", result: "+120% Effizienz" },
    { name: "Shop-Frontend", tag: "E-Commerce", result: "+38% Conversion" },
    { name: "Scanner-Dashboard", tag: "B2B Portal", result: "-70% Prozesszeit" },
    { name: "Statistik-Portal", tag: "Data", result: "+3x Page Speed" },
    { name: "QR-Generator", tag: "Tooling", result: "+80% Nutzung" },
    { name: "Landing-Kampagne", tag: "Marketing", result: "+2.1x Leads" },
  ];
  return (
    <Section id="projekte" className="py-14">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Ausgewählte Projekte
        </h2>
        <p className="mt-2 text-slate-300">Echte Lösungen. Messbare Resultate.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card
            key={p.name}
            className="group border-white/10 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="h-40 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-400/15 via-blue-500/15 to-violet-500/15" />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Badge className="bg-white/10 text-white border-white/10">
                    {p.tag}
                  </Badge>
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Ergebnis:{" "}
                  <span className="font-medium text-sky-300">{p.result}</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-end p-5 pt-0">
              <a  
                href="#kontakt"
                className="text-sm inline-flex items-center gap-1 hover:underline text-slate-300"
              >
                Details anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}


function Prozess() {
  const steps = [
    { n: 1, t: "Kickoff & Ziele", d: "Kostenloses Erstgespräch: Ziele, Zielgruppe, Nutzenversprechen." },
    { n: 2, t: "Konzept & Angebot", d: "Wireframes, CMS/Tech-Stack, Aufwand. Fixpreis & Meilensteine." },
    { n: 3, t: "Design & Build", d: "Iteratives Design, Entwicklung, Reviews im Wochenrhythmus." },
    { n: 4, t: "Launch & Wachstum", d: "SEO/Tracking, A/B Tests, Monitoring, Optimierung." },
  ];
  return (
    <Section id="prozess" className="py-14">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Zusammenarbeit – klar & planbar</h2>
        <p className="mt-2 text-slate-300">Transparente Schritte bis zum Go‑Live.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="absolute -top-3 left-4 rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 px-3 py-1 text-sm font-semibold">{s.n}</div>
            <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
            <p className="mt-1 text-slate-300 text-sm">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const ts = [
    { name: "K. Bürger", role: "Inhaber, Modern Man Hair", quote: "Top Arbeit, von nichts zu einer Seite die uns einiges erleichter geld einspaart, und sogar neue Kunden bringt.", stars: 5 },
    { name: "S. Bauer", role: "COO, Tech Startup", quote: "Klare Kommunikation, saubere Architektur – und sichtbar bessere Conversion.", stars: 5 },
    { name: "Annonym", role: "Leitung, B2B", quote: "Von der Idee bis zum Launch in Rekordzeit. Absolute Empfehlung!", stars: 5 },
  ];
  return (
    <Section className="py-14">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Kundenstimmen</h2>
        <p className="mt-2 text-slate-300">Was Auftraggeber über die Zusammenarbeit sagen.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {ts.map((t) => (
          <Card key={t.name} className="border-white/10 bg-white/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/40 to-violet-500/40">
                  <span className="font-semibold">{t.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-slate-300">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-200">“{t.quote}”</p>
              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    { q: "Was kostet eine Website?", a: "Einfach gesagt: so viel wie nötig, so wenig wie möglich. Nach dem Kickoff bekommst du ein fixes Angebot mit klaren Meilensteinen – transparent und ohne Überraschungen." },
    { q: "Nutzt du Templates?", a: "Nein. Ich arbeite komponentenbasiert (React/Next.js) mit maßgeschneidertem Designsystem und auf Wunsch CMS-Anbindung." },
    { q: "Wie schnell kann es losgehen?", a: "Ein MVP ist oft innerhalb weniger Tage realistisch. Umfangreichere Projekte dauern je nach Komplexität 2–6 Wochen." },
    { q: "Bietest du Wartung an?", a: "Ja. Auf Wunsch inklusive Hosting, Monitoring, Security-Updates und Weiterentwicklung." },
  ];
  return (
    <Section id="faq" className="py-14">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">FAQ</h2>
        <p className="mt-2 text-slate-300">Kurz & knapp beantwortet.</p>
      </div>
      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        {items.map((it, idx) => (
          <AccordionItem key={it.q} value={`item-${idx}`} className="border-white/10">
            <AccordionTrigger className="text-left">{it.q}</AccordionTrigger>
            <AccordionContent className="text-slate-300">{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

function Kontakt() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!CONFIG.formspreeId) {
      setStatus("ok");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);
    try {
      const res = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new URLSearchParams(data as any),
      });
      if (res.ok) setStatus("ok"); else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="kontakt" className="py-14">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Sag kurz Hallo
        </h2>
        <p className="mt-2 text-slate-300">
          Kostenlose Erstberatung. Antwort in der Regel binnen 24h.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-5">
        <Card className="md:col-span-3 border-white/10 bg-white/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-sky-300" />
              <h3 className="text-xl font-semibold text-white">Projektanfrage</h3>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Max Mustermann"
                    required
                    className="text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="max@example.com"
                    type="email"
                    required
                    className="text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="budget" className="text-white">Budget (optional)</Label>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="z.B. 2.500–6.000 €"
                  className="text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white">Kurzbeschreibung</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Was soll die Website erreichen?"
                  required
                  className="text-white placeholder:text-slate-400"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Senden…" : "Nachricht senden"}
                </Button>
                <p className="text-sm text-slate-400">
                  oder mail an{" "}
                  <a className="underline" href={`mailto:${CONFIG.email}`}>
                    {CONFIG.email}
                  </a>
                </p>
              </div>
              {status === "ok" && (
                <p className="text-sm text-emerald-400">
                  Danke! Deine Nachricht ist angekommen. Ich melde mich zeitnah.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Ups, etwas lief schief. Schreib mir direkt an{" "}
                  <a className="underline" href={`mailto:${CONFIG.email}`}>
                    {CONFIG.email}
                  </a>.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
        <div className="md:col-span-2 space-y-4">
          <Card className="border-white/10 bg-white/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-sky-300" />
                <div>
                  <p className="font-semibold text-white">Direktkontakt</p>
                  <p className="text-sm text-slate-300">{CONFIG.phone}</p>
                  <p className="text-sm text-slate-300">{CONFIG.email}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Badge className="bg-white/10 text-white border-white/10">{CONFIG.location}</Badge>
                <Badge className="bg-white/10 text-white border-white/10">Deutsch & Englisch</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5">
            <CardContent className="pt-6">
              <p className="font-semibold text-white">Warum ich?</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-300" /> Full-Stack Know-how (Java, JS, Node, Docker, PostgreSQL)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-300" /> UX-starkes Frontend (React, Tailwind, shadcn)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-300" /> Agil, transparent, zuverlässig
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
  
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70">
      <Section className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 text-sm">
        <p className="text-slate-300">© {new Date().getFullYear()} {CONFIG.brand}. Alle Rechte vorbehalten.</p>
        <div className="flex items-center gap-4">
          <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${CONFIG.email}`}><Mail className="h-4 w-4" /> {CONFIG.email}</a>
          <span className="hidden md:inline">|</span>
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {CONFIG.phone}</span>
        </div>
      </Section>
    </footer>
  );
}

export default function FreelanceLandingpage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-sky-500 selection:text-white">
      <Nav />
      <Hero />
      <LogosBar />
      <Leistungen />
      <Projekte />
      <Prozess />
      <Testimonials />
      <FAQ />
      <Kontakt />
      <Footer />
    </div>
  );
}
