import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Share2, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { getCategory, getProduct, getRelated } from "@/data/products";
import { productWaLink, telLink } from "@/lib/whatsapp";
import { pushRecent } from "@/lib/recent";
import { WaButton, btn } from "@/components/site/Buttons";
import { AvailabilityBadge, ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.product;
    const t = `${p.name} (${p.brand}) — Hariom Fancy Hardware`;
    return {
      meta: [
        { title: t },
        { name: "description", content: `${p.description} Ask price and availability on WhatsApp.` },
        { property: "og:title", content: t },
        { property: "og:description", content: p.description },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold uppercase">Product not found</h1>
      <Link to="/products" className={btn("primary", "md", "mt-6")}>Back to catalog</Link>
    </div>
  );
}

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const cat = getCategory(p.category);
  const related = getRelated(p);
  const [copied, setCopied] = useState(false);

  useEffect(() => { pushRecent(p.id); }, [p.id]);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: p.name, text: `${p.name} at Hariom Fancy Hardware`, url }); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <Link to="/products" className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-3 w-3" /> Catalog
        </Link>
      </div>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pt-6 md:grid-cols-2 md:gap-12">
        <div className="overflow-hidden rounded-sm border border-border bg-muted">
          <img src={p.image} alt={p.name} width={816} height={816} className="aspect-square h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <Link to="/products" search={{ category: p.category }} className="eyebrow hover:underline">{cat?.name}</Link>
          <h1 className="mt-2 text-5xl font-bold uppercase leading-none md:text-6xl">{p.name}</h1>
          <p className="mt-3 font-display text-xl uppercase tracking-wide text-muted-foreground">Brand: <span className="text-foreground">{p.brand}</span></p>
          <p className="mt-4 text-muted-foreground">{p.description}</p>

          <dl className="mt-6 divide-y divide-border rounded-sm border border-border">
            {p.specifications.map((s) => (
              <div key={s.label} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 px-4 py-3 font-mono text-sm">
                <dt className="text-muted-foreground">{s.label}</dt><dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-sm bg-card px-4 py-3">
            <AvailabilityBadge value={p.availability} />
            <span className="font-display text-lg font-semibold uppercase">Price: <span className="text-primary">Contact for Price</span></span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <WaButton href={productWaLink(p)} size="lg">Ask on WhatsApp</WaButton>
            <a href={telLink()} className={btn("outline", "lg")}>Call the Shop</a>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href={productWaLink(p)} target="_blank" rel="noopener noreferrer" className={btn("ghost", "sm")}>Ask for availability</a>
            <button onClick={share} className={btn("ghost", "sm")}>
              {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />} {copied ? "Link copied" : "Share"}
            </button>
          </div>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">Sizes, finishes and brands may vary. The shop will confirm exact options on WhatsApp.</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-20">
          <p className="eyebrow">More in {cat?.name}</p>
          <h2 className="mt-2 text-4xl font-bold uppercase">Related products</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => <ProductCard key={r.id} product={r} />)}
          </div>
        </section>
      )}
    </>
  );
}
