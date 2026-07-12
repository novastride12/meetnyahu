import { useEffect, useState } from "react";

import SearchBar from "../components/ui/SearchBar";
import Select from "../components/ui/Select";
import ProjectCard from "../components/home/ProjectCard";

import { getProjects } from "../services/project";

export default function Browse() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await getProjects();

        setProjects(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

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

        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="project-grid">
            {projects.map((project: any) => (
              <ProjectCard
                key={project._id}
                project={project}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}