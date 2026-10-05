import { Link } from "@tanstack/react-router";
import { SHOP } from "@/config/shop";
import { telLink, generalWaLink } from "@/lib/whatsapp";
import { Logo } from "./SiteHeader";
import { WhatsAppIcon } from "./Buttons";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-muted-foreground">{SHOP.tagline}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow">Visit</p>
          <p className="text-muted-foreground">{SHOP.address}</p>
          {SHOP.hours.map((h) => (
            <p key={h.day} className="font-mono text-xs text-muted-foreground">{h.day}: {h.time}</p>
          ))}
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow">Contact</p>
          <a href={telLink()} className="block font-display text-2xl font-bold hover:text-primary">{SHOP.phoneDisplay}</a>
          <a href={generalWaLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-whatsapp hover:underline">
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-muted-foreground">
            <Link to="/products" className="hover:text-foreground">Products</Link>
            <Link to="/brands" className="hover:text-foreground">Brands</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center font-mono text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} {SHOP.name} · Brands available at our store may vary by product and availability.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={generalWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
