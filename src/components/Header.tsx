"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/solar-power", label: "Solar Power" },
  { href: "/water-pumping", label: "Water Pumping" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/packages", label: "Standard Packages" },
  { href: "/learn", label: "Learn" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ae-charcoal text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo-full.png"
            alt="Absolute Energy - Powering Your Future"
            width={1090}
            height={182}
            priority
            className="h-6 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-ae-orange ${
                pathname === link.href ? "text-ae-orange" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block shrink-0">
          <Link
            href="/get-solution"
            className="whitespace-nowrap rounded-full bg-ae-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ae-orange/90"
          >
            Get My Solution
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="xl:hidden inline-flex items-center justify-center rounded-md p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`grid xl:hidden overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="border-t border-white/10 bg-ae-charcoal px-4 pb-4 pt-2 sm:px-6">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                    pathname === link.href ? "text-ae-orange" : "text-white/90 hover:text-ae-orange"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/get-solution"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ae-orange px-5 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-ae-orange/90"
              >
                Get My Solution
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
