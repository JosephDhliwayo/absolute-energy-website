"use client";

import { useState, type FormEvent } from "react";
import {
  CONSULTATION_TIERS,
  CONSULTATION_TIER_ORDER,
  isConsultationTier,
  type ConsultationTier,
} from "@/lib/consultationTiers";

type Step = "form" | "paywall" | "paid";

export default function ConsultationForm({
  initialType,
  context,
}: {
  initialType?: string;
  context?: string;
}) {
  const [tier, setTier] = useState<ConsultationTier>(
    isConsultationTier(initialType) ? initialType : "solar-straight"
  );
  const [step, setStep] = useState<Step>("form");
  const [paying, setPaying] = useState(false);

  const tierInfo = CONSULTATION_TIERS[tier];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep("paywall");
  }

  function handlePay() {
    setPaying(true);
    // Payment gateway integration (EcoCash / PayNow / card) to be confirmed with Absolute Energy.
    // Simulated here so the paywall workflow (Section 15.3) can be reviewed end-to-end.
    setTimeout(() => {
      setPaying(false);
      setStep("paid");
    }, 900);
  }

  if (step === "paid") {
    return (
      <div className="animate-fade-in-up rounded-2xl border border-ae-orange/30 bg-ae-orange/5 p-6 sm:p-8">
        <h2 className="font-heading text-xl font-semibold text-ae-charcoal">Payment received</h2>
        <p className="mt-2 text-sm text-ae-warmgrey">
          Thank you. Your {tierInfo.fee === "variable" ? "request" : `$${tierInfo.fee} consultation`} is
          confirmed.
        </p>

        <div className="mt-6 rounded-xl bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ae-warmgrey">
            Absolute Energy&apos;s Written Solution
          </p>
          <p className="mt-2 text-sm text-ae-charcoal">
            An Absolute Energy engineer will review your submission and respond here, and by email, within
            1–2 business days.
          </p>
        </div>

        {tierInfo.requiresSiteAssessment && (
          <p className="mt-4 rounded-lg bg-white px-4 py-3 text-xs text-ae-warmgrey">
            This project type requires a mandatory site assessment. Our team will contact you to schedule
            it before a final design is issued.
          </p>
        )}
      </div>
    );
  }

  if (step === "paywall") {
    return (
      <div className="animate-fade-in-up rounded-2xl border border-ae-lightgrey p-6 sm:p-8">
        <h2 className="font-heading text-xl font-semibold text-ae-charcoal">Confirm &amp; Pay</h2>
        <p className="mt-2 text-sm text-ae-warmgrey">{tierInfo.label}</p>

        <div className="mt-6 flex items-center justify-between rounded-xl bg-ae-lightgrey px-5 py-4">
          <span className="text-sm font-medium text-ae-charcoal">Consultation fee</span>
          <span className="font-heading text-xl font-bold text-ae-orange">
            {tierInfo.fee === "variable" ? "Quoted per scope" : `$${tierInfo.fee}`}
          </span>
        </div>

        <p className="mt-4 text-xs text-ae-warmgrey">
          Payment gateway (mobile money such as EcoCash / PayNow, alongside card payment) is pending
          confirmation with Absolute Energy. This step demonstrates the paywall flow: your written solution
          unlocks only once payment is confirmed.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handlePay}
            disabled={paying}
            className="rounded-full bg-ae-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90 disabled:pointer-events-none disabled:opacity-60"
          >
            {paying
              ? "Processing…"
              : tierInfo.fee === "variable"
                ? "Submit Request"
                : `Pay $${tierInfo.fee} & View Solution`}
          </button>
          <button
            type="button"
            onClick={() => setStep("form")}
            className="rounded-full px-6 py-2.5 text-sm font-semibold text-ae-warmgrey hover:text-ae-orange"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="c-project-type" className="block text-sm font-medium text-ae-charcoal">
          Project type
        </label>
        <select
          id="c-project-type"
          value={tier}
          onChange={(e) => setTier(e.target.value as ConsultationTier)}
          className="mt-1 w-full rounded-lg border border-ae-lightgrey bg-white px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
        >
          {CONSULTATION_TIER_ORDER.map((key) => (
            <option key={key} value={key}>
              {CONSULTATION_TIERS[key].label}
            </option>
          ))}
        </select>
        <p className="mt-2 text-xs text-ae-warmgrey">{tierInfo.description}</p>
        <p className="mt-1 text-xs font-semibold text-ae-orange">
          Fee: {tierInfo.fee === "variable" ? "Variable, quoted per project scope" : `$${tierInfo.fee}`}
          {tierInfo.requiresSiteAssessment ? " + mandatory site assessment" : ""}
        </p>
      </div>

      {context && <p className="text-xs text-ae-warmgrey">Context from your calculator: {context}</p>}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="block text-sm font-medium text-ae-charcoal">
            Name
          </label>
          <input
            id="c-name"
            required
            type="text"
            className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          />
        </div>
        <div>
          <label htmlFor="c-contact" className="block text-sm font-medium text-ae-charcoal">
            Email / Phone
          </label>
          <input
            id="c-contact"
            required
            type="text"
            className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-location" className="block text-sm font-medium text-ae-charcoal">
          Project location
        </label>
        <input
          id="c-location"
          required
          type="text"
          placeholder="e.g. Borrowdale, Harare"
          className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
        />
      </div>

      <div>
        <label htmlFor="c-description" className="block text-sm font-medium text-ae-charcoal">
          Brief description of your project
        </label>
        <textarea
          id="c-description"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
        />
      </div>

      <div>
        <label htmlFor="c-file" className="block text-sm font-medium text-ae-charcoal">
          Attach a bill or site photo <span className="text-ae-warmgrey">(optional)</span>
        </label>
        <input
          id="c-file"
          type="file"
          className="mt-1 block w-full text-sm text-ae-warmgrey file:mr-4 file:rounded-full file:border-0 file:bg-ae-lightgrey file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ae-charcoal"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ae-orange px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90 sm:w-auto"
      >
        Continue to Payment
      </button>
    </form>
  );
}
