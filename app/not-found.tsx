import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.18em] text-red uppercase">404</p>
        <h1 className="font-display mt-4 text-6xl font-extrabold text-white uppercase">
          Page not found.
        </h1>
        <p className="mt-4 max-w-lg text-silver">
          That route is not on this site. Head back to capabilities or send a
          quote.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="bg-red px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase"
          >
            Home
          </Link>
          <Link
            href="/quote"
            className="border border-white/25 px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
