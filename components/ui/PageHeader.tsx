import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="container-x pt-36 pb-14 md:pt-44 md:pb-20">
      <p className="label">{eyebrow}</p>
      <h1 className="display mt-4 max-w-3xl text-[clamp(2.4rem,5.5vw,4.2rem)] text-ink">{title}</h1>
      {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>}
      {children && <div className="mt-8">{children}</div>}
    </header>
  );
}
