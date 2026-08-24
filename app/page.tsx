// app/page.tsx
// Crohn's Compass — Home Page
import Nav from "./components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-page)" }}>

      <Nav active="/" />

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: "#2E8B6A" }}>
          Evidence-based · Hopeful · Human
        </p>
        <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--text-primary)" }}>
          You Are Not Alone
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Crohn&apos;s Compass gives you accurate, hopeful information to help you
          live well with Crohn&apos;s disease — grounded in science, written with care.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/ask-the-assistant" className="px-8 py-3 rounded-full text-white font-medium text-sm shadow hover:opacity-90 transition-all" style={{ backgroundColor: "#2E8B6A" }}>
            Ask the Assistant
          </Link>
          <Link href="/treatments" className="px-8 py-3 rounded-full text-sm font-medium border hover:opacity-80 transition-all" style={{ color: "#1B4F3A", borderColor: "#1B4F3A" }}>
            Explore Treatments
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="rounded-2xl px-8 py-5 text-center" style={{ backgroundColor: "var(--bg-accent)" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#1B4F3A" }}>
            🌿 Everything here complements — never replaces — the care of your gastroenterologist.
            Our goal is to help you feel informed, not overwhelmed.
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-2xl p-7 shadow-sm border hover:shadow-md transition-shadow" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#D4EDE4" }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M11 2v18M2 11h18" stroke="#2E8B6A" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1B4F3A" }}>Treatments</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>Explore medications, natural therapies, and emerging treatments — each clearly labelled by strength of evidence.</p>
            <Link href="/treatments" className="text-sm font-medium hover:underline" style={{ color: "#2E8B6A" }}>View treatments →</Link>
          </div>

          <div className="rounded-2xl p-7 shadow-sm border hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#D4EDE4" }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M4 4c4-2 10-2 14 4-4 2-10 2-14-4z" stroke="#2E8B6A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 8v12" stroke="#2E8B6A" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1B4F3A" }}>Diet & Nutrition</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>From SCD to plant-based eating, understand what the science says about food and Crohn&apos;s — without the conflicting advice.</p>
            <Link href="/diet" className="text-sm font-medium hover:underline" style={{ color: "#2E8B6A" }}>Explore diets →</Link>
          </div>

          <div className="rounded-2xl p-7 shadow-sm border hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#D4EDE4" }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="#2E8B6A" strokeWidth="1.8" /><path d="M11 7v4l3 3" stroke="#2E8B6A" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1B4F3A" }}>Mindfulness</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>Stress is a known flare trigger. Breathwork, meditation and gentle movement practices — adapted for life with Crohn&apos;s.</p>
            <Link href="/mindfulness" className="text-sm font-medium hover:underline" style={{ color: "#2E8B6A" }}>Find calm →</Link>
          </div>

          <div className="rounded-2xl p-7 shadow-sm border hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#D4EDE4" }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="3" stroke="#2E8B6A" strokeWidth="1.8" /><path d="M7 8h8M7 12h5" stroke="#2E8B6A" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1B4F3A" }}>Latest Research</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>Stay informed with recent studies from PubMed — summarised in plain language so you don&apos;t need a medical degree.</p>
            <Link href="/research" className="text-sm font-medium hover:underline" style={{ color: "#2E8B6A" }}>Read research →</Link>
          </div>

          <div className="rounded-2xl p-7 shadow-sm border hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#D4EDE4" }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M4 4h14a2 2 0 012 2v8a2 2 0 01-2 2H8l-4 4V6a2 2 0 012-2z" stroke="#2E8B6A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1B4F3A" }}>Ask the Assistant</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>Have a question about Crohn&apos;s? Our AI assistant gives evidence-based answers in plain language — available day or night.</p>
            <Link href="/ask-the-assistant" className="text-sm font-medium hover:underline" style={{ color: "#2E8B6A" }}>Ask a question →</Link>
          </div>

          <div className="rounded-2xl p-7 shadow-sm border hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#D4EDE4" }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="8" r="4" stroke="#2E8B6A" strokeWidth="1.8" /><path d="M3 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#2E8B6A" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1B4F3A" }}>Doctor Questions</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>Walk into your next gastroenterology appointment feeling prepared — with the right questions to ask your specialist.</p>
                        <Link href="/doctor-questions" className="text-sm font-medium hover:underline" style={{ color: "#2E8B6A" }}>Prepare now →</Link>
          </div>

          <div className="rounded-2xl p-7 shadow-sm border hover:shadow-md transition-shadow duration-200" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#D4EDE4" }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <circle cx="11" cy="11" r="9" stroke="#2E8B6A" strokeWidth="1.8" />
                <path d="M11 10v6" stroke="#2E8B6A" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="11" cy="7" r="1" fill="#2E8B6A" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1B4F3A" }}>About & Disclaimer</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>Our story, principles, evidence standards, medical disclaimer and privacy information — everything about how Crohn's Compass works.</p>
            <Link href="/about" className="text-sm font-medium hover:underline" style={{ color: "#2E8B6A" }}>Learn more →</Link>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <h2 className="text-lg font-semibold mb-2 text-center" style={{ color: "#1B4F3A" }}>How we label evidence</h2>
          <p className="text-sm text-center mb-6" style={{ color: "#3D6B5A" }}>Every treatment and recommendation is tagged so you always know what the science says.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "#D4EDE4", color: "#1B4F3A" }}>Strong clinical</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "#D6EAF8", color: "#1A5276" }}>Promising</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "#FEF9E7", color: "#7D6608" }}>Traditional use</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "#F5EEF8", color: "#6C3483" }}>Anecdotal</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "#FDEDEC", color: "#922B21" }}>Newly emerging</span>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--footer-bg)" }}>
        <p className="text-sm" style={{ color: "#3D6B5A" }}>Crohn&apos;s Compass — Evidence-based information with hope at its heart</p>
        <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>Always consult your gastroenterologist before making changes to your treatment.</p>
      </footer>

    </div>
  );
}