"use client";

import { ValidationError, useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqlykrw");

  if (state.succeeded) {
    return (
      <div role="status" className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-8">
        <p className="font-bold text-emerald-300">Message received—thank you.</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          I&apos;ll read through the details and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Project enquiry">
      <div>
        <label htmlFor="name" className="form-label">Your name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          placeholder="Jane Smith"
          required
          className="form-field"
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="jane@company.com"
          required
          className="form-field"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="form-label">Tell me about the project</label>
        <textarea
          required
          rows={5}
          placeholder="A little about your goals, timeline, and what success looks like..."
          name="message"
          id="message"
          className="form-field resize-y"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        disabled={state.submitting}
        type="submit"
        className="inline-flex min-h-13 items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? "Sending…" : "Send project enquiry →"}
      </button>
    </form>
  );
}
