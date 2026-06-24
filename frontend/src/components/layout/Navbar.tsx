import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">

        <h2 className="logo">
          MeetnYahu
        </h2>
<nav className="nav-links">
  <Link to="/browse">Browse</Link>
  <Link to="/">Home</Link>
  <Link to="/">About</Link>
</nav>

        <div className="nav-actions">

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

        </div>

      </div>
    </header>
  );
}