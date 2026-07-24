import Link from "next/link";
import ContactForm from "./ContactForm";

const socialLinks = [
  ["LinkedIn", "https://linkedin.com/in/ntsoereng"],
  ["GitHub", "https://github.com/ntsoereng"],
  ["Instagram", "https://instagram.com/ntsoereng"],
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-ink text-white dark:bg-[#05070a]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="eyebrow text-sky-300">Start a conversation</p>
            <h2 className="mt-6 max-w-xl text-balance text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
              Let&apos;s build something worth remembering.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              Tell me what you&apos;re working on, where you&apos;re stuck, or
              what you want your website to achieve. I&apos;ll reply with a
              useful next step.
            </p>
            <a
              href="mailto:contact@cletusntsoereng.com"
              className="mt-8 inline-block text-lg font-bold text-white underline decoration-sky-400 decoration-2 underline-offset-8 hover:text-sky-300"
            >
              contact@cletusntsoereng.com
            </a>
          </div>
          <ContactForm />
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="text-lg font-black text-white">
              Cletus Ntsoereng
            </Link>
            <p className="mt-2 text-sm text-slate-500">
              Web developer in Maseru, working worldwide.
            </p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-5">
              {socialLinks.map(([label, url]) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-slate-300 hover:text-sky-300"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-600 sm:text-right">
              © {new Date().getFullYear()} Cletus Ntsoereng
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
