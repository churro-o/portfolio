import { projects } from "../../content.js";
import SectionShell from "../components/SectionShell.jsx";

export default function ProjectsSection() {
  return (
    <SectionShell eyebrow="Projects" title="Personal Projects">
      {projects?.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={`${project.title || "project"}-${index}`}>
              <h2 className="font-heading text-2xl">{project.title}</h2>
              {project.description ? (
                <p className="mt-3 leading-7 text-stone-700">
                  {project.description}
                </p>
              ) : null}
              {project.link ? (
                <a
                  href={project.link}
                  className="mt-4 inline-flex font-semibold text-electric-iris underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-iris"
                >
                  View project
                </a>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <div className="grid max-w-3xl gap-8 md:grid-cols-[14rem_1fr] md:items-center">
          <SproutIllustration />
          <p className="text-2xl leading-10 text-stone-700">
            Nothing here yet - check back soon. (Well, except the site you're
            looking at right now - this landing page is my first project.)
          </p>
        </div>
      )}
    </SectionShell>
  );
}

function SproutIllustration() {
  return (
    <svg
      viewBox="0 0 220 220"
      role="img"
      aria-label="Small sprout illustration"
      className="h-56 w-56"
    >
      <circle cx="110" cy="110" r="104" fill="#fff8ed" />
      <path
        d="M58 160c22 14 82 14 104 0"
        fill="none"
        stroke="#8f755f"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M110 154V82"
        fill="none"
        stroke="#5683da"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M108 104c-28-2-43-16-50-41 29 0 48 12 57 35"
        fill="#d9e9ca"
        stroke="#7a9b68"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M113 91c17-24 38-31 65-21-14 25-34 35-60 27"
        fill="#cbe1bf"
        stroke="#7a9b68"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
