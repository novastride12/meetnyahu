import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import { getMyProject } from "../services/project";

export default function Dashboard() {
  const { user, loading } = useAuth();

  const [myProject, setMyProject] = useState<any>(null);

  useEffect(() => {
    async function loadMyProject() {
      if (!user) return;

      try {
        const response = await getMyProject();
        setMyProject(response.data);
      } catch {
        setMyProject(null);
      }
    }

    loadMyProject();
  }, [user]);

  if (loading) {
    return (
      <div className="auth-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <main className="container section">
        <Card
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1>Access Denied</h1>

          <p
            style={{
              margin: "1.5rem 0 2rem",
            }}
          >
            Please login to continue.
          </p>

          <Link to="/login">
            <Button>
              Login
            </Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="container section">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "4rem",
        }}
      >
        <div>

          <span
            style={{
              color: "var(--muted)",
              fontWeight: 600,
            }}
          >
            DASHBOARD
          </span>

          <h1
            style={{
              marginTop: ".5rem",
            }}
          >
            Welcome back,
            <br />
            {user.name || user.userid}
          </h1>

          <p
            style={{
              marginTop: "1.5rem",
            }}
          >
            Build your next capstone with the right people.
          </p>

        </div>

      </div>

      {!user.profileCompleted && (
        <Card
          style={{
            marginBottom: "2rem",
          }}
        >
          <h2>Complete your profile</h2>

          <p
            style={{
              margin: "1rem 0 2rem",
            }}
          >
            Add your department, CGPA and skills before creating or joining projects.
          </p>

          <Link to="/profile">
            <Button>
              Complete Profile
            </Button>
          </Link>
        </Card>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "2rem",
        }}
      >

        <Card>

          <h2>Browse Projects</h2>

          <p
            style={{
              margin: "1rem 0 2rem",
            }}
          >
            Explore projects looking for teammates.
          </p>

          <Link to="/browse">
            <Button>
              Browse
            </Button>
          </Link>

        </Card>

        {myProject ? (

          <Card>

            <h2>My Project</h2>

            <p
              style={{
                margin: "1rem 0 2rem",
              }}
            >
              {myProject.title}
            </p>

            <Link to={`/projects/${myProject._id}`}>
              <Button>
                View Project
              </Button>
            </Link>

          </Card>

        ) : (

          <Card>

            <h2>Create Project</h2>

            <p
              style={{
                margin: "1rem 0 2rem",
              }}
            >
              Publish your own idea and recruit teammates.
            </p>

            <Link to="/create-project">
              <Button>
                Create Project
              </Button>
            </Link>

          </Card>

        )}

        <Card>

          <h2>My Profile</h2>

          <p
            style={{
              margin: "1rem 0 2rem",
            }}
          >
            Update your profile and showcase your skills.
          </p>

          <Link to="/profile">
            <Button>
              View Profile
            </Button>
          </Link>

        </Card>

      </div>

    </main>
  );
}