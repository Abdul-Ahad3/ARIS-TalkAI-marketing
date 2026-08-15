import type { ComparisonRow } from "@/types/eco-comparison";

export const comparisonRows: ComparisonRow[] = [
  { label: "Connectivity", embedded: "Fully offline", mobile: "Requires internet", capi: "Requires internet" },
  { label: "Best For", embedded: "Private, in-person conversation", mobile: "Calls across distcance", capi: "App integrations and developers" },
  { label: "Setup", embedded: "Dedicated hardware", mobile: "iOS or Android app", capi: "API keys and requests" },
  { label: "Data Handling", embedded: "Never leaves the device", mobile: "Encrypted in transit", capi: "Encrypted in transit" },
  { label: "Ideal Environment", embedded: "Clinics, factories, secure sites", mobile: "Anywhere with signal", capi: "Meeting and communication applications" },
];