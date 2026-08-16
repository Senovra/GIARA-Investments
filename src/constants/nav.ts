export interface NavLink {
  label: string;
  href: string;
}

export interface DestinationLink {
  label: string;
  href: string;
}

// Colombo and Maldives only — these are the two hospitality destinations
// shown under the "Destinations" dropdown, and the only routes that get
// the attached Overview/Accommodation/Dining/etc. sub-nav.
export const DESTINATIONS: DestinationLink[] = [
  { label: "Colombo", href: "/colombo" },
  { label: "Maldives", href: "/maldives" },
];

// Dubai is GIARA's headquarters, not a hospitality destination — shown
// as its own plain nav link, not inside the Destinations dropdown, and
// has no sub-navigation.
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