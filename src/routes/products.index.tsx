import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo } from "react";
import { BRANDS, CATEGORIES, PRODUCTS, getProduct } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHeader, BulkAndPhoto } from "@/components/site/Sections";
import { WaButton } from "@/components/site/Buttons";
import { bulkWaLink } from "@/lib/whatsapp";
import { useRecent } from "@/lib/recent";
import { cn } from "@/lib/utils";

type S = { q?: string | undefined; category?: string | undefined; brand?: string | undefined };

export const Route = createFileRoute("/products/")({
  validateSearch: (s: Record<string, unknown>): S => ({
    q: typeof s["q"] === "string" && s["q"] ? s["q"] : undefined,
    category: typeof s["category"] === "string" && s["category"] ? s["category"] : undefined,
    brand: typeof s["brand"] === "string" && s["brand"] ? s["brand"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Product Catalog — Hariom Fancy Hardware, Kanpur" },
      { name: "description", content: "Search bath fittings, pipes, furniture & kitchen hardware, kitchenware, tools and fasteners. Ask price and availability on WhatsApp." },
      { property: "og:title", content: "Product Catalog — Hariom Fancy Hardware" },
      { property: "og:description", content: "Browse 100+ hardware products and enquire on WhatsApp." },
    ],
  }),
  component: Catalog,
});

const chip = "shrink-0 rounded-sm border px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-wide transition-colors";

function Catalog() {
  const { q, category, brand } = Route.useSearch();
  const navigate = useNavigate({ from: "/products/" });
  const set = (patch: Partial<S>) => navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true, resetScroll: false });
  const recent = useRecent().map(getProduct).filter(Boolean);

  const results = useMemo(() => {
    const term = (q ?? "").toLowerCase().trim();
    return PRODUCTS.filter((p) =>
      (!category || p.category === category) &&
      (!brand || p.brand === brand) &&
      (!term || [p.name, p.brand, p.description, ...p.specifications.map((s) => s.value)].join(" ").toLowerCase().includes(term)),
    );
  }, [q, category, brand]);

  return (
    <>
      <PageHeader eyebrow={`${PRODUCTS.length} products · Contact for price`} title="Product Catalog">
        Search, filter and ask about any item on WhatsApp. Prices are confirmed by the shop on enquiry.
      </PageHeader>

      <div className="sticky top-[69px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-4">
          <div className="flex gap-2">
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q ?? ""}
                onChange={(e) => set({ q: e.target.value || undefined })}
                placeholder="Search taps, hinges, CPVC elbow, drill…"
                className="h-11 w-full rounded-sm border border-input bg-card pl-10 pr-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <select
              value={brand ?? ""}
              onChange={(e) => set({ brand: e.target.value || undefined })}
              className="h-11 w-36 rounded-sm border border-input bg-card px-2 text-sm outline-none focus:border-primary sm:w-48"
              aria-label="Filter by brand"
            >
              <option value="">All brands</option>
              {BRANDS.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            <button onClick={() => set({ category: undefined })} className={cn(chip, !category ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground")}>All</button>
            {CATEGORIES.map((c) => (
              <button key={c.id} onClick={() => set({ category: c.id })} className={cn(chip, category === c.id ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground")}>{c.name}</button>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pt-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{results.length} results</p>
          {(q || category || brand) && (
            <button onClick={() => navigate({ search: {}, replace: true })} className="inline-flex items-center gap-1 font-mono text-xs uppercase text-primary hover:underline"><X className="h-3 w-3" /> Clear filters</button>
          )}
        </div>
        {results.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="plate rounded-sm border border-border p-10 text-center">
            <h2 className="text-3xl font-bold uppercase">Not listed? We probably have it.</h2>
            <p className="mt-2 text-muted-foreground">Our catalog shows only part of the shop. Send your requirement and we'll check.</p>
            <WaButton href={bulkWaLink()} className="mt-6">Send Requirement on WhatsApp</WaButton>
          </div>
        )}
      </section>

      {recent.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-16">
          <p className="eyebrow">Recently viewed</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recent.slice(0, 4).map((p) => <ProductCard key={p!.id} product={p!} />)}
          </div>
        </section>
      )}

      <BulkAndPhoto />
    </>
  );
}
