import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { login as loginApi } from "../services/auth";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await loginApi({
        userid,
        password,
      });

      await refreshUser();

      navigate("/browse");
    } catch {
      setError("Invalid User ID or Password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <Card className="auth-card">
        <h1>Welcome back</h1>

        <p className="auth-subtitle">
          Find your perfect capstone teammates.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <Input
            id="userid"
            label="User ID"
            placeholder="Enter your User ID"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
          />

          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
  <p
    style={{
      color: "#DC2626",
      marginTop: "1rem",
      gridColumn: "1 / -1",
      fontWeight: 500,
    }}
  >
    {error}
  </p>
)}

          
       <Button
  type="submit"
  disabled={loading}
  style={{
    gridColumn: "1 / -1",
    width: "220px",
    justifySelf: "center",
  }}
>
  {loading ? "Signing In..." : "Continue"}
</Button>


        </form>

        <div className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </div>
      </Card>
    </div>
  );
}