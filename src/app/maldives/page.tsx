import { Metadata } from "next";
import ProjectHero from "@/components/layout/ProjectHero";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Maldives",
  description: getProject("maldives")?.description,
};

export default function MaldivesPage() {
  const project = getProject("maldives")!;

  return (
    <>
      <ProjectHero project={project} />
      <section className="mx-auto max-w-2xl px-6 py-24 text-center md:px-10 md:py-32">
        <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
          {project.assetType} Investment
        </span>
        <h2 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          {project.title}
        </h2>
        <div className="mx-auto mt-6 max-w-xl space-y-5 text-left text-base leading-relaxed text-foreground-muted md:text-center">
          <p>{project.description}</p>
          <p>
            The North Malé Atoll remains one of the most accessible parts
            of the Maldives for international guests, while still
            offering the natural seclusion the destination is known for
            — palm-lined shores, reef-fringed lagoons, and a pace of life
            defined entirely by the tide. GIARA's investment is built
            around preserving that character while introducing the kind
            of considered hospitality experience that sustains long-term
            guest loyalty.
          </p>
        </div>
        <div className="mx-auto mt-10 flex max-w-sm justify-center gap-10 border-t border-foreground/10 pt-8">
          <div>
            <span className="block font-display text-2xl text-accent">{project.keys}</span>
            <span className="text-xs uppercase tracking-widest text-foreground-muted">Keys</span>
          </div>
          <div>
            <span className="block font-display text-2xl text-accent">{project.status}</span>
            <span className="text-xs uppercase tracking-widest text-foreground-muted">Status</span>
          </div>
        </div>
      </section>
    </>
  );
}