import { getSingleProject } from "@/sanity/utils/sanity.query";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{
    project: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project: slug } = await params;
  const project = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || "fallback project image",
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const { project: slug } = await params;
  const project = await getSingleProject(slug);

  return (
    <main className="section-shell pt-36 sm:pt-44">
      <article className="mx-auto max-w-5xl">
        <Link href="/projects" className="text-link text-sm">
          <span aria-hidden="true">←</span> All projects
        </Link>

        <header className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">Case study</p>
            <h1 className="mt-5 text-balance text-5xl font-black leading-none tracking-[-0.05em] sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8">{project.tagline}</p>
          </div>
          {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="button-primary"
          >
            Visit live website <span aria-hidden="true">↗</span>
          </a>
          )}
        </header>

        <Image
          src={project.coverImage?.image || "/project/project-cover.png"}
          width={1400}
          height={875}
          alt={project.coverImage?.alt || project.name}
          priority
          className="mt-14 aspect-[16/10] w-full rounded-3xl border border-slate-200 object-cover dark:border-white/10"
        />

        <div className="prose-copy mx-auto mt-16 flex max-w-3xl flex-col gap-y-6 text-lg leading-8">
          <PortableText value={project.description} />
        </div>

        <aside className="mx-auto mt-20 flex max-w-3xl flex-col items-start justify-between gap-6 border-t border-slate-200 pt-10 dark:border-white/10 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-black">Like what you see?</h2>
            <p className="mt-1 text-sm">Let&apos;s talk about what I can build for you.</p>
          </div>
          <a
            href="mailto:contact@cletusntsoereng.com?subject=Project%20enquiry"
            className="button-secondary"
          >
            Start a project
          </a>
        </aside>
      </article>
    </main>
  );
}
