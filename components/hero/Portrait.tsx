import Image from "next/image";
import { site } from "@/content/site";

/**
 * Portrait with a small caption card tucked into the bottom corner.
 * Greyscale at rest, full colour on hover; still under reduced motion.
 */
export function Portrait() {
  return (
    <figure className="group relative w-full">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
        <Image
          src="/hemant_profile.png"
          alt={site.name}
          fill
          priority
          sizes="(max-width: 768px) 80vw, 352px"
          className="object-cover object-top grayscale transition-[filter] duration-700 group-hover:grayscale-0 motion-reduce:grayscale-0"
        />
      </div>
      <figcaption className="absolute bottom-3 left-3 rounded-lg bg-bg/95 px-3 py-2 text-sm leading-snug shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur">
        <span className="block font-medium text-ink">{site.name}</span>
        <span className="block text-faint">{site.location}, UTC+5:30</span>
      </figcaption>
    </figure>
  );
}
