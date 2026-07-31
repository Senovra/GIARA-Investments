import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 block text-xs uppercase tracking-widest text-accent">404</span>
      <h1 className="font-display text-4xl font-normal text-foreground md:text-5xl">
        Page Not Found
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-foreground-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 border border-foreground/30 px-7 py-3 text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Return Home
      </Link>
    </section>
  );
}