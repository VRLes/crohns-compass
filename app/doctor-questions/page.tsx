"use client";
import Nav from "../components/Nav";
// app/doctor-questions/page.tsx
// IBD Compass — Doctor Questions Page

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  whyItMatters: string;
  category: string;
}

const categories = [
  "Understanding My Diagnosis",
  "My Current Treatment",
  "Monitoring & Tests",
  "Lifestyle & Diet",
  "Planning Ahead",
];

const questions: Question[] = [
  // UNDERSTANDING MY DIAGNOSIS
  {
    id: "q1",
    category: "Understanding My Diagnosis",
    question: "What type of Crohn's disease do I have and where exactly is it located?",
    whyItMatters: "Crohn's disease can affect any part of the digestive tract and the location significantly affects which treatments work best, which diets are most relevant, and what complications to watch for. Knowing your specific disease phenotype helps you make more informed decisions.",
  },
  {
    id: "q2",
    category: "Understanding My Diagnosis",
    question: "How active is my disease right now — and how do you measure that?",
    whyItMatters: "Disease activity is measured using a combination of symptoms, blood tests, stool tests (like faecal calprotectin), and imaging or endoscopy. Understanding your current activity level helps you track progress over time and understand when treatment changes are needed.",
  },
  {
    id: "q3",
    category: "Understanding My Diagnosis",
    question: "What does my most recent endoscopy or imaging show about my gut lining?",
    whyItMatters: "Symptoms don't always reflect what's happening at the gut lining level. You can feel better but still have active inflammation — and vice versa. Understanding your mucosal healing status gives a fuller picture of your disease.",
  },
  {
    id: "q4",
    category: "Understanding My Diagnosis",
    question: "Is my Crohn's behaving in a pattern — flares and remission — or is it more continuous?",
    whyItMatters: "Different disease patterns may warrant different treatment approaches. Understanding your pattern helps your doctor choose the most appropriate long-term strategy and helps you recognise early signs of a flare.",
  },
  {
    id: "q5",
    category: "Understanding My Diagnosis",
    question: "Are there any complications I should be aware of — strictures, fistulas, or abscesses?",
    whyItMatters: "Crohn's disease can cause complications beyond inflammation — including narrowing of the bowel (strictures), abnormal connections between organs (fistulas), and pockets of infection (abscesses). Knowing if these are present affects treatment decisions significantly.",
  },
  // MY CURRENT TREATMENT
  {
    id: "q6",
    category: "My Current Treatment",
    question: "How does my current medication work and what is it targeting?",
    whyItMatters: "Understanding the mechanism of your medication helps you understand why it takes time to work, why monitoring is needed, and what to watch for. It also helps you have more informed conversations about switching or adding therapies.",
  },
  {
    id: "q7",
    category: "My Current Treatment",
    question: "How will we know if my current treatment is working — and how long should I give it?",
    whyItMatters: "Different medications have different timelines. Some biologics take 3–6 months to show their full effect. Knowing what response looks like and when to expect it prevents unnecessary early changes or prolonged ineffective treatment.",
  },
  {
    id: "q8",
    category: "My Current Treatment",
    question: "What are the signs that my current treatment is failing and what would we do next?",
    whyItMatters: "Having a plan before things go wrong reduces anxiety and speeds up action when needed. Knowing what symptoms or test results would trigger a treatment review helps you monitor yourself more effectively.",
  },
  {
    id: "q9",
    category: "My Current Treatment",
    question: "Are there any newer treatments — such as the new IL-23 inhibitors — that might be more suitable for me?",
    whyItMatters: "The Crohn's treatment landscape has changed significantly in 2025–2026 with new approvals including mirikizumab and guselkumab. Your gastroenterologist can advise whether these are available in Australia and whether they might be appropriate for your situation.",
  },
  {
    id: "q10",
    category: "My Current Treatment",
    question: "What vaccinations do I need given my current medication — and which should I avoid?",
    whyItMatters: "Some IBD medications suppress the immune system, which affects which vaccines are safe and which are recommended. Live vaccines in particular may be contraindicated. This is a commonly overlooked but important aspect of care.",
  },
  {
    id: "q11",
    category: "My Current Treatment",
    question: "Are there any supplements or complementary therapies I should avoid with my current medication?",
    whyItMatters: "Some supplements — including high-dose curcumin, fish oil, and certain herbal products — can interact with IBD medications. Your gastroenterologist should know everything you are taking, including natural supplements.",
  },
  // MONITORING & TESTS
  {
    id: "q12",
    category: "Monitoring & Tests",
    question: "How often should I have blood tests, stool tests, and endoscopies?",
    whyItMatters: "Regular monitoring catches problems early — including medication side effects, nutritional deficiencies, and disease activity changes — before they become serious. Knowing your monitoring schedule helps you stay on track.",
  },
  {
    id: "q13",
    category: "Monitoring & Tests",
    question: "What is my current faecal calprotectin level and what does it mean?",
    whyItMatters: "Faecal calprotectin is a stool test that measures gut inflammation directly. It is one of the best non-invasive ways to monitor Crohn's activity and can indicate whether inflammation is present even when symptoms have settled.",
  },
  {
    id: "q14",
    category: "Monitoring & Tests",
    question: "Am I being monitored for nutritional deficiencies — particularly iron, Vitamin D, B12 and zinc?",
    whyItMatters: "Crohn's disease, particularly when it affects the small bowel, commonly causes malabsorption of key nutrients. Deficiencies can be subtle but have significant effects on energy, immunity, bone health, and mental wellbeing. Regular testing is important.",
  },
  {
    id: "q15",
    category: "Monitoring & Tests",
    question: "Should I be having regular colonoscopies to screen for bowel cancer?",
    whyItMatters: "Long-standing Crohn's colitis increases the risk of colorectal cancer. Regular surveillance colonoscopies are recommended from a certain point — your gastroenterologist can advise when this applies to you based on your disease history.",
  },
  {
    id: "q16",
    category: "Monitoring & Tests",
    question: "Should I have a DEXA bone density scan given my history of steroid use?",
    whyItMatters: "Corticosteroids used to treat Crohn's flares can reduce bone density over time. People with a history of steroid use may need bone density monitoring and calcium or Vitamin D supplementation to protect bone health long-term.",
  },
  // LIFESTYLE & DIET
  {
    id: "q17",
    category: "Lifestyle & Diet",
    question: "Are there specific dietary approaches you would recommend for my type and location of Crohn's?",
    whyItMatters: "Dietary recommendations vary depending on disease location, activity, and whether complications like strictures are present. What works well for one person may not suit another — your gastroenterologist can provide personalised guidance or refer you to an IBD dietitian.",
  },
  {
    id: "q18",
    category: "Lifestyle & Diet",
    question: "Would you recommend a referral to an IBD-experienced dietitian?",
    whyItMatters: "An Accredited Practising Dietitian experienced in IBD can provide personalised dietary guidance that goes well beyond general advice. In Australia, you may be eligible for Medicare-subsidised dietitian appointments under a Chronic Disease Management plan.",
  },
  {
    id: "q19",
    category: "Lifestyle & Diet",
    question: "What level of physical activity is appropriate for me given my current disease activity?",
    whyItMatters: "Regular gentle exercise has benefits for IBD including stress reduction, bone health, and gut motility. However the appropriate level depends on your current disease activity and overall health. Your gastroenterologist can guide what is safe.",
  },
  {
    id: "q20",
    category: "Lifestyle & Diet",
    question: "Should I be seeing a psychologist or mental health professional as part of my Crohn's care?",
    whyItMatters: "Stress is a known IBD flare trigger and living with a chronic condition affects mental health. Psychological support — including cognitive behavioural therapy and gut-directed therapies — has evidence for improving quality of life in IBD. A Mental Health Treatment Plan from your GP may provide Medicare-subsidised sessions.",
  },
  // PLANNING AHEAD
  {
    id: "q21",
    category: "Planning Ahead",
    question: "What is the likelihood that I will need surgery and what would that involve?",
    whyItMatters: "Surgery is sometimes necessary in Crohn's disease — for complications, strictures, or disease that hasn't responded to medical treatment. Understanding your risk and what surgery might involve helps you plan and reduces fear of the unknown.",
  },
  {
    id: "q22",
    category: "Planning Ahead",
    question: "How might Crohn's disease and my medications affect fertility and pregnancy?",
    whyItMatters: "Some Crohn's medications are not safe during pregnancy and others are. Disease activity itself can affect fertility. If you are considering pregnancy, planning in advance with your gastroenterologist and obstetrician is essential.",
  },
  {
    id: "q23",
    category: "Planning Ahead",
    question: "Is there anything I need to know about travelling with Crohn's disease and my medications?",
    whyItMatters: "Travelling with Crohn's requires planning — particularly around medication storage, travel insurance, access to healthcare, and managing diet in unfamiliar places. Your gastroenterologist can provide a medical summary letter for travel and advise on specific considerations.",
  },
  {
    id: "q24",
    category: "Planning Ahead",
    question: "Am I eligible for any government support, concession cards, or NDIS assistance?",
    whyItMatters: "In Australia, people with IBD may be eligible for a Health Care Card, Centrelink support, or in some cases NDIS assistance depending on the impact of their condition. Your gastroenterologist or a social worker can help navigate what support is available.",
  },
  {
    id: "q25",
    category: "Planning Ahead",
    question: "What should I do if I have a severe flare outside of business hours?",
    whyItMatters: "Knowing your action plan for a severe flare — including when to go to emergency, which hospital has an IBD team, and who to contact — reduces anxiety and ensures you get appropriate care quickly when you need it most.",
  },
];export default function DoctorQuestions() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedQuestions, setSelectedQuestions] = useState<Set<string>>(new Set());
  const [buildingList, setBuildingList] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleSelect = (id: string) => {
    setSelectedQuestions((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filteredQuestions = activeCategory === "All"
    ? questions
    : questions.filter((q) => q.category === activeCategory);

  const selectedList = questions.filter((q) => selectedQuestions.has(q.id));

  const copyToClipboard = () => {
    const text = selectedList.length > 0
      ? selectedList.map((q, i) => `${i + 1}. ${q.question}`).join("\n")
      : questions.map((q, i) => `${i + 1}. ${q.question}`).join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-page)" }}>

      {/* Navigation */}
      <Nav active="/doctor-questions" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Doctor Questions</h1>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--text-secondary)" }}>
          Walking into a gastroenterology appointment feeling prepared makes a real difference.
          These questions are designed to help people living with IBD get the most from their consultation —
          whether it is your first appointment or your fiftieth.
        </p>

        {/* Comfort note */}
        <div className="mt-4 rounded-xl px-6 py-4" style={{ backgroundColor: "var(--bg-accent)" }}>
          <p className="text-sm" style={{ color: "var(--text-primary)" }}>
            💚 You have every right to ask your doctor questions. A good gastroenterologist
            will welcome an informed, engaged patient. These questions are yours to use however
            feels comfortable — bring the list to your appointment, read them aloud, or simply
            use them to organise your thoughts beforehand.
          </p>
        </div>

        {/* Build My List Toggle */}
        <div className="mt-4 flex flex-wrap gap-3 items-center">
          <button
            onClick={() => setBuildingList(!buildingList)}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              backgroundColor: buildingList ? "var(--nav-bg)" : "var(--bg-card)",
              color: buildingList ? "#ffffff" : "var(--text-primary)",
              border: "1px solid var(--text-primary)",
            }}
          >
            {buildingList ? "✓ Building my list" : "Build my list"}
          </button>

          {buildingList && (
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Tap questions to select them — then copy your personalised list
            </p>
          )}

          <button
            onClick={copyToClipboard}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all ml-auto"
            style={{
              backgroundColor: copied ? "#2E8B6A" : "var(--bg-card)",
              color: copied ? "#ffffff" : "var(--text-primary)",
              border: "1px solid var(--border-color)",
            }}
          >
            {copied ? "✓ Copied!" : buildingList && selectedList.length > 0 ? `Copy my ${selectedList.length} questions` : "Copy all questions"}
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-3">
          {(["All", ...categories]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeCategory === cat ? "var(--nav-bg)" : "var(--bg-card)",
                color: activeCategory === cat ? "#ffffff" : "var(--text-primary)",
                border: "1px solid var(--text-primary)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>      {/* Questions */}
      <div className="max-w-6xl mx-auto px-6 pb-20">

        {categories.filter(cat => activeCategory === "All" || cat === activeCategory).map((category) => {
          const categoryQuestions = filteredQuestions.filter((q) => q.category === category);
          if (categoryQuestions.length === 0) return null;
          return (
            <div key={category} className="mb-10">
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                {category}
              </h2>
              <div className="space-y-3">
                {categoryQuestions.map((q) => {
                  const isExpanded = expandedQuestions.has(q.id);
                  const isSelected = selectedQuestions.has(q.id);
                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl border shadow-sm transition-all"
                      style={{
                        backgroundColor: isSelected ? "var(--bg-accent)" : "var(--bg-card)",
                        borderColor: isSelected ? "#2E8B6A" : "var(--border-color)",
                      }}
                    >
                      <div className="p-5">
                        <div className="flex items-start gap-3">

                          {/* Select checkbox */}
                          {buildingList && (
                            <button
                              onClick={() => toggleSelect(q.id)}
                              className="mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all"
                              style={{
                                borderColor: isSelected ? "#2E8B6A" : "#C5E3D8",
                                backgroundColor: isSelected ? "#2E8B6A" : "transparent",
                              }}
                            >
                              {isSelected && (
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </button>
                          )}

                          {/* Question text */}
                          <div className="flex-1">
                            <p className="text-sm font-medium leading-snug" style={{ color: "var(--text-primary)" }}>
                              {q.question}
                            </p>
                          </div>

                          {/* Expand button */}
                          <button
                            onClick={() => toggleExpand(q.id)}
                            className="text-xs font-medium flex-shrink-0 ml-2"
                            style={{ color: "#2E8B6A" }}
                          >
                            {isExpanded ? "▲" : "▼"}
                          </button>
                        </div>

                        {/* Why it matters */}
                        {isExpanded && (
                          <div
                            className="mt-3 rounded-xl px-4 py-3 text-xs leading-relaxed"
                            style={{ backgroundColor: "var(--bg-page)", color: "var(--text-secondary)" }}
                          >
                            <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                              Why this question matters
                            </p>
                            <p>{q.whyItMatters}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Selected list preview */}
        {buildingList && selectedList.length > 0 && (
          <div className="mt-8 rounded-2xl p-6 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "#2E8B6A" }}>
            <h3 className="text-base font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              Your question list ({selectedList.length} questions)
            </h3>
            <ol className="space-y-2">
              {selectedList.map((q, i) => (
                <li key={q.id} className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="font-medium" style={{ color: "var(--text-primary)" }}>{i + 1}. </span>
                  {q.question}
                </li>
              ))}
            </ol>
            <button
              onClick={copyToClipboard}
              className="mt-4 px-6 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: copied ? "#2E8B6A" : "var(--nav-bg)",
                color: "#ffffff",
              }}
            >
              {copied ? "✓ Copied to clipboard!" : "Copy my list"}
            </button>
          </div>
        )}



        {/* Empowerment note */}
        <div className="mt-6 rounded-2xl p-6 border" style={{ backgroundColor: "var(--bg-page)", borderColor: "var(--border-color)" }}>
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
            A note on advocating for yourself
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Gastroenterology appointments can feel rushed and it can be hard to remember
            everything you wanted to ask. Writing questions down beforehand, bringing a
            support person, and asking for a longer appointment if needed are all reasonable
            things to do. If you feel your concerns are not being heard, you are entitled
            to seek a second opinion. Crohn&apos;s &amp; Colitis Australia can also connect
            you with support and resources — visit their website at
            <span className="font-medium"> crohnsandcolitis.com.au</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 text-center" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--footer-bg)" }}>
        <p className="text-sm flex items-center justify-center gap-2 flex-wrap" style={{ color: "var(--text-secondary)" }}>
          <span>IBD Compass — Evidence-based information with hope at its heart</span>

        </p>
        <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
          These questions are a guide only — always follow the advice of your gastroenterologist.
        </p>
      </footer>

    </div>
  );
}