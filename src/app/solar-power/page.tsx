import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Solar Power Solutions | Absolute Energy",
  description:
    "Off-grid, hybrid and grid-tied solar power systems for residential, commercial & industrial, and agricultural clients.",
};

const SYSTEM_TYPES = [
  {
    title: "Off-Grid Systems",
    description:
      "For properties with no grid connection at all, or where the client wants total independence. Power comes entirely from solar panels and a battery bank.",
  },
  {
    title: "Hybrid Systems",
    description:
      "The most popular choice for load-shedding: solar panels and batteries work alongside the grid. The system prioritises solar and battery power, and only pulls from the grid when needed, cutting bills and giving backup power during outages.",
  },
  {
    title: "Grid-Tied Systems",
    description:
      "Panels feed power directly into the property in sync with the grid (batteries optional). This is the lowest-cost way to cut an electricity bill for properties with reliable grid supply and no need for outage backup.",
  },
];

const SCALE = [
  {
    title: "Residential",
    description: "Homes and small households, standard packages from 1 kVA up to 12 kVA.",
  },
  {
    title: "Commercial & Industrial (C&I)",
    description: "Shops, offices, factories, warehouses; always tailor-made following a site assessment.",
  },
  {
    title: "Agricultural",
    description: "Farms, irrigation and processing loads; always tailor-made following a site assessment.",
  },
];

export default function SolarPowerPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar Power Solutions"
        title="Matched to how you use electricity and how reliable your grid connection is"
        description="Absolute Energy designs and installs three types of solar power systems, from a single household to full industrial and agricultural scale."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {SYSTEM_TYPES.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 80}>
              <div className="h-full rounded-xl border border-white/15 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ae-orange/40">
                <h2 className="font-heading text-lg font-semibold text-ae-orange">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-white">Scale: Residential to Industrial</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {SCALE.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 80}>
                <div className="h-full rounded-xl bg-white p-6 transition-transform duration-200 hover:-translate-y-1">
                  <h3 className="font-heading text-base font-semibold text-ae-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm text-ae-warmgrey">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-white">See what size system you need</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Standard residential packages are pre-sized instantly in AE Connect. Anything larger, or C&amp;I
            and agricultural, is routed straight to an engineer.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/packages"
              className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange"
            >
              View Standard Packages
            </Link>
            <Link
              href="/get-solution"
              className="rounded-full bg-ae-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
            >
              Get My Solution
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}
