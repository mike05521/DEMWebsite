import Link from "next/link";
import { footerCapabilities, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-silver">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-wide text-white uppercase">
            {site.legalName}
          </p>
          <p className="mt-3 text-sm text-silver">{site.tagline}</p>
          <p className="mt-4 text-sm leading-7">
            <a
              href={site.mapsUrl}
              className="hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </a>
          </p>
          <p className="mt-3 text-sm leading-7">
            <a href={site.phoneHref} className="hover:text-white">
              {site.phoneDisplay}
            </a>
            <br />
            Fax {site.fax}
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white uppercase">
            Capabilities
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            {footerCapabilities.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white uppercase">
            Coverage
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>Corona, California</li>
            <li>{site.region}</li>
            <li>{site.iso} registered</li>
            <li>Own Southern California trucks</li>
          </ul>
          <Link
            href="/quote"
            className="mt-8 inline-block bg-red px-4 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-red-deep"
          >
            Request a Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>Est. {site.established} · Made in California</p>
        </div>
      </div>
    </footer>
  );
}
