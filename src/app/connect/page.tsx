import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AE Connect | Absolute Energy",
  description:
    "Size your standard residential solar power or water pumping system instantly, or connect straight to an engineer.",
};

export default function ConnectLandingPage() {
  return (
    <>
      <PageHero
        eyebrow="AE Connect"
        title="Choose your path"
        description="Select what you need sized, then tell us whether it's a standard residential project or something larger, and we'll route you the right way automatically."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Solar Power */}
          <Reveal delayMs={0}>
            <div className="h-full rounded-2xl border border-ae-lightgrey p-6 transition-shadow duration-200 hover:shadow-lg sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-ae-charcoal">Solar Power</h2>
              <p className="mt-2 text-sm text-ae-warmgrey">
                Off-grid, hybrid or grid-tied, sized for your home&apos;s appliances.
              </p>

              <Link
                href="/connect/solar"
                className="mt-6 block rounded-xl bg-ae-orange px-5 py-4 text-center font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
              >
                Residential (Standard): Size My System
                <span className="mt-1 block text-xs font-normal text-white/85">Up to 12 kVA, instant result</span>
              </Link>

              <Link
                href="/connect/consultation?type=solar-ci"
                className="mt-3 block rounded-xl border border-ae-charcoal px-5 py-4 text-center font-semibold text-ae-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange"
              >
                Commercial &amp; Industrial (C&amp;I)
                <span className="mt-1 block text-xs font-normal text-ae-warmgrey">
                  Always a paid consultation + site assessment
                </span>
              </Link>

              <p className="mt-4 text-center text-xs text-ae-warmgrey">
                Prefer to skip the calculator?{" "}
                <Link href="/connect/consultation?type=solar-straight" className="font-semibold text-ae-orange">
                  Book a straight consultation ($10)
                </Link>
              </p>
            </div>
          </Reveal>

          {/* Water Pumping */}
          <Reveal delayMs={120}>
            <div className="h-full rounded-2xl border border-ae-lightgrey p-6 transition-shadow duration-200 hover:shadow-lg sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-ae-charcoal">Water Pumping</h2>
              <p className="mt-2 text-sm text-ae-warmgrey">
                Solar-driven borehole and piped water schemes, engineered to your site.
              </p>

              <Link
                href="/connect/water"
                className="mt-6 block rounded-xl bg-ae-orange px-5 py-4 text-center font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
              >
                Residential (Standard): Size My System
                <span className="mt-1 block text-xs font-normal text-white/85">
                  Up to 20,000 L/day, indicative result
                </span>
              </Link>

              <Link
                href="/connect/consultation?type=water-agricultural"
                className="mt-3 block rounded-xl border border-ae-charcoal px-5 py-4 text-center font-semibold text-ae-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange"
              >
                Irrigation, Agricultural &amp; Community Schemes
                <span className="mt-1 block text-xs font-normal text-ae-warmgrey">
                  Always a paid consultation + mandatory site assessment
                </span>
              </Link>

              <p className="mt-4 text-center text-xs text-ae-warmgrey">
                Prefer to skip the calculator?{" "}
                <Link href="/connect/consultation?type=water-residential" className="font-semibold text-ae-orange">
                  Book a straight consultation ($10)
                </Link>
              </p>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 text-center text-sm text-ae-warmgrey">
          Not sure which one? Read{" "}
          <Link href="/learn" className="font-semibold text-ae-orange">
            Solar Basics
          </Link>{" "}
          first, or{" "}
          <Link href="/contact" className="font-semibold text-ae-orange">
            contact us
          </Link>{" "}
          directly.
        </p>
      </section>
    </>
  );
}
