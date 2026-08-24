export interface Advisor {
  id: string;
  name: string;
  role: string;
}

// Placeholder cards — client to confirm real advisor/partner names,
// exact roles, and logos before launch. Hyatt removed for now (contract
// not yet signed) — add back once confirmed.
export const advisors: Advisor[] = [
  { id: "advisor-1", name: "Advisor Placeholder", role: "Legal Advisor" },
  { id: "advisor-2", name: "Advisor Placeholder", role: "Financial Advisor" },
  { id: "advisor-3", name: "Partner Placeholder", role: "Hospitality Operating Partner" },
  { id: "advisor-4", name: "Partner Placeholder", role: "Architecture Partner" },
  { id: "advisor-5", name: "Partner Placeholder", role: "Development Partner" },
  { id: "advisor-6", name: "Advisor Placeholder", role: "Strategic Advisor" },
];