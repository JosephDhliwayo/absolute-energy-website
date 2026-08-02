import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Learn / Solar Basics | Absolute Energy",
  description:
    "Plain-English education on solar systems, resistive vs inductive appliances, and why runtime matters, before you use AE Connect.",
};

const COMPONENTS = [
  {
    title: "Solar Panels (the Array)",
    description: "Capture sunlight and convert it into electricity.",
  },
  {
    title: "Battery Bank",
    description: "Stores that electricity so it can be used at night or when there's no sun.",
  },
  {
    title: "Inverter",
    description:
      "Converts the stored/solar electricity into the everyday power your appliances use, and is the single number (in kVA or kW) that tells you “how big” your system is.",
  },
];

const APPLIANCE_TYPES = [
  {
    type: "Resistive",
    meaning: "Draws power steadily, no extra kick needed to start.",
    examples: "Lighting, TV, phone/laptop chargers, microwave",
  },
  {
    type: "Inductive",
    meaning:
      "Has a motor or compressor, needs an extra surge of power to start up, even though it settles down once running.",
    examples: "Air conditioners, refrigerators/freezers, borehole & booster pumps",
  },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Solar Basics"
        description="A quick, plain-English primer before you size your own system in AE Connect."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-white">What Is a Solar System?</h2>
          <p className="mt-3 text-base text-white/70">Every solar power system is built from three core components:</p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {COMPONENTS.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 90}>
              <div className="h-full rounded-xl border border-white/15 p-6 transition-transform duration-200 hover:-translate-y-1">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ae-orange font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ae-lightgrey">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-ae-charcoal">Not All Appliances Are Equal</h2>
            <p className="mt-3 text-base leading-relaxed text-ae-warmgrey">
              Not every appliance places the same demand on a solar system. Two homes with the exact same
              total wattage can still need very different system sizes. Here&apos;s why:
            </p>
          </Reveal>

          <div className="mt-8 overflow-x-auto rounded-xl border border-ae-lightgrey bg-white">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-ae-charcoal text-white">
                <tr>
                  <th className="px-4 py-3 font-heading font-semibold">Type</th>
                  <th className="px-4 py-3 font-heading font-semibold">In Simple Terms</th>
                  <th className="px-4 py-3 font-heading font-semibold">Common Examples</th>
                </tr>
              </thead>
              <tbody>
                {APPLIANCE_TYPES.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-ae-lightgrey"}>
                    <td className="px-4 py-3 font-semibold text-ae-charcoal">{row.type}</td>
                    <td className="px-4 py-3 text-ae-warmgrey">{row.meaning}</td>
                    <td className="px-4 py-3 text-ae-warmgrey">{row.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-ae-warmgrey">
            <strong className="text-ae-charcoal">Why does this matter to you?</strong> Appliances with a
            motor or compressor need an extra kick of power just to switch on. Our calculator automatically
            adds this safety margin, so your system starts everything in your home reliably. You don&apos;t
            need to work out anything yourself.
          </p>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-white">Runtime Matters</h2>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            The longer an appliance runs each day, the more energy your battery needs to store. Tell us the
            hours you actually use each appliance, not the longest possible time, and we&apos;ll size a
            battery that fits your real day, not an oversized, overpriced one.
          </p>

          <div className="mt-12 rounded-xl bg-ae-lightgrey p-6 text-center">
            <p className="text-sm text-ae-warmgrey">Ready to size your own system?</p>
            <Link
              href="/get-solution"
              className="mt-3 inline-block rounded-full bg-ae-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
            >
              Get My Solution
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}
