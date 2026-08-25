"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "soft-dark" | "true-dark" | "dark-green";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cc-theme") as Theme;
    if (saved) setThemeState(saved);
    setMounted(true);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("cc-theme", t);
  };

  // Don't render children until theme is loaded from localStorage
  // This prevents the server/client mismatch warning
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="theme-root">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}