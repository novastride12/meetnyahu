import { Link } from "react-router-dom";

import Button from "../components/ui/Button";

export default function Landing() {
  return (
    <main className="container section">
      <section className="landing-hero">
        <div className="landing-hero-copy">
          <span
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "var(--primary-light)",
              color: "var(--primary)",
              fontWeight: 600,
              marginBottom: "2rem",
            }}
          >
            MeetnYahu
          </span>

          <h1
            style={{
              fontSize: "4rem",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            Find the people
            <br />
            worth building with.
          </h1>

          <p
            style={{
              maxWidth: "580px",
              fontSize: "1.15rem",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            Meet students working on capstone projects,
            hackathons and startup ideas.
            Build better teams with people who share
            your interests and skills.
          </p>

          <div className="landing-hero-actions">
            <Link to="/register">
              <Button>
                Get Started
              </Button>
            </Link>

            <Link to="/browse">
              <Button variant="secondary">
                Browse Projects
              </Button>
            </Link>
          </div>
        </div>

        <div className="landing-hero-cards">
          <div className="card">
            <h3>Find Projects</h3>

            <p>
              Browse open capstone ideas posted by
              students across departments.
            </p>
          </div>

          <div className="card">
            <h3>Build Your Team</h3>

            <p>
              Publish your own project and recruit
              teammates with the right skills.
            </p>
          </div>

          <div className="card">
            <h3>Showcase Yourself</h3>

            <p>
              Create a profile highlighting your CGPA,
              department and technical skills.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}