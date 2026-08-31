"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo/logo-wordmark.png"
            alt="David Engineering & Manufacturing"
            width={1171}
            height={204}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-x-4 xl:flex 2xl:gap-x-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[12px] font-medium tracking-[0.04em] text-silver transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/quote"
            className="bg-red px-3 py-2.5 text-center text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-red-deep sm:px-4 sm:text-[12px]"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white xl:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 left-0 block h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-ink xl:hidden">
          <div className="mx-auto grid max-w-[1440px] gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm tracking-[0.06em] text-silver uppercase hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-3 bg-red px-4 py-3 text-center text-xs font-semibold tracking-[0.14em] text-white uppercase"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
