import React from "react";
import Arrow from "../assets/Arrow";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Uniportal - A Linktree clone",
      description: "NextJS • Supabase • TailwindCSS",
      href: "/soon",
    },
    {
      id: 2,
      name: "Portfolio",
      description: "ReactJS • ViteJS • TailwindCSS",
      href: "https://github.com/thmslfb/portfolio",
    },
    {
      id: 3,
      name: "Github Finder App",
      description: "ReactJS • ViteJS • Github API",
      href: "https://github.com/thmslfb/react-github-finder",
    },
  ];

  return (
    <section id="projects" className="flex flex-col gap-8">
      <h3 className="text-lg text-neutral-100">
        Selected projects ({projects.length})
      </h3>
      <ul role="list" className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.href}
              className={`group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 md:flex-row md:items-center ${
                project.href === "/soon"
                  ? "cursor-default pointer-events-none"
                  : "cursor-pointer hover:-translate-y-2 hover:border-neutral-400"
              }`}
              rel="noreferrer"
              target="_blank">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <p className="text-neutral-100">{project.name}</p>
                <p>{project.description}</p>
              </div>
              {project.href === "/soon" ? (
                <p className="w-fit rounded-md bg-neutral-900 px-4 py-1">
                  Soon
                </p>
              ) : (
                <Arrow />
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
