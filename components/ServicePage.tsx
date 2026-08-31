import Image from "next/image";
import Link from "next/link";
import type { ServiceContent } from "@/lib/services";
import { site } from "@/lib/site";
import { QuoteCta } from "./QuoteCta";
import { DataTable, SpecTable } from "./SpecTable";

export function ServicePage({ service }: { service: ServiceContent }) {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
              {service.eyebrow}
            </p>
            <h1 className="font-display mt-4 text-5xl leading-[0.88] font-extrabold tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
              {service.heading}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-silver">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="bg-red px-6 py-3.5 text-center text-xs font-semibold tracking-[0.16em] text-white uppercase hover:bg-red-deep"
              >
                Request a Quote
              </Link>
              <a
                href="#specs"
                className="border border-white/25 px-6 py-3.5 text-center text-xs font-semibold tracking-[0.16em] text-white uppercase hover:border-white"
              >
                See Capabilities
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px] border-l-2 border-red lg:min-h-[420px]">
            <Image
              src={service.heroImage.src}
              alt={service.heroImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {service.stats.map((stat) => (
            <div key={stat.value} className="border-l-2 border-red pl-4">
              <p className="font-display text-3xl font-extrabold text-ink uppercase">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
            Why this process
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl leading-none font-extrabold text-ink uppercase sm:text-5xl">
            {service.whyTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink/70">{service.whyIntro}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.why.map((item, index) => (
              <article
                key={item.title}
                className="border border-ink/10 bg-white p-6"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-2xl font-extrabold text-ink uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SpecTable
            title={service.specTitle}
            intro={service.specIntro}
            rows={service.specs}
          />
          {service.extraTables?.map((table) => (
            <div key={table.title} className="mt-14">
              <DataTable
                title={table.title}
                headers={table.headers}
                rows={table.rows}
              />
            </div>
          ))}
        </div>
      </section>

      {service.gallery?.length ? (
        <section className="bg-cream">
          <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
              See the work
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-ink uppercase">
              From the Corona shop
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.gallery.map((image) => (
                <figure key={image.src} className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-2 text-xs text-white">
                    {image.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.industries?.length ? (
        <section className="bg-ink">
          <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
              Applications
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl font-extrabold text-white uppercase">
              {service.industriesTitle}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {service.industries.map((item, index) => (
                <article key={item.title} className="border border-white/10 p-6">
                  <p className="text-xs tracking-[0.14em] text-red">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-extrabold text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-silver">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-extrabold text-ink uppercase">
            Questions engineers ask
          </h2>
          <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="grid gap-3 py-6 md:grid-cols-[0.9fr_1.1fr]">
                <dt className="font-semibold text-ink">{faq.q}</dt>
                <dd className="text-sm leading-7 text-ink/70">{faq.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-ink/70">
            Talk to the shop:{" "}
            <a href={site.phoneHref} className="font-semibold text-red">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
