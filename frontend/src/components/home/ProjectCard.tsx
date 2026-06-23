import Chip from "../ui/Chip";
import Button from "../ui/Button";
import type { Project } from "../../data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">

      <div className="project-header">

        <h3>{project.title}</h3>

        <span className="project-domain">
          {project.domain}
        </span>

      </div>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-skills">

        {project.skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
          />
        ))}

      </div>

      <div className="project-footer">

        <span>
          👥 {project.teammatesNeeded} teammates
        </span>

        <span>{project.posted}</span>

      </div>

      <Button className="project-button">
        View Project
      </Button>

    </article>
  );
}