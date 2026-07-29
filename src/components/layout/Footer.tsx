import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/nav";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/GIARALogo.png"
              alt="GIARA Investments"
              width={1007}
              height={659}
              className="h-16 w-auto object-contain md:h-20"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground-muted">
              A global investment holding company shaping enduring value
              through disciplined capital allocation and architectural
              excellence across real estate and strategic markets.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-widest text-accent">
              Navigate
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent"
                    data-cursor-hover
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-widest text-accent">
              Offices
            </h3>
            <ul className="space-y-4 text-sm text-foreground-muted">
              <li>Dubai, UAE</li>
              <li>Singapore</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-foreground-muted md:flex-row">
          <span>© {new Date().getFullYear()} GIARA. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent" data-cursor-hover>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent" data-cursor-hover>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}