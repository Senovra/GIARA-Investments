export interface NavLink {
  label: string;
  href: string;
}

export interface DestinationLink {
  label: string;
  href: string;
}

export const DESTINATIONS: DestinationLink[] = [
  { label: "Colombo", href: "/colombo" },
  { label: "Maldives", href: "/maldives" },
];

export const HEADQUARTERS: NavLink = { label: "Dubai", href: "/dubai" };

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
];

export const DESTINATION_SUBNAV = [
  { label: "Overview", segment: "" },
  { label: "Accommodation", segment: "accommodation" },
  { label: "Dining", segment: "dining" },
  { label: "Wellness", segment: "wellness" },
  { label: "Events", segment: "events" },
  { label: "Experiences", segment: "experiences" },
  { label: "Offers", segment: "offers" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "About GIARA", href: "/about" },
  { label: "Development", href: "/development" },
  { label: "Policies", href: "/policies" },
  { label: "Careers", href: "/careers" },
];