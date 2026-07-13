import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { getMyProject } from "../../services/project";

import { useEffect, useState } from "react";

import Button from "../ui/Button";

export default function Navbar() {
  const { user, logout } = useAuth();

  const [myProject, setMyProject] = useState<any>(null);

  useEffect(() => {
    async function loadProject() {
      if (!user) return;

      try {
        const response = await getMyProject();
        setMyProject(response.data);
      } catch {
        setMyProject(null);
      }
    }

    loadProject();
  }, [user]);

  async function handleLogout() {
    await logout();
    window.location.href = "/";
  }

  return (
    <header className="navbar">
      <div className="container navbar-content">

        <Link
          to={user ? "/dashboard" : "/"}
          className="logo"
        >
          MeetnYahu
        </Link>

        <nav className="nav-links">

          {user ? (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/browse">
                Browse
              </Link>

              {myProject ? (
                <Link to={`/projects/${myProject._id}`}>
                  My Project
                </Link>
              ) : (
                <Link to="/create-project">
                  Create Project
                </Link>
              )}

              <Link to="/profile">
                Profile
              </Link>
            </>
          ) : null}

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
              <div className="nav-user">
                <span className="nav-user-id">
                  @{user.userid}
                </span>

                <Button
                  variant="secondary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </>
          )}

        </div>

      </div>
    </header>
  );
}