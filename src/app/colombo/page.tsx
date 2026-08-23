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
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
          {project.description}
        </p>
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