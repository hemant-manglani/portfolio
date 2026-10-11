import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-line">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="text-[0.95rem] font-medium text-ink">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {site.role}, {site.location}. You own the code, the accounts and the domains, always.
            </p>
          </div>

          <FooterCol title="Site" className="md:col-span-2">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Elsewhere" className="md:col-span-2">
            <FooterLink href={site.linkedin} external>
              LinkedIn
            </FooterLink>
            <FooterLink href={site.github} external>
              GitHub
            </FooterLink>
            <FooterLink href={site.whatsapp} external>
              WhatsApp
            </FooterLink>
            <FooterLink href={site.resumeHref} external>
              Résumé
            </FooterLink>
          </FooterCol>

          <FooterCol title="Direct" className="md:col-span-2">
            <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
            <FooterLink href={site.phoneHref}>{site.phoneDisplay}</FooterLink>
          </FooterCol>
        </div>

        <p className="mt-14 text-sm text-faint">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <p className="label mb-3">{title}</p>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className = "text-sm text-muted transition-colors hover:text-ink";
  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}
