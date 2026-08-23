"use client";

// app/research/page.tsx
// Crohn's Compass — Research Page

import { useState } from "react";
import Link from "next/link";

type ResearchCategory = "All" | "New Treatments" | "Gut Science" | "Diet & Lifestyle" | "Future Therapies";

interface ResearchItem {
  title: string;
  category: Exclude<ResearchCategory, "All">;
  date: string;
  source: string;
  stage: "Approved" | "Phase 3" | "Phase 2" | "Early Research" | "Ongoing";
  region: string;
  australiaNote?: string;
  summary: string;
  whatItMeans: string;
  hopeFactor: string;
}

const researchItems: ResearchItem[] = [
  // NEW TREATMENTS
  {
    title: "Two new IL-23 inhibitors approved for Crohn's disease",
    category: "New Treatments",
    date: "January–March 2025",
    source: "US FDA / The Lancet",
    stage: "Approved",
    region: "USA (FDA approved)",
    australiaNote: "TGA approval status in Australia may differ — speak with your gastroenterologist about availability.",
    summary: "Two new medications — mirikizumab (Omvoh) and guselkumab (Tremfya) — received FDA approval in the USA for moderate to severe Crohn's disease in early 2025. Both target a protein called IL-23, which drives gut inflammation. Guselkumab is notable for being the first IL-23 inhibitor that can be self-injected at home rather than requiring a clinic infusion.",
    whatItMeans: "People with moderate to severe Crohn's who haven't responded to existing biologics now have more options. Guselkumab in particular showed superiority over ustekinumab (Stelara) in multiple endoscopic measures — meaning better gut healing, not just symptom relief. These are not cures but represent meaningful progress in the treatment toolkit.",
    hopeFactor: "More treatment options mean more chances to find what works for you individually.",
  },
  {
    title: "Guselkumab outperforms ustekinumab in head-to-head trial",
    category: "New Treatments",
    date: "July 2025",
    source: "The Lancet",
    stage: "Phase 3",
    region: "International clinical trial",
    australiaNote: "Not yet confirmed as available in Australia — discuss with your gastroenterologist.",
    summary: "A major head-to-head trial published in The Lancet directly compared guselkumab against ustekinumab (a widely used biologic). Guselkumab achieved significantly better long-term outcomes including endoscopic response — meaning actual healing of the gut lining — and clinical remission.",
    whatItMeans: "This is significant because most new drugs are only compared against placebo — not existing treatments. Showing superiority over an established drug in a real trial is a higher standard of evidence. It supports IL-23 inhibitors becoming a preferred first-line advanced therapy for Crohn's.",
    hopeFactor: "The bar for what remission looks like is rising — deeper healing is becoming the goal, not just symptom control.",
  },
  {
    title: "Tulisokibart — a new monoclonal antibody shows strong remission rates",
    category: "New Treatments",
    date: "October 2025",
    source: "The Lancet Gastroenterology & Hepatology / Cedars-Sinai",
    stage: "Phase 2",
    region: "International clinical trial",
    australiaNote: "Currently in clinical trials — not yet available as a treatment anywhere.",
    summary: "Cedars-Sinai researchers developed a new monoclonal antibody called tulisokibart that targets a protein called TL1A — a completely different mechanism to existing biologics. A Phase II trial showed significant numbers of moderate to severe Crohn's patients achieved remission, including those who had failed other treatments.",
    whatItMeans: "TL1A is a new target that hasn't been used in approved Crohn's treatments before. For people who have exhausted existing biologic options, a therapy with a completely different mechanism is genuinely significant.",
    hopeFactor: "A new pathway means new hope for people who haven't responded to existing treatments.",
  },
  {
    title: "Upadacitinib approved for children with Crohn's disease",
    category: "New Treatments",
    date: "2026",
    source: "US FDA",
    stage: "Approved",
    region: "USA (FDA approved)",
    australiaNote: "TGA approval status for paediatric use in Australia may differ — speak with your gastroenterologist.",
    summary: "The FDA approved ustekinumab for children aged 2 and older with moderately to severely active Crohn's disease in 2026 — giving younger patients access to another advanced biologic treatment option. This is significant as treatment options for children with Crohn's have historically been more limited.",
    whatItMeans: "Children and adolescents with Crohn's disease now have more approved treatment options in the USA, reducing reliance on off-label use of adult medications.",
    hopeFactor: "Younger patients deserve the same quality of care as adults — this is a step in that direction.",
  },
  // GUT SCIENCE
  {
    title: "AI cracks a 25-year mystery about gut immune cells in Crohn's",
    category: "Gut Science",
    date: "November 2025",
    source: "UC San Diego / ScienceDaily",
    stage: "Early Research",
    region: "USA",
    summary: "UC San Diego researchers used artificial intelligence combined with molecular biology to finally understand how immune cells in the gut decide between causing inflammation and promoting healing — a process that goes wrong in Crohn's disease. This decision-making process had been poorly understood for 25 years.",
    whatItMeans: "Understanding why gut immune cells get stuck in an inflammatory state rather than switching to healing mode opens the door to more targeted treatments that work with the body's own repair systems rather than simply suppressing the immune response broadly.",
    hopeFactor: "AI is accelerating discoveries that would have taken decades — this is a genuine leap forward in understanding Crohn's at its root.",
  },
  {
    title: "CARD9 gene discovery leads to new drug candidates",
    category: "Gut Science",
    date: "January 2026",
    source: "Harvard Medical School / Broad Institute / Cell journal",
    stage: "Early Research",
    region: "USA",
    summary: "Scientists at Harvard, MIT's Broad Institute and Johnson & Johnson developed small molecules that mimic a rare protective gene variant called CARD9 — which some people naturally have that makes them significantly less likely to develop IBD. The molecules reduced inflammation in both human immune cells and animal models.",
    whatItMeans: "Rather than broadly suppressing the immune system, this approach works by mimicking something the body's own genetics can already do. It offers a roadmap for more precise, potentially safer treatments developed directly from human genetic data.",
    hopeFactor: "Our own genetics are pointing the way to better treatments — this is precision medicine at its most promising.",
  },
  {
    title: "Gut lining repair breakthrough — shifting focus from inflammation to regeneration",
    category: "Gut Science",
    date: "April 2026",
    source: "University of Houston",
    stage: "Early Research",
    region: "USA",
    summary: "University of Houston researchers identified a stress signal that stays permanently switched on in Crohn's patients, preventing the gut lining from healing itself. Using low doses of existing cancer medications they found a way to bypass this signal, allowing gut cells to regenerate. The research used patient-derived 'mini-organs' grown in the lab.",
    whatItMeans: "Most current Crohn's treatments focus on dampening inflammation — attacking the problem from one direction. This research focuses on the other side: helping the gut lining actually repair itself. Both approaches together could be more powerful than either alone.",
    hopeFactor: "Teaching the gut to heal itself is a fundamentally different and exciting approach to Crohn's treatment.",
  },
  {
    title: "Live bacterial therapy based on F. prausnitzii shows promise",
    category: "Gut Science",
    date: "2025",
    source: "Nature Reviews Gastroenterology & Hepatology",
    stage: "Phase 2",
    region: "International clinical trial",
    summary: "A clinical trial of EXL01 — a live bacterial therapy based on Faecalibacterium prausnitzii, a beneficial gut bacteria that is significantly depleted in Crohn's patients — showed it can be safely administered and produces measurable immune gene changes in the gut lining.",
    whatItMeans: "F. prausnitzii is consistently found at low levels in people with Crohn's disease. Being able to safely administer it as a therapy and see immune changes in the gut is an early but genuinely promising step toward microbiome-based treatments.",
    hopeFactor: "Restoring what's missing rather than just suppressing what's overactive is a compelling direction for IBD research.",
  },
  // DIET & LIFESTYLE
  {
    title: "Low-emulsifier diet reduces inflammation markers in Crohn's",
    category: "Diet & Lifestyle",
    date: "January 2026",
    source: "2026 Crohn's & Colitis Congress — ADAPT Trial",
    stage: "Ongoing",
    region: "International",
    summary: "The ADAPT trial presented at the 2026 Crohn's & Colitis Congress found that patients following a low-emulsifier diet were significantly more likely to experience symptom improvement and reductions in faecal calprotectin — an inflammatory marker — over eight weeks compared to those on an emulsifier-rich diet.",
    whatItMeans: "Emulsifiers are added to processed foods to improve texture and shelf life — they are found in countless everyday products including bread, margarine, ice cream, and sauces. This trial adds to growing evidence that what we eat affects gut inflammation in Crohn's disease in specific, measurable ways.",
    hopeFactor: "Dietary changes are something people can act on today — and the evidence for their impact is getting stronger.",
  },
  {
    title: "Stress plus late-night eating compounds gut damage",
    category: "Diet & Lifestyle",
    date: "May 2026",
    source: "ScienceDaily",
    stage: "Ongoing",
    region: "International",
    summary: "New research analysing thousands of people found that those under high stress who also ate a large portion of their calories late at night experienced compounding negative effects on gut health — significantly worse than either factor alone. Chronic stress already disrupts the gut-brain axis, and late-night eating appears to amplify this effect.",
    whatItMeans: "For people with Crohn's, this research reinforces that stress management and meal timing both matter — not just what you eat but when you eat it, particularly under psychological stress.",
    hopeFactor: "Understanding these interactions gives people more tools to work with beyond medication alone.",
  },
  // FUTURE THERAPIES
  {
    title: "Stem cell intestinal models accelerate drug discovery",
    category: "Future Therapies",
    date: "May 2026",
    source: "ScienceDaily",
    stage: "Early Research",
    region: "International",
    summary: "Researchers developed a stem cell-based model of the human intestine that replicates how the gut behaves in IBD. After testing thousands of compounds using this model, they identified glycyrrhizin — a natural substance found in liquorice root — as a potentially promising agent for IBD. This kind of screening would previously have taken years and required animal testing.",
    whatItMeans: "Lab-grown 'mini-gut' models allow researchers to test thousands of potential treatments quickly and in human tissue rather than animals. This accelerates the path from discovery to clinical trial significantly.",
    hopeFactor: "The speed of drug discovery is accelerating — treatments that might have taken 20 years to find are now being identified in a fraction of that time.",
  },
  {
    title: "Multispecific antibodies — the next generation of biologics",
    category: "Future Therapies",
    date: "2025",
    source: "Johnson & Johnson Innovative Medicine",
    stage: "Early Research",
    region: "International",
    summary: "Researchers are developing multispecific antibodies — engineered proteins that can target more than one inflammatory protein simultaneously. Rather than blocking one pathway, these next-generation biologics could address multiple drivers of inflammation at once, potentially achieving remission in patients who don't respond to current single-target therapies.",
    whatItMeans: "Current biologics target one protein at a time. Targeting multiple inflammatory pathways simultaneously could raise the ceiling of what treatment can achieve for people who haven't responded to existing options.",
    hopeFactor: "The next generation of treatments is already being designed — and they are more sophisticated than anything currently available.",
  },
];const stageColors: Record<ResearchItem["stage"], { bg: string; text: string }> = {
  "Approved": { bg: "#D4EDE4", text: "#1B4F3A" },
  "Phase 3": { bg: "#D6EAF8", text: "#1A5276" },
  "Phase 2": { bg: "#FEF9E7", text: "#7D6608" },
  "Early Research": { bg: "#F5EEF8", text: "#6C3483" },
  "Ongoing": { bg: "#FDEDEC", text: "#922B21" },
};

