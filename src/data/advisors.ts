export interface Advisor {
  id: string;
  name: string;
  role: string;
}

// Placeholder cards — client to confirm real advisor/partner names and
// logos before launch.
export const advisors: Advisor[] = [
  { id: "advisor-1", name: "Advisor Placeholder", role: "Strategic Advisor" },
  { id: "advisor-2", name: "Partner Placeholder", role: "Capital Partner" },
  { id: "advisor-3", name: "Advisor Placeholder", role: "Strategic Advisor" },
  { id: "advisor-4", name: "Partner Placeholder", role: "Development Partner" },
];