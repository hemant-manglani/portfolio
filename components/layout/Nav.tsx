"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { nav, primaryCta, site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  // Close the menu after a route change without a setState-in-effect.
  if (open && openedAt !== pathname) {
    setOpen(false);
    setOpenedAt(pathname);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-bg/90 backdrop-blur-md transition-[border-color] duration-300",
        scrolled ? "border-b border-line" : "border-b border-transparent",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="text-[0.95rem] font-medium text-ink" aria-label={`${site.name}, home`}>
          {site.name}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "link-underline hover:link-underline-hover text-[0.95rem] transition-colors",
                    active ? "link-underline-hover text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button href={primaryCta.href} size="md">
            {primaryCta.label}
          </Button>
        </div>

        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => {
            setOpenedAt(pathname);
            setOpen((v) => !v);
          }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={cn(
              "h-px w-6 bg-ink transition-transform duration-300",
              open && "translate-y-[3px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-ink transition-transform duration-300",
              open && "-translate-y-[3px] -rotate-45",
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg md:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-1 pt-16">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-line py-4 text-3xl font-medium tracking-tight text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8">
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
