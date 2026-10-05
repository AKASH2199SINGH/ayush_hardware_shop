import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CATEGORIES, PRODUCTS, BRANDS } from "@/data/products";
import { generalWaLink } from "@/lib/whatsapp";
import { btn, WaButton } from "@/components/site/Buttons";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { BulkAndPhoto } from "@/components/site/Sections";
import { SHOP } from "@/config/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hariom Fancy Hardware, Kanpur — Bath, Plumbing, Furniture & Tools" },
      { name: "description", content: "Bath fittings, pipes, furniture & kitchen hardware, tools and more at Satbari Road, New Azad Nagar, Kanpur. Ask on WhatsApp." },
      { property: "og:title", content: "Hariom Fancy Hardware, Kanpur" },
      { property: "og:description", content: "Hardware for every job. Browse the catalog and enquire on WhatsApp." },
    ],
  }),
  component: Home,
});

const FEATURED = ["bath-basin-mixer", "pipe-cpvc-pipe", "furniture-soft-close-hinges", "kitchen-tandem-drawer-box", "tools-drill-machine", "general-silicone-sealant", "electrical-modular-switches", "bath-health-faucet"];

function Home() {
  const featured = FEATURED.map((id) => PRODUCTS.find((p) => p.id === id)!).filter(Boolean);
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={hero} alt="Inside Hariom Fancy Hardware — taps, fittings, locks and tools on shelves" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
          <p className="eyebrow">Est. hardware showroom · {SHOP.shortAddress}</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold uppercase leading-[0.9] md:text-8xl">
            Hariom Fancy <span className="text-primary">Hardware</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium md:text-xl">
            Everything for your bathroom, plumbing, furniture, kitchen and hardware work — under one roof.
          </p>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Genuine brands, practical advice and fair prices for homeowners, plumbers, carpenters, contractors and builders.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className={btn("primary", "lg")}>Browse Products <ArrowRight className="h-4 w-4" /></Link>
            <WaButton href={generalWaLink()} size="lg">Ask on WhatsApp</WaButton>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-2 px-4 py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {["Genuine Products", "Fair Pricing", "Bulk Orders", "WhatsApp Enquiries"].map((t) => (
            <span key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary" />{t}</span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Shop by category</p><h2 className="mt-2 text-4xl font-bold uppercase md:text-5xl">What do you need?</h2></div>
          <Link to="/categories" className={btn("outline", "sm")}>All categories</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 50}>
              <Link to="/products" search={{ category: c.id }} className="group relative block aspect-square overflow-hidden rounded-sm border border-border">
                <img src={c.image} alt={c.name} loading="lazy" width={816} height={816} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <h3 className="text-lg font-bold uppercase leading-tight md:text-2xl">{c.name}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-primary">View <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">From the counter</p><h2 className="mt-2 text-4xl font-bold uppercase md:text-5xl">Popular products</h2></div>
          <Link to="/products" className={btn("outline", "sm")}>Full catalog · {PRODUCTS.length} items</Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => <Reveal key={p.id} delay={(i % 4) * 60}><ProductCard product={p} /></Reveal>)}
        </div>
      </section>

      <BulkAndPhoto />

      <section className="mx-auto max-w-7xl px-4 pt-20">
        <p className="eyebrow">Brands on our shelves</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {BRANDS.map((b) => (
            <Link key={b} to="/products" search={{ brand: b }} className="rounded-sm border border-border px-4 py-2 font-display text-lg font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-foreground">{b}</Link>
          ))}
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">Brands available at our store may vary by product and availability.</p>
      </section>
    </>
  );
}
