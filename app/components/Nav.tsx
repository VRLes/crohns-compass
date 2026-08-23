"use client";

// app/components/Nav.tsx
// Shared navigation component for all pages

import { useState } from "react";
import Link from "next/link";

export default function Nav({ active }: { active: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/treatments", label: "Treatments" },
    { href: "/diet", label: "Diet" },
    { href: "/research", label: "Research" },
    { href: "/mindfulness", label: "Mindfulness" },
    { href: "/doctor-questions", label: "Doctor Questions" },
    { href: "/ask-the-assistant", label: "Ask the Assistant" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav style={{ backgroundColor: "#1B4F3A" }} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-white"
              style={{
                color: active === link.href ? "#ffffff" : "#A8D8C4",
                fontWeight: active === link.href ? "600" : "400",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: "#6EC6A0" }} />
          <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: "#6EC6A0" }} />
          <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: "#6EC6A0" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 space-y-3" style={{ borderColor: "#2E8B6A", backgroundColor: "#1B4F3A" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm py-2 border-b transition-colors hover:text-white"
              style={{
                color: active === link.href ? "#ffffff" : "#A8D8C4",
                fontWeight: active === link.href ? "600" : "400",
                borderColor: "#2E8B6A",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}