const categoryColors: Record<Exclude<ResearchCategory, "All">, { bg: string; text: string }> = {
  "New Treatments": { bg: "#D4EDE4", text: "#1B4F3A" },
  "Gut Science": { bg: "#D6EAF8", text: "#1A5276" },
  "Diet & Lifestyle": { bg: "#FEF9E7", text: "#7D6608" },
  "Future Therapies": { bg: "#F5EEF8", text: "#6C3483" },
};

export default function Research() {
  const [activeCategory, setActiveCategory] = useState<ResearchCategory>("All");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (title: string) => {
    setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const filtered = activeCategory === "All"
    ? researchItems
    : researchItems.filter((r) => r.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0F7F4" }}>

      {/* Navigation */}
      <nav style={{ backgroundColor: "#1B4F3A" }} className="sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#6EC6A0" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="3" fill="#6EC6A0" />
              <line x1="14" y1="2" x2="14" y2="8" stroke="#6EC6A0" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="14" y1="20" x2="14" y2="26" stroke="#6EC6A0" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="14" x2="8" y2="14" stroke="#6EC6A0" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="20" y1="14" x2="26" y2="14" stroke="#6EC6A0" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-semibold tracking-wide" style={{ color: "#6EC6A0" }}>
              Crohn&apos;s Compass
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-white transition-colors" style={{ color: "#A8D8C4" }}>Home</Link>
            <Link href="/treatments" className="text-sm hover:text-white transition-colors" style={{ color: "#A8D8C4" }}>Treatments</Link>
            <Link href="/diet" className="text-sm hover:text-white transition-colors" style={{ color: "#A8D8C4" }}>Diet</Link>
            <Link href="/research" className="text-sm transition-colors" style={{ color: "#ffffff", fontWeight: "600" }}>Research</Link>
            <Link href="/mindfulness" className="text-sm hover:text-white transition-colors" style={{ color: "#A8D8C4" }}>Mindfulness</Link>
            <Link href="/ask-the-assistant" className="text-sm hover:text-white transition-colors" style={{ color: "#A8D8C4" }}>Ask the Assistant</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#1B4F3A" }}>Latest Research</h1>
        <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "#3D6B5A" }}>
          Crohn&apos;s disease research is moving faster than ever. Here we summarise the most significant
          recent findings in plain language — so you can stay informed without needing a medical degree.
        </p>

        {/* Global Disclaimer */}
        <div className="mt-4 rounded-xl px-6 py-4" style={{ backgroundColor: "#D4EDE4" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "#1B4F3A" }}>
            🌍 Important — research and approvals vary by country
          </p>
          <p className="text-sm" style={{ color: "#1B4F3A" }}>
            Information on this page reflects international research as of 2025–2026.
            Drug approval in one country does not mean a treatment is available in Australia or your region.
            The TGA (Therapeutic Goods Administration) regulates medicines in Australia independently of
            the US FDA or European EMA. Always speak with your gastroenterologist about what treatments
            are currently available and suitable for you.
          </p>
        </div>

        {/* Stage Legend */}
        <div className="mt-4 flex flex-wrap gap-2">
          {(Object.keys(stageColors) as ResearchItem["stage"][]).map((stage) => (
            <span
              key={stage}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: stageColors[stage].bg, color: stageColors[stage].text }}
            >
              {stage}
            </span>
          ))}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-3">
          {(["All", "New Treatments", "Gut Science", "Diet & Lifestyle", "Future Therapies"] as ResearchCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeCategory === cat ? "#1B4F3A" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "#1B4F3A",
                border: "1px solid #1B4F3A",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>      {/* Research Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((item) => {
            const isExpanded = expandedItems[item.title];
            return (
              <div
                key={item.title}
                className="rounded-2xl p-6 border shadow-sm"
                style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: stageColors[item.stage].bg,
                      color: stageColors[item.stage].text,
                    }}
                  >
                    {item.stage}
                  </span>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: categoryColors[item.category].bg,
                      color: categoryColors[item.category].text,
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold mb-2 leading-snug" style={{ color: "#1B4F3A" }}>
                  {item.title}
                </h3>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="text-xs" style={{ color: "#6B9E8A" }}>📅 {item.date}</span>
                  <span className="text-xs" style={{ color: "#6B9E8A" }}>📌 {item.source}</span>
                  <span className="text-xs" style={{ color: "#6B9E8A" }}>🌍 {item.region}</span>
                </div>

                {/* Summary */}
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D6B5A" }}>
                  {item.summary}
                </p>

                {/* Australia Note */}
                {item.australiaNote && (
                  <div className="rounded-xl px-4 py-3 mb-3" style={{ backgroundColor: "#FEF9E7" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "#7D6608" }}>🇦🇺 Australian availability</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#7D6608" }}>{item.australiaNote}</p>
                  </div>
                )}

                {/* Expand Button */}
                <button
                  onClick={() => toggleItem(item.title)}
                  className="text-xs font-medium flex items-center gap-1 mb-0"
                  style={{ color: "#2E8B6A" }}
                >
                  {isExpanded ? "▲ Hide" : "▼ Show"} what this means for you
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div
                    className="mt-3 rounded-xl px-4 py-4 text-xs leading-relaxed space-y-3"
                    style={{ backgroundColor: "#D4EDE4", color: "#1B4F3A" }}
                  >
                    <div>
                      <p className="font-semibold mb-1">What this means in plain language</p>
                      <p>{item.whatItMeans}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">💚 Reason for hope</p>
                      <p>{item.hopeFactor}</p>
                    </div>
                    <div className="rounded-lg px-3 py-2" style={{ backgroundColor: "#ffffff" }}>
                      <p className="text-xs" style={{ color: "#3D6B5A" }}>
                        ⚕️ For full prescribing information, safety data, and availability in your region,
                        speak with your gastroenterologist or visit the
                        TGA website at <span className="font-medium">tga.gov.au</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* UC Coming Soon */}
        <div className="mt-12 rounded-2xl p-8 border text-center" style={{ backgroundColor: "#ffffff", borderColor: "#C5E3D8" }}>
          <p className="text-2xl mb-2">🔬</p>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "#1B4F3A" }}>
            Ulcerative Colitis Research — Coming Soon
          </h2>
          <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "#3D6B5A" }}>
            Crohn&apos;s Compass currently focuses on Crohn&apos;s disease. A dedicated Ulcerative Colitis
            section covering the latest UC research, treatments and dietary approaches is in development.
          </p>
        </div>

        {/* Research Disclaimer */}
        <div className="mt-6 rounded-2xl p-6 border" style={{ backgroundColor: "#F0F7F4", borderColor: "#C5E3D8" }}>
          <p className="text-xs font-semibold mb-2" style={{ color: "#1B4F3A" }}>About this research summary</p>
          <p className="text-xs leading-relaxed" style={{ color: "#3D6B5A" }}>
            All research summaries on this page are based on peer-reviewed studies, published clinical trial
            data, and reports from recognised medical institutions and journals including The Lancet, Nature,
            Harvard Medical School, and the American Gastroenterological Association. Summaries are written
            in plain language for informational purposes only and do not constitute medical advice.
            Drug approvals, trial results and treatment availability change regularly — always verify
            current information with your gastroenterologist.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 text-center" style={{ borderColor: "#C5E3D8", backgroundColor: "#E8F5EF" }}>
        <p className="text-sm" style={{ color: "#3D6B5A" }}>
          Crohn&apos;s Compass — Evidence-based information with hope at its heart
        </p>
        <p className="text-xs mt-2" style={{ color: "#6B9E8A" }}>
          Research summaries are for informational purposes only — not medical advice.
          Always consult your gastroenterologist.
        </p>
      </footer>

    </div>
  );
}