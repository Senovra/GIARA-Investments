// This component is now unused directly — its logic was folded into
// Navbar.tsx so the sub-navigation renders as part of the fixed header
// itself on every destination route. Kept as a no-op export in case
// anything still imports it; safe to delete once you confirm nothing
// references it after removing the imports from the 21 destination
// page files (optional cleanup — Navbar handles it automatically now
// regardless of whether these files still import this).
export default function DestinationSubNav() {
  return null;
}