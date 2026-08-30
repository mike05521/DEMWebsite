import Link from "next/link";
import { site } from "@/lib/site";

export function QuoteCta() {
  return (
    <section className="bg-red">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-medium tracking-[0.18em] text-white uppercase">
          Bring us the part others call difficult.
        </p>
        <h2 className="font-display mt-5 max-w-5xl text-4xl leading-[0.9] font-extrabold tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
          Send your drawings, quantities, and target date.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
          Our team will review the job and get back to you with a practical path
          to production.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/quote"
            className="bg-white px-6 py-3.5 text-center text-xs font-semibold tracking-[0.16em] text-ink uppercase hover:bg-cream"
          >
            Start a Quote
          </Link>
          <a
            href={site.phoneHref}
            className="border border-white px-6 py-3.5 text-center text-xs font-semibold tracking-[0.16em] text-white uppercase hover:bg-white/10"
          >
            Call David Engineering
          </a>
        </div>
      </div>
    </section>
  );
}
