"use client";
import Nav from "../components/Nav";
// app/ask-the-assistant/page.tsx
// IBD Compass — AI Chat Assistant

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
        "Hello, and welcome to IBD Compass. I'm here to help you find accurate, evidence-based information about IBD — explained in plain language, with honesty and care.\n\nWhat would you like to know today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lastAssistantRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = chatContainerRef.current;
    const lastAssistant = lastAssistantRef.current;
    if (!container) return;

    if (messages.length > 0 && messages[messages.length - 1].role === "assistant" && lastAssistant) {
      container.scrollTop = lastAssistant.offsetTop - container.offsetTop;
    } else {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  const toggleListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-AU";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((r: any) => r[0].transcript)
        .join("");
      setInput(transcript);
    };

    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  };

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
  };

  
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    setSpeechSupported(
      typeof window !== "undefined" &&
      !!(window as any).SpeechRecognition || !!(window as any).webkitSpeechRecognition
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg-page)" }}>

      <Nav active="/ask-the-assistant" />

      <div className="max-w-4xl mx-auto w-full px-6 pt-10 pb-6">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Ask the Assistant</h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Ask the Assistant anything — diet and food choices, medications and side effects, surgery and stoma care, mindfulness, complementary therapies, or the latest research. All answers are evidence-based and written in plain language. Available day and night.
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
          ref={chatContainerRef}
          className="flex-1 rounded-2xl p-6 overflow-y-auto flex flex-col gap-4"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", minHeight: "400px", maxHeight: "520px" }}
        >
          {messages.map((msg, i) => (
            <div key={i} ref={msg.role === "assistant" && i === messages.length - 1 ? lastAssistantRef : null} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
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

        <div className="mt-4 flex gap-3 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={listening ? "Listening..." : "Ask a question about IBD..."}
            rows={2}
            className="flex-1 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none"
            style={{
              backgroundColor: "var(--bg-card)",
              border: `1px solid ${listening ? "#2E8B6A" : "var(--border-color)"}`,
              color: "var(--text-primary)",
            }}
          />

          {speechSupported && (
            <button
              onClick={toggleListening}
              title={listening ? "Stop listening" : "Speak your question"}
              className="px-4 py-3 rounded-xl text-sm font-medium transition-all"
              style={{
                backgroundColor: listening ? "#922B21" : "var(--bg-card)",
                color: listening ? "#ffffff" : "var(--text-secondary)",
                border: `1px solid ${listening ? "#922B21" : "var(--border-color)"}`,
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 10a7 7 0 0014 0" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="9" y1="22" x2="15" y2="22" />
              </svg>
            </button>
          )}

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
          {speechSupported && " · Tap 🎤 to speak"}
        </p>
      </div>

      <footer className="border-t py-6 text-center mt-4" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--footer-bg)" }}>
        <p className="text-sm flex items-center justify-center gap-2 flex-wrap" style={{ color: "var(--text-secondary)" }}>
          <span>IBD Compass — Evidence-based information with hope at its heart</span>
        </p>
      </footer>

    </div>
  );
}