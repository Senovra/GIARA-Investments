import Link from "next/link";
import { PROJECTS, FOOTER_LINKS } from "@/constants/nav";
import Wordmark from "@/components/ui/Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark className="h-3.5 text-foreground" />
            <div className="mt-6 space-y-1 text-sm text-foreground-muted">
              <p className="text-foreground">GIARA Holdings</p>
              <p>DIFC, Dubai, United Arab Emirates</p>
              <p>
                Tel:{" "}
                <a href="tel:+97140000000" className="hover:text-accent">
                  +971 4 000 0000
                </a>
              </p>
              <p>
                E-mail:{" "}
                <a href="mailto:info@giara.com" className="hover:text-accent">
                  info@giara.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs uppercase tracking-widest text-accent">Information</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs uppercase tracking-widest text-accent">Projects</h3>
            <ul className="space-y-3">
              {PROJECTS.map((project) => (
                <li key={project.href}>
                  <Link
                    href={project.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent"
                  >
                    {project.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-foreground/10 pt-6 text-xs text-foreground-muted">
          © {new Date().getFullYear()} GIARA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}