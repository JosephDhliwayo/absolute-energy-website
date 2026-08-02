import Link from "next/link";
import Reveal from "@/components/Reveal";

const WHAT_WE_DO = [
  {
    title: "Solar Power Systems",
    description: "Off-grid, hybrid & grid-tied, residential to industrial.",
    href: "/solar-power",
  },
  {
    title: "Solar Water Pumping",
    description: "Boreholes, piped schemes, irrigation, any size.",
    href: "/water-pumping",
  },
  {
    title: "System Sizing Consultancy",
    description: "Accurate, engineered sizing, not guesswork.",
    href: "/consultancy",
  },
  {
    title: "Energy Audits",
    description: "Understand your bill, cut it, and go greener doing it.",
    href: "/consultancy",
  },
];

const WHY_US = [
  {
    title: "High-level technical expertise",
    description:
      "Hydraulic modelling & simulation for brands like Grundfos, Lorentz, DAB and CRI.",
  },
  {
    title: "Engineered sizing",
    description: "Every standard package is a guide; real projects get a real assessment.",
  },
  {
    title: "Local relevance",
    description: "Designed around Zimbabwean and African grid, water and climate realities.",
  },
];

const HOW_IT_WORKS = [
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

const BRANDS = ["Grundfos", "Lorentz", "DAB", "CRI"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ae-charcoal text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="animate-fade-in-up font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
            Powering Your Future
          </p>
          <h1
            className="animate-fade-in-up mt-3 max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Absolute Energy: Powering Your Future
          </h1>
          <p
            className="animate-fade-in-up mt-5 max-w-2xl text-lg text-white/80"
            style={{ animationDelay: "160ms" }}
          >
            Solar power and solar water pumping solutions for homes, farms and businesses across
            Zimbabwe and Africa.
          </p>
          <div
            className="animate-fade-in-up mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/get-solution"
              className="rounded-full bg-ae-orange px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90 hover:shadow-lg hover:shadow-ae-orange/20 active:translate-y-0"
            >
              Get My Solution
            </Link>
            <Link
              href="/get-solution"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange active:translate-y-0"
            >
              Talk to an Engineer
            </Link>
          </div>

          <div
            className="animate-fade-in-up mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8"
            style={{ animationDelay: "320ms" }}
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Engineered with globally recognised pump brands
            </span>
            {BRANDS.map((brand) => (
              <span key={brand} className="font-heading text-sm font-semibold text-white/70">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
                About Us
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                Zimbabwe and Africa&apos;s trusted name in solar energy and water pumping design
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Absolute Energy (Private) Limited is a Zimbabwe-based clean energy engineering and
                consultancy company serving Zimbabwe and the wider African region. We design, size and
                support the implementation of solar power and solar-driven water pumping solutions across
                residential, commercial, industrial and agricultural markets.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange"
              >
                More About Us
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl bg-ae-lightgrey p-5">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
                  Mission
                </h3>
                <p className="mt-2 text-sm text-ae-warmgrey">
                  Reliable, correctly-engineered clean energy and water pumping that lowers costs and
                  strengthens power security.
                </p>
              </div>
              <div className="rounded-xl bg-ae-lightgrey p-5">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
                  Vision
                </h3>
                <p className="mt-2 text-sm text-ae-warmgrey">
                  Every African household, farm and enterprise running on clean, self-generated power and
                  water.
                </p>
              </div>
              <div className="rounded-xl bg-ae-lightgrey p-5">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
                  Goal
                </h3>
                <p className="mt-2 text-sm text-ae-warmgrey">
                  Known for engineering accuracy, honest sizing, and measurable reductions in bills and
                  carbon footprint.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">What We Do</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_WE_DO.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 80}>
              <Link
                href={item.href}
                className="group block h-full rounded-xl border border-ae-lightgrey bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-ae-orange/40 hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-ae-charcoal group-hover:text-ae-orange">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ae-warmgrey">{item.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Absolute Energy */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Why Absolute Energy
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 80}>
                <div className="h-full rounded-xl bg-white p-6 transition-transform duration-200 hover:-translate-y-1">
                  <h3 className="font-heading text-base font-semibold text-ae-orange">{item.title}</h3>
                  <p className="mt-2 text-sm text-ae-warmgrey">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">How It Works</h2>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => (
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

      {/* Bottom CTA */}
      <section className="bg-ae-charcoal text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Ready to power your future?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              Get an engineered sizing estimate for your home, farm or business in minutes.
            </p>
            <Link
              href="/get-solution"
              className="mt-6 inline-block rounded-full bg-ae-orange px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90 hover:shadow-lg hover:shadow-ae-orange/20 active:translate-y-0"
            >
              Get My Solution
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
