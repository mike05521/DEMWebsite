import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { homeCapabilities } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precision Laser Cutting & Metal Fabrication in Corona, CA",
  description:
    "David Engineering & Manufacturing — precision laser cutting and metal fabrication in Corona, CA since 1972. ISO 9001:2015. Serves CA, NV, AZ, and UT.",
};

const cardTone = {
  ink: "bg-ink text-white",
  red: "bg-red text-white",
  cream: "bg-cream-card text-ink",
} as const;

const numberTone = {
  ink: "text-red",
  red: "text-white/70",
  cream: "text-red",
} as const;

const linkTone = {
  ink: "text-white",
  red: "text-white",
  cream: "text-ink",
} as const;

export default function HomePage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-medium tracking-[0.2em] text-red uppercase">
              Precision metal manufacturing — Corona, CA
            </p>
            <h1 className="font-display mt-5 text-[clamp(3.2rem,8vw,7.4rem)] leading-[0.82] font-extrabold tracking-tight text-white uppercase">
              Precision
              <br />
              Laser
              <br />
              Cutting
              <br />
              and Metal
              <br />
              Fabrication
              <br />
              in Corona.
            </h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-silver">
              From one-off prototypes to million-part production runs. Fiber
              laser, tube laser, CNC, forming, stamping, and welding — ISO
              9001:2015, family-owned since {site.established}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="bg-red px-6 py-3.5 text-center text-xs font-semibold tracking-[0.16em] text-white uppercase hover:bg-red-deep"
              >
                Request a Quote
              </Link>
              <Link
                href="#capabilities"
                className="border border-white/25 px-6 py-3.5 text-center text-xs font-semibold tracking-[0.16em] text-white uppercase hover:border-white"
              >
                Explore Capabilities
              </Link>
            </div>
            <dl className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <dt className="font-display text-3xl font-extrabold text-white">53+</dt>
                <dd className="mt-1 text-xs tracking-[0.12em] text-silver uppercase">
                  Years
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl font-extrabold text-white">
                  ISO 9001
                </dt>
                <dd className="mt-1 text-xs tracking-[0.12em] text-silver uppercase">
                  Registered
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl font-extrabold text-white">
                  1 → 1M
                </dt>
                <dd className="mt-1 text-xs tracking-[0.12em] text-silver uppercase">
                  Part to million
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative min-h-[360px] border-l-2 border-red lg:min-h-full">
            <Image
              src="/images/hero/laser-hero.jpg"
              alt="Laser cutting sparks on sheet metal at David Engineering in Corona"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <p className="mx-auto max-w-[1440px] px-4 py-4 text-center text-[11px] font-medium tracking-[0.16em] text-ink uppercase sm:px-6 sm:text-xs">
          Est. 1972 / ISO 9001 / Made in California / Prototype to production /
          Automated for speed
        </p>
      </section>

      <section id="capabilities" className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
            01 / Capabilities
          </p>
          <h2 className="font-display mt-3 max-w-4xl text-4xl leading-[0.9] font-extrabold text-ink uppercase sm:text-6xl">
            One shop. Every critical process.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homeCapabilities.map((card) => (
              <article
                key={card.number}
                className={`flex min-h-[280px] flex-col p-7 ${cardTone[card.tone]}`}
              >
                <p
                  className={`text-xs font-semibold tracking-[0.16em] ${numberTone[card.tone]}`}
                >
                  {card.number}
                </p>
                <h3 className="font-display mt-6 text-3xl leading-none font-extrabold uppercase">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 opacity-85">{card.body}</p>
                <Link
                  href={card.href}
                  className={`mt-auto pt-8 text-[11px] font-semibold tracking-[0.16em] uppercase ${linkTone[card.tone]}`}
                >
                  See Capabilities
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="relative aspect-[16/10] border-l-2 border-red">
            <Image
              src="/images/equipment/bystronic-fl170.jpg"
              alt="Bystronic FL170 3D fiber tube laser"
              fill
              className="object-contain bg-white p-6"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
              02 / Equipment
            </p>
            <p className="mt-3 text-sm text-silver">Bystronic FL170 Tube Laser</p>
            <h2 className="font-display mt-2 text-4xl leading-[0.9] font-extrabold text-white uppercase sm:text-5xl">
              Complex profiles. Clean cuts. Less handling.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-silver">
              High-speed tube processing that consolidates cutting, drilling, and
              shaping into one automated workflow.
            </p>
            <ul className="mt-6 grid gap-2 text-xs tracking-[0.12em] text-white uppercase">
              <li>6-axis precision</li>
              <li>Automated loading + unloading</li>
              <li>Round tube up to 6.6 in / square tube up to 5.5 in</li>
              <li>Angle to 3.94 in · channel to 5.51 in</li>
            </ul>
            <Link
              href="/tube-laser-cutting"
              className="mt-8 inline-block bg-red px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-white uppercase hover:bg-red-deep"
            >
              See Tube Laser Capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
            03 / Quality
          </p>
          <h2 className="font-display mt-3 max-w-4xl text-4xl leading-[0.9] font-extrabold text-ink uppercase sm:text-5xl">
            Quality isn’t a checkpoint. It’s the system.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-ink/70">
            ISO 9001:2015-registered processes, modern equipment, and disciplined
            inspection keep parts consistent from first article to full
            production.
          </p>
          <p className="mt-6 text-xs tracking-[0.14em] text-ink/50 uppercase">
            ISO 9001 · Process control · Repeatability · Traceability · Corona, CA
          </p>
          <Link
            href="/quality"
            className="mt-8 inline-block border border-ink px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-ink uppercase hover:bg-ink hover:text-white"
          >
            Quality System
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.18em] text-red uppercase">
            04 / How we work
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Send your files", "Upload STEP, IGES, DXF, DWG, or PDF with quantities and a due date."],
              ["02", "Engineering review", "We confirm process, envelope, and a practical path to production."],
              ["03", "Precision production", "Laser, form, machine, stamp, and weld under one roof."],
              ["04", "Inspect & deliver", "In-process checks, then our SoCal trucks, freight, or UPS."],
            ].map(([num, title, body]) => (
              <article key={num} className="border border-ink/10 p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-red">{num}</p>
                <h3 className="font-display mt-3 text-2xl font-extrabold text-ink uppercase">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
