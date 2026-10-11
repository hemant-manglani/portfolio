import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Render the OG image once at build time (required for `output: "export"`).
export const dynamic = "force-static";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 80,
          color: "#000000",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, fontWeight: 500 }}>{site.name}</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            {site.headline}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#555555" }}>
            {`${site.role}. Django, FastAPI, AI and LLM systems, Next.js.`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
