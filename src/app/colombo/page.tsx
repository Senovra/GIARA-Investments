import { Metadata } from "next";
import ProjectHero from "@/components/layout/ProjectHero";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Colombo",
  description: getProject("colombo")?.description,
};

export default function ColomboPage() {
  const project = getProject("colombo")!;

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
            Port City Colombo operates as a dedicated special economic
            zone, offering the kind of regulatory clarity and investor
            protections that institutional capital looks for when
            entering an emerging market. Its position at the edge of
            Colombo's central business district, paired with direct
            waterfront access, made it a natural fit for GIARA's
            hospitality strategy in South Asia.
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