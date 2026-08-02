import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/connect/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact an Engineer | AE Connect",
  description:
    "Book a paid consultation for oversized residential, commercial & industrial, agricultural or specialist projects.",
};

export default async function ConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; kva?: string; litres?: string }>;
}) {
  const { type, kva, litres } = await searchParams;

  let context: string | undefined;
  if (kva) context = `Your calculated residential system requires approximately ${kva} kVA.`;
  if (litres) context = `Your daily water requirement of ${litres} L/day exceeds the standard residential guide.`;

  return (
    <>
      <PageHero
        eyebrow="AE Connect: Contact an Engineer"
        title="Book a paid consultation"
        description="For anything outside standard residential scope (oversized systems, commercial & industrial, agricultural, community schemes, and specialist services), an engineer reviews your project directly."
      />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <div className="rounded-xl bg-white p-6 sm:p-8">
          <ConsultationForm initialType={type} context={context} />
        </div>
      </section>
    </>
  );
}
