export const site = {
  legalName: "David Engineering & Manufacturing, Inc.",
  shortName: "David Engineering",
  tagline: "Precision metal manufacturing since 1972",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://davidengineering.com",
  phoneDisplay: "951-735-5200",
  phoneHref: "tel:9517355200",
  fax: "951-737-4982",
  email: "sales@davidengineering.com",
  established: 1972,
  iso: "ISO 9001:2015",
  address: {
    street: "1230 Quarry St",
    city: "Corona",
    state: "CA",
    zip: "92879",
    full: "1230 Quarry St, Corona, CA 92879",
  },
  region: "CA / NV / AZ / UT",
  mapsUrl:
    "https://maps.google.com/?q=1230+Quarry+St,+Corona,+CA+92879",
} as const;

export const navLinks = [
  { href: "/sheet-laser-cutting", label: "Sheet Laser" },
  { href: "/tube-laser-cutting", label: "Tube Laser" },
  { href: "/cnc-machining", label: "CNC" },
  { href: "/forming", label: "Forming" },
  { href: "/metal-stamping", label: "Stamping" },
  { href: "/welding", label: "Welding" },
  { href: "/finishing-services", label: "Finishing" },
  { href: "/quality", label: "Quality" },
  { href: "/additional-services", label: "Additional" },
] as const;

export const footerCapabilities = [
  { href: "/sheet-laser-cutting", label: "Sheet Laser" },
  { href: "/tube-laser-cutting", label: "Tube Laser" },
  { href: "/cnc-machining", label: "CNC Machining" },
  { href: "/forming", label: "Forming" },
  { href: "/metal-stamping", label: "Stamping" },
  { href: "/welding", label: "Welding" },
  { href: "/finishing-services", label: "Finishing" },
  { href: "/quality", label: "Quality" },
  { href: "/additional-services", label: "Additional Services" },
] as const;

export const quoteServices = [
  "Sheet Laser Cutting",
  "Tube Laser Cutting",
  "CNC Machining",
  "Forming / Precision Bending",
  "Metal Stamping",
  "Robotic / MIG Welding",
  "TIG Welding",
  "Finishing",
  "Hardware Insertion",
  "Multiple / Full Assembly",
  "Other",
] as const;

export const quoteMaterials = [
  "Mild Steel / Cold Rolled",
  "Hot Rolled Steel",
  "Stainless Steel",
  "Aluminum",
  "Copper / Brass",
  "Galvanized / Coated",
  "Other / TBD",
] as const;

export const acceptedDrawingExt = [
  ".step",
  ".stp",
  ".iges",
  ".igs",
  ".dxf",
  ".dwg",
  ".pdf",
] as const;

export const maxUploadBytes = 20 * 1024 * 1024;
export const maxUploadFiles = 5;
