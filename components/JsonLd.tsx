import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    image: `${site.url}/images/logo/logo-wordmark.png`,
    url: site.url,
    telephone: site.phoneDisplay,
    faxNumber: site.fax,
    email: site.email,
    foundingDate: String(site.established),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: ["CA", "NV", "AZ", "UT"],
    hasCredential: site.iso,
    description:
      "Precision metal manufacturing in Corona, CA since 1972. Fiber laser cutting, tube laser, CNC, forming, stamping, welding, and finishing. ISO 9001:2015.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
