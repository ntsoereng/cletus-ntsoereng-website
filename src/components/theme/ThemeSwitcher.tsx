"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export const ThemeSwitcher = () => {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-slate-200 bg-white text-lg text-ink shadow-xl shadow-slate-950/10 hover:-translate-y-1 dark:border-white/10 dark:bg-[#171a22] dark:text-white"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span aria-hidden="true">{isDark ? "☀" : "◐"}</span>
    </button>
  );
};
