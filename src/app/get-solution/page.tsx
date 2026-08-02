import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Get My Solution | Absolute Energy",
  description:
    "Launch AE Connect to size your solar power or water pumping system, or talk directly to an engineer.",
};

const STEPS = [
  {
    step: "1",
    title: "Tell us your needs",
    description: "Select your appliances or water needs and enter the quantities that match your home.",
  },
  {
    step: "2",
    title: "Get sized instantly",
    description:
      "Get your Solar Array, Inverter and Battery Bank sizes instantly, or, for larger, commercial or agricultural needs, get connected straight to an engineer.",
  },
  {
    step: "3",
    title: "Move forward",
    description: "Move forward to quotation and installation, backed by our engineering expertise.",
  },
];

export default function GetSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Solution"
        title="AE Connect: our sizing & quotation app"
        description="AE Connect sizes your solar power or water pumping system instantly, or routes you straight to an engineer for anything outside standard scope."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-white">How It Works</h2>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} delayMs={i * 100}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ae-orange font-heading text-lg font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delayMs={0}>
              <div className="h-full rounded-xl bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-heading text-lg font-semibold text-ae-charcoal">
                  Size a standard residential system
                </h3>
                <p className="mt-2 text-sm text-ae-warmgrey">
                  Solar power up to 12 kVA, or water pumping up to 20,000 L/day. Enter your own appliances or
                  site data and get an instant result in AE Connect.
                </p>
                <Link
                  href="/connect"
                  className="mt-4 inline-block rounded-full bg-ae-orange px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
                >
                  Get My Solution
                </Link>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="h-full rounded-xl bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-heading text-lg font-semibold text-ae-charcoal">
                  Talk to an engineer
                </h3>
                <p className="mt-2 text-sm text-ae-warmgrey">
                  For C&amp;I, agricultural, community schemes, oversized residential systems, or a specialist
                  service, this always goes through a paid consultation and, where required, a site
                  assessment.
                </p>
                <Link
                  href="/connect/consultation"
                  className="mt-4 inline-block rounded-full border border-ae-charcoal px-5 py-2 text-sm font-semibold text-ae-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange"
                >
                  Talk to an Engineer
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
