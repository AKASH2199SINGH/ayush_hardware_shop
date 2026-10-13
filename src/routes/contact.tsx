import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { SHOP, mapsLink } from "@/config/shop";
import { generalWaLink, telLink } from "@/lib/whatsapp";
import { PageHeader, RequirementForm } from "@/components/site/Sections";
import { WaButton, btn } from "@/components/site/Buttons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Hariom Fancy Hardware, Kanpur" },
      { name: "description", content: "Satbari Road, New Azad Nagar, Kanpur. Call or WhatsApp 7408969327. Open Mon–Sat 9:30 AM – 8:30 PM." },
      { property: "og:title", content: "Contact Hariom Fancy Hardware" },
      { property: "og:description", content: "Send your requirement on WhatsApp or visit the shop in Kanpur." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Visit · Call · WhatsApp" title="Contact" />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="space-y-4">
          <div className="plate rounded-sm border border-border p-6">
            <h2 className="text-3xl font-bold uppercase">{SHOP.name}</h2>
            <div className="mt-5 space-y-4 text-sm">
              <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" /><span>{SHOP.address}</span></p>
              <p className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-primary" /><a href={telLink()} className="font-display text-2xl font-bold hover:text-primary">{SHOP.phoneDisplay}</a></p>
              <div className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-primary" />
                <div className="space-y-1 font-mono text-xs">
                  {SHOP.hours.map((h) => <p key={h.day}><span className="text-muted-foreground">{h.day}:</span> {h.time}</p>)}
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <WaButton href={generalWaLink()} size="sm">WhatsApp</WaButton>
              <a href={telLink()} className={btn("outline", "sm")}>Call</a>
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className={btn("outline", "sm")}>Open in Maps</a>
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Requirement form</p>
          <h2 className="mb-4 mt-2 text-4xl font-bold uppercase">Send your list on WhatsApp</h2>
          <RequirementForm />
        </div>
      </section>
    </>
  );
}
