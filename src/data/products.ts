import bath from "@/assets/cat-bath.jpg";
import pipe from "@/assets/cat-pipe.jpg";
import furniture from "@/assets/cat-furniture.jpg";
import kitchen from "@/assets/cat-kitchen.jpg";
import tools from "@/assets/cat-tools.jpg";
import general from "@/assets/cat-general.jpg";
import kitchenware from "@/assets/cat-kitchenware.jpg";
import paint from "@/assets/cat-paint.jpg";

export type Availability = "Usually in stock" | "Ask for availability";

export interface Spec { label: string; value: string }

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  specifications: Spec[];
  image: string;
  availability: Availability;
  relatedProducts?: string[];
}

export interface Category {
  id: string;
  name: string;
  blurb: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  { id: "bath", name: "Bath Fittings", blurb: "Taps, mixers, showers, faucets & accessories", image: bath },
  { id: "pipe", name: "Pipe Fittings", blurb: "PVC, UPVC, CPVC, GI pipes, valves & joints", image: pipe },
  { id: "furniture", name: "Furniture Fittings", blurb: "Hinges, channels, handles, locks & bolts", image: furniture },
  { id: "kitchen", name: "Modular Kitchen", blurb: "Baskets, tandem boxes, pull-outs & profiles", image: kitchen },
  { id: "tools", name: "Tools", blurb: "Power tools, hand tools & safety gear", image: tools },
  { id: "general", name: "Fasteners & General Hardware", blurb: "Nuts, bolts, screws, padlocks & sealants", image: general },
  { id: "kitchenware", name: "Kitchenware", blurb: "Kitchen chimneys & modular kitchen baskets", image: kitchenware },
  { id: "paint", name: "Paint & Sealants", blurb: "Brushes, rollers, putty knives & tapes", image: paint },
];

export const BRANDS = [
  "Prayag", "Prince", "SK", "Option", "Spider", "Geania", "Pye", "Taparia",
  "Link Locks and Tools", "Velmoc", "Powertech", "Focus", "Peacock", "Hindware",
"Kitchencare", "Cera", "Hindware", "Glen",
];

// [name, brand, short description, specs "Label: value | Label: value", usuallyStocked?]
type Row = [string, string, string, string, boolean?];

