import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IBD Compass — Evidence-based information with hope at its heart",
    template: "%s | IBD Compass",
  },
  description:
    "IBD Compass provides accurate, evidence-based information about IBD (Crohn's disease and ulcerative colitis) — treatments, diet, research, mindfulness and more. Written with care for patients, families and carers in Australia and beyond.",
  keywords: [
    "IBD",
    "Crohn's disease",
    "ulcerative colitis",
    "inflammatory bowel disease",
    "IBD treatments",
    "IBD diet",
    "Australia",
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "IBD Compass",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
