import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Absolute Energy",
  description:
    "Get in touch with Absolute Energy by phone, email or WhatsApp, or send a message about solar power, water pumping, consultancy or an energy audit.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your project"
        description="Reach out directly, or send us a message and we'll get back to you."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-heading text-xl font-semibold text-white">Direct Contact</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <span className="block font-semibold text-white">Phone</span>
                <a href="tel:+263773857530" className="text-white/70 hover:text-ae-orange">
                  +263 77 385 7530
                </a>
                <br />
                <a href="tel:+12677925303" className="text-white/70 hover:text-ae-orange">
                  +1 267 792 5303
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">Email</span>
                <a href="mailto:info@absoluteenergy.co.zw" className="text-white/70 hover:text-ae-orange">
                  info@absoluteenergy.co.zw
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">WhatsApp</span>
                <a
                  href="https://wa.me/263773857530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-ae-orange"
                >
                  +263 77 385 7530
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">Address</span>
                <span className="text-white/70">Harare, Zimbabwe</span>
              </li>
            </ul>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl border border-ae-lightgrey bg-ae-lightgrey">
              <iframe
                title="Absolute Energy location map"
                className="h-full w-full"
                loading="lazy"
                src="https://maps.google.com/maps?q=Harare%2C%20Zimbabwe&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          <div className="rounded-xl border border-ae-lightgrey bg-white p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-ae-charcoal">Send a Message</h2>
            <div className="mt-6">
              <ContactForm initialInterest={interest} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
