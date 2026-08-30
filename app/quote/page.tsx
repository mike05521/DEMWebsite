import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Upload STEP, IGES, DXF, DWG, or PDF drawings and request a quote from David Engineering in Corona, CA. Name, company, material, quantity, and due date.",
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
            Request a quote — Corona, CA
          </p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[0.88] font-extrabold text-white uppercase sm:text-7xl">
            Send the drawing with the request.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-silver">
            Name, company, email, phone, service, material, quantity, due date,
            and notes. Attach STEP, IGES, DXF, DWG, or PDF here — the files
            travel with the form.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <QuoteForm />
          <aside className="h-fit bg-ink p-8 text-silver">
            <p className="text-xs tracking-[0.16em] text-red uppercase">Shop</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-white uppercase">
              {site.shortName}
            </h2>
            <p className="mt-4 text-sm leading-7">
              {site.address.full}
              <br />
              <a href={site.phoneHref} className="text-white hover:underline">
                {site.phoneDisplay}
              </a>
              <br />
              Fax {site.fax}
              <br />
              <a href={`mailto:${site.email}`} className="text-white hover:underline">
                {site.email}
              </a>
            </p>
            <ul className="mt-6 grid gap-2 text-sm">
              <li>ISO 9001:2015 registered</li>
              <li>No minimum order quantity</li>
              <li>Own Southern California trucks</li>
              <li>Serves {site.region}</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
