import { PortableText } from "@portabletext/react";
import { getProfile } from "@/sanity/utils/sanity.query";
import Image from "next/image";

export const revalidate = 3600;

export default async function About() {
  const profiles = await getProfile();
  const profile = profiles[0];

  if (!profile) {
    return null;
  }

  return (
    <main>
      <section className="section-shell pt-36 sm:pt-44">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-soft dark:bg-brand/10" />
            <Image
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover grayscale transition duration-500 hover:grayscale-0"
              src={profile.profileImage.image}
              alt={profile.profileImage.alt}
              priority
              width={700}
              height={875}
            />
          </div>

          <div>
            <p className="eyebrow">About me</p>
            <h1 className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              A developer who cares about the reason behind every pixel.
            </h1>
            <div className="prose-copy mt-8 space-y-5 text-lg leading-8">
              <PortableText value={profile.fullBio} />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}?subject=Project%20enquiry`}
                className="button-primary"
              >
                Work with me
              </a>
              <a
                href="https://github.com/ntsoereng"
                rel="noreferrer"
                target="_blank"
                className="button-secondary"
              >
                View GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-12 border-t border-slate-200 pt-16 dark:border-white/10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-5 text-3xl font-black tracking-tight">
              Tools are only useful when they solve the right problem.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-semibold dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span className="size-2 rounded-full bg-brand" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
