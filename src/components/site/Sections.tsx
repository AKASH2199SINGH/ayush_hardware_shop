import { Camera, Package } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { CATEGORIES } from "@/data/products";
import { bulkWaLink, photoWaLink, waLink } from "@/lib/whatsapp";
import { WaButton, btn, WhatsAppIcon } from "./Buttons";
import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="grid-lines border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold uppercase md:text-6xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function BulkAndPhoto() {
  return (
    <section className="mx-auto mt-20 grid max-w-7xl gap-4 px-4 md:grid-cols-2">
      <Reveal className="plate relative overflow-hidden rounded-sm border border-border p-8">
        <div className="hazard absolute inset-x-0 top-0 h-1.5" />
        <Package className="h-8 w-8 text-primary" />
        <h2 className="mt-4 text-3xl font-bold uppercase md:text-4xl">Need 20, 50 or 100+ pieces?</h2>
        <p className="mt-2 text-muted-foreground">Ask us for bulk pricing on WhatsApp. Special rates for plumbers, carpenters, builders and contractors.</p>
        <WaButton href={bulkWaLink()} className="mt-6">Get Bulk Pricing</WaButton>
      </Reveal>
      <Reveal delay={100} className="plate relative overflow-hidden rounded-sm border border-border p-8">
        <div className="hazard absolute inset-x-0 top-0 h-1.5" />
        <Camera className="h-8 w-8 text-primary" />
        <h2 className="mt-4 text-3xl font-bold uppercase md:text-4xl">Can't identify the part?</h2>
        <p className="mt-2 text-muted-foreground">Send us a photo on WhatsApp and we'll help you find the right one — size, thread and finish matched.</p>
        <WaButton href={photoWaLink()} className="mt-6">Send a Photo</WaButton>
      </Reveal>
    </section>
  );
}

const field = "w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary";

export function RequirementForm() {
  const [f, setF] = useState({ name: "", product: "", category: "", quantity: "", message: "" });
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello Hariom Fancy Hardware,
I have a requirement:

Name: ${f.name}
Product / Requirement: ${f.product}
Category: ${f.category || "Not specified"}
Quantity: ${f.quantity || "Not specified"}
Message: ${f.message || "-"}

Please confirm availability and price.`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };
  return (
    <form onSubmit={submit} className="plate grid gap-4 rounded-sm border border-border p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm"><span className="eyebrow">Name</span>
          <input required maxLength={80} value={f.name} onChange={set("name")} className={field} placeholder="Your name" /></label>
        <label className="grid gap-1.5 text-sm"><span className="eyebrow">Quantity</span>
          <input maxLength={40} value={f.quantity} onChange={set("quantity")} className={field} placeholder="e.g. 20 pcs" /></label>
      </div>
      <label className="grid gap-1.5 text-sm"><span className="eyebrow">Product / Requirement</span>
        <input required maxLength={200} value={f.product} onChange={set("product")} className={field} placeholder="e.g. CPVC elbow ¾ inch, soft close hinges" /></label>
      <label className="grid gap-1.5 text-sm"><span className="eyebrow">Category</span>
        <select value={f.category} onChange={set("category")} className={field}>
          <option value="">Select category</option>
          {CATEGORIES.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
        </select></label>
      <label className="grid gap-1.5 text-sm"><span className="eyebrow">Additional message</span>
        <textarea maxLength={600} rows={4} value={f.message} onChange={set("message")} className={field} placeholder="Size, finish, brand preference…" /></label>
      <button type="submit" className={btn("whatsapp", "lg")}><WhatsAppIcon /> Send Requirement on WhatsApp</button>
    </form>
  );
}
