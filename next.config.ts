import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` on `next build`.
  // The whole site is static/SSG (no SSR, no API routes) — the contact form
  // posts straight to an external backend — so it can be hosted on any static
  // host, including Hostinger shared hosting.
  output: "export",

  // Emit `/contact/index.html` instead of `/contact.html` so clean URLs
  // (e.g. https://hemant-manglani.com/contact/) resolve natively on
  // Apache/LiteSpeed without any rewrite rules.
  trailingSlash: true,

  // Default image optimization needs a running server; disable it so
  // <Image> renders plain <img> tags that work on a static host.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
