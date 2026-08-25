"use client";
import Nav from "../components/Nav";
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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg-page)" }}>

      <Nav active="/ask-the-assistant" />

      <div className="max-w-4xl mx-auto w-full px-6 pt-10 pb-6">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Ask the Assistant</h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Ask anything about Crohn&apos;s disease — medications, diet, research, or how to prepare for your next appointment.
          All answers are evidence-based and written in plain language.
        </p>
        <div className="mt-4 rounded-xl px-6 py-3" style={{ backgroundColor: "var(--bg-accent)" }}>
          <p className="text-xs" style={{ color: "var(--text-primary)" }}>
            🌿 This assistant provides information only — not medical advice.
            Always consult your gastroenterologist before making changes to your treatment.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 flex-1 flex flex-col pb-6">
        <div
          className="flex-1 rounded-2xl p-6 overflow-y-auto flex flex-col gap-4"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", minHeight: "400px", maxHeight: "520px" }}
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="rounded-2xl px-5 py-3 text-sm leading-relaxed"
                style={{
                  maxWidth: "80%",
                  backgroundColor: msg.role === "user" ? "#2E8B6A" : "var(--bg-page)",
                  color: msg.role === "user" ? "#ffffff" : "var(--text-primary)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl px-5 py-3 text-sm" style={{ backgroundColor: "var(--bg-page)", color: "var(--text-secondary)" }}>
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
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
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
        <p className="text-xs mt-2 text-center" style={{ color: "var(--text-muted)" }}>
          Press Enter to send · Shift + Enter for a new line
        </p>
      </div>

      <footer className="border-t py-6 text-center mt-4" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--footer-bg)" }}>
        <p className="text-sm flex items-center justify-center gap-2 flex-wrap" style={{ color: "var(--text-secondary)" }}>
          <span>IBD Compass — Evidence-based information with hope at its heart</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--bg-accent)", color: "var(--text-primary)" }}>
            UC Coming Soon
          </span>
        </p>
      </footer>

    </div>
  );
}