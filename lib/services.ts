import type { Metadata } from "next";

export type SpecRow = { label: string; value: string };

export type ServiceContent = {
  slug: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  heroImage: { src: string; alt: string };
  stats: { value: string; label: string }[];
  whyTitle: string;
  whyIntro: string;
  why: { title: string; body: string }[];
  specTitle: string;
  specIntro: string;
  specs: SpecRow[];
  extraTables?: {
    title: string;
    headers: string[];
    rows: string[][];
  }[];
  gallery?: { src: string; alt: string }[];
  industriesTitle?: string;
  industries?: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export function serviceMetadata(service: ServiceContent): Metadata {
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
  };
}

export const homeCapabilities = [
  {
    number: "01",
    title: "Laser Cutting",
    body: "Automated Bystronic fiber laser systems for fast, precise flat-sheet cutting.",
    href: "/sheet-laser-cutting",
    tone: "ink" as const,
  },
  {
    number: "02",
    title: "Tube Laser Cutting",
    body: "6-axis cutting for round, square, rectangular, channel, and custom profiles.",
    href: "/tube-laser-cutting",
    tone: "red" as const,
  },
  {
    number: "03",
    title: "Metal Stamping",
    body: "Coil-fed presses from 60 to 220 tons for consistent high-volume parts.",
    href: "/metal-stamping",
    tone: "cream" as const,
  },
  {
    number: "04",
    title: "CNC Machining",
    body: "Milling and turning from prototypes through bar-fed production runs.",
    href: "/cnc-machining",
    tone: "ink" as const,
  },
  {
    number: "05",
    title: "Robotic Welding",
    body: "Repeatable MIG-welded assemblies with capacity up to 4 x 10 feet.",
    href: "/welding",
    tone: "red" as const,
  },
  {
    number: "06",
    title: "Precision Bending",
    body: "Bystronic Xpert press brakes for accurate, repeatable forming.",
    href: "/forming",
    tone: "cream" as const,
  },
];

