import { createFileRoute, Link } from "@tanstack/react-router";
import { BRANDS, PRODUCTS } from "@/data/products";
import { PageHeader } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — Hariom Fancy Hardware, Kanpur" },
      { name: "description", content: "Prayag, Prince, Hindware, Cera, Taparia, Kitchencare and more brands available at Hariom Fancy Hardware." },
      { property: "og:title", content: "Brands at Hariom Fancy Hardware" },
      { property: "og:description", content: "Trusted hardware brands on our shelves in Kanpur." },
    ],
  }),
  component: Brands,
});

function Brands() {
  return (
    <>
      <PageHeader eyebrow={`${BRANDS.length} brands`} title="Brands">
        Brands available at our store may vary by product and availability.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-x border-b border-border bg-border px-0 sm:grid-cols-3 lg:grid-cols-4">
        {BRANDS.map((b, i) => {
          const n = PRODUCTS.filter((p) => p.brand === b).length;
          return (
            <Reveal key={b} delay={(i % 4) * 40} className="bg-background">
              <Link to="/products" search={{ brand: b }} className="group flex h-36 flex-col justify-between p-5 transition-colors hover:bg-card">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-2xl font-bold uppercase leading-none group-hover:text-primary md:text-3xl">{b}</span>
                  <span className="mt-1 block font-mono text-[10px] uppercase text-muted-foreground">{n ? `${n} listed items →` : "Ask on WhatsApp →"}</span>
                </span>
              </Link>
            </Reveal>
          );
        })}
      </section>
    </>
  );
}
