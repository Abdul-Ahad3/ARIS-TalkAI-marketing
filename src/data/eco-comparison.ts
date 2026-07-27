import type { ComparisonRow } from "@/types/eco-comparison";

export const comparisonRows: ComparisonRow[] = [
  { label: "Connectivity", embedded: "Fully offline", mobile: "Requires internet" },
  { label: "Best For", embedded: "Private, in-person conversation", mobile: "Calls across distance" },
  { label: "Setup", embedded: "Dedicated hardware", mobile: "iOS or Android app" },
  { label: "Data Handling", embedded: "Never leaves the device", mobile: "Encrypted in transit" },
  { label: "Ideal Environment", embedded: "Clinics, factories, secure sites", mobile: "Anywhere with signal" },
];