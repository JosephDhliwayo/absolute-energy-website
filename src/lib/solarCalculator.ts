// Residential Solar Power Calculator engine.
// Formulas per Absolute Energy Website & App Guide, Section 12.

export type ApplianceKey =
  | "insideLights"
  | "outsideLights"
  | "tv"
  | "phoneCharging"
  | "laptops"
  | "microwave"
  | "refrigerator"
  | "aircon"
  | "acBoreholePump"
  | "boosterPump";

export interface ApplianceDefinition {
  key: ApplianceKey;
  label: string;
  category: "Resistive" | "Inductive";
  loadFactor: number;
  /** Duty cycle factor applied ONLY when runtimeHours === 24 (fridge/aircon compressor cycling). */
  dutyCycleFactorAt24h?: number;
  defaultPowerW: number;
  allow24h: boolean;
  runtimeHint?: string;
}

export const APPLIANCES: ApplianceDefinition[] = [
  {
    key: "insideLights",
    label: "Inside Lights",
    category: "Resistive",
    loadFactor: 1.0,
    defaultPowerW: 10,
    allow24h: false,
    runtimeHint: "Enter actual runtime hours",
  },
  {
    key: "outsideLights",
    label: "Outside Lights",
    category: "Resistive",
    loadFactor: 1.0,
    defaultPowerW: 20,
    allow24h: false,
    runtimeHint: "Enter actual runtime hours (usually night-only)",
  },
  {
    key: "tv",
    label: "TV",
    category: "Resistive",
    loadFactor: 1.0,
    defaultPowerW: 120,
    allow24h: false,
    runtimeHint: "Enter actual runtime hours",
  },
  {
    key: "phoneCharging",
    label: "Phone Charging",
    category: "Resistive",
    loadFactor: 1.0,
    defaultPowerW: 10,
    allow24h: false,
    runtimeHint: "Enter runtime hours",
  },
  {
    key: "laptops",
    label: "Laptops",
    category: "Resistive",
    loadFactor: 1.0,
    defaultPowerW: 65,
    allow24h: false,
    runtimeHint: "Enter runtime hours",
  },
  {
    key: "microwave",
    label: "Microwave",
    category: "Resistive",
    loadFactor: 1.0,
    defaultPowerW: 1200,
    allow24h: false,
    runtimeHint: "Enter runtime hours (typically short)",
  },
  {
    key: "refrigerator",
    label: "Refrigerator",
    category: "Inductive",
    loadFactor: 1.3,
    dutyCycleFactorAt24h: 0.4,
    defaultPowerW: 150,
    allow24h: true,
    runtimeHint: "It's fine to enter 24 hours. Duty cycle is applied automatically",
  },
  {
    key: "aircon",
    label: "Aircon (Inverter type)",
    category: "Inductive",
    loadFactor: 1.25,
    dutyCycleFactorAt24h: 0.5,
    defaultPowerW: 900,
    allow24h: true,
    runtimeHint: "It's fine to enter 24 hours. Duty cycle is applied automatically",
  },
  {
    key: "acBoreholePump",
    label: "AC Borehole Pump",
    category: "Inductive",
    loadFactor: 1.5,
    defaultPowerW: 750,
    allow24h: false,
    runtimeHint: "Enter actual runtime hours",
  },
  {
    key: "boosterPump",
    label: "Booster Pump",
    category: "Inductive",
    loadFactor: 1.5,
    defaultPowerW: 750,
    allow24h: false,
    runtimeHint: "Enter actual runtime hours",
  },
];

export const STANDARD_INVERTER_SIZES_KVA = [
  1.5, 2, 3, 3.5, 4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 9, 10, 12,
];

export const RESIDENTIAL_INVERTER_CEILING_KVA = 12;

export const INVERTER_MARGIN = 1.3;
export const BATTERY_SYSTEM_LOSS_FACTOR = 1.1;
export const BATTERY_USABLE_DOD = 0.9;
export const ARRAY_CHARGE_WINDOW_HOURS = 2;
export const ARRAY_CHARGING_EFFICIENCY = 0.85;

export interface ApplianceInput {
  key: ApplianceKey;
  quantity: number;
  powerRatingW: number;
  runtimeHours: number;
}

export interface SolarCalculationResult {
  withinStandardScope: true;
  requiredInverterKVA: number;
  inverterSizeKVA: number;
  inverterSizeKW: number;
  batteryBankKWh: number;
  solarArrayKWp: number;
}

export interface SolarCalculationOverflow {
  withinStandardScope: false;
  requiredInverterKVA: number;
}

function dutyCycleFactorFor(def: ApplianceDefinition, runtimeHours: number): number {
  if (def.allow24h && def.dutyCycleFactorAt24h !== undefined && runtimeHours === 24) {
    return def.dutyCycleFactorAt24h;
  }
  return 1.0;
}

function roundUpToStandardSize(kVA: number): number | null {
  const match = STANDARD_INVERTER_SIZES_KVA.find((size) => size >= kVA);
  return match ?? null;
}

export function calculateSolarSizing(
  inputs: ApplianceInput[]
): SolarCalculationResult | SolarCalculationOverflow {
  const byKey = new Map(APPLIANCES.map((a) => [a.key, a]));

  // Step 1 & 2: Adjusted load per appliance, summed.
  let totalAdjustedLoadW = 0;
  // Formula 2, Step 1 & 2: Daily energy demand per appliance, summed.
  let totalDailyEnergyWh = 0;

  for (const input of inputs) {
    if (input.quantity <= 0) continue;
    const def = byKey.get(input.key);
    if (!def) continue;

    const adjustedLoad = input.quantity * input.powerRatingW * def.loadFactor;
    totalAdjustedLoadW += adjustedLoad;

    const dutyCycleFactor = dutyCycleFactorFor(def, input.runtimeHours);
    const dailyEnergy = input.quantity * input.powerRatingW * input.runtimeHours * dutyCycleFactor;
    totalDailyEnergyWh += dailyEnergy;
  }

  // Formula 1: Inverter / System Size
  const requiredInverterW = totalAdjustedLoadW * INVERTER_MARGIN;
  const requiredInverterKVA = requiredInverterW / 1000;

  const standardSize = roundUpToStandardSize(requiredInverterKVA);
  if (standardSize === null) {
    return { withinStandardScope: false, requiredInverterKVA };
  }

  // Formula 2: Battery Bank Size
  const adjustedEnergyWh = totalDailyEnergyWh * BATTERY_SYSTEM_LOSS_FACTOR;
  const batteryBankWh = adjustedEnergyWh / BATTERY_USABLE_DOD;
  const batteryBankKWh = batteryBankWh / 1000;

  // Formula 3: Solar Array Size
  const solarArrayKWpRaw =
    batteryBankKWh / (ARRAY_CHARGE_WINDOW_HOURS * ARRAY_CHARGING_EFFICIENCY);
  const solarArrayKWp = Math.ceil(solarArrayKWpRaw * 10) / 10;

  return {
    withinStandardScope: true,
    requiredInverterKVA,
    inverterSizeKVA: standardSize,
    inverterSizeKW: standardSize,
    batteryBankKWh: Math.round(batteryBankKWh * 100) / 100,
    solarArrayKWp,
  };
}
