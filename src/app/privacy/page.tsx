import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Absolute Energy",
  description:
    "How Absolute Energy collects, uses and protects information from the website and AE Connect application.",
};

const LAST_UPDATED = "25 July 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description={`Last updated: ${LAST_UPDATED}`} />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-xl bg-ae-lightgrey p-5 text-sm text-ae-warmgrey">
          This is a general-purpose draft prepared for the Absolute Energy website and AE Connect
          application. It should be reviewed by qualified legal counsel for compliance with Zimbabwe&apos;s
          Data Protection Act and any other applicable law, and adjusted to reflect Absolute
          Energy&apos;s actual data practices, before being relied on as legally binding.
        </div>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-ae-warmgrey">
          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">1. Introduction</h2>
            <p className="mt-3">
              Absolute Energy (Private) Limited (&quot;Absolute Energy&quot;, &quot;we&quot;, &quot;us&quot;)
              respects your privacy. This Privacy Policy explains what information we collect through our
              website and the AE Connect application, how we use it, and the choices available to you.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">
              2. Information We Collect
            </h2>
            <p className="mt-3">We collect information you provide directly to us, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-ae-charcoal">Contact form:</strong> name, email address,
                phone/WhatsApp number, your message, and the service you&apos;re interested in.
              </li>
              <li>
                <strong className="text-ae-charcoal">AE Connect sizing calculators:</strong> the
                appliance, site and usage details you enter (for example, appliance quantities and
                runtimes, borehole depth, or daily water requirement) to generate a sizing result.
              </li>
              <li>
                <strong className="text-ae-charcoal">Consultation requests:</strong> your name, contact
                details, project location, a description of your project, and any file you choose to
                attach (such as an electricity bill or site photo).
              </li>
              <li>
                <strong className="text-ae-charcoal">Payment information:</strong> when consultation fees
                go live, payment details will be collected and processed by our payment provider, not
                stored directly by Absolute Energy.
              </li>
            </ul>
            <p className="mt-3">
              We also automatically receive standard technical information from your browser and our
              hosting provider (such as IP address, device and browser type, and pages visited) for
              security and performance purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">
              3. How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>To respond to your enquiries and provide the sizing results you request.</li>
              <li>To prepare consultations, quotations, and, where relevant, schedule site assessments.</li>
              <li>To process payments for paid consultations, once the payment gateway is live.</li>
              <li>To maintain, secure and improve our website and AE Connect application.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">
              4. Sharing Your Information
            </h2>
            <p className="mt-3">
              We do not sell your personal information. We may share it with Absolute Energy engineering
              staff for the purpose of delivering a consultation or quotation, and with service providers
              who support our operations (for example, hosting and, once implemented, payment processing),
              under obligations to protect your information. We may also disclose information where
              required by law.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">
              5. Cookies &amp; Tracking
            </h2>
            <p className="mt-3">
              The website does not currently use analytics or advertising cookies. If this changes (for
              example, to add usage analytics), this Policy will be updated to describe what is collected
              and how to opt out.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">6. Data Security</h2>
            <p className="mt-3">
              We take reasonable technical and organisational measures to protect the information you
              provide. However, no method of transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">7. Data Retention</h2>
            <p className="mt-3">
              We retain information for as long as necessary to respond to your enquiry, deliver a
              consultation or service, meet legal or accounting obligations, and resolve disputes, after
              which it is deleted or anonymised.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">8. Your Rights</h2>
            <p className="mt-3">
              Depending on applicable law, you may have the right to request access to, correction of, or
              deletion of your personal information, or to object to certain processing. To make a
              request, contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">
              9. Third-Party Links &amp; Embeds
            </h2>
            <p className="mt-3">
              Our Contact page embeds a Google Maps location. Interacting with it is subject to
              Google&apos;s own privacy practices. We are not responsible for the privacy practices of
              third-party sites we link to.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">10. Children&apos;s Privacy</h2>
            <p className="mt-3">
              Our Services are intended for business and household use by adults and are not directed at
              children. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">
              11. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Material changes will be reflected by
              an updated &quot;Last updated&quot; date at the top of this page.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-ae-charcoal">12. Contact Us</h2>
            <p className="mt-3">
              For privacy questions or requests, contact us at{" "}
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
