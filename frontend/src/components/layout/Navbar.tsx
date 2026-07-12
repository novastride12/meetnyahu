import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import Button from "../ui/Button";

export default function Navbar() {
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    window.location.href = "/";
  }

  return (
    <header className="navbar">
      <div className="container navbar-content">

        <Link
          to="/"
          className="logo"
        >
          MeetnYahu
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>

          {user && (
            <>
              <Link to="/create-project">
                Create
              </Link>

              <Link to="/profile">
                Profile
              </Link>
            </>
          )}
        </nav>

        <div className="nav-actions">

          {!user ? (
            <>
              <Link to="/login">
                <Button variant="secondary">
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button>
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <>
              <span
                style={{
                  color: "var(--muted)",
                  fontWeight: 600,
                }}
              >
                @{user.userid}
              </span>

              <Button
                variant="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}

        </div>

      </div>
    </header>
  );
}