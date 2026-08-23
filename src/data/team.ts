export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  portfolio: string;
  image: string;
}

// Placeholder entries — client to confirm real names, designations,
// portfolios, and photos before launch.
export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Name Placeholder",
    designation: "Chief Executive Officer",
    portfolio:
      "Oversees GIARA's overall investment strategy and capital allocation, with a background spanning real estate investment and hospitality operations across multiple markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
  },
  {
    id: "member-2",
    name: "Name Placeholder",
    designation: "Chief Investment Officer",
    portfolio:
      "Leads sourcing, underwriting, and structuring of GIARA's investment portfolio, with particular focus on hospitality assets across South Asia and the Indian Ocean region.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
  },
  {
    id: "member-3",
    name: "Name Placeholder",
    designation: "Chief Operating Officer",
    portfolio:
      "Responsible for operational execution across GIARA's project pipeline, from development through to asset stabilization.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
  },
];