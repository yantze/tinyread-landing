import { Shield, Eye, Database, Lock, CheckCircle } from "lucide-react";

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/tinyread-auto-summary-rel/oknmajiccmamfgabkomdpkhiabimoiap";

const sections = [
  {
    icon: Eye,
    title: "No Personal Data Collected",
    description:
      "TinyRead does not collect, store, or transmit any personal information. We have no idea who you are — and that's intentional.",
  },
  {
    icon: Database,
    title: "No Browsing History Tracked",
    description:
      "We do not track which pages you visit, which articles you read, or how you use the extension. Your browsing activity stays entirely on your device.",
  },
  {
    icon: Lock,
    title: "No Cookies or Identifiers",
    description:
      "TinyRead sets no cookies, creates no user IDs, and uses no fingerprinting techniques. You are completely anonymous to us.",
  },
  {
    icon: Shield,
    title: "Article Content Sent to AI",
    description:
      "When you request a summary, the visible text content of the current article is sent to an AI API to generate the summary. This content is not stored by us and is only used for the single summarization request.",
  },
];

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-dashed border-foreground px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/" className="font-display text-2xl md:text-3xl hover:opacity-80 transition-opacity">
            TinyRead 📖
          </a>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-accent px-4 py-1 border-2 border-foreground wobbly-sm -rotate-2 mb-6">
            <span className="font-body text-lg">🔒 Privacy Policy</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl mb-6">
            Your privacy{" "}
            <span className="relative inline-block">
              matters
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q 25 2, 50 8 Q 75 14, 100 6"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            TinyRead is built with a simple principle: we collect{" "}
            <strong className="text-foreground">zero</strong> personal data. Here's exactly what that means.
          </p>
          <p className="font-body text-sm text-muted-foreground mt-4">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Summary banner */}
      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto border-[3px] border-foreground wobbly-alt bg-accent p-8 shadow-hard-lg rotate-1 hover:rotate-0 transition-transform duration-100">
          <div className="flex items-start gap-4">
            <CheckCircle size={32} strokeWidth={2.5} className="shrink-0 mt-1" />
            <div>
              <p className="font-display text-2xl mb-2">The short version</p>
              <p className="font-body text-lg">
                TinyRead does <strong>not</strong> collect any personally identifiable information, browsing
                history, or usage analytics. No sign-up required. No data sold. Ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`flex gap-6 p-6 border-2 border-foreground bg-card shadow-hard wobbly ${
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              } hover:rotate-0 transition-transform duration-100`}
            >
              <div className="w-12 h-12 border-2 border-foreground wobbly-sm flex items-center justify-center bg-background shrink-0">
                <s.icon size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="font-display text-xl mb-2">{s.title}</h2>
                <p className="font-body text-lg text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-lg text-muted-foreground">
            Questions about privacy?{" "}
            <a
              href="mailto:privacy@tinyread.app"
              className="text-foreground underline underline-offset-4 hover:no-underline"
            >
              privacy@tinyread.app
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-dashed border-foreground">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-display text-2xl">TinyRead 📖</p>
          <div className="flex gap-6 font-body text-lg">
            <a href="/#features" className="hover:line-through transition-all">Features</a>
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:line-through transition-all">Chrome Store</a>
            <a href="/privacy" className="hover:line-through transition-all font-bold">Privacy</a>
          </div>
          <p className="font-body text-muted-foreground">© 2026 TinyRead — read smarter ♥</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;