export const services: Record<string, ServiceContent> = {
  "sheet-laser-cutting": {
    slug: "sheet-laser-cutting",
    navLabel: "Sheet Laser",
    title: "Sheet Laser Cutting",
    metaTitle: "Sheet Laser Cutting in Corona, CA | David Engineering",
    metaDescription:
      "24/7 automated Bystronic fiber laser cutting on 60×120 beds in Corona, CA. Prototype to production, no waterjet or plasma — fiber laser only.",
    eyebrow: "Precision metal manufacturing — Corona, CA",
    heading: "Precision sheet laser cutting.",
    intro:
      "Two Bystronic fiber lasers with full automation run 24/7 lights-out on 60 × 120 beds. Clean, accurate flat-sheet cuts from one-off prototypes to production quantities.",
    heroImage: {
      src: "/images/hero/laser-hero.jpg",
      alt: "Fiber laser cutting sheet metal with a burst of sparks on the shop floor",
    },
    stats: [
      { value: "2×", label: "Bystronic fiber lasers" },
      { value: "60×120", label: "Cutting beds" },
      { value: "24/7", label: "Lights-out automation" },
      { value: "1 → 1M", label: "Prototype to production" },
    ],
    whyTitle: "Why our sheet lasers stay booked",
    whyIntro:
      "When engineers need form, fit, and function with short lead time, CNC fiber laser cutting is the first call. Automation and nesting keep cost and scrap down as quantities grow.",
    why: [
      {
        title: "Tight, repeatable cuts",
        body: "Bystronic fiber systems hold clean edges for prototypes and production alike.",
      },
      {
        title: "24/7 lights-out",
        body: "Automated load and unload keeps the cells running around the clock so lead times stay short.",
      },
      {
        title: "Nesting that saves material",
        body: "Optimized nests reduce waste and keep per-piece cost practical as volume scales.",
      },
      {
        title: "One shop after the cut",
        body: "Forming, machining, stamping, and welding sit under the same roof — parts do not leave Corona between operations.",
      },
    ],
    specTitle: "Sheet laser envelope",
    specIntro:
      "Published numbers from the shop. If a job sits near a limit, send the file and we will confirm fit.",
    specs: [
      { label: "Machines", value: "2× Bystronic fiber lasers, fully automated" },
      { label: "Bed size", value: "60\" × 120\"" },
      { label: "Operation", value: "24/7 lights-out with automated handling" },
      { label: "Process", value: "Fiber laser only — no waterjet, no plasma" },
      {
        label: "Materials",
        value: "Mild steel, stainless, aluminum, galvanized & coated, copper, specialty alloys on request",
      },
      { label: "Volume", value: "1 piece to production quantities" },
      { label: "Downstream", value: "In-house forming, CNC, stamping, welding, finishing" },
    ],
    extraTables: [
      {
        title: "Materials we cut",
        headers: ["Material", "Notes"],
        rows: [
          ["Mild / carbon steel", "Production staple for brackets, panels, and weldments"],
          ["Stainless steel", "Clean edges for food, medical-adjacent, and industrial work"],
          ["Aluminum", "Light structural and enclosure parts"],
          ["Galvanized & coated metals", "Confirm coating and edge requirements on the RFQ"],
          ["Copper", "Quoted by thickness and nest"],
          ["Specialty alloys", "Upon request — send the spec with the drawing"],
        ],
      },
    ],
    gallery: [
      {
        src: "/images/sheet/fiber-laser.jpg",
        alt: "Bystronic fiber laser enclosure on the David Engineering shop floor",
      },
      {
        src: "/images/sheet/laser-sparks.jpg",
        alt: "Automated sheet laser cell with material tower and safety enclosure",
      },
      {
        src: "/images/hero/laser-hero.jpg",
        alt: "Close-up of a laser cutting head and sparks on sheet metal",
      },
    ],
    industriesTitle: "Built for OEMs, fabricators, and manufacturers",
    industries: [
      {
        title: "Automotive & equipment",
        body: "Brackets, guards, and production sheet parts that have to nest cleanly and form next.",
      },
      {
        title: "Agriculture & construction",
        body: "Heavier sheet components that move from laser to brake and weld without leaving the building.",
      },
      {
        title: "Enclosures & industrial goods",
        body: "Panels, covers, and chassis cut ready for hardware, finish, and assembly.",
      },
    ],
    faqs: [
      {
        q: "What size sheet can you cut?",
        a: "Our Bystronic fiber lasers run 60 × 120 beds. Send the blank size with the file if you are near the envelope.",
      },
      {
        q: "Do you offer waterjet or plasma?",
        a: "No. Sheet work here is fiber laser only.",
      },
      {
        q: "What files do you accept?",
        a: "STEP or IGES for 3D, plus DXF, DWG, or PDF drawings. Upload them on the quote form — do not wait to email them after.",
      },
      {
        q: "Is there a minimum order?",
        a: "No. We run one-off prototypes through production quantities.",
      },
      {
        q: "Can you form and weld after the cut?",
        a: "Yes. Press brake forming, CNC, stamping, and welding are in-house in Corona.",
      },
    ],
  },
  "tube-laser-cutting": {
    slug: "tube-laser-cutting",
    navLabel: "Tube Laser",
    title: "Tube Laser Cutting",
    metaTitle: "Tube Laser Cutting in Corona, CA | Bystronic FL170 | David Engineering",
    metaDescription:
      "Bystronic FL170 6-axis 3 kW tube laser in Corona, CA. Round 0.5–6.6\", square to 5.5\", 20 ft stock / 11 ft finished, ±0.030\" length, no MOQ.",
    eyebrow: "Bystronic FL170 3 kW • 6-axis fiber tube laser",
    heading: "Tube laser cutting in Corona, CA.",
    intro:
      "Precision 3D tube and profile cutting. We collapse sawing, drilling, notching, and coping into one automated pass so weldments come out faster, cleaner, and weld-ready.",
    heroImage: {
      src: "/images/equipment/bystronic-fl170.jpg",
      alt: "Bystronic FL 170 3D fiber tube laser",
    },
    stats: [
      { value: "6 ops → 1", label: "Cut, notch, cope & drill in one setup" },
      { value: "Ø 0.5–6.6\"", label: "Round tube (square to 5.5\", wall to ½\")" },
      { value: "Parts to 11'", label: "From 20' stock lengths" },
      { value: "No min.", label: "One prototype to full production" },
    ],
    whyTitle: "Why our tube laser wins",
    whyIntro:
      "Cutting tube the old way means a saw, a drill press, a notcher, fixtures, and a lot of deburring. The 6-axis Bystronic FL 170 does it in one automated pass.",
    why: [
      {
        title: "One machine replaces a department",
        body: "Saw, drill press, and notcher in a single automated pass — lower cost and tighter fit-up.",
      },
      {
        title: "Self-fixturing weldments",
        body: "Tab-and-slot and interlocking features snap together and cut weld setup time.",
      },
      {
        title: "Lights-out throughput",
        body: "Automated loading and unloading keeps the laser running unattended.",
      },
      {
        title: "Weld prep built in",
        body: "Bevels and copes up to 45° are cut on the laser, not milled afterward.",
      },
    ],
    specTitle: "FL 170 technical envelope",
    specIntro:
      "Real numbers so you can tell at a glance whether the part is a fit. Near a limit? Send the file and we will confirm.",
    specs: [
      { label: "Machine", value: "Bystronic FL 170 — 6-axis 3D fiber tube laser, 3 kW" },
      { label: "Round tube diameter", value: "0.5\" – 6.6\" (12 – 168 mm)" },
      { label: "Square tube", value: "5/8\" up to 5.5\"" },
      {
        label: "Rectangular tube",
        value: "From 5/8\" short side, up to a 6.6\" inscribed diameter",
      },
      {
        label: "Open profiles",
        value: "Angle to 3.94\", channel to 5.51\", flat bar to ½\"",
      },
      { label: "Wall thickness", value: "Up to ½\" mild steel" },
      { label: "Max stock length", value: "20 ft" },
      { label: "Max finished part", value: "11 ft" },
      { label: "Bevel / 3D cutting", value: "Weld-prep bevels & copes up to 45°" },
      { label: "Tolerance", value: "±0.030\" on length · ±0.015\" on holes" },
      { label: "Minimum order", value: "None — 1 piece to production" },
    ],
    extraTables: [
      {
        title: "Max material thickness by cut",
        headers: ["Material", "Straight (2D)", "Bevel ≤ 45°"],
        rows: [
          ["Mild steel", "½\"", "5/16\""],
          ["Stainless", "¼\"", "1/8\""],
          ["Aluminum", "¼\"", "1/8\""],
        ],
      },
    ],
    gallery: [
      {
        src: "/images/tube/square-intersecting-holes.jpg",
        alt: "Square tube with intersecting precision holes",
      },
      {
        src: "/images/tube/square-windows-holes.jpg",
        alt: "Square tube windows and hole patterns in one setup",
      },
      {
        src: "/images/tube/round-cut-to-length.jpg",
        alt: "Round tube cut cleanly to length",
      },
      {
        src: "/images/tube/rectangular-radius-corners.jpg",
        alt: "Rectangular tube with clean radius-corner cuts",
      },
      {
        src: "/images/tube/angle-bolt-holes.jpg",
        alt: "Angle with a production bolt-hole pattern",
      },
      {
        src: "/images/tube/galvanized-square-hole.jpg",
        alt: "Galvanized square tube with a center hole",
      },
    ],
    industriesTitle: "Who we cut for",
    industries: [
      {
        title: "Equipment & machine frames",
        body: "Weldment frames and bases with pre-cut mounting holes and slots.",
      },
      {
        title: "Agriculture & heavy equipment",
        body: "Structural tube, guarding, and implement components.",
      },
      {
        title: "Material handling & conveyor",
        body: "Rails, supports, and frames cut ready to weld and bolt.",
      },
      {
        title: "Handrail & architectural",
        body: "Copes and miters for clean, fast railing fabrication.",
      },
      {
        title: "Automotive & motorsports",
        body: "Chassis, cage, and roll-structure tube with precise notches.",
      },
      {
        title: "Furniture, displays & enclosures",
        body: "Repeatable tube components for consumer and retail products.",
      },
    ],
    faqs: [
      {
        q: "What size tube can you cut?",
        a: "Round tube from 0.5\" to 6.6\" diameter, square tube up to 5.5\", plus rectangular tube, angle, channel, and flat bar. Wall thickness up to ½\" in mild steel.",
      },
      {
        q: "What materials and thicknesses?",
        a: "Mild/carbon steel up to ½\", stainless and aluminum up to ¼\" on a straight cut. Thinner walls at bevels up to 45° for weld prep.",
      },
      {
        q: "How long can finished parts be?",
        a: "We run 20 ft stock and produce finished parts up to 11 ft.",
      },
      {
        q: "Do you have a minimum order?",
        a: "No. One prototype through full production.",
      },
      {
        q: "What tolerance do you hold?",
        a: "Typically ±0.030\" on cut length and ±0.015\" on hole locations. Call out critical dimensions on the drawing.",
      },
      {
        q: "What files do you accept?",
        a: "STEP or IGES is ideal. DXF, DWG, or PDF also work. Upload on the quote form.",
      },
      {
        q: "Can you notch, cope, and drill in the same operation?",
        a: "Yes. Copes, notches, hole patterns, slots, and 45° weld bevels are cut in one automated pass.",
      },
    ],
  },
  "cnc-machining": {
    slug: "cnc-machining",
    navLabel: "CNC",
    title: "CNC Machining",
    metaTitle: "CNC Milling & Turning in Corona, CA | David Engineering",
    metaDescription:
      "CNC milling and bar-fed turning in Corona, CA. Prototypes through production, under the same roof as laser, forming, and welding.",
    eyebrow: "Precision CNC machining — Corona, CA",
    heading: "CNC machining that holds the line.",
    intro:
      "Milling and turning from prototypes through bar-fed production. Tight-tolerance features land in the same Corona shop that cuts, forms, and welds the rest of the job.",
    heroImage: {
      src: "/images/shop/shop-floor.jpg",
      alt: "Precision metal manufacturing in process at David Engineering",
    },
    stats: [
      { value: "Mill + turn", label: "CNC milling and turning" },
      { value: "Bar-feed", label: "Lathes set for production runs" },
      { value: "1 → prod.", label: "Prototype through repeat work" },
      { value: "In-house", label: "Laser, form, and weld next door" },
    ],
    whyTitle: "Machining that supports the rest of the job",
    whyIntro:
      "CNC here is not a standalone job shop. It finishes features the laser cannot hold and keeps turned and milled parts on the same schedule as fabrications.",
    why: [
      {
        title: "Milling and turning",
        body: "Full-service CNC for pockets, profiles, bores, and turned features on metals and alloys.",
      },
      {
        title: "Bar-fed production",
        body: "CNC bar feeding on the lathes for higher-volume turned work without a second vendor.",
      },
      {
        title: "Any quantity we quote",
        body: "One-off fixtures and first articles through production lots.",
      },
      {
        title: "Same quality system",
        body: "ISO 9001:2015 planning, rev checks, and in-process inspection apply on the machines as they do on the lasers.",
      },
    ],
    specTitle: "CNC capability envelope",
    specIntro:
      "Published shop capabilities only. Send the print for a fit and process review — we do not list machine models we cannot stand behind.",
    specs: [
      { label: "Processes", value: "CNC milling and CNC turning" },
      { label: "Production turning", value: "Bar-feed on lathes for high-volume runs" },
      { label: "Volume", value: "Prototype through production quantities" },
      { label: "Materials", value: "Metals and alloys as quoted from the print" },
      { label: "Quality system", value: "ISO 9001:2015 — planning, drawing, and rev checks before release" },
      { label: "Integration", value: "Same facility as sheet laser, tube laser, forming, stamping, and welding" },
    ],
    extraTables: [
      {
        title: "Typical CNC work we quote",
        headers: ["Work", "How it usually lands"],
        rows: [
          ["Milled features on fabrications", "Holes, pockets, and faces after laser or form"],
          ["Turned components", "Bar-fed when quantity supports it"],
          ["Prototype fixtures", "One-offs that prove the assembly"],
          ["Repeat production", "Released under the same ISO 9001:2015 process"],
        ],
      },
    ],
    industriesTitle: "Where machining sits in the program",
    industries: [
      {
        title: "Weldments that need machined faces",
        body: "Cut and form in-house, then mill datums and holes to the print.",
      },
      {
        title: "Turned production",
        body: "Bar-fed lots that ship with the rest of a multi-process order.",
      },
      {
        title: "Prototype through release",
        body: "First articles under the same quality system as production.",
      },
    ],
    faqs: [
      {
        q: "Do you mill and turn?",
        a: "Yes. CNC milling and turning, with bar-feed on the lathes for production runs.",
      },
      {
        q: "Can machining be combined with laser and forming?",
        a: "Yes. That is the point of one shop — the part does not leave Corona between processes.",
      },
      {
        q: "What files should we send?",
        a: "STEP or IGES plus a PDF or DWG with tolerances. Upload them on the quote form.",
      },
      {
        q: "Is there a minimum quantity?",
        a: "No published MOQ. We quote prototypes and production from the same desk.",
      },
    ],
  },
  forming: {
    slug: "forming",
    navLabel: "Forming",
    title: "Precision Forming",
    metaTitle: "Precision Bending & Forming in Corona, CA | Bystronic Xpert",
    metaDescription:
      "Bystronic Xpert press brake forming in Corona, CA. Accurate, repeatable bends from prototype to production, next to laser, CNC, and welding.",
    eyebrow: "Bystronic Xpert press brakes — Corona, CA",
    heading: "Precision bending and forming.",
    intro:
      "Bystronic Xpert press brakes for accurate, repeatable forming. Prototypes and production bends stay in the same Corona shop that laser-cuts the blank.",
    heroImage: {
      src: "/images/sheet/laser-sparks.jpg",
      alt: "Automated fabrication floor at David Engineering in Corona",
    },
    stats: [
      { value: "Xpert", label: "Bystronic press brakes" },
      { value: "Repeatable", label: "Accurate production bends" },
      { value: "In-house", label: "Laser to brake in one building" },
      { value: "1 → prod.", label: "Prototype to volume" },
    ],
    whyTitle: "Forming that matches the cut",
    whyIntro:
      "A clean laser blank only helps if the brake holds the bend. Xpert brakes are how we keep formed parts on print without sending the job out.",
    why: [
      {
        title: "Bystronic Xpert brakes",
        body: "Current-generation press brakes built for accurate, repeatable forming.",
      },
      {
        title: "Short setup, fast turns",
        body: "Minimal setup time so prototype and production lots keep moving.",
      },
      {
        title: "Laser-to-brake flow",
        body: "60 × 120 laser blanks form in-house — no freight between operations.",
      },
      {
        title: "Ready for weld and hardware",
        body: "Formed parts move to robotic or manual weld, PEM insertion, and finish without leaving the building.",
      },
    ],
    specTitle: "Forming envelope",
    specIntro:
      "We publish the equipment we run. Send the flat pattern and formed print so we can confirm bend sequence and tooling.",
    specs: [
      { label: "Equipment", value: "Bystronic Xpert press brakes" },
      { label: "Work", value: "Precision bending and forming of sheet components" },
      { label: "Volume", value: "Prototype through high-volume production" },
      { label: "Upstream", value: "In-house 60 × 120 fiber laser blanks" },
      { label: "Downstream", value: "Hardware insertion, welding, finishing, assembly" },
      { label: "Quality system", value: "ISO 9001:2015 in-process checks at each operation" },
    ],
    extraTables: [
      {
        title: "What to send for a forming quote",
        headers: ["File", "Why it helps"],
        rows: [
          ["Flat pattern (DXF / DWG)", "Confirms blank size against the 60 × 120 laser beds"],
          ["Formed model (STEP / IGES)", "Bend sequence and collision review"],
          ["PDF with bend notes", "Inside radii, grain, and critical dimensions"],
          ["Target quantity + due date", "Capacity and lot pricing"],
        ],
      },
    ],
    industriesTitle: "Formed work we support",
    industries: [
      {
        title: "Brackets and chassis",
        body: "Multi-bend parts that have to nest, form, and weld to a fixture.",
      },
      {
        title: "Covers and enclosures",
        body: "Panels that pick up hardware and finish after the brake.",
      },
      {
        title: "Production repeats",
        body: "Same brake program, same inspection checkpoints, ISO 9001:2015 release.",
      },
    ],
    faqs: [
      {
        q: "What press brakes do you run?",
        a: "Bystronic Xpert press brakes. Send the formed model so we can confirm tooling and sequence.",
      },
      {
        q: "Can you laser the blank and form it?",
        a: "Yes. Two automated Bystronic fiber lasers on 60 × 120 beds feed the brakes in the same building.",
      },
      {
        q: "Do you only form sheet?",
        a: "Forming here is press-brake work on sheet components. Tube profiles are cut on the FL 170; we do not list tube-bending equipment we do not have.",
      },
      {
        q: "What files do you need?",
        a: "STEP or IGES plus a flat pattern and a PDF with bend notes. Upload them with the quote.",
      },
    ],
  },
  "metal-stamping": {
    slug: "metal-stamping",
    navLabel: "Stamping",
    title: "Metal Stamping",
    metaTitle: "Coil-Fed Metal Stamping 60–220 Ton | Corona, CA | David Engineering",
    metaDescription:
      "Coil-fed metal stamping in Corona, CA. Punch presses from 60 to 220 tons with CNC digital feeders for consistent high-volume parts.",
    eyebrow: "Metal stamping — Corona, CA",
    heading: "Metal stamping built for repeatability.",
    intro:
      "Coil-fed presses from 60 to 220 tons with CNC digital feeder and coil handling. Simple blanks through complex forms, quoted for volume that cannot afford variation.",
    heroImage: {
      src: "/images/hero/hero.jpg",
      alt: "David Engineering & Manufacturing facility at 1230 Quarry Street, Corona",
    },
    stats: [
      { value: "60–220 t", label: "Coil-fed punch presses" },
      { value: "CNC feed", label: "Digital feeder & coil handling" },
      { value: "Volume", label: "High-volume consistent parts" },
      { value: "Secondary", label: "Value-added stamp operations" },
    ],
    whyTitle: "Stamping that stays on the feeder",
    whyIntro:
      "When the quantity justifies a die, coil-fed stamping beats laser on piece price. The same Corona shop still handles first articles, secondary ops, and weldments.",
    why: [
      {
        title: "60 to 220 ton presses",
        body: "Punch press capacity across that range for blanks and formed stampings.",
      },
      {
        title: "Coil-fed, digitally controlled",
        body: "CNC digital feeders and coil handling keep pitch and progression consistent.",
      },
      {
        title: "Secondary operations",
        body: "Value-added stamp work in-house so the part does not bounce between vendors.",
      },
      {
        title: "Laser when the die is not ready",
        body: "Fiber laser covers prototypes and bridge quantities before the stamp tool is released.",
      },
    ],
    specTitle: "Stamping envelope",
    specIntro:
      "Press range and feed method as run on the floor. Die design, material width, and progression are quoted from your tool or print.",
    specs: [
      { label: "Press capacity", value: "Coil-fed punch presses, 60 to 220 tons" },
      { label: "Feed", value: "CNC digital feeder and coil handling" },
      { label: "Work", value: "Simple blanks through complex forms" },
      { label: "Volume", value: "High-volume production with consistent quality" },
      { label: "Secondary", value: "In-house secondary stamping operations" },
      { label: "Bridge process", value: "Fiber laser for prototype and pre-tool quantities" },
      { label: "Quality system", value: "ISO 9001:2015" },
    ],
    extraTables: [
      {
        title: "How we usually quote stamp work",
        headers: ["Stage", "What we need"],
        rows: [
          ["Prototype / bridge", "STEP or DXF — may run on fiber laser first"],
          ["Production stamp", "Die information or print, coil spec, annual / release qty"],
          ["Secondary ops", "Hardware, tap, form, or weld notes on the same RFQ"],
          ["Due date", "Target date and whether a first article is required"],
        ],
      },
    ],
    industriesTitle: "Stamping programs we support",
    industries: [
      {
        title: "High-volume brackets and blanks",
        body: "Repeat parts that have left the laser nest for a coil-fed die.",
      },
      {
        title: "Consumer and industrial goods",
        body: "Consistent stampings that pick up finish and assembly in-house.",
      },
      {
        title: "Multi-process assemblies",
        body: "Stamp, then weld, insert hardware, or machine under one quality system.",
      },
    ],
    faqs: [
      {
        q: "What press tonnage do you have?",
        a: "Coil-fed punch presses from 60 to 220 tons.",
      },
      {
        q: "Do you run coil or blanks?",
        a: "Production stamping is coil-fed with CNC digital feeders. Laser can cover blank-fed prototypes.",
      },
      {
        q: "Can you build or maintain the die?",
        a: "Send the tool status with the RFQ. We quote from your die or print; we do not invent toolroom capabilities here.",
      },
      {
        q: "Is there a minimum?",
        a: "Stamping is priced for volume. Low quantities often start on the fiber lasers, then move to the press.",
      },
    ],
  },
  welding: {
    slug: "welding",
    navLabel: "Welding",
    title: "Welding",
    metaTitle: "Robotic MIG, TIG, Spot & Laser Welding | Corona, CA",
    metaDescription:
      "Robotic MIG welding up to 4×10 feet, plus MIG, TIG, spot, and laser welding in Corona, CA. Repeatable assemblies from prototype to production.",
    eyebrow: "Manual + robotic welding — Corona, CA",
    heading: "Welding built around your production.",
    intro:
      "Manual MIG and TIG for critical craftsmanship. Robotic MIG for repeatable, high-throughput assemblies up to 4 × 10 feet. Spot and laser welding when the joint calls for it.",
    heroImage: {
      src: "/images/hero/laser-hero.jpg",
      alt: "High-energy metal processing on the David Engineering floor",
    },
    stats: [
      { value: "4' × 10'", label: "Robotic MIG cell capacity" },
      { value: "MIG / TIG", label: "Manual weld for critical joints" },
      { value: "Spot + laser", label: "Additional weld processes in-house" },
      { value: "Repeatable", label: "Production assemblies, same fixture" },
    ],
    whyTitle: "Weldments that match the cut",
    whyIntro:
      "Tube laser tab-and-slot and sheet-laser blanks are only as good as the weld that locks them. The cell and the booth sit in the same Corona building.",
    why: [
      {
        title: "Robotic MIG to 4 × 10 ft",
        body: "Repeatable MIG-welded assemblies with capacity up to 4 × 10 feet.",
      },
      {
        title: "Manual MIG and TIG",
        body: "Craft joints and short-run weldments that do not belong on the robot.",
      },
      {
        title: "Spot and laser weld",
        body: "Additional processes in-house when the joint or cosmetic requirement needs them.",
      },
      {
        title: "Self-fixturing from the laser",
        body: "FL 170 copes, tabs, and 45° bevels drop into the weld fixture instead of a saw-and-grind stack.",
      },
    ],
    specTitle: "Welding envelope",
    specIntro:
      "Process list as run on the floor. Fixture design and joint details are quoted from the assembly model.",
    specs: [
      { label: "Robotic MIG", value: "Capacity up to 4' × 10'" },
      { label: "Manual processes", value: "MIG and TIG" },
      { label: "Additional", value: "Spot welding and laser welding" },
      { label: "Upstream", value: "Sheet laser, tube laser, forming, CNC, stamping" },
      { label: "Volume", value: "Prototype assemblies through production repeats" },
      { label: "Quality system", value: "ISO 9001:2015 in-process checks at each operation" },
    ],
    extraTables: [
      {
        title: "Process selection",
        headers: ["Process", "Typical use"],
        rows: [
          ["Robotic MIG", "Repeat weldments up to 4' × 10'"],
          ["Manual MIG", "Short run, heavy, or access-limited joints"],
          ["TIG", "Critical or cosmetic joints"],
          ["Spot welding", "Sheet assemblies that call for resistance welds"],
          ["Laser welding", "Joints specified for laser weld"],
        ],
      },
    ],
    gallery: [
      {
        src: "/images/tube/square-intersecting-holes.jpg",
        alt: "Tube laser part cut ready for weld fixture",
      },
      {
        src: "/images/tube/rectangular-radius-corners.jpg",
        alt: "Profile cut that drops into a weldment",
      },
    ],
    industriesTitle: "Assemblies we weld",
    industries: [
      {
        title: "Frames and bases",
        body: "Machine and equipment frames cut on the tube laser, welded in cell or booth.",
      },
      {
        title: "Guards and fabrications",
        body: "Sheet-and-tube assemblies that stay in Corona from blank to weld.",
      },
      {
        title: "Production repeats",
        body: "Same fixture, same robot path, same inspection checkpoints.",
      },
    ],
    faqs: [
      {
        q: "How large can a robotic weldment be?",
        a: "Robotic MIG cells handle assemblies up to 4 × 10 feet.",
      },
      {
        q: "Do you TIG as well as MIG?",
        a: "Yes. Manual MIG and TIG, plus spot and laser welding.",
      },
      {
        q: "Can you cut and weld the same job?",
        a: "Yes. Sheet laser, tube laser, forming, and welding are in one Corona shop.",
      },
      {
        q: "What should we upload?",
        a: "An assembly STEP plus a weld print (PDF or DWG). Upload on the quote form.",
      },
    ],
  },
  "finishing-services": {
    slug: "finishing-services",
    navLabel: "Finishing",
    title: "Finishing Services",
    metaTitle: "PEM, Powder Coat, Plating & Deburr | Corona, CA | David Engineering",
    metaDescription:
      "Hardware insertion, powder coating, plating, anodizing, line graining, deburring, and part marking in Corona, CA — finishing that ships with the fabrication.",
    eyebrow: "Production-ready finishing — Corona, CA",
    heading: "The details that make parts complete.",
    intro:
      "PEM hardware insertion, plating, powder coating, and coordinated finishing so parts leave fabrication ready to ship — not sitting in a second queue across town.",
    heroImage: {
      src: "/images/quality/inspection.jpg",
      alt: "In-process inspection of finished metal components",
    },
    stats: [
      { value: "PEM", label: "Hardware insertion" },
      { value: "Coat", label: "Powder, plate, anodize" },
      { value: "Prep", label: "Deburr and line grain" },
      { value: "Mark", label: "Laser etch and part mark" },
    ],
    whyTitle: "Finish in the same program as the cut",
    whyIntro:
      "A part is not done at the laser. Hardware, edge condition, and coating are scheduled with the fabrication so the packing list is the last step, not another vendor hunt.",
    why: [
      {
        title: "Hardware insertion",
        body: "PEM and related hardware pressed in-house so threads and stands are in place before finish or ship.",
      },
      {
        title: "Powder, plate, anodize",
        body: "Coordinated powder coating, plating, and anodizing on the same order.",
      },
      {
        title: "Edges that assemble",
        body: "Line graining and edge deburring so parts handle and weld without a secondary grind shop.",
      },
      {
        title: "Identification on the part",
        body: "Laser etching on laser-cut parts plus part marking and part-number stamping.",
      },
    ],
    specTitle: "Finishing envelope",
    specIntro:
      "Services we schedule with fabrication. Call out spec, color, and masking on the RFQ — we do not invent coating thicknesses here.",
    specs: [
      { label: "Hardware", value: "PEM / hardware insertion" },
      { label: "Coatings", value: "Powder coating, plating, and anodizing" },
      { label: "Edge prep", value: "Line graining and edge deburring" },
      { label: "Marking", value: "Laser etching on laser-cut parts; part marking" },
      { label: "Secondary fab", value: "Part-number stamping and tapping" },
      { label: "Release", value: "ISO 9001:2015 checks at each operation before pack" },
    ],
    extraTables: [
      {
        title: "Specify these on the RFQ",
        headers: ["Item", "What to include"],
        rows: [
          ["Hardware", "PEM part numbers, side, and quantity per assembly"],
          ["Powder / plate / anodize", "Spec, color or class, and mask notes"],
          ["Deburr / grain", "Cosmetic faces and edge break"],
          ["Marking", "Part number location and process (etch, stamp)"],
        ],
      },
    ],
    industriesTitle: "When finishing belongs on the same PO",
    industries: [
      {
        title: "Ready-to-assemble panels",
        body: "Hardware in, edges broken, finish applied, marked, and packed.",
      },
      {
        title: "Weldments that ship coated",
        body: "Weld in-house, then coordinate powder or plate without a second job shop.",
      },
      {
        title: "Traceable production",
        body: "Part marks and ISO 9001:2015 release on the same lot.",
      },
    ],
    faqs: [
      {
        q: "Do you insert PEM hardware?",
        a: "Yes. Hardware insertion is in-house. Put the PEM callouts on the drawing and the quote form.",
      },
      {
        q: "Is powder coating in-house?",
        a: "Powder coating, plating, and anodizing are scheduled as coordinated finishing on the order. Call out the spec on the RFQ.",
      },
      {
        q: "Can you laser-etch part numbers?",
        a: "Yes, laser etching on laser-cut parts, plus part marking and part-number stamping.",
      },
      {
        q: "Should hardware go in before coating?",
        a: "Tell us the assembly sequence. We will follow the print and the finish spec you provide.",
      },
    ],
  },
  quality: {
    slug: "quality",
    navLabel: "Quality",
    title: "Quality",
    metaTitle: "ISO 9001:2015 Quality System | David Engineering | Corona, CA",
    metaDescription:
      "ISO 9001:2015 registered quality system in Corona, CA. Planning, drawing, and rev checks before release, plus in-process inspection and SoCal truck delivery.",
    eyebrow: "Quality assurance — Corona, CA",
    heading: "Quality isn’t a checkpoint. It’s the system.",
    intro:
      "ISO 9001:2015 registered. Every job goes through planning, drawing, and rev checks before release to the floor, with in-process quality checks at each operation.",
    heroImage: {
      src: "/images/quality/iso-9001.png",
      alt: "ISO 9001:2015 certificate of registration for David Engineering & Manufacturing Inc.",
    },
    stats: [
      { value: "ISO 9001:2015", label: "Registered quality system" },
      { value: "Rev check", label: "Before the job hits the floor" },
      { value: "In-process", label: "Inspection at each operation" },
      { value: "SoCal trucks", label: "Own fleet plus freight and UPS" },
    ],
    whyTitle: "How quality actually runs here",
    whyIntro:
      "Quality does not wait for a final audit. Release, dashboards, and delivery are part of the same system.",
    why: [
      {
        title: "ISO 9001:2015 only",
        body: "Registered to ISO 9001:2015. We do not claim AS9100 or any other aerospace quality system.",
      },
      {
        title: "Released to print",
        body: "Planning checks plus drawing and revision checks before the job is released to the shop floor.",
      },
      {
        title: "Checks at each operation",
        body: "Once on the floor, parts receive quality checks at each operation so they stay to print.",
      },
      {
        title: "Live production dashboards",
        body: "Digital dashboards in the work areas show what is next, what is behind, and what changed — not a printed report that is already stale.",
      },
    ],
    specTitle: "Quality and delivery envelope",
    specIntro:
      "What the system covers. Certificate of registration is ISO 9001:2015 for this Corona site.",
    specs: [
      { label: "Registration", value: "ISO 9001:2015" },
      { label: "Certificate", value: "DENG-002-02-24-1 (issued 14 Feb 2024, expiry 13 Feb 2027)" },
      {
        label: "Scope",
        value:
          "Laser cutting, metal stamping, robot welding, fabrication, CNC milling, and forming of sheet metal components",
      },
      { label: "Not claimed", value: "No AS9100. No waterjet. No plasma." },
      { label: "Job release", value: "Planning, drawing, and revision checks before the floor" },
      { label: "In-process", value: "Quality checks at each operation" },
      { label: "Order comms", value: "Automated email when the order is entered, changed, and ships" },
      { label: "Delivery", value: "Own Southern California truck fleet, plus freight and UPS" },
    ],
    extraTables: [
      {
        title: "On-time visibility",
        headers: ["Tool", "What it does"],
        rows: [
          [
            "Department dashboards",
            "Show the next job and anything running behind estimated time",
          ],
          ["Live changes", "Schedule updates hit the floor in real time"],
          ["Order email", "Confirmation when the order is entered"],
          ["Ship alert", "Notice when the packing list is created"],
        ],
      },
    ],
    gallery: [
      {
        src: "/images/quality/iso-9001.png",
        alt: "ISO 9001:2015 certificate of registration",
      },
      {
        src: "/images/quality/shop-dashboard.jpg",
        alt: "Digital production dashboard on the shop floor",
      },
      {
        src: "/images/quality/inspection.jpg",
        alt: "Inspection of a manufactured component",
      },
      {
        src: "/images/hero/hero.jpg",
        alt: "David Engineering plant at 1230 Quarry Street, Corona, California",
      },
    ],
    industriesTitle: "Who this system is built for",
    industries: [
      {
        title: "Repeat production",
        body: "Same revision control and in-process checks from first article to the millionth part.",
      },
      {
        title: "Southern California delivery",
        body: "Our own trucks cover the local service area; freight and UPS cover the rest of CA / NV / AZ / UT.",
      },
      {
        title: "Practical collaboration",
        body: "A family-run Corona shop — people who answer the phone and stand behind the packing list.",
      },
    ],
    faqs: [
      {
        q: "What quality system are you registered to?",
        a: "ISO 9001:2015 only. We are not AS9100 registered.",
      },
      {
        q: "Do you inspect during the job or only at the end?",
        a: "Both. Jobs are revision-checked before release, then checked at each operation on the floor.",
      },
      {
        q: "How do we know the order is moving?",
        a: "You get an automated email when the order is entered. Changes and ship notices are sent the same way. Dashboards on the floor show live priority.",
      },
      {
        q: "Do you deliver with your own trucks?",
        a: "Yes. We run our own Southern California fleet, and we also ship freight and UPS.",
      },
    ],
  },
  "additional-services": {
    slug: "additional-services",
    navLabel: "Additional",
    title: "Additional Services",
    metaTitle: "Assembly, Hardware, Tapping & Packaging | David Engineering",
    metaDescription:
      "In-house assembly, packaging, hardware insertion, tapping, and part marking in Corona, CA — the extra operations that finish a multi-process job.",
    eyebrow: "Additional services — Corona, CA",
    heading: "The work that completes the job.",
    intro:
      "Hardware insertion, assembly and packaging, tapping, and part marking — the value-added operations that turn a cut part into a shippable assembly.",
    heroImage: {
      src: "/images/hero/hero.jpg",
      alt: "David Engineering & Manufacturing, Inc. in Corona, California",
    },
    stats: [
      { value: "Assemble", label: "Build and pack in Corona" },
      { value: "Hardware", label: "PEM insertion in-house" },
      { value: "Tap / stamp", label: "Part numbers and threads" },
      { value: "One PO", label: "Laser through ship" },
    ],
    whyTitle: "Keep the extras on the same order",
    whyIntro:
      "Most jobs are not a single process. These operations exist so a bracket, weldment, or stamping can leave 1230 Quarry Street complete.",
    why: [
      {
        title: "Assembly and packaging",
        body: "Build and pack here so kits land at your dock ready to issue.",
      },
      {
        title: "Hardware and tapping",
        body: "PEM insertion plus part-number stamping and tapping without a second stop.",
      },
      {
        title: "Full-process jobs",
        body: "Laser, tube laser, form, stamp, CNC, weld, and finish on one RFQ.",
      },
      {
        title: "Local delivery",
        body: "Own SoCal trucks when that is the fastest way to close the loop.",
      },
    ],
    specTitle: "Additional operations",
    specIntro:
      "Listed services only. If you need a process that is not here — including waterjet or plasma — we do not offer it.",
    specs: [
      { label: "Assembly", value: "Assembly and packaging" },
      { label: "Hardware", value: "Hardware insertion (PEM and related)" },
      { label: "Threads / IDs", value: "Tapping and part-number stamping" },
      { label: "Marking", value: "Laser etching on laser-cut parts; part marking" },
      { label: "Edge prep", value: "Line graining and edge deburring" },
      { label: "Finishes", value: "Powder coating, plating, and anodizing (coordinated)" },
      { label: "Not offered", value: "No waterjet. No plasma. No AS9100." },
    ],
    extraTables: [
      {
        title: "Build a complete RFQ",
        headers: ["Include", "Example"],
        rows: [
          ["Processes", "Laser + form + PEM + powder"],
          ["Quantities", "One, two, or three qty breaks"],
          ["Due date", "Need-by date on the form"],
          ["Files", "STEP / IGES / DXF / DWG / PDF uploaded with the request"],
        ],
      },
    ],
    industriesTitle: "Typical multi-process jobs",
    industries: [
      {
        title: "Kitted assemblies",
        body: "Cut, form, insert, and pack as a set.",
      },
      {
        title: "Finished fabrications",
        body: "Weld, coat, mark, and deliver on our trucks or common carrier.",
      },
      {
        title: "Bridge-to-stamp programs",
        body: "Laser first articles, then coil-fed production with the same secondary list.",
      },
    ],
    faqs: [
      {
        q: "Can one quote cover laser, form, weld, and finish?",
        a: "Yes. Choose Multiple / Full Assembly on the quote form and list the processes in the notes.",
      },
      {
        q: "Do you waterjet or plasma?",
        a: "No. Cutting here is fiber laser (sheet and tube).",
      },
      {
        q: "Will you assemble hardware?",
        a: "Hardware insertion is in-house. Call out PEM part numbers on the drawing.",
      },
      {
        q: "How do we send files?",
        a: "Upload STEP, IGES, DXF, DWG, or PDF on the quote form. The request is not complete until the files are attached.",
      },
    ],
  },
};