const RAW: Record<string, Row[]> = {
  bath: [
    ["Bib Cock", "Prayag", "Wall-mounted tap for bathroom and utility areas.", "Finish: Chrome plated | Inlet: 15 mm (½\") | Body: Brass", true],
    ["Pillar Cock", "Hindware", "Deck-mounted basin tap with smooth quarter-turn operation.", "Finish: Chrome | Mounting: Deck | Size: 15 mm", true],
    ["Swan Neck Tap", "Cera", "Tall curved spout for kitchen and wash-basin sinks.", "Finish: Chrome | Mounting: Deck / Wall | Spout: Swivel"],
    ["Basin Mixer", "Hindware", "Single-lever hot & cold mixer for wash basins.", "Type: Single lever | Finish: Chrome | Hoses: Included"],
    ["Wall Mixer", "Cera", "Wall-mounted mixer with provision for overhead shower.", "Type: 3-in-1 | Finish: Chrome | Inlet: 15 mm"],
    ["Shower Mixer", "Prayag", "Diverter mixer for shower and spout.", "Type: Diverter | Finish: Chrome | Body: Brass"],
    ["Overhead Shower", "Prince", "Round overhead rain shower with anti-lime nozzles.", "Size: 6\" / 8\" / 10\" | Finish: Chrome | Arm: Optional", true],
    ["Hand Shower", "Prayag", "Multi-flow hand shower with flexible tube.", "Modes: Multi-flow | Tube: 1.5 m | Finish: Chrome"],
    ["Health Faucet", "Hindware", "Toilet health faucet with hook and PVC/SS tube.", "Tube: 1 m / 1.5 m | Hook: Included | Finish: Chrome", true],
    ["Angle Cock", "Prayag", "Inlet control valve for basins, geysers and cisterns.", "Size: 15 mm | Finish: Chrome | Body: Brass", true],
    ["Flush Tank", "Hindware", "Dual-flush PVC cistern for Indian & western WCs.", "Type: Dual flush | Capacity: 10 L | Material: PVC"],
    ["Floor Drain", "Prince", "Stainless steel floor trap grating with cockroach trap.", "Size: 5\" / 6\" | Material: SS 304 | Type: Square / Round", true],
    ["Towel Rod", "Cera", "Wall-mounted towel rod for bathrooms.", "Length: 18\" / 24\" | Finish: Chrome / SS"],
    ["Towel Ring", "Prayag", "Compact towel ring for basin areas.", "Finish: Chrome | Mounting: Wall"],
    ["Soap Dish", "Prayag", "Wall-mounted soap holder with drain holes.", "Finish: Chrome / SS | Mounting: Wall"],
    ["Robe Hook", "Cera", "Single or double robe hook for doors and walls.", "Type: Single / Double | Finish: Chrome"],
    ["Bottle Trap", "Prince", "Basin bottle trap to prevent odour backflow.", "Size: 32 mm | Finish: Chrome / PVC"],
    ["Waste Coupling", "Prince", "Basin and sink waste coupling with full thread.", "Size: 32 mm / 40 mm | Material: SS / PVC", true],
    ["CP Extension Nipple", "Prayag", "Chrome-plated extension nipple for tap fitting depth.", "Size: 15 mm | Length: 1\" / 2\" / 3\"", true],
  ],
  pipe: [
    ["PVC Pipe", "Prince", "Rigid PVC pipe for water supply and drainage.", "Sizes: ½\" – 4\" | Length: 3 m / 6 m | Class: Various", true],
    ["UPVC Pipe", "Prince", "Lead-free UPVC plumbing pipe for cold water lines.", "Sizes: ½\" – 2\" | Schedule: 40 / 80", true],
    ["CPVC Pipe", "Prince", "Hot & cold water CPVC pipe, SDR 11.", "Sizes: ½\" – 2\" | SDR: 11 / 13.5 | Length: 3 m", true],
    ["GI Pipe", "SK", "Galvanised iron pipe for heavy-duty supply lines.", "Sizes: ½\" – 2\" | Class: Light / Medium"],
    ["PVC Elbow", "Prince", "90° PVC elbow for water lines.", "Sizes: ½\" – 4\" | Angle: 90° / 45°", true],
    ["CPVC Elbow", "Prince", "CPVC elbow for hot water plumbing.", "Sizes: ½\" – 2\" | Angle: 90° / 45°", true],
    ["Tee", "Prince", "Equal and reducing tee joints.", "Material: PVC / CPVC / UPVC | Sizes: ½\" – 2\"", true],
    ["Coupling", "Prince", "Straight socket coupler for joining pipes.", "Material: PVC / CPVC | Sizes: ½\" – 2\"", true],
    ["Union", "SK", "Union joint for easy dismantling of lines.", "Material: CPVC / GI | Sizes: ½\" – 1½\""],
    ["Reducer", "Prince", "Reducer socket / bush between pipe sizes.", "Material: PVC / CPVC | Sizes: Various"],
    ["Ball Valve", "Prayag", "Full-bore ball valve with lever handle.", "Material: Brass / PVC / CPVC | Sizes: ½\" – 2\"", true],
    ["Gate Valve", "SK", "Brass gate valve for main supply control.", "Material: Brass | Sizes: ½\" – 2\""],
    ["Bib Valve", "Prayag", "Garden & utility bib valve with hose nozzle.", "Size: 15 mm | Body: Brass / PTMT"],
    ["Solvent Cement", "Prince", "Solvent cement for PVC / CPVC / UPVC joints.", "Pack: 50 ml – 1 L | Type: PVC / CPVC / UPVC", true],
    ["PTFE / Teflon Tape", "Pye", "Thread seal tape for leak-free threaded joints.", "Width: 12 mm | Length: 10 m", true],
    ["Pipe Clamps", "SK", "Pipe clips and saddle clamps for wall fixing.", "Material: PVC / GI | Sizes: ½\" – 4\"", true],
    ["Flexible Pipes", "Prayag", "Braided SS connection pipe for basins and geysers.", "Length: 12\" – 24\" | Material: SS braided", true],
  ],
  furniture: [
    ["Cabinet Hinges", "Velmoc", "Auto hinges for wardrobe and kitchen shutters.", "Type: Full / Half / Inset overlay | Cup: 35 mm", true],
    ["Soft Close Hinges", "Velmoc", "Hydraulic soft-close hinges for silent closing.", "Type: Clip-on | Cup: 35 mm | Overlay: Full / Half / Inset"],
    ["Drawer Channels", "Option", "Ball-bearing drawer channel pairs.", "Lengths: 10\" – 24\" | Type: Ball bearing", true],
    ["Telescopic Channels", "Velmoc", "Full-extension telescopic channels, soft-close option.", "Lengths: 12\" – 24\" | Load: up to 45 kg"],
    ["Cabinet Handles", "Geania", "Designer cabinet handles in multiple finishes.", "Sizes: 96 – 288 mm | Finish: SS / Gold / Black", true],
    ["Knobs", "Geania", "Decorative knobs for drawers and shutters.", "Finish: SS / Antique / Gold | Material: Zinc / Brass"],
    ["Door Locks", "Link Locks and Tools", "Mortise and cylindrical door locks.", "Type: Mortise / Cylindrical | Keys: 3 – 5"],
    ["Tower Bolts", "Link Locks and Tools", "Door & window tower bolts.", "Sizes: 4\" – 12\" | Material: SS / Aluminium", true],
    ["Door Stoppers", "Option", "Floor and wall-mounted door stoppers.", "Type: Magnetic / Rubber | Finish: SS"],
    ["Wardrobe Rods", "Option", "Oval / round wardrobe hanging rods with supports.", "Lengths: Cut to size | Finish: Chrome / SS"],
    ["Bed Fittings", "Velmoc", "Bed connectors and hydraulic lift fittings.", "Type: Connectors / Hydraulic | Material: Steel"],
    ["Sofa Fittings", "Option", "Sofa legs, connectors and recliner hardware.", "Type: Legs / Brackets | Finish: Various"],
    ["Magnetic Catch", "Option", "Magnetic catch for cabinet shutters.", "Type: Single / Double | Material: Plastic / Steel", true],
    ["Furniture Screws", "SK", "Chipboard and wood screws for furniture work.", "Sizes: 6 mm – 75 mm | Head: CSK / Pan", true],
    ["Shelf Supports", "Option", "Shelf studs and brackets for adjustable shelving.", "Type: Stud / Bracket | Finish: Nickel / Black"],
  ],
  kitchen: [
    ["Tandem Drawer Box", "Kitchencare", "Soft-close tandem box drawer system.", "Depth: 350 – 550 mm | Height: Low / Medium / High"],
    ["Wire Basket", "Kitchencare", "SS wire basket for utensils and storage.", "Widths: 15\" – 30\" | Material: SS 304", true],
    ["Thali Basket", "Kitchencare", "Plate & thali basket for kitchen drawers.", "Widths: 15\" – 24\" | Material: SS"],
    ["Bottle Pull-Out", "Velmoc", "Narrow bottle pull-out for oil and spice bottles.", "Width: 150 / 200 mm | Material: SS / Wire"],
    ["Corner Unit", "Kitchencare", "Magic corner / carousel unit for blind corners.", "Type: Magic corner / Carousel | Material: SS"],
    ["Cutlery Tray", "Kitchencare", "Moulded cutlery organiser for drawers.", "Widths: 300 – 900 mm | Material: PVC", true],
    ["Kitchen Profile Handle", "Velmoc", "Aluminium profile handle for handle-less shutters.", "Length: Cut to size | Finish: Black / Gold / Silver"],
    ["Sink Basket", "Kitchencare", "SS sink basket strainer for kitchen sinks.", "Size: 3½\" / 4\" | Material: SS", true],
    ["Sink Waste Coupling", "Prince", "Kitchen sink coupling with long thread.", "Size: 40 mm | Material: SS / PVC", true],
    ["Lift-Up Fitting", "Velmoc", "Gas-lift and aventos-style lift-up mechanism.", "Type: Gas strut / Lift-up | Load: Various"],
    ["Pantry Pull-Out", "Kitchencare", "Tall pantry unit with multiple baskets.", "Heights: 1500 – 2100 mm | Width: 300 – 600 mm"],
    ["Dustbin Pull-Out", "Kitchencare", "Concealed dustbin pull-out for kitchen cabinets.", "Capacity: Single / Double bin | Material: SS / Plastic"],
    ["Cabinet Accessories", "Option", "Legs, skirting, shutter buffers and more.", "Type: Assorted | Finish: Various"],
  ],
  tools: [
    ["Drill Machine", "Powertech", "Corded impact drill for wall and wood drilling.", "Chuck: 13 mm | Power: 500 – 750 W | Mode: Impact"],
    ["Angle Grinder", "Powertech", "4\" angle grinder for cutting and grinding.", "Disc: 100 mm | Power: 750 – 850 W"],
    ["Hammer", "Taparia", "Claw and ball-peen hammers with sturdy handles.", "Weight: 250 g – 1 kg | Type: Claw / Ball-peen", true],
    ["Screwdriver Set", "Taparia", "Flat and Phillips screwdriver set.", "Pieces: 6 – 12 | Tips: Flat / Phillips", true],
    ["Spanner Set", "Taparia", "Double-open-end and ring spanner sets.", "Sizes: 6 – 32 mm | Type: DE / Ring / Combination", true],
    ["Combination Pliers", "Taparia", "Insulated combination pliers.", "Length: 6\" / 8\" | Insulation: Yes", true],
    ["Cutting Pliers", "Taparia", "Side cutting pliers for wire work.", "Length: 6\" / 7\" | Jaw: Hardened"],
    ["Adjustable Wrench", "Taparia", "Adjustable spanner with fine jaw adjustment.", "Length: 6\" – 12\""],
    ["Measuring Tape", "Focus", "Steel measuring tape with auto-lock.", "Length: 3 m / 5 m / 7.5 m | Blade: 19 – 25 mm", true],
    ["Hand Saw", "Spider", "Wood hand saw and hacksaw frames.", "Length: 12\" – 24\" | Type: Wood / Hacksaw"],
    ["Drill Bits", "Spider", "Masonry, wood and HSS drill bits.", "Sizes: 3 – 16 mm | Type: Masonry / HSS / Wood", true],
    ["Cutting Blades", "Spider", "Cutting discs for metal, tile and wood.", "Size: 4\" | Type: Metal / Tile / Wood", true],
    ["Allen Key Set", "Taparia", "Hex key set in metric sizes.", "Sizes: 1.5 – 10 mm | Pieces: 9"],
    ["Utility Knife", "Focus", "Retractable cutter with snap-off blades.", "Blade: 18 mm | Type: Retractable", true],
    ["Safety Gloves", "Focus", "Work gloves for handling and site work.", "Type: Cotton / Rubber coated | Size: Free"],
    ["Safety Goggles", "Focus", "Clear protective goggles for cutting and drilling.", "Lens: Clear polycarbonate"],
  ],
  general: [
    ["Nuts", "SK", "Hex nuts in MS and SS.", "Sizes: M4 – M20 | Material: MS / SS", true],
    ["Bolts", "SK", "Hex and carriage bolts.", "Sizes: M4 – M20 | Length: 10 – 150 mm", true],
    ["Washers", "SK", "Plain and spring washers.", "Sizes: M4 – M20 | Type: Plain / Spring", true],
    ["Screws", "SK", "Self-tapping, wood and machine screws.", "Sizes: Various | Head: CSK / Pan", true],
    ["Wall Plugs", "Pye", "Nylon wall plugs for screws in masonry.", "Sizes: 6 / 8 / 10 mm", true],
    ["Rawl Plugs", "Pye", "Plastic rawl plugs for light fixing.", "Sizes: 6 – 12 mm", true],
    ["Nails", "SK", "Wire nails and concrete nails.", "Sizes: ½\" – 6\" | Type: Wire / Concrete", true],
    ["Door Hinges", "Link Locks and Tools", "Butt hinges for doors and windows.", "Sizes: 3\" – 5\" | Material: SS / MS"],
    ["Padlocks", "Link Locks and Tools", "Brass and steel padlocks.", "Sizes: 25 – 75 mm | Keys: 3", true],
    ["Chains", "SK", "Utility chains, cut to length.", "Thickness: Various | Material: GI / SS"],
    ["Hooks", "SK", "S-hooks, cup hooks and screw hooks.", "Type: Assorted | Finish: Zinc / SS"],
    ["Adhesives", "Pye", "Multi-purpose adhesives and epoxy.", "Type: Epoxy / Synthetic | Pack: Various"],
    ["Silicone Sealant", "Pye", "Waterproof silicone sealant for glass and bathrooms.", "Pack: 280 / 300 ml | Colour: Clear / White", true],
    ["Construction Sealant", "Pye", "Polyurethane / acrylic sealant for joints.", "Pack: 300 ml | Type: PU / Acrylic"],
    ["Thread Seal Tape", "Pye", "Thread seal tape for plumbing joints.", "Width: 12 mm | Length: 10 m", true],
  ],
  kitchenware: [
    ["Kitchen Chimney", "Glen", "Auto-clean kitchen chimney for smoke and oil removal.", "Width: 60 / 90 cm | Suction: 1000 – 1200 m³/hr | Type: Auto-clean", true],
    ["Curved Glass Chimney", "Hindware", "Curved glass wall-mounted kitchen chimney.", "Width: 60 / 90 cm | Suction: 1100 m³/hr | Filter: Baffle"],
    ["Filterless Chimney", "Glen", "Filterless auto-clean chimney with touch control.", "Width: 60 / 90 cm | Suction: 1200 – 1500 m³/hr | Control: Touch / Motion"],
    ["Straight Line Chimney", "Hindware", "Straight-line glass kitchen chimney with LED lamps.", "Width: 60 / 90 cm | Suction: 1000 – 1350 m³/hr | Lamps: LED", true],
    ["Wire Basket", "Kitchencare", "SS wire basket for cabinet and drawer storage.", "Widths: 15\" – 30\" | Material: SS 304", true],
    ["Perforated Basket", "Kitchencare", "Perforated cutlery basket for kitchen cabinets.", "Widths: 12\" – 24\" | Material: SS 304", true],
    ["Thali Basket", "Kitchencare", "Plate & thali basket for kitchen drawers.", "Widths: 15\" – 24\" | Material: SS"],
    ["Grain Trolley Basket", "Kitchencare", "Rolling trolley basket for grains and vegetables.", "Baskets: 2 / 3 | Wheels: Lockable castors"],
    ["Sink Pull-Out Basket", "Kitchencare", "Pull-out basket unit for below the sink.", "Mounting: Pull-out | Material: SS / Plastic"],
  ],
  paint: [
    ["Paint Brushes", "Spider", "Synthetic and bristle paint brushes.", "Sizes: 1\" – 4\"", true],
    ["Rollers", "Spider", "Paint rollers for walls and ceilings.", "Width: 7\" / 9\" | Nap: Short / Medium", true],
    ["Putty Knives", "Spider", "Flexible steel putty knives.", "Width: 1\" – 6\"", true],
    ["Sandpaper", "Option", "Water-proof and dry emery paper.", "Grit: 60 – 1200", true],
    ["Masking Tape", "Pye", "Paper masking tape for clean paint lines.", "Width: 12 – 48 mm", true],
    ["Paint Scrapers", "Spider", "Scrapers for removing old paint.", "Blade: 2\" – 4\""],
    ["Sealants", "Pye", "Acrylic gap-filling sealants for painting prep.", "Pack: 280 – 300 ml | Colour: White"],
  ],
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const catImage = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.image]));

export const PRODUCTS: Product[] = Object.entries(RAW).flatMap(([cat, rows]) =>
  rows.map(([name, brand, description, specs, stocked]) => ({
    id: `${cat}-${slug(name)}`,
    name,
    category: cat,
    brand,
    description,
    specifications: specs.split("|").map((s) => {
      const [label, ...v] = s.split(":");
      return { label: (label ?? "").trim(), value: v.join(":").trim() };
    }),
    image: catImage[cat] ?? "",
    availability: stocked ? "Usually in stock" : "Ask for availability",
  })),
);

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
export const getCategory = (id: string) => CATEGORIES.find((c) => c.id === id);

export const getRelated = (p: Product, n = 4) => {
  if (p.relatedProducts?.length) {
    return p.relatedProducts.map(getProduct).filter(Boolean).slice(0, n) as Product[];
  }
  const same = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id);
  const start = Math.max(0, same.findIndex((x) => x.id > p.id));
  return [...same.slice(start), ...same.slice(0, start)].slice(0, n);
};
