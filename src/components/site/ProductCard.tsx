import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { getCategory } from "@/data/products";
import { productWaLink } from "@/lib/whatsapp";
import { WaButton } from "./Buttons";

export function AvailabilityBadge({ value }: { value: Product["availability"] }) {
  const stocked = value === "Usually in stock";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
      <span className={stocked ? "h-1.5 w-1.5 rounded-full bg-success" : "h-1.5 w-1.5 rounded-full bg-primary"} />
      {value}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const cat = getCategory(product.category);
  return (
    <article className="group plate flex flex-col overflow-hidden rounded-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
      <Link to="/products/$id" params={{ id: product.id }} className="relative block aspect-[4/3] overflow-hidden bg-muted">
        <img src={product.image} alt={product.name} loading="lazy" width={816} height={816} className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-2 top-2 rounded-sm bg-background/85 px-2 py-1 font-mono text-[10px] uppercase tracking-wider">{product.brand}</span>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{cat?.name}</p>
        <Link to="/products/$id" params={{ id: product.id }}>
          <h3 className="font-display text-xl font-bold leading-tight group-hover:text-primary">{product.name}</h3>
        </Link>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <p className="font-mono text-xs text-muted-foreground">
          {product.specifications[0]?.label}: <span className="text-foreground">{product.specifications[0]?.value}</span>
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
          <AvailabilityBadge value={product.availability} />
          <span className="font-mono text-[10px] uppercase text-muted-foreground">Contact for price</span>
        </div>
        <WaButton href={productWaLink(product)} size="sm" className="w-full">Ask on WhatsApp</WaButton>
      </div>
    </article>
  );
}
