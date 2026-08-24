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
    default: "Crohn's Compass — Evidence-based information with hope at its heart",
    template: "%s | Crohn's Compass",
  },
  description: "Crohn's Compass provides accurate, evidence-based information about Crohn's disease —treatments, diet, research, mindfulness and more. Written with care for patients, families and carersin Australia and beyond.",
  keywords: ["Crohn's disease", "IBD", "inflammatory bowel disease", "Crohn's treatments", "Crohn's diet", "Australia"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}