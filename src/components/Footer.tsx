import Link from "next/link";
import Image from "next/image";

const SITE_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/solar-power", label: "Solar Power Solutions" },
  { href: "/water-pumping", label: "Water Pumping Solutions" },
  { href: "/consultancy", label: "Consultancy Services" },
  { href: "/packages", label: "Standard Packages" },
  { href: "/learn", label: "Learn / Solar Basics" },
  { href: "/contact", label: "Contact Us" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-full.png"
              alt="Absolute Energy - Powering Your Future"
              width={1090}
              height={182}
              className="h-6 w-auto sm:h-10"
            />
            <p className="mt-4 text-sm text-white/70">
              Clean energy engineering and consultancy across Zimbabwe and Africa: solar power and
              solar-driven water pumping, correctly engineered.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
              Site
            </h3>
            <ul className="mt-4 space-y-2">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-ae-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:+263773857530" className="hover:text-ae-orange">
                  +263 77 385 7530
                </a>
              </li>
              <li>
                <a href="tel:+12677925303" className="hover:text-ae-orange">
                  +1 267 792 5303
                </a>
              </li>
              <li>
                <a href="mailto:info@absoluteenergy.co.zw" className="hover:text-ae-orange">
                  info@absoluteenergy.co.zw
                </a>
              </li>
              <li>Harare, Zimbabwe</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
              Get Started
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Ready to size your system? Launch AE Connect and get your solar and water pumping estimate.
            </p>
            <Link
              href="/get-solution"
              className="mt-4 inline-block rounded-full bg-ae-orange px-5 py-2 text-sm font-semibold text-white hover:bg-ae-orange/90"
            >
              Get My Solution
            </Link>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap text-xs text-white/60 hover:text-ae-orange"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Absolute Energy (Private) Limited. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/terms" className="hover:text-ae-orange">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-ae-orange">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
