import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
  eyebrow?: string;
}>;

export function Section({ title, eyebrow, children }: SectionProps) {
  return (
    <section className="rounded-3xl bg-white/90 p-8 shadow-sm shadow-slate-200/60 backdrop-blur">
      <header className="mb-4">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      </header>
      <div className="space-y-4 text-slate-700">{children}</div>
    </section>
  );
}
