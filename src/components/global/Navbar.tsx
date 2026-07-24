"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/navlinks";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#090b10] lg:border-slate-200/70 lg:bg-white/85 lg:shadow-none lg:backdrop-blur-xl lg:dark:bg-[#090b10]/85">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label="Cletus Ntsoereng, home"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-brand text-sm font-black text-white shadow-lg shadow-brand/20 transition-transform group-hover:-rotate-3">
            CN
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold tracking-tight text-ink dark:text-white">
              Cletus Ntsoereng
            </span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Web developer
            </span>
          </span>
        </Link>

        <nav
          id="mobile-navigation"
          aria-label="Primary navigation"
          className={`fixed inset-x-0 bottom-0 top-18 z-50 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-white px-5 py-10 shadow-2xl transition-transform duration-300 dark:bg-[#090b10] lg:static lg:flex lg:h-auto lg:translate-x-0 lg:items-center lg:gap-2 lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-2 lg:flex-row lg:items-center">
            {navLinks.map((navLink) => {
              const isActive =
                navLink.slug === "/"
                  ? pathname === "/"
                  : pathname.startsWith(navLink.slug);

              return (
                <li key={navLink.slug}>
                  <Link
                    href={navLink.slug}
                    onClick={() => setIsNavOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-lg font-semibold transition-colors lg:py-2 lg:text-sm ${
                      isActive
                        ? "bg-brand-soft text-brand dark:bg-brand/15 dark:text-sky-300"
                        : "text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    {navLink.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="mailto:contact@cletusntsoereng.com?subject=Project%20enquiry"
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:bg-white dark:text-ink dark:hover:bg-sky-300 lg:ml-3 lg:mt-0 lg:w-auto"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsNavOpen((open) => !open)}
          aria-expanded={isNavOpen}
          aria-controls="mobile-navigation"
          className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-ink dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
        >
          <span className="sr-only">
            {isNavOpen ? "Close navigation" : "Open navigation"}
          </span>
          {isNavOpen ? (
            <span aria-hidden="true" className="text-2xl leading-none">
              ×
            </span>
          ) : (
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
