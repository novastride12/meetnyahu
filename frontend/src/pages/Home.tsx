import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Home() {
  const { user, loading } = useAuth();

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

        <section
          style={{
            minHeight: "85vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: 760 }}>

            <span
              style={{
                display: "inline-block",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "var(--primary-light)",
                marginBottom: "1.5rem",
                fontWeight: 600,
              }}
            >
              MeetnYahu
            </span>

            <h1>
              Find the people
              <br />
              worth building with.
            </h1>

            <p
              style={{
                marginTop: "2rem",
                maxWidth: "620px",
              }}
            >
              Discover teammates for capstone projects,
              hackathons and startup ideas. Build faster with
              people who share your vision.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "3rem",
              }}
            >
              <Link to="/register">
                <Button>
                  Get Started
                </Button>
              </Link>

              <Link to="/login">
                <Button variant="secondary">
                  Login
                </Button>
              </Link>
            </div>

          </div>
        </section>

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
          gap: "2rem",
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
            {user.userid}
          </h1>

          <p
            style={{
              marginTop: "1.5rem",
            }}
          >
            Build your next capstone with the right team.
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
            Add your department, CGPA and skills before
            applying to projects.
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
            Explore projects from students looking for
            teammates.
          </p>

          <Link to="/browse">
            <Button>
              Browse
            </Button>
          </Link>

        </Card>

        <Card>

          <h2>Create Project</h2>

          <p
            style={{
              margin: "1rem 0 2rem",
            }}
          >
            Publish your own project and recruit teammates.
          </p>

          <Link to="/create-project">
            <Button>
              Create
            </Button>
          </Link>

        </Card>

        <Card>

          <h2>My Profile</h2>

          <p
            style={{
              margin: "1rem 0 2rem",
            }}
          >
            Manage your profile and showcase your skills.
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