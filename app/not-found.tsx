import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <span className="label">Error 404</span>
      <h1 className="display mt-6 text-[clamp(3rem,10vw,7rem)] text-ink">Lost the thread.</h1>
      <p className="mt-5 max-w-md text-muted">
        This page doesn&rsquo;t exist, but the work does. Let&rsquo;s get you back on track.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Button href="/" arrow>
          Back home
        </Button>
        <Button href="/work" variant="outline">
          See the work
        </Button>
      </div>
    </div>
  );
}
