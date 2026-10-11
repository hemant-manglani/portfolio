import { proof } from "@/content/site";

/** Four facts and the toolset, in one quiet band under the hero. */
export function ProofStrip() {
  return (
    <section className="container-x border-t border-line py-12 md:py-14" aria-label="At a glance">
      <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {proof.map((p) => (
          <div key={p.label} className="flex flex-col">
            <dd className="order-1 text-[1.75rem] font-medium leading-none tracking-[-0.02em] text-ink">
              {p.stat}
            </dd>
            <dt className="order-2 mt-2.5 max-w-[16rem] text-sm leading-snug text-muted">{p.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
