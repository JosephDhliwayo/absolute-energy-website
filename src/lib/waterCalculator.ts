// Residential Water Pumping Calculator engine.
// Formulas per Absolute Energy Website & App Guide, Section 13.

export const RESIDENTIAL_DAILY_DEMAND_CEILING_L = 20000;

export const DEFAULT_PUMPING_WINDOW_HOURS = 8;
export const DEFAULT_PUMP_EFFICIENCY = 0.65;
export const DEFAULT_PEAK_SUN_HOURS = 5.5;
export const DEFAULT_SYSTEM_EFFICIENCY = 0.75;

/**
 * Placeholder friction-loss assumption for the guide-level TDH estimate only.
 * Final TDH is confirmed through hydraulic modelling before quotation (Section 13.4).
 */
const ESTIMATED_FRICTION_LOSS_FACTOR = 0.1;

export type PowerSource = "solar-only" | "solar-generator" | "grid-assist";

export interface WaterPumpingInput {
  dailyRequirementL: number;
  boreholeDepthM: number;
  distancePumpToStorageM: number;
  elevationM: number;
  tdhM?: number;
  powerSource: PowerSource;
  pumpingWindowHours?: number;
}

export interface WaterCalculationResult {
  withinStandardScope: true;
  tdhM: number;
  tdhIsEstimate: boolean;
  hydraulicPowerKW: number;
  dailyPumpingEnergyKWh: number;
  indicativeSolarArrayKWp: number;
}

export interface WaterCalculationOverflow {
  withinStandardScope: false;
  dailyRequirementL: number;
}

function estimateTDH(boreholeDepthM: number, elevationM: number): number {
  const staticHead = boreholeDepthM + elevationM;
  const frictionLosses = staticHead * ESTIMATED_FRICTION_LOSS_FACTOR;
  return staticHead + frictionLosses;
}

export function calculateWaterPumpingSizing(
  input: WaterPumpingInput
): WaterCalculationResult | WaterCalculationOverflow {
  if (input.dailyRequirementL > RESIDENTIAL_DAILY_DEMAND_CEILING_L) {
    return { withinStandardScope: false, dailyRequirementL: input.dailyRequirementL };
  }

  const pumpingWindowHours = input.pumpingWindowHours ?? DEFAULT_PUMPING_WINDOW_HOURS;
  const tdhIsEstimate = input.tdhM === undefined;
  const tdhM = input.tdhM ?? estimateTDH(input.boreholeDepthM, input.elevationM);

  const flowRateQ = input.dailyRequirementL / 1000 / pumpingWindowHours; // m3/hr

  const hydraulicPowerKW = (flowRateQ * tdhM) / (367 * DEFAULT_PUMP_EFFICIENCY);
  const dailyPumpingEnergyKWh = hydraulicPowerKW * pumpingWindowHours;
  const indicativeSolarArrayKWp =
    dailyPumpingEnergyKWh / (DEFAULT_PEAK_SUN_HOURS * DEFAULT_SYSTEM_EFFICIENCY);

  return {
    withinStandardScope: true,
    tdhM: Math.round(tdhM * 10) / 10,
    tdhIsEstimate,
    hydraulicPowerKW: Math.round(hydraulicPowerKW * 100) / 100,
    dailyPumpingEnergyKWh: Math.round(dailyPumpingEnergyKWh * 100) / 100,
    indicativeSolarArrayKWp: Math.round(indicativeSolarArrayKWp * 100) / 100,
  };
}
