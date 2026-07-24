"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import {
  RESIDENTIAL_DAILY_DEMAND_CEILING_L,
  calculateWaterPumpingSizing,
  type PowerSource,
  type WaterCalculationResult,
} from "@/lib/waterCalculator";
import ResultsPanel from "./ResultsPanel";

const POWER_SOURCE_OPTIONS: { value: PowerSource; label: string }[] = [
  { value: "solar-only", label: "Solar only" },
  { value: "solar-generator", label: "Solar + generator backup" },
  { value: "grid-assist", label: "Grid-assist" },
];

export default function WaterCalculatorForm() {
  const router = useRouter();
  const idPrefix = useId();
  const [dailyRequirementL, setDailyRequirementL] = useState("");
  const [boreholeDepthM, setBoreholeDepthM] = useState("");
  const [distanceM, setDistanceM] = useState("");
  const [elevationM, setElevationM] = useState("");
  const [knowsTdh, setKnowsTdh] = useState(false);
  const [tdhM, setTdhM] = useState("");
  const [powerSource, setPowerSource] = useState<PowerSource>("solar-only");
  const [pumpType, setPumpType] = useState("");

  const [result, setResult] = useState<WaterCalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const ids = {
    daily: `${idPrefix}-daily`,
    depth: `${idPrefix}-depth`,
    distance: `${idPrefix}-distance`,
    elevation: `${idPrefix}-elevation`,
    knowsTdh: `${idPrefix}-knows-tdh`,
    tdh: `${idPrefix}-tdh`,
    powerSource: `${idPrefix}-power-source`,
    pumpType: `${idPrefix}-pump-type`,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const litres = Number(dailyRequirementL);
    const depth = Number(boreholeDepthM);
    const distance = Number(distanceM);
    const elevation = Number(elevationM);

    if (!litres || !boreholeDepthM || !distanceM || !elevationM) {
      setError("Please fill in daily water requirement, borehole depth, distance and elevation.");
      return;
    }

    if (litres > RESIDENTIAL_DAILY_DEMAND_CEILING_L) {
      router.push(`/connect/consultation?type=water-agricultural&litres=${litres}`);
      return;
    }

    const calc = calculateWaterPumpingSizing({
      dailyRequirementL: litres,
      boreholeDepthM: depth,
      distancePumpToStorageM: distance,
      elevationM: elevation,
      tdhM: knowsTdh && tdhM ? Number(tdhM) : undefined,
      powerSource,
    });

    if (!calc.withinStandardScope) {
      router.push(`/connect/consultation?type=water-agricultural&litres=${litres}`);
      return;
    }

    setResult(calc);
  }

  if (result) {
    return (
      <ResultsPanel
        items={[
          { label: "Indicative Solar Array Size", value: `${result.indicativeSolarArrayKWp} kWp` },
          {
            label: "Indicative Daily Pumping Energy",
            value: `${result.dailyPumpingEnergyKWh} kWh/day`,
          },
        ]}
        caveat="This is an indicative estimate. Final pump selection and array sizing is confirmed through hydraulic modelling and simulation in brand-specific software before quotation."
        note={
          result.tdhIsEstimate
            ? `Total Dynamic Head was estimated at ${result.tdhM} m from your site data. This is a planning estimate pending confirmation, not a measured value.`
            : undefined
        }
        onReset={() => setResult(null)}
        quotationHref="/contact?interest=Water+Pumping"
        consultationHref="/connect/consultation?type=water-residential"
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={ids.daily} className="block text-sm font-medium text-ae-charcoal">
            Daily water requirement (L/day)
          </label>
          <input
            id={ids.daily}
            type="number"
            min={0}
            value={dailyRequirementL}
            onChange={(e) => setDailyRequirementL(e.target.value)}
            className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
            placeholder="e.g. 8000"
          />
          <p className="mt-1 text-xs text-ae-warmgrey">
            Above {RESIDENTIAL_DAILY_DEMAND_CEILING_L.toLocaleString()} L/day, we&apos;ll route you to a
            paid consultation instead.
          </p>
        </div>

        <div>
          <label htmlFor={ids.depth} className="block text-sm font-medium text-ae-charcoal">
            Borehole depth / static water level (m)
          </label>
          <input
            id={ids.depth}
            type="number"
            min={0}
            value={boreholeDepthM}
            onChange={(e) => setBoreholeDepthM(e.target.value)}
            className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          />
        </div>

        <div>
          <label htmlFor={ids.distance} className="block text-sm font-medium text-ae-charcoal">
            Distance: pump location to storage tank (m)
          </label>
          <input
            id={ids.distance}
            type="number"
            min={0}
            value={distanceM}
            onChange={(e) => setDistanceM(e.target.value)}
            className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          />
        </div>

        <div>
          <label htmlFor={ids.elevation} className="block text-sm font-medium text-ae-charcoal">
            Elevation: pump to storage/discharge point (m)
          </label>
          <input
            id={ids.elevation}
            type="number"
            min={0}
            value={elevationM}
            onChange={(e) => setElevationM(e.target.value)}
            className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          />
        </div>
      </div>

      <div className="rounded-xl border border-ae-lightgrey p-4">
        <label htmlFor={ids.knowsTdh} className="flex items-center gap-2 text-sm font-medium text-ae-charcoal">
          <input
            id={ids.knowsTdh}
            type="checkbox"
            checked={knowsTdh}
            onChange={(e) => setKnowsTdh(e.target.checked)}
            className="h-4 w-4 rounded border-ae-lightgrey text-ae-orange focus:ring-ae-orange"
          />
          I know my Total Dynamic Head (TDH)
        </label>
        {knowsTdh && (
          <input
            id={ids.tdh}
            aria-label="TDH in metres"
            type="number"
            min={0}
            value={tdhM}
            onChange={(e) => setTdhM(e.target.value)}
            placeholder="TDH in metres"
            className="mt-3 w-full max-w-xs rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          />
        )}
        {!knowsTdh && (
          <p className="mt-2 text-xs text-ae-warmgrey">
            Leave unchecked and we&apos;ll estimate TDH from your depth and elevation, flagged as an
            estimate pending confirmation.
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={ids.powerSource} className="block text-sm font-medium text-ae-charcoal">
            Available power source
          </label>
          <select
            id={ids.powerSource}
            value={powerSource}
            onChange={(e) => setPowerSource(e.target.value as PowerSource)}
            className="mt-1 w-full rounded-lg border border-ae-lightgrey bg-white px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          >
            {POWER_SOURCE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={ids.pumpType} className="block text-sm font-medium text-ae-charcoal">
            Preferred pump type <span className="text-ae-warmgrey">(optional)</span>
          </label>
          <select
            id={ids.pumpType}
            value={pumpType}
            onChange={(e) => setPumpType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-ae-lightgrey bg-white px-4 py-2.5 text-sm focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          >
            <option value="">No preference</option>
            <option value="submersible">Submersible</option>
            <option value="surface">Surface</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ae-orange px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90 sm:w-auto"
      >
        Calculate My System
      </button>
    </form>
  );
}
