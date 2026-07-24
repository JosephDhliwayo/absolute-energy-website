import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us | Absolute Energy",
  description:
    "Absolute Energy is a Zimbabwe-based clean energy engineering and consultancy company serving Zimbabwe and the wider African region.",
};

const WHAT_WE_DO = [
  {
    title: "Solar power systems",
    description:
      "Off-grid, hybrid and grid-tied, sized for residential, commercial & industrial (C&I) and agricultural clients.",
  },
  {
    title: "Solar-driven water pumping and piped water schemes",
    description:
      "From a single household borehole to full community or irrigation schemes, with hydraulic modelling and simulation in brand-specific software (Grundfos, Lorentz, DAB, CRI, etc.).",
  },
  {
    title: "Consultancy",
    description:
      "Solar system sizing and independent energy audits, reviewing a client's current electricity bill and usage pattern and advising on the most cost-effective mix of efficiency, backup and renewable generation.",
  },
  {
    title: "Site assessments and tailor-made design",
    description:
      "For any project outside standard residential scope (C&I, agricultural, community schemes, and any residential system above 12kVA).",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Zimbabwe and Africa's trusted name in solar energy and water pumping design"
        description="Engineering accuracy, honest sizing, and measurable reductions in our clients' electricity bills and carbon footprint."
      />

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ae-charcoal">Who We Are</h2>
          <p className="mt-4 text-base leading-relaxed text-ae-warmgrey">
            Absolute Energy (Private) Limited is a Zimbabwe-based clean energy engineering and consultancy
            company serving Zimbabwe and the wider African region. We design, size and support the
            implementation of solar power and solar-driven water pumping solutions across residential,
            commercial, industrial and agricultural markets, and we provide independent consultancy in solar
            system sizing and energy auditing.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ae-warmgrey">
            Our scope covers off-grid, hybrid and grid-tied solar power systems, and solar-driven piped water
            schemes of any size, engineered using hydraulic modelling and simulation software for globally
            recognised pump brands including Grundfos, Lorentz, DAB and CRI, among others.
          </p>
        </section>
      </Reveal>

      <section className="bg-ae-lightgrey">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="h-full rounded-xl bg-ae-charcoal p-6 text-white transition-transform duration-200 hover:-translate-y-1">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
                  Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  To deliver reliable, correctly-engineered clean energy and water pumping solutions that
                  lower energy costs, strengthen power security, and make renewable energy accessible to
                  every home, farm and business across Zimbabwe and Africa.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="h-full rounded-xl bg-ae-charcoal p-6 text-white transition-transform duration-200 hover:-translate-y-1">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
                  Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  A future where every African household, farm and enterprise runs on clean, self-generated
                  power and water: reliable, affordable, and independent of a strained grid.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="h-full rounded-xl bg-ae-charcoal p-6 text-white transition-transform duration-200 hover:-translate-y-1">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
                  Goal
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  To become Zimbabwe and Africa&apos;s most trusted name in solar energy and solar water
                  pumping design, known for engineering accuracy, honest sizing, and measurable reductions in
                  our clients&apos; electricity bills and carbon footprint.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-ae-charcoal">What We Actually Do</h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {WHAT_WE_DO.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 70}>
              <div className="border-l-4 border-ae-orange pl-4">
                <h3 className="font-heading text-base font-semibold text-ae-charcoal">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ae-warmgrey">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-xl bg-ae-lightgrey p-6 text-center">
            <p className="text-sm text-ae-warmgrey">Ready to see what a solution looks like for you?</p>
            <Link
              href="/get-solution"
              className="mt-3 inline-block rounded-full bg-ae-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
            >
              Get My Solution
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
