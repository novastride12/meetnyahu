function App() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>MeetnYahu</h1>

          <p>
            Where ideas find teammates.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <button className="btn-primary">
              Browse Projects
            </button>

            <button className="btn-secondary">
              Create Account
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;