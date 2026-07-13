import Chip from "../ui/Chip";
import Button from "../ui/Button";

import { Link } from "react-router-dom";

interface Props {
  project: any;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">

      <div className="project-header">

        <div>
          <h3>{project.title}</h3>

          <span className="project-domain">
            {project.domain}
          </span>
        </div>

      </div>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-skills">
        {project.skills?.map((skill: string) => (
          <Chip
            key={skill}
            label={skill}
          />
        ))}
      </div>

      <div className="project-footer">

        <span>
          👥 {project.membersNeeded} teammates
        </span>

        <span>
          {project.completed ? "Completed" : "Open"}
        </span>

      </div>

      <Link to={`/projects/${project._id}`}>

    <Button className="project-button">

        View Project

    </Button>

</Link>

    </article>
  );
}