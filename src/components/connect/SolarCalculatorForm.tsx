"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  APPLIANCES,
  RESIDENTIAL_INVERTER_CEILING_KVA,
  calculateSolarSizing,
  type ApplianceInput,
  type ApplianceKey,
  type SolarCalculationResult,
} from "@/lib/solarCalculator";
import ResultsPanel from "./ResultsPanel";

type FormState = Record<ApplianceKey, { quantity: string; powerRatingW: string; runtimeHours: string }>;

function initialState(): FormState {
  const state = {} as FormState;
  for (const def of APPLIANCES) {
    state[def.key] = {
      quantity: "",
      powerRatingW: String(def.defaultPowerW),
      runtimeHours: def.allow24h ? "24" : "",
    };
  }
  return state;
}

export default function SolarCalculatorForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [result, setResult] = useState<SolarCalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const hasAnyAppliance = useMemo(
    () => Object.values(form).some((row) => Number(row.quantity) > 0),
    [form]
  );

  function updateRow(key: ApplianceKey, field: keyof FormState[ApplianceKey], value: string) {
    setForm((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
    setResult(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!hasAnyAppliance) {
      setError("Select at least one appliance and enter a quantity to calculate your system.");
      return;
    }

    const inputs: ApplianceInput[] = APPLIANCES.map((def) => {
      const row = form[def.key];
      return {
        key: def.key,
        quantity: Number(row.quantity) || 0,
        powerRatingW: Number(row.powerRatingW) || 0,
        runtimeHours: Number(row.runtimeHours) || 0,
      };
    });

    const missingRuntime = inputs.some(
      (input) => input.quantity > 0 && input.runtimeHours <= 0
    );
    if (missingRuntime) {
      setError("Enter a runtime (hours/day) for every appliance you've added.");
      return;
    }

    const calc = calculateSolarSizing(inputs);

    if (!calc.withinStandardScope) {
      router.push(
        `/connect/consultation?type=solar-oversized&kva=${calc.requiredInverterKVA.toFixed(2)}`
      );
      return;
    }

    setResult(calc);
  }

  if (result) {
    return (
      <ResultsPanel
        items={[
          { label: "Solar Array Size", value: `${result.solarArrayKWp} kWp` },
          {
            label: "Inverter / System Size",
            value: `${result.inverterSizeKVA} kVA`,
            sub: `≈ ${result.inverterSizeKW} kW`,
          },
          { label: "Battery Bank Size", value: `${result.batteryBankKWh} kWh`, sub: "Lithium-ion" },
        ]}
        note="Battery chemistry is lithium-ion. Absolute Energy recommends proven brands such as Deye, Pylontech or Weco. The exact brand is confirmed by our team at quotation stage."
        onReset={() => setResult(null)}
        quotationHref="/contact?interest=Solar+Power"
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-ae-lightgrey">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-ae-charcoal text-white">
            <tr>
              <th className="px-4 py-3 font-heading font-semibold">Appliance</th>
              <th className="px-4 py-3 font-heading font-semibold">Quantity</th>
              <th className="px-4 py-3 font-heading font-semibold">Power Rating (W)</th>
              <th className="px-4 py-3 font-heading font-semibold">Runtime (hrs/day)</th>
            </tr>
          </thead>
          <tbody>
            {APPLIANCES.map((def, i) => (
              <tr key={def.key} className={i % 2 === 0 ? "bg-white" : "bg-ae-lightgrey"}>
                <td className="px-4 py-3 align-top">
                  <span className="font-semibold text-ae-charcoal">{def.label}</span>
                  <span className="mt-0.5 block text-xs text-ae-warmgrey">{def.category}</span>
                </td>
                <td className="px-4 py-3 align-top">
                  <input
                    type="number"
                    min={0}
                    inputMode="numeric"
                    value={form[def.key].quantity}
                    onChange={(e) => updateRow(def.key, "quantity", e.target.value)}
                    className="w-20 rounded-lg border border-ae-lightgrey px-3 py-2 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
                    placeholder="0"
                    aria-label={`${def.label} quantity`}
                  />
                </td>
                <td className="px-4 py-3 align-top">
                  <input
                    type="number"
                    min={0}
                    inputMode="numeric"
                    value={form[def.key].powerRatingW}
                    onChange={(e) => updateRow(def.key, "powerRatingW", e.target.value)}
                    className="w-24 rounded-lg border border-ae-lightgrey px-3 py-2 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
                    aria-label={`${def.label} power rating in watts`}
                  />
                </td>
                <td className="px-4 py-3 align-top">
                  <input
                    type="number"
                    min={0}
                    max={24}
                    inputMode="numeric"
                    value={form[def.key].runtimeHours}
                    onChange={(e) => updateRow(def.key, "runtimeHours", e.target.value)}
                    className="w-20 rounded-lg border border-ae-lightgrey px-3 py-2 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
                    placeholder="0"
                    aria-label={`${def.label} runtime hours per day`}
                  />
                  <span className="mt-1 block max-w-[16rem] text-xs text-ae-warmgrey">{def.runtimeHint}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-ae-warmgrey">
        There&apos;s no limit on quantities. Add as many of each appliance as your home needs. If your
        calculated system exceeds {RESIDENTIAL_INVERTER_CEILING_KVA} kVA, we&apos;ll route you straight to a
        paid engineering consultation instead of a standard result.
      </p>

      <button
        type="submit"
        className="w-full rounded-full bg-ae-orange px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90 sm:w-auto"
      >
        Calculate My System
      </button>
    </form>
  );
}
