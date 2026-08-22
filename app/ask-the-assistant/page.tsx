"use client";

// app/ask-the-assistant/page.tsx
// Crohn's Compass — AI Chat Assistant

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AskTheAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello, and welcome to Crohn's Compass. I'm here to help you find accurate, evidence-based information about Crohn's disease — explained in plain language, with honesty and care.\n\nWhat would you like to know today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await response.json();
      if (data.error) {
        setMessages((prev) => [...prev, { role: "assistant", content: "I'm sorry, something went wrong. Please try again." }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm sorry, something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F0F7F4" }}>

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
            <Link href="/research" className="text-sm hover:text-white transition-colors" style={{ color: "#A8D8C4" }}>Research</Link>
            <Link href="/mindfulness" className="text-sm hover:text-white transition-colors" style={{ color: "#A8D8C4" }}>Mindfulness</Link>
            <Link href="/ask-the-assistant" className="text-sm transition-colors" style={{ color: "#ffffff", fontWeight: "600" }}>Ask the Assistant</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto w-full px-6 pt-10 pb-6">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#1B4F3A" }}>Ask the Assistant</h1>
        <p className="text-sm leading-relaxed" style={{ color: "#3D6B5A" }}>
          Ask anything about Crohn&apos;s disease — medications, diet, research, or how to prepare for your next appointment.
          All answers are evidence-based and written in plain language.
        </p>
        <div className="mt-4 rounded-xl px-6 py-3" style={{ backgroundColor: "#D4EDE4" }}>
          <p className="text-xs" style={{ color: "#1B4F3A" }}>
            🌿 This assistant provides information only — not medical advice.
            Always consult your gastroenterologist before making changes to your treatment.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 flex-1 flex flex-col pb-6">
        <div
          className="flex-1 rounded-2xl p-6 overflow-y-auto flex flex-col gap-4"
          style={{ backgroundColor: "#ffffff", border: "1px solid #C5E3D8", minHeight: "400px", maxHeight: "520px" }}
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="rounded-2xl px-5 py-3 text-sm leading-relaxed"
                style={{
                  maxWidth: "80%",
                  backgroundColor: msg.role === "user" ? "#2E8B6A" : "#F0F7F4",
                  color: msg.role === "user" ? "#ffffff" : "#1B4F3A",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl px-5 py-3 text-sm" style={{ backgroundColor: "#F0F7F4", color: "#3D6B5A" }}>
                Thinking...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="mt-4 flex gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about Crohn's disease..."
            rows={2}
            className="flex-1 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none"
            style={{ backgroundColor: "#ffffff", border: "1px solid #C5E3D8", color: "#1B4F3A" }}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="px-6 py-3 rounded-xl text-white text-sm font-medium transition-opacity disabled:opacity-50"
            style={{ backgroundColor: "#2E8B6A" }}
          >
            Send
          </button>
        </div>
        <p className="text-xs mt-2 text-center" style={{ color: "#6B9E8A" }}>
          Press Enter to send · Shift + Enter for a new line
        </p>
      </div>

      <footer className="border-t py-6 text-center mt-4" style={{ borderColor: "#C5E3D8", backgroundColor: "#E8F5EF" }}>
        <p className="text-sm" style={{ color: "#3D6B5A" }}>
          Crohn&apos;s Compass — Evidence-based information with hope at its heart
        </p>
      </footer>

    </div>
  );
}