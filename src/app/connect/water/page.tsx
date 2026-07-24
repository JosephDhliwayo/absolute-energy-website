import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WaterPackagesTable from "@/components/WaterPackagesTable";
import WaterCalculatorForm from "@/components/connect/WaterCalculatorForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Water Pumping Calculator | AE Connect",
  description:
    "Enter your site data to get an indicative solar array size and daily pumping energy for your borehole or irrigation project.",
};

export default function WaterCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="AE Connect: Water Pumping"
        title="Size your residential water pumping system"
        description="For reference, here's what typical daily demand ranges look like. Then enter your own site data below. Pumping is far more site-sensitive than power, so we need the full picture even for a standard package."
      />

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <WaterPackagesTable />
        </section>
      </Reveal>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-xl font-semibold text-ae-charcoal">Your Site Data</h2>
          <p className="mt-2 text-sm text-ae-warmgrey">
            Tell us about your borehole, storage location and daily requirement to get an indicative sizing.
          </p>
        </Reveal>
        <div className="mt-6">
          <WaterCalculatorForm />
        </div>
      </section>
    </>
  );
}
