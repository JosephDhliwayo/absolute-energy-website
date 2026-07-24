import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolarPackagesTable from "@/components/SolarPackagesTable";
import SolarCalculatorForm from "@/components/connect/SolarCalculatorForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Solar Power Calculator | AE Connect",
  description:
    "Enter your appliances and quantities to get an instant Solar Array, Inverter and Battery Bank size for your home.",
};

export default function SolarCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="AE Connect: Solar Power"
        title="Size your residential solar power system"
        description="For reference, here's what a typical system in each size range usually contains. Then add your own appliances below to get your real result. The guide table doesn't pre-fill anything."
      />

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <SolarPackagesTable />
        </section>
      </Reveal>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-xl font-semibold text-ae-charcoal">Your Appliances</h2>
          <p className="mt-2 text-sm text-ae-warmgrey">
            For each appliance you use, enter how many you have and how many hours a day you run them. We&apos;ve
            suggested a typical power rating for each. Adjust it if you know your actual value.
          </p>
        </Reveal>
        <div className="mt-6">
          <SolarCalculatorForm />
        </div>
      </section>
    </>
  );
}
