import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Water Pumping Solutions | Absolute Energy",
  description:
    "Solar-driven piped water schemes of any size, engineered using hydraulic modelling and simulation for leading pump brands.",
};

const FACTS = [
  "Every pumping solution is engineered using hydraulic modelling and simulation, not rule-of-thumb sizing.",
  "We size and simulate for leading pump brands, including Grundfos, Lorentz, DAB and CRI, matching the correct pump curve to your borehole yield, total dynamic head (TDH) and daily water demand.",
  "Standard residential guide packages cover daily demand up to 20,000 litres/day; anything above this, or any community/agricultural scheme, requires a mandatory site assessment.",
];

const APPLICATIONS = [
  { title: "Household and small-holding borehole pumping", assessment: false },
  { title: "Livestock watering", assessment: false },
  { title: "Community piped water schemes", assessment: true },
  { title: "Irrigation & agricultural pumping", assessment: true },
];

export default function WaterPumpingPage() {
  return (
    <>
      <PageHero
        eyebrow="Water Pumping Solutions"
        title="Solar-driven piped water schemes of any size"
        description="From a single home's borehole pump to full community or agricultural irrigation schemes."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ul className="space-y-4">
          {FACTS.map((fact, i) => (
            <Reveal key={fact} delayMs={i * 80}>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ae-orange" />
                <span className="text-base leading-relaxed text-ae-warmgrey">{fact}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-ae-lightgrey">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-ae-charcoal">Applications</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {APPLICATIONS.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 70}>
                <div className="h-full rounded-xl bg-white p-5 transition-transform duration-200 hover:-translate-y-1">
                  <p className="font-semibold text-ae-charcoal">{item.title}</p>
                  {item.assessment && (
                    <p className="mt-2 inline-block rounded-full bg-ae-orange/10 px-3 py-1 text-xs font-semibold text-ae-orange">
                      Site assessment mandatory
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ae-charcoal">
            Get an indicative sizing for your borehole or scheme
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ae-warmgrey">
            Standard residential water pumping is guided up to 20,000 L/day. Community and agricultural
            schemes always go through a paid consultation and site assessment.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/packages"
              className="rounded-full border border-ae-charcoal px-6 py-2.5 text-sm font-semibold text-ae-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange"
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
