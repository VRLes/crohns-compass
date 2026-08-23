// app/about/page.tsx
// Crohn's Compass — About & Disclaimer Page

import Link from "next/link";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0F7F4" }}>

      <Nav active="/about" />

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-6">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#1B4F3A" }}>About Crohn&apos;s Compass</h1>
        <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "#3D6B5A" }}>
          Crohn&apos;s Compass was created by someone living with Crohn&apos;s disease —
          for everyone living with it.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-6">

        {/* Our Story */}
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#1B4F3A" }}>Our Story</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D6B5A" }}>
            Crohn&apos;s Compass was built by Les — a non-technical creator and entrepreneur
            living with Crohn&apos;s disease in Australia. After years of navigating confusing,
            conflicting, and sometimes fear-inducing information online, Les wanted to create
            something different: a resource that was accurate, warm, and genuinely helpful
            for patients, families, and carers.
          </p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D6B5A" }}>
            Every section of this app has been built with care — drawing on peer-reviewed
            research, clinical guidelines, and the lived experience of someone who understands
            what it means to navigate this disease day to day.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#3D6B5A" }}>
            Crohn&apos;s Compass is currently in review by gastroenterologists and the
            Crohn&apos;s &amp; Colitis Association of Australia. We are committed to
            accuracy, ongoing updates, and always putting patients first.
          </p>
        </div>

        {/* Our Principles */}
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#1B4F3A" }}>Our Principles</h2>
          <div className="space-y-4">
            {[
              {
                title: "Accuracy above everything",
                detail: "Every claim on this site is backed by peer-reviewed research, clinical guidelines, or clearly labelled as anecdotal or emerging evidence. We do not overstate, speculate, or give false hope.",
              },
              {
                title: "Honesty about what we don't know",
                detail: "Crohn's disease research is evolving rapidly. Where evidence is limited, conflicting, or uncertain — we say so clearly. We would rather say 'we don't know yet' than present incomplete evidence as fact.",
              },
              {
                title: "No fear — ever",
                detail: "Stress is a known Crohn's flare trigger. Every piece of content on this site is written to inform and empower — never to frighten. Difficult information is presented with context, care, and a path forward.",
              },
              {
                title: "Individual variation is real",
                detail: "Crohn's disease affects every person differently. We never present a single approach as the answer for everyone. What works for one person may not work for another — and in some cases may cause harm.",
              },
              {
                title: "Complementary — never replacing medical care",
                detail: "Crohn's Compass is an information resource. It complements — and never replaces — the care of a gastroenterologist. We actively encourage strong relationships between patients and their medical teams.",
              },
              {
                title: "Australian standards",
                detail: "This app operates under Australian health information standards. We are mindful of TGA regulations and present information in a way that is compliant, responsible, and appropriate for an Australian audience — while also being useful globally.",
              },
            ].map(({ title, detail }) => (
              <div key={title} className="rounded-xl px-5 py-4" style={{ backgroundColor: "#F0F7F4" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "#1B4F3A" }}>✓ {title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#3D6B5A" }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Labelling */}
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#1B4F3A" }}>How We Label Evidence</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>
            Every treatment, diet, and research summary on this site is labelled with its
            strength of evidence so you always know what the science says:
          </p>
          <div className="space-y-3">
            {[
              { label: "Strong clinical", bg: "#D4EDE4", text: "#1B4F3A", detail: "Supported by multiple randomised controlled trials or meta-analyses. The highest standard of clinical evidence." },
              { label: "Promising", bg: "#D6EAF8", text: "#1A5276", detail: "Supported by positive early studies but more research is needed before firm conclusions can be drawn." },
              { label: "Traditional use", bg: "#FEF9E7", text: "#7D6608", detail: "Used historically in traditional medicine systems. Limited modern clinical evidence but contextualised alongside what science currently shows." },
              { label: "Anecdotal", bg: "#F5EEF8", text: "#6C3483", detail: "Reported by patients and communities but not yet studied in formal clinical trials." },
              { label: "Newly emerging", bg: "#FDEDEC", text: "#922B21", detail: "Very recent research — promising but not yet widely accepted or replicated. Presented with appropriate caution." },
            ].map(({ label, bg, text, detail }) => (
              <div key={label} className="flex items-start gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: bg, color: text }}
                >
                  {label}
                </span>
                <p className="text-xs leading-relaxed" style={{ color: "#3D6B5A" }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>        {/* Medical Disclaimer */}
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#1B4F3A" }}>Medical Disclaimer</h2>
          <div className="rounded-xl px-5 py-4 mb-4" style={{ backgroundColor: "#FEF9E7" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "#7D6608" }}>
              ⚠️ Important — please read
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#7D6608" }}>
              Crohn&apos;s Compass is an information resource only. It does not provide
              medical advice, diagnosis, or treatment recommendations. Nothing on this
              site should be used as a substitute for professional medical care.
            </p>
          </div>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#3D6B5A" }}>
            <p>
              All information on this site is provided for general educational and
              informational purposes only. While we make every effort to ensure accuracy,
              medical knowledge evolves rapidly and information may become outdated.
            </p>
            <p>
              Drug approvals, treatment availability, and clinical guidelines vary between
              countries and change over time. Information about medications on this site
              reflects international research and may not reflect current Australian TGA
              approval status. Always verify treatment availability and suitability with
              your gastroenterologist.
            </p>
            <p>
              Individual responses to treatments, diets, and complementary therapies vary
              significantly. What is appropriate for one person may not be appropriate —
              and may be harmful — for another. Always consult your gastroenterologist,
              GP, or an Accredited Practising Dietitian before making changes to your
              treatment or diet.
            </p>
            <p>
              If you are experiencing a medical emergency, severe symptoms, or a sudden
              change in your condition — seek emergency medical care immediately.
              Do not rely on this website in an emergency situation.
            </p>
          </div>
        </div>

        {/* AI Assistant Disclaimer */}
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#1B4F3A" }}>About the AI Assistant</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D6B5A" }}>
            The Crohn&apos;s Compass AI Assistant is powered by Claude — an AI developed
            by Anthropic. It has been configured specifically for Crohn&apos;s disease
            information with careful instructions to be accurate, honest, and evidence-based.
          </p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D6B5A" }}>
            The assistant is designed to provide general information only — not personalised
            medical advice. It will always encourage you to speak with your gastroenterologist
            and will never suggest stopping or changing medications.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#3D6B5A" }}>
            AI can make mistakes. While we have taken significant care in configuring the
            assistant, always verify important information with your medical team.
          </p>
        </div>

        {/* Privacy */}
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#1B4F3A" }}>Privacy</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D6B5A" }}>
            Crohn&apos;s Compass does not collect, store, or share any personal health
            information. Conversations with the AI Assistant are not stored or used
            for any purpose beyond the immediate session.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#3D6B5A" }}>
            We do not display advertising and we do not sell data. This site exists
            solely to help people living with Crohn&apos;s disease access better information.
          </p>
        </div>

        {/* Contact & Feedback */}
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#1B4F3A" }}>Contact & Feedback</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D6B5A" }}>
            Crohn&apos;s Compass welcomes feedback from patients, carers, gastroenterologists,
            dietitians, and other healthcare professionals. If you believe any information
            on this site is inaccurate, outdated, or could be improved — please get in touch.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D6B5A" }}>
            We are particularly interested in feedback from gastroenterologists and IBD
            specialists who can help ensure the accuracy and clinical appropriateness
            of our content.
          </p>
          <div className="rounded-xl px-5 py-4" style={{ backgroundColor: "#D4EDE4" }}>
            <p className="text-sm font-semibold mb-1" style={{ color: "#1B4F3A" }}>
              Useful Australian resources
            </p>
            <ul className="text-sm space-y-1" style={{ color: "#1B4F3A" }}>
              <li>• <span className="font-medium">Crohn&apos;s & Colitis Australia</span> — crohnsandcolitis.com.au</li>
              <li>• <span className="font-medium">Therapeutic Goods Administration</span> — tga.gov.au</li>
              <li>• <span className="font-medium">Healthdirect Australia</span> — healthdirect.gov.au</li>
              <li>• <span className="font-medium">Australian Government Medicare</span> — servicesaustralia.gov.au</li>
            </ul>
          </div>
        </div>

        {/* Version */}
        <div className="text-center pb-4">
          <p className="text-xs" style={{ color: "#6B9E8A" }}>
            Crohn&apos;s Compass — Version 1.0 — August 2026
          </p>
          <p className="text-xs mt-1" style={{ color: "#6B9E8A" }}>
            Currently in review by gastroenterologists and the Crohn&apos;s & Colitis Association of Australia
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t py-8 text-center" style={{ borderColor: "#C5E3D8", backgroundColor: "#E8F5EF" }}>
        <p className="text-sm" style={{ color: "#3D6B5A" }}>
          Crohn&apos;s Compass — Evidence-based information with hope at its heart
        </p>
        <p className="text-xs mt-2" style={{ color: "#6B9E8A" }}>
          This site is an information resource only — not a substitute for medical care.
        </p>
      </footer>

    </div>
  );
}