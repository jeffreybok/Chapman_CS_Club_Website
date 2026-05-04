"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(initial);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-maroon text-white border border-maroon hover:bg-maroon-light hover:-translate-y-0.5 transition-all shadow-lg"
    >
      {mounted ? (
        theme === "dark" ? (
          // Sun icon (we are in dark, click to go light)
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm10-8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm13.66-7.66a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 1 1-1.41-1.42l1.41-1.41a1 1 0 0 1 1.42 0zM7.17 16.83a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 1 1-1.41-1.42l1.41-1.41a1 1 0 0 1 1.42 0zm11.49 1.41a1 1 0 0 1-1.42 0l-1.41-1.41a1 1 0 1 1 1.41-1.42l1.42 1.42a1 1 0 0 1 0 1.41zM7.17 7.17a1 1 0 0 1-1.42 0L4.34 5.76a1 1 0 1 1 1.41-1.42l1.42 1.41a1 1 0 0 1 0 1.42z" />
          </svg>
        ) : (
          // Moon icon (we are in light, click to go dark)
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )
      ) : null}
    </button>
  );
}
