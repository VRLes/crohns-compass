// app/about/page.tsx
// IBD Compass — About & Disclaimer Page

import Link from "next/link";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-page)" }}>
      <Nav active="/about" />

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-6">
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          About IBD Compass
        </h1>
        <p
          className="text-sm leading-relaxed max-w-3xl"
          style={{ color: "var(--text-secondary)" }}
        >
          IBD Compass was created by someone living with Crohn&apos;s disease —
          for everyone living with it.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-6">
        {/* My Story */}
        <div
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            My Story
          </h2>

          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;ve been living with Crohn&apos;s disease for 62 years.
          </p>

          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            For the first 34 of those years, I had no diagnosis. As a child I
            was told by the medical system that I was a &quot;little
            worrier&quot; — that there was nothing wrong with me. So I suffered
            in silence. My education suffered. I was slow to develop physically
            and mentally. I was bullied at school. And all the while, I believed
            it was in my mind.
          </p>

          <p
            className="text-sm leading-relaxed mb-4 italic font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            Be kind to yourself.
          </p>

          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            That&apos;s what nobody told me then. The shame, the self-doubt, the
            guilt — they became as much a part of life as the pain itself. For
            someone living undiagnosed, the invisible nature of illness can be
            its cruelest feature. You begin to question your own reality.
          </p>

          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            It wasn&apos;t until my bowel perforated and turned gangrenous at
            age 34 — requiring emergency surgery, several days in ICU, and both
            an ileostomy and colostomy bag — that anyone finally had an answer.
            The reversal surgery that followed brought its own challenges.
            Thirty-four years of undiagnosed pain, anxiety, guilt, lost jobs,
            and lost time. A lot of trauma.
          </p>

          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            I now live with two large abdominal hernias — too risky to repair —
            along with the inevitable side effects of decades of surgery and
            medication. Life goes on.
          </p>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            What I want doctors, carers, and loved ones to know is this: behind
            every clinical chart is a whole human life. The ripple effects of a
            missed or delayed diagnosis reach far beyond the body — into
            identity, relationships, work, and sense of self. This isn&apos;t
            said to assign blame. Medicine is hard, and most doctors are doing
            their best. It&apos;s said simply as a reminder of what&apos;s at
            stake — and why being truly heard can be as healing as any
            treatment.
          </p>

          <h3
            className="text-sm font-semibold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Christine
          </h3>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Through all of it, my wonderful partner Christine has been there for
            me. She has kept me going, saved me from self-destruction, and been
            my rock in ways I will never be able to fully repay. I am deeply
            blessed.
          </p>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Self-destruction is something many people living with chronic
            illness and disability understand all too well — and it is not
            spoken about nearly enough. There is no shame in it. It is a human
            response to years of invisible suffering. If you recognise yourself
            in these words, please know you are not alone.
          </p>

          <h3
            className="text-sm font-semibold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            How I cope
          </h3>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Several years ago I met a psychologist who shared my curiosity about
            Virtual Reality. I bought a headset and spent four years researching
            and testing it on myself. It turned out to be the most
            transformative thing I&apos;ve ever done.
          </p>

          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            VR taught me how to meditate. It helped me understand the gut-brain
            connection — how stress, anxiety, trauma, worry, and guilt
            physically affect the body. Slowly, I began to understand myself in
            ways I never had before. I rediscovered who I am.
          </p>

          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Addressing the whole person — mind, body, and spirit — is the only
            way forward I know. Like all of us, it&apos;s an ongoing journey
            with ups and downs. But it&apos;s much easier to navigate now.
            Honesty — with yourself and with the people around you — takes
            courage. The reward is priceless.
          </p>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            This app is what I wish had existed when I was first diagnosed.
          </p>

          <p
            className="text-sm leading-relaxed italic font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            Show up for yourself.
          </p>
        </div>
        {/* Our Principles */}
        <div
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Our Principles
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Accuracy above everything",
                detail:
                  "Every claim on this site is backed by peer-reviewed research, clinical guidelines, or clearly labelled as anecdotal or emerging evidence. We do not overstate, speculate, or give false hope.",
              },
              {
                title: "Honesty about what we don't know",
                detail:
                  "IBD research is evolving rapidly. Where evidence is limited, conflicting, or uncertain — we say so clearly. We would rather say 'we don't know yet' than present incomplete evidence as fact.",
              },
              {
                title: "No fear — ever",
                detail:
                  "Stress is a known IBD flare trigger. Every piece of content on this site is written to inform and empower — never to frighten. Difficult information is presented with context, care, and a path forward.",
              },
              {
                title: "Individual variation is real",
                detail:
                  "IBD affects every person differently. We never present a single approach as the answer for everyone. What works for one person may not work for another — and in some cases may cause harm.",
              },
              {
                title: "Complementary — never replacing medical care",
                detail:
                  "IBD Compass is an information resource. It complements — and never replaces — the care of a gastroenterologist. We actively encourage strong relationships between patients and their medical teams.",
              },
              {
                title: "Australian standards",
                detail:
                  "This app operates under Australian health information standards. We are mindful of TGA regulations and present information in a way that is compliant, responsible, and appropriate for an Australian audience — while also being useful globally.",
              },
            ].map(({ title, detail }) => (
              <div
                key={title}
                className="rounded-xl px-5 py-4"
                style={{ backgroundColor: "var(--bg-page)" }}
              >
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  ✓ {title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Evidence Labelling */}
        <div
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            How We Label Evidence
          </h2>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Every treatment, diet, and research summary on this site is labelled
            with its strength of evidence so you always know what the science
            says:
          </p>
          <div className="space-y-3">
            {[
              {
                label: "Strong clinical",
                bg: "#D4EDE4",
                text: "#1B4F3A",
                detail:
                  "Supported by multiple randomised controlled trials or meta-analyses. The highest standard of clinical evidence.",
              },
              {
                label: "Promising",
                bg: "#D6EAF8",
                text: "#1A5276",
                detail:
                  "Supported by positive early studies but more research is needed before firm conclusions can be drawn.",
              },
              {
                label: "Traditional use",
                bg: "#F5E6D3",
                text: "#7A5C2E",
                detail:
                  "Used historically in traditional medicine systems. Limited modern clinical evidence but contextualised alongside what science currently shows.",
              },
              {
                label: "Anecdotal",
                bg: "#F5EEF8",
                text: "#6C3483",
                detail:
                  "Reported by patients and communities but not yet studied in formal clinical trials.",
              },
              {
                label: "Newly emerging",
                bg: "#FDEDEC",
                text: "#922B21",
                detail:
                  "Very recent research — promising but not yet widely accepted or replicated. Presented with appropriate caution.",
              },
            ].map(({ label, bg, text, detail }) => (
              <div key={label} className="flex items-start gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: bg, color: text }}
                >
                  {label}
                </span>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>{" "}
        {/* Medical Disclaimer */}
        <div
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Medical Disclaimer
          </h2>
          <div
            className="rounded-xl px-5 py-4 mb-4"
            style={{ backgroundColor: "var(--bg-accent)" }}
          >
            <p
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              ⚠️ Important — please read
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              IBD Compass is an information resource only. It does not provide
              medical advice, diagnosis, or treatment recommendations. Nothing
              on this site should be used as a substitute for professional
              medical care.
            </p>
          </div>
          <div
            className="space-y-3 text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              All information on this site is provided for general educational
              and informational purposes only. While we make every effort to
              ensure accuracy, medical knowledge evolves rapidly and information
              may become outdated.
            </p>
            <p>
              Drug approvals, treatment availability, and clinical guidelines
              vary between countries and change over time. Information about
              medications on this site reflects international research and may
              not reflect current Australian TGA approval status. Always verify
              treatment availability and suitability with your
              gastroenterologist.
            </p>
            <p>
              Individual responses to treatments, diets, and complementary
              therapies vary significantly. What is appropriate for one person
              may not be appropriate — and may be harmful — for another. Always
              consult your gastroenterologist, GP, or an Accredited Practising
              Dietitian before making changes to your treatment or diet.
            </p>
            <p>
              If you are experiencing a medical emergency, severe symptoms, or a
              sudden change in your condition — seek emergency medical care
              immediately. Do not rely on this website in an emergency
              situation.
            </p>
          </div>
        </div>
        {/* AI Assistant Disclaimer */}
        <div
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            About the AI Assistant
          </h2>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            The IBD Compass AI Assistant is powered by Claude — an AI developed
            by Anthropic. It has been configured specifically for IBD
            information with careful instructions to be accurate, honest, and
            evidence-based.
          </p>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            The assistant is designed to provide general information only — not
            personalised medical advice. It will always encourage you to speak
            with your gastroenterologist and will never suggest stopping or
            changing medications.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            AI can make mistakes. While we have taken significant care in
            configuring the assistant, always verify important information with
            your medical team.
          </p>
        </div>
        {/* Privacy */}
        <div
          id="privacy"
          className="rounded-2xl p-8 border scroll-mt-24"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Privacy
          </h2>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            We don&apos;t require an account, we don&apos;t show ads, and we
            don&apos;t sell your data.
          </p>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Your conversations with the AI Assistant are sent to
            Anthropic&apos;s Claude API to generate a response — the same way
            any AI chatbot works. We don&apos;t store your conversation history
            on our own servers beyond your current session. Please avoid
            including identifying details (like your full name) when chatting
            with the Assistant.
          </p>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            The Contact form sends your name, email and message via Web3Forms to
            our team inbox only — please don&apos;t include personal medical
            details there.
          </p>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            The optional feedback widget lets you rate an Assistant response and
            add an optional comment. We store aggregate vote counts and any
            comments you choose to add — please don&apos;t include personal
            medical details in comments either.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            We are working through a full privacy policy with legal advice. In
            the meantime, if you have questions about how your information is
            handled, contact us at ibdcompass@proton.me.
          </p>
        </div>
        {/* Contact & Feedback */}
        <div
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Contact & Feedback
          </h2>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            IBD Compass welcomes feedback from patients, carers,
            gastroenterologists, dietitians, and other healthcare professionals.
            If you believe any information on this site is inaccurate, outdated,
            or could be improved — please get in touch.
          </p>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            We are particularly interested in feedback from gastroenterologists
            and IBD specialists who can help ensure the accuracy and clinical
            appropriateness of our content.
          </p>
          <div
            className="rounded-xl px-5 py-4"
            style={{ backgroundColor: "var(--bg-accent)" }}
          >
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              Useful Australian resources
            </p>
            <ul
              className="text-sm space-y-1"
              style={{ color: "var(--text-primary)" }}
            >
              <li>
                •{" "}
                <span className="font-medium">
                  Crohn&apos;s & Colitis Australia
                </span>{" "}
                — crohnsandcolitis.com.au
              </li>
              <li>
                •{" "}
                <span className="font-medium">
                  Therapeutic Goods Administration
                </span>{" "}
                — tga.gov.au
              </li>
              <li>
                • <span className="font-medium">Healthdirect Australia</span> —
                healthdirect.gov.au
              </li>
              <li>
                •{" "}
                <span className="font-medium">
                  Australian Government Medicare
                </span>{" "}
                — servicesaustralia.gov.au
              </li>
            </ul>
          </div>
        </div>
        {/* Version */}
        <div className="text-center pb-4">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            IBD Compass — Version 1.0 — August 2026
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            Not yet formally reviewed by a gastroenterologist or clinical body —
            we&apos;re actively seeking that review.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="border-t py-8 text-center"
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--footer-bg)",
        }}
      >
        <p
          className="text-sm flex items-center justify-center gap-2 flex-wrap"
          style={{ color: "var(--text-secondary)" }}
        >
          <span>
            IBD Compass — Evidence-based information with hope at its heart
          </span>
        </p>
        <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
          This site is an information resource only — not a substitute for
          medical care.
        </p>
      </footer>
    </div>
  );
}
