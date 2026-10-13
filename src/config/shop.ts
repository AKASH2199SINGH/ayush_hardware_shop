// Central shop settings — edit here to update the whole site.
export const SHOP = {
  name: "HARIOM FANCY HARDWARE",
  tagline: "Hardware for Every Job. Quality You Can Trust.",
  address: "Satbari Road, New Azad Nagar, Kanpur, Uttar Pradesh, India",
  shortAddress: "Satbari Road, New Azad Nagar, Kanpur",
  phoneDisplay: "7408969327",
  // Digits only, with country code, used for wa.me and tel: links.
  phoneIntl: "917408969327",
  hours: [
    { day: "Monday – Saturday", time: "9:30 AM – 8:30 PM" },
    { day: "Sunday", time: "Contact us for timings" },
  ],
  // Paste the shop's Google Maps share link here. Empty = button shows a search.
  mapsUrl: "",
};

export const mapsLink = () =>
  SHOP.mapsUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP.name + " " + SHOP.address)}`;
