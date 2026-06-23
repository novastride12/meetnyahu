import SearchBar from "../components/ui/SearchBar";
import Select from "../components/ui/Select";
import ProjectCard from "../components/home/ProjectCard";
import { projects } from "../data/projects";

export default function Browse() {
  return (
    <main className="section">

      <div className="container">

        <h1>Browse Projects</h1>

        <p>
          Find teammates working on projects that interest you.
        </p>

        <div className="browse-toolbar">

          <SearchBar />

          <Select
            options={[
              "All Departments",
              "CSE",
              "AIML",
              "ECE",
            ]}
          />

        </div>

        <div className="project-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </main>
  );
}