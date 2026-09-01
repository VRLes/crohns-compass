"use client";

// app/components/FeedbackWidget.tsx
// Anonymous "Was this helpful?" widget. Records a vote as an aggregate
// count only — never linked to the specific question or answer.

import { useState } from "react";

type Vote = "yes" | "somewhat" | "no";

export default function FeedbackWidget({ source }: { source: string }) {
  const [voted, setVoted] = useState<Vote | null>(null);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function sendVote(vote: Vote, commentText?: string) {
    setSending(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vote, source, comment: commentText }),
      });
    } catch {
      // Fail silently — this is a nice-to-have, not core functionality.
    } finally {
      setSending(false);
    }
  }

  function handleVote(vote: Vote) {
    if (voted) return;
    setVoted(vote);
    if (vote === "somewhat" || vote === "no") {
      setShowComment(true);
      sendVote(vote);
    } else {
      sendVote(vote);
      setSubmitted(true);
    }
  }

  function handleCommentSubmit() {
    if (comment.trim()) {
      sendVote(voted as Vote, comment.trim());
    }
    setSubmitted(true);
    setShowComment(false);
  }

  if (submitted) {
    return (
      <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
        Thanks for letting us know.
      </p>
    );
  }

  return (
    <div className="mt-2">
      {!voted && (
        <div className="flex items-center gap-2">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Was this helpful?
          </span>
          {(["yes", "somewhat", "no"] as Vote[]).map((v) => (
            <button
              key={v}
              onClick={() => handleVote(v)}
              disabled={sending}
              className="text-xs px-3 py-1 rounded-full transition-colors"
              style={{
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-page)",
              }}
            >
              {v === "yes" ? "Yes" : v === "somewhat" ? "Somewhat" : "No"}
            </button>
          ))}
        </div>
      )}

      {showComment && (
        <div className="mt-2">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What could be improved? (optional)"
            rows={2}
            maxLength={500}
            className="w-full rounded-lg px-3 py-2 text-xs outline-none resize-none"
            style={{
              backgroundColor: "var(--bg-page)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
          />
          <p className="text-[11px] mt-1 mb-2" style={{ color: "var(--text-muted)" }}>
            Please don&apos;t include personal medical details — this isn&apos;t reviewed by a clinician.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleCommentSubmit}
              className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ backgroundColor: "#2E8B6A", color: "#ffffff" }}
            >
              Send
            </button>
            <button
              onClick={() => { setShowComment(false); setSubmitted(true); }}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ color: "var(--text-muted)" }}
            >
              Skip
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
