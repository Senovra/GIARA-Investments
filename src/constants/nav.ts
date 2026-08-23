export interface NavLink {
  label: string;
  href: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export const PROJECTS: ProjectLink[] = [
  { label: "Colombo", href: "/colombo" },
  { label: "Maldives", href: "/maldives" },
];

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
];

// Development and Careers removed per client request — considered
// insignificant for now. Policies kept, since it's a standard/expected
// legal page for any live business site.
export const FOOTER_LINKS: NavLink[] = [
  { label: "About GIARA", href: "/about" },
  { label: "Policies", href: "/policies" },
];