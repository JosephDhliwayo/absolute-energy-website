import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Consultancy Services | Absolute Energy",
  description:
    "Independent solar system sizing consultancy and energy audits: a conversation starter, backed by engineering expertise.",
};

const AUDIT_GOALS = [
  "Lower your monthly electricity bill.",
  "Increase your power reliability.",
  "Reduce stress on the national grid.",
  "Reduce your carbon footprint and open the door to clean, sustainable power.",
];

export default function ConsultancyPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultancy Services"
        title="Independent, engineering-based advice"
        description="For clients who want a second opinion, a custom design outside our standard packages, or a clear-eyed look at their electricity bill."
      />

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ae-charcoal">Solar System Sizing Consultancy</h2>
          <p className="mt-4 text-base leading-relaxed text-ae-warmgrey">
            Independent, engineering-based sizing advice for clients who want a second opinion or a custom
            design outside our standard packages, covering load calculations, array/inverter/battery
            selection, and system architecture (off-grid, hybrid or grid-tied).
          </p>
        </section>
      </Reveal>

      <section className="bg-ae-lightgrey">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-ae-charcoal">Energy Audits</h2>
            <p className="mt-4 text-base leading-relaxed text-ae-warmgrey">
              We review your current electricity bill and usage pattern, and show you, in plain terms, the
              options available to reduce your costs and increase your power reliability. This can include
              efficiency changes, load management, battery backup, or a partial or full renewable energy
              switch.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {AUDIT_GOALS.map((goal, i) => (
              <Reveal key={goal} delayMs={i * 70}>
                <div className="flex h-full items-start gap-3 rounded-xl bg-white p-4 transition-transform duration-200 hover:-translate-y-1">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ae-orange" />
                  <p className="text-sm text-ae-charcoal">{goal}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-sm italic text-ae-warmgrey">
            An audit is a conversation starter, not a DIY tool. Actual bill review happens through a
            consultation booked via AE Connect.
          </p>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ae-charcoal">Start the conversation</h2>
          <p className="mx-auto mt-3 max-w-xl text-ae-warmgrey">
            Book a consultation or an energy audit directly through AE Connect.
          </p>
          <Link
            href="/get-solution"
            className="mt-6 inline-block rounded-full bg-ae-orange px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
          >
            Talk to an Engineer
          </Link>
        </section>
      </Reveal>
    </>
  );
}
