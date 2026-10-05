import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, MessageCircle, Ruler, Truck } from "lucide-react";
import { PageHeader, BulkAndPhoto } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Us — Hariom Fancy Hardware, Kanpur" },
      { name: "description", content: "Genuine products, help choosing the right part, bulk & contractor rates and easy WhatsApp enquiries." },
      { property: "og:title", content: "Why buy from Hariom Fancy Hardware" },
      { property: "og:description", content: "Genuine brands, practical advice and fair prices in Kanpur." },
    ],
  }),
  component: WhyUs,
});

const POINTS = [
  { icon: BadgeCheck, title: "Genuine Products", text: "Trusted brands with bills and warranty where applicable." },
  { icon: Ruler, title: "Help Choosing the Right Product", text: "Bring an old part or photo and get help matching size, thread and finish." },
  { icon: Truck, title: "Bulk & Contractor Rates", text: "Special pricing for plumbers, carpenters, builders, contractors and larger orders." },
  { icon: MessageCircle, title: "Easy WhatsApp Enquiry", text: "Ask about any product, availability or price directly through WhatsApp." },
];

function WhyUs() {
  return (
    <>
      <PageHeader eyebrow="Why customers come back" title="Why Us" />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pt-10 md:grid-cols-2">
        {POINTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className="plate h-full rounded-sm border border-border p-8">
              <div className="flex items-center justify-between">
                <p.icon className="h-9 w-9 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h2 className="mt-6 text-3xl font-bold uppercase">{p.title}</h2>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <BulkAndPhoto />
    </>
  );
}
