import { getProjects } from "@/sanity/utils/sanity.query";
import Link from "next/link";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="section-shell pt-36 sm:pt-44">
      <header className="max-w-4xl">
        <p className="eyebrow">Selected projects</p>
        <h1 className="mt-6 text-balance text-5xl font-black leading-none tracking-[-0.05em] sm:text-6xl">
          Digital work built to make a difference.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl">
          A selection of websites and digital products where strategy, design,
          and code came together to solve a real problem.
        </p>
      </header>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="project-card group"
          >
            <div className={`project-visual aspect-[16/10] project-visual-${(index % 3) + 1}`}>
              <span className="font-mono text-6xl font-black text-white/90 sm:text-7xl">
                {project.name.slice(0, 2).toUpperCase()}
              </span>
              <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                Web development
              </span>
            </div>
            <div className="p-7 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">{project.name}</h2>
                  <p className="mt-3 leading-7">{project.tagline}</p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-slate-200 transition group-hover:-translate-y-1 group-hover:bg-ink group-hover:text-white dark:border-white/10 dark:group-hover:bg-white dark:group-hover:text-ink">
                  ↗
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <aside className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand-soft p-8 dark:bg-brand/10 sm:flex-row sm:items-center sm:p-10">
        <div>
          <h2 className="text-2xl font-black">Have a project in mind?</h2>
          <p className="mt-2">Let&apos;s turn it into something clear, useful, and memorable.</p>
        </div>
        <a
          href="mailto:contact@cletusntsoereng.com?subject=Project%20enquiry"
          className="button-primary shrink-0"
        >
          Start a conversation
        </a>
      </aside>
    </main>
  );
}
