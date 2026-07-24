import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SolarPackagesTable from "@/components/SolarPackagesTable";
import WaterPackagesTable from "@/components/WaterPackagesTable";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Standard Packages | Absolute Energy",
  description:
    "Indicative residential solar power (1-12 kVA) and residential water pumping (up to 20,000 L/day) guide tables.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Standard Packages"
        title="Indicative sizing guides for common residential setups"
        description="These tables are a starting point for orientation only. Your actual system is sized from your real appliances and site data in AE Connect."
      />

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ae-charcoal">Residential Solar Power</h2>
          <p className="mt-3 text-sm text-ae-warmgrey">
            Indicative sizes for common, standard residential setups, from 1 kVA up to 12 kVA.
          </p>
          <div className="mt-6">
            <SolarPackagesTable />
          </div>
        </section>
      </Reveal>

      <section className="bg-ae-lightgrey">
        <Reveal>
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-heading text-2xl font-bold text-ae-charcoal">Residential Water Pumping</h2>
            <p className="mt-3 text-sm text-ae-warmgrey">
              Standard residential water pumping/irrigation packages guided up to 20,000 litres per day.
              Because pumping is far more site-sensitive than power, AE Connect always asks for borehole
              depth, distance from storage to pump location, total dynamic head (TDH), daily water requirement
              and available power source, even for a standard package.
            </p>
            <div className="mt-6">
              <WaterPackagesTable />
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ae-charcoal">
            These tables aren&apos;t a shortcut
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ae-warmgrey">
            There is no package you can simply pick. Every client enters their own appliances or site details
            in AE Connect to get a real, sized result.
          </p>
          <Link
            href="/get-solution"
            className="mt-6 inline-block rounded-full bg-ae-orange px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
          >
            Get My Solution
          </Link>
        </section>
      </Reveal>
    </>
  );
}
