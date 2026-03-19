import { Lightbulb, Pencil, Users, Zap, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Hero = () => (
  <section className="relative py-20 px-6 overflow-hidden">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          Your ideas deserve a{" "}
          <span className="text-primary inline-block rotate-1">messy</span>{" "}
          sketchbook<span className="text-primary inline-block animate-gentle-bounce">!</span>
        </h1>
        <p className="text-lg md:text-xl font-body max-w-md">
          Capture your wildest ideas, sketch out plans, and brainstorm without limits. No fancy tools needed — just you and your creativity.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg">
            Start Sketching <Pencil className="ml-1" strokeWidth={2.5} />
          </Button>
          <Button variant="secondary" size="lg">
            See Examples
          </Button>
        </div>
        {/* Hand-drawn arrow */}
        <svg className="hidden md:block w-32 h-16 -mt-2 ml-4 text-foreground" viewBox="0 0 120 50" fill="none">
          <path d="M5 40 Q 30 5, 80 25 Q 100 32, 110 15" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" fill="none" />
          <path d="M105 10 L112 16 L103 19" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="relative">
        {/* Sketch placeholder frame */}
        <div className="border-[3px] border-dashed border-foreground wobbly-alt p-8 bg-card shadow-hard-lg rotate-2 hover:-rotate-1 transition-transform duration-100">
          <div className="aspect-square flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto border-2 border-foreground wobbly flex items-center justify-center bg-accent">
                <Lightbulb size={40} strokeWidth={2.5} />
              </div>
              <p className="font-display text-2xl">Your idea here</p>
              <p className="font-body text-muted-foreground">( sketch something amazing )</p>
            </div>
          </div>
          {/* Corner marks */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-foreground" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-foreground" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-foreground" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-foreground" />
        </div>
        {/* Bouncing decorative circle */}
        <div className="hidden md:block absolute -top-4 -right-4 w-12 h-12 bg-primary wobbly-sm border-2 border-foreground animate-gentle-bounce" />
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: Pencil,
    title: "Sketch Freely",
    description: "No rules, no grids, no constraints. Just pure creative flow on a digital canvas.",
    decoration: "tape" as const,
    rotate: "-rotate-1",
  },
  {
    icon: Users,
    title: "Collaborate Live",
    description: "Invite your team to brainstorm together in real time. Ideas bounce better with friends.",
    decoration: "tack" as const,
    rotate: "rotate-1",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "From thought to sketch in seconds. No loading screens, no setup, no friction.",
    decoration: "tape" as const,
    rotate: "-rotate-2",
    accent: true,
  },
];

const Features = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-accent px-4 py-1 border-2 border-foreground wobbly-sm -rotate-2 mb-4">
          <span className="font-body text-lg">✨ Features</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl">
          Everything you need to{" "}
          <span className="relative inline-block">
            think big
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0 8 Q 25 2, 50 8 Q 75 14, 100 6" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <Card
            key={i}
            decoration={f.decoration}
            className={`${f.rotate} hover:rotate-0 transition-transform duration-100 ${f.accent ? "bg-accent" : ""}`}
          >
            <CardHeader>
              <div className="w-14 h-14 border-2 border-foreground wobbly-sm flex items-center justify-center bg-background mb-2">
                <f.icon size={28} strokeWidth={2.5} />
              </div>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">{f.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { num: "1", title: "Open a blank page", desc: "Start fresh with an empty canvas ready for your ideas." },
  { num: "2", title: "Sketch & scribble", desc: "Write, draw, drag things around. Make a beautiful mess." },
  { num: "3", title: "Share & iterate", desc: "Send it to your team. Watch ideas evolve together." },
];

const HowItWorks = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-16">
        How it works <span className="inline-block rotate-6">📝</span>
      </h2>
      <div className="relative space-y-12">
        {/* Squiggly connecting line (desktop) */}
        <svg className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-4" viewBox="0 0 16 300" preserveAspectRatio="none">
          <path d="M8 0 Q 2 50, 8 100 Q 14 150, 8 200 Q 2 250, 8 300" stroke="hsl(var(--muted))" strokeWidth="3" strokeDasharray="8 6" fill="none" />
        </svg>
        {steps.map((s, i) => (
          <div key={i} className={`relative flex flex-col items-center gap-4 ${i % 2 === 0 ? "md:-translate-x-8" : "md:translate-x-8"}`}>
            <div className="z-10 w-16 h-16 border-[3px] border-foreground wobbly flex items-center justify-center bg-card shadow-hard text-2xl font-display">
              {s.num}
            </div>
            <h3 className="font-display text-2xl">{s.title}</h3>
            <p className="font-body text-lg max-w-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  { name: "Alex K.", text: "Finally, a tool that doesn't feel like a spreadsheet pretending to be creative!", stars: 5 },
  { name: "Mia R.", text: "My team went from boring slide decks to actual brainstorming sessions. Game changer.", stars: 5 },
];

const Testimonials = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-16">
        People{" "}
        <span className="relative inline-block">
          love
          <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
            <path d="M0 6 Q 25 12, 50 4 Q 75 -2, 100 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
          </svg>
        </span>{" "}
        it
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className={`relative bg-card border-2 border-foreground wobbly p-6 shadow-hard ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-transform duration-100`}>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-foreground" />
            <div className="absolute -bottom-[11px] left-[33px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-card" />
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={18} strokeWidth={2.5} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="font-body text-lg mb-4">"{t.text}"</p>
            <p className="font-display text-base">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t-2 border-dashed border-foreground">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="font-display text-2xl">Sketchpad ✏️</p>
      <div className="flex gap-6 font-body text-lg">
        <a href="#" className="hover:line-through transition-all">About</a>
        <a href="#" className="hover:line-through transition-all">Blog</a>
        <a href="#" className="hover:line-through transition-all">Contact</a>
      </div>
      <p className="font-body text-muted-foreground">© 2026 — made with ♥ & pencils</p>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-dashed border-foreground px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-display text-2xl md:text-3xl">Sketchpad ✏️</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hidden md:inline font-body text-lg relative group">
              Features
              <svg className="absolute -bottom-1 left-0 w-full h-2 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 4 Q 25 0, 50 4 Q 75 8, 100 4" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
              </svg>
            </a>
            <a href="#" className="hidden md:inline font-body text-lg relative group">
              Pricing
              <svg className="absolute -bottom-1 left-0 w-full h-2 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 4 Q 25 0, 50 4 Q 75 8, 100 4" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
              </svg>
            </a>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center border-[3px] border-foreground wobbly-alt bg-accent p-10 md:p-16 shadow-hard-lg rotate-1 hover:rotate-0 transition-transform duration-100">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to brainstorm?</h2>
          <p className="font-body text-lg md:text-xl mb-8 max-w-lg mx-auto">
            Grab your digital pencil and start sketching ideas. It's free, it's fun, and it's a beautiful mess.
          </p>
          <Button size="lg">
            Let's Go <ArrowRight className="ml-1" strokeWidth={2.5} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
