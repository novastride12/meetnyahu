import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../components/ui/Card";
import Chip from "../components/ui/Chip";
import Button from "../components/ui/Button";

import { getProject, completeProject } from "../services/project";
import { useAuth } from "../hooks/useAuth";

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    async function loadProject() {
      try {
        const response = await getProject(id!);
        setProject(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [id]);

  if (loading) {
    return (
      <main className="container section">
        <h1>Loading...</h1>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="container section">
        <h1>Project not found.</h1>
      </main>
    );
  }

  const isOwner =
    user &&
    (project.createdBy?._id === user._id ||
      project.createdBy === user._id);

  async function handleCloseProject() {
    if (!confirm("Are you sure you want to close this project?"))
      return;

    try {
      setClosing(true);

      await completeProject(project._id);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to close project.");
    } finally {
      setClosing(false);
    }
  }

  return (
    <main className="container section">
      <Card>

        <h1>{project.title}</h1>

        <p
          style={{
            marginTop: "2rem",
            lineHeight: 1.8,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          {project.requiredSkills?.map((skill: string) => (
            <Chip
              key={skill}
              label={skill}
            />
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          <Card>
            <h3>Domain</h3>
            <p>{project.domain}</p>
          </Card>

          <Card>
            <h3>Looking For</h3>
            <p>{project.teammatesNeeded} teammates</p>
          </Card>

          <Card>
            <h3>Status</h3>
            <p>
              {project.status === "OPEN"
                ? "Open"
                : "Team Complete"}
            </p>
          </Card>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
          {isOwner ? (
            <>
              <Button>
                Edit Project
              </Button>

              <Button
                variant="secondary"
                onClick={handleCloseProject}
                disabled={closing}
              >
                {closing
                  ? "Closing..."
                  : "Close Project"}
              </Button>
            </>
          ) : (
            <Button>
              Apply (Coming Soon)
            </Button>
          )}
        </div>

      </Card>
    </main>
  );
}