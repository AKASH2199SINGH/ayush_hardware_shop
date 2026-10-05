import { SHOP } from "@/config/shop";
import type { Product } from "@/data/products";
import { getCategory } from "@/data/products";

export const waLink = (message: string) =>
  `https://wa.me/${SHOP.phoneIntl}?text=${encodeURIComponent(message)}`;

export const telLink = () => `tel:+${SHOP.phoneIntl}`;

export const productMessage = (p: Product) =>
  `Hello Hariom Fancy Hardware,
I am interested in this product:

Product: ${p.name}
Category: ${getCategory(p.category)?.name ?? p.category}
Brand: ${p.brand}
Specification: ${p.specifications.map((s) => `${s.label}: ${s.value}`).join(", ")}

Please confirm availability and price.`;

export const productWaLink = (p: Product) => waLink(productMessage(p));

export const categoryWaLink = (categoryName: string) =>
  waLink(`Hello Hariom Fancy Hardware,
I am looking for products in: ${categoryName}.
Please share available options and prices.`);

export const generalWaLink = () =>
  waLink("Hello Hariom Fancy Hardware, I have a hardware requirement. Please help.");

export const photoWaLink = () =>
  waLink("Hello Hariom Fancy Hardware, I am sending a photo of a part. Please help me find the right one.");

export const bulkWaLink = () =>
  waLink("Hello Hariom Fancy Hardware, I need bulk quantity pricing for the following items:\n\n");
