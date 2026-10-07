import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { categoryWaLink } from "@/lib/whatsapp";
import { PageHeader } from "@/components/site/Sections";
import { WaButton, btn } from "@/components/site/Buttons";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — Hariom Fancy Hardware, Kanpur" },
      { name: "description", content: "Bath fittings, pipe fittings, furniture fittings, modular kitchen, kitchenware, tools, fasteners and paint supplies." },
      { property: "og:title", content: "Hardware Categories — Hariom Fancy Hardware" },
      { property: "og:description", content: "Eight departments of hardware under one roof in Kanpur." },
    ],
  }),
  component: Categories,
});

function Categories() {
  return (
    <>
      <PageHeader eyebrow="8 departments" title="Categories">Pick a department to browse, or ask us directly on WhatsApp.</PageHeader>
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pt-10 md:grid-cols-2">
        {CATEGORIES.map((c, i) => {
          const items = PRODUCTS.filter((p) => p.category === c.id);
          return (
            <Reveal key={c.id} delay={(i % 2) * 80}>
              <article className="plate grid overflow-hidden rounded-sm border border-border sm:grid-cols-[200px_minmax(0,1fr)]">
                <img src={c.image} alt={c.name} loading="lazy" width={816} height={816} className="aspect-[16/9] h-full w-full object-cover sm:aspect-auto" />
                <div className="flex min-w-0 flex-col p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{items.length} products</p>
                  <h2 className="mt-1 text-3xl font-bold uppercase leading-none">{c.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                  <p className="mt-2 line-clamp-2 font-mono text-[11px] text-muted-foreground">{items.map((p) => p.name).join(" · ")}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link to="/products" search={{ category: c.id }} className={btn("primary", "sm")}>Browse</Link>
                    <WaButton href={categoryWaLink(c.name)} size="sm">Ask</WaButton>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>
    </>
  );
}
