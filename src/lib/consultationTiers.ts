// Tailor-made routing, consultation & fee logic. Section 15.

export type ConsultationTier =
  | "solar-oversized"
  | "solar-straight"
  | "solar-ci"
  | "water-residential"
  | "water-agricultural"
  | "water-community"
  | "specialist";

export interface ConsultationTierInfo {
  tier: ConsultationTier;
  label: string;
  description: string;
  fee: number | "variable";
  requiresSiteAssessment: boolean;
}

export const CONSULTATION_TIERS: Record<ConsultationTier, ConsultationTierInfo> = {
  "solar-oversized": {
    tier: "solar-oversized",
    label: "Residential Solar Power: Oversized (above 12 kVA)",
    description:
      "Your calculated system exceeds our standard 12 kVA residential ceiling. Submit your requirements in writing and an engineer will follow up.",
    fee: 10,
    requiresSiteAssessment: false,
  },
  "solar-straight": {
    tier: "solar-straight",
    label: "Residential Solar Power: Straight Consultation",
    description: "Skip the calculator and book a direct consultation with an engineer.",
    fee: 10,
    requiresSiteAssessment: false,
  },
  "solar-ci": {
    tier: "solar-ci",
    label: "Commercial & Industrial (C&I) Solar Power",
    description:
      "C&I projects are always tailor-made. A consultation booking is always followed by a site assessment.",
    fee: 20,
    requiresSiteAssessment: true,
  },
  "water-residential": {
    tier: "water-residential",
    label: "Residential / Household Water Pumping",
    description: "Direct consultation booking for a household or small-holding pumping project.",
    fee: 10,
    requiresSiteAssessment: false,
  },
  "water-agricultural": {
    tier: "water-agricultural",
    label: "Irrigation / Agricultural Pumping",
    description: "Direct consultation booking. A site assessment is mandatory for this tier.",
    fee: 20,
    requiresSiteAssessment: true,
  },
  "water-community": {
    tier: "water-community",
    label: "Community Piped Water Scheme",
    description:
      "Direct consultation booking, treated as the agricultural/community fee tier. A site assessment is mandatory.",
    fee: 20,
    requiresSiteAssessment: true,
  },
  specialist: {
    tier: "specialist",
    label: "Specialist Services (hydraulic modelling, BOQ, simulation)",
    description:
      "Describe your project and Absolute Energy will issue a scope-based quotation before work begins.",
    fee: "variable",
    requiresSiteAssessment: false,
  },
};

export const CONSULTATION_TIER_ORDER: ConsultationTier[] = [
  "solar-oversized",
  "solar-straight",
  "solar-ci",
  "water-residential",
  "water-agricultural",
  "water-community",
  "specialist",
];

export function isConsultationTier(value: string | undefined): value is ConsultationTier {
  return !!value && value in CONSULTATION_TIERS;
}
