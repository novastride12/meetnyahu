import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-left">

          <span className="hero-badge">
            MeetnYahu
          </span>

          <h1>
            Find the teammates
            who make ideas real.
          </h1>

          <p>
            Every great project starts with the right team.
            Discover talented students, share your ideas,
            and build something meaningful together.
          </p>

          <div className="hero-actions">

            <Button>
              Browse Projects
            </Button>

            <Button variant="secondary">
              Create Account
            </Button>

          </div>

        </div>

        <div className="hero-right">

          <div className="project-preview">
            <h3>AI Resume Analyzer</h3>
            <p>Looking for React + ML</p>
          </div>

          <div className="project-preview">
            <h3>Drone Navigation</h3>
            <p>Looking for Python + CV</p>
          </div>

          <div className="project-preview">
            <h3>Smart Attendance</h3>
            <p>Looking for React + Node</p>
          </div>

        </div>

      </div>
    </section>
  );
}