import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function RecentProjects() {
  return (
    <section className="section">

      <div className="container">

        <h2>Featured Projects</h2>

        <div className="project-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}