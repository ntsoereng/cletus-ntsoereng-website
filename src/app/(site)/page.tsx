import Link from "next/link";
import { getProfile, getProjects } from "@/sanity/utils/sanity.query";

const services = [
  {
    number: "01",
    title: "Web design & direction",
    description:
      "Clear interfaces and user journeys shaped around your goals, content, and customers.",
  },
  {
    number: "02",
    title: "Frontend development",
    description:
      "Responsive, accessible websites built with modern React, Next.js, and maintainable systems.",
  },
  {
    number: "03",
    title: "CMS & integrations",
    description:
      "Flexible content editing, third-party integrations, and dependable performance after launch.",
  },
];

const process = [
  ["Discover", "We align on the audience, business goal, scope, and definition of success."],
  ["Design", "I turn the strategy into a clear visual direction and responsive experience."],
  ["Build", "The approved direction becomes an accessible, fast, production-ready website."],
  ["Launch", "I test the details, ship confidently, and make handover straightforward."],
];

export default async function Home() {
  const [profiles, projects] = await Promise.all([getProfile(), getProjects()]);
  const profile = profiles[0];
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pt-44 lg:px-12 lg:pb-32">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow mb-6">
              <span className="size-2 rounded-full bg-emerald-500" />
              Available for select projects
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] text-ink dark:text-white sm:text-6xl lg:text-7xl">
              I design and build websites that{" "}
              <span className="text-brand">earn attention</span> and move
              businesses forward.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              {profile?.shortBio ||
                "I’m Cletus, a web developer creating clear, fast, and thoughtful digital experiences for ambitious people and businesses."}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="button-primary">
                Explore my work
                <span aria-hidden="true">↗</span>
              </Link>
              <a
                href="mailto:contact@cletusntsoereng.com?subject=Project%20enquiry"
                className="button-secondary"
              >
                Tell me about your project
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <span>Based in Maseru, Lesotho</span>
              <span>Working worldwide</span>
              <span>Web strategy → launch</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="code-window rotate-2">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">
                  thoughtful-web.tsx
                </span>
              </div>
              <div className="space-y-5 p-6 font-mono text-sm leading-7 sm:p-8">
                <p><span className="text-sky-400">const</span> goodWebsite = {"{"}</p>
                <p className="pl-5 text-slate-300">strategy: <span className="text-emerald-300">&quot;clear&quot;</span>,</p>
                <p className="pl-5 text-slate-300">experience: <span className="text-emerald-300">&quot;effortless&quot;</span>,</p>
                <p className="pl-5 text-slate-300">performance: <span className="text-emerald-300">&quot;fast&quot;</span>,</p>
                <p className="pl-5 text-slate-300">details: <span className="text-amber-300">100</span>,</p>
                <p>{"}"};</p>
                <p className="pt-3 text-slate-500">
                  {"// Built for people, not metrics alone."}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10 dark:border-white/10 dark:bg-[#151821] sm:-left-10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Core focus</p>
              <p className="mt-1 font-bold text-ink dark:text-white">Useful. Usable. Memorable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/[0.025]">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What I do</p>
            <h2>One partner from idea to launch.</h2>
          </div>
          <p>
            I combine product thinking, visual care, and frontend engineering
            so your website feels coherent—not assembled.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="bg-white p-8 dark:bg-[#0d1016] sm:p-10">
              <span className="font-mono text-xs font-bold text-brand">{service.number}</span>
              <h3 className="mt-10 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Proof lives in the work.</h2>
          </div>
          <Link href="/projects" className="text-link">
            See all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="project-card group"
            >
              <div className={`project-visual project-visual-${(index % 3) + 1}`}>
                <span className="font-mono text-5xl font-black text-white/90">
                  {project.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">Case study</p>
                    <h3 className="mt-2 text-xl font-bold">{project.name}</h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 transition group-hover:-translate-y-1 group-hover:bg-ink group-hover:text-white dark:border-white/10 dark:group-hover:bg-white dark:group-hover:text-ink">
                    ↗
                  </span>
                </div>
                <p className="mt-4 line-clamp-2 text-sm leading-6">{project.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-[2rem] bg-ink p-8 text-white dark:bg-[#151821] sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow text-sky-300">How we get there</p>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                A focused process with no mystery.
              </h2>
            </div>
            <ol className="grid gap-8 sm:grid-cols-2">
              {process.map(([title, description], index) => (
                <li key={title} className="border-t border-white/15 pt-5">
                  <span className="font-mono text-xs text-sky-300">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
