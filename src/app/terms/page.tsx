import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions | Absolute Energy",
  description:
    "Terms and conditions for using the Absolute Energy website and AE Connect sizing application.",
};

const LAST_UPDATED = "25 July 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Last updated: ${LAST_UPDATED}`}
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-xl bg-ae-lightgrey p-5 text-sm text-ae-warmgrey">
          This is a general-purpose draft prepared for the Absolute Energy website and AE Connect
          application. It should be reviewed by qualified legal counsel, and adjusted to reflect
          Absolute Energy&apos;s actual business practices, before being relied on as legally binding.
        </div>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/70">
          <div>
            <h2 className="font-heading text-lg font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="mt-3">
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Absolute Energy
              (Private) Limited website and the AE Connect sizing and quotation application
              (together, the &quot;Services&quot;). By accessing or using the Services, you agree to be
              bound by these Terms. If you do not agree, please do not use the Services.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">2. About Our Services</h2>
            <p className="mt-3">
              Absolute Energy is a Zimbabwe-based clean energy engineering and consultancy company. Our
              website provides information about our solar power, solar water pumping, consultancy and
              energy audit services. AE Connect is an interactive tool that pre-sizes standard
              residential solar power and water pumping systems, and routes projects outside standard
              residential scope to a paid engineering consultation.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              3. AE Connect Results Are Indicative
            </h2>
            <p className="mt-3">
              Any Solar Array, Inverter, Battery Bank, or water pumping sizing figures produced by AE
              Connect are indicative, guide-level estimates based on the information you provide. They
              are not a final engineering design, a quotation, or a guarantee of system performance.
              Standard package guide tables shown in the App and on this website are for orientation
              only and do not constitute a specific recommendation for your property. Final designs,
              equipment selection and pricing are confirmed through consultation with Absolute Energy
              and, where applicable, a site assessment.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              4. Accuracy of Information You Provide
            </h2>
            <p className="mt-3">
              You are responsible for the accuracy of the appliance, site and usage information you
              enter into AE Connect. Incorrect or incomplete information (for example, appliance power
              ratings, runtime hours, borehole depth, or daily water requirement) will produce an
              inaccurate result. Absolute Energy is not liable for outcomes arising from inaccurate
              information supplied by you.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              5. Consultation Fees &amp; Payments
            </h2>
            <p className="mt-3">
              Certain projects (oversized residential systems, commercial &amp; industrial, agricultural,
              community schemes, and specialist services) require a paid consultation before a written
              solution is released, at the fee shown to you at the time of booking. Fees are payable in
              advance through our integrated payment process. Except where required by law, consultation
              fees are non-refundable once a written solution has been provided. If you believe you have
              been charged in error, contact us using the details below and we will review your request.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">6. Use of the Website</h2>
            <p className="mt-3">
              You agree to use the Services only for lawful purposes, and not to interfere with the
              proper functioning of the website or AE Connect, attempt to gain unauthorised access to
              any part of the Services, or submit false or misleading information through our forms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">7. Intellectual Property</h2>
            <p className="mt-3">
              The Absolute Energy name, logo, brand assets, website content and the AE Connect
              application are the property of Absolute Energy (Private) Limited or its licensors, and
              are protected by applicable intellectual property law. You may not reproduce, distribute or
              create derivative works from this content without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              8. Third-Party Services
            </h2>
            <p className="mt-3">
              Our Services may link to or embed third-party services (for example, a map provider or a
              payment processor). We are not responsible for the content, accuracy or practices of
              third-party services, which are governed by their own terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Absolute Energy is not liable for any indirect,
              incidental or consequential loss arising from your use of the Services, including reliance
              on an indicative AE Connect result without a completed engineering assessment. Nothing in
              these Terms limits liability that cannot be excluded under applicable law.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">10. Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of Zimbabwe. Any disputes arising from these Terms or
              your use of the Services will be subject to the exclusive jurisdiction of the Zimbabwean
              courts.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">
              11. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms from time to time. Material changes will be reflected by an
              updated &quot;Last updated&quot; date at the top of this page. Continued use of the Services
              after changes take effect constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-white">12. Contact Us</h2>
            <p className="mt-3">
              Questions about these Terms can be sent to{" "}
              <a href="mailto:info@absoluteenergy.co.zw" className="font-semibold text-ae-orange">
                info@absoluteenergy.co.zw
              </a>{" "}
              or via our{" "}
              <Link href="/contact" className="font-semibold text-ae-orange">
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
