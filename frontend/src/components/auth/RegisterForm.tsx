import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";

import { register } from "../../services/auth";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      console.log({
    userid,
    password,
    confirmPassword
});

     const response = await register({
  userid,
  password,
});

console.log("REGISTER RESPONSE:", response);

      navigate("/login");

    } catch (err: any) {
      setError(
        err.response?.data?.message ??
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="auth-card">

      <h1>Create your account</h1>

      <p className="auth-subtitle">
        Join MeetnYahu and start building your dream team.
      </p>

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <Input
          id="userid"
          label="User ID"
          placeholder="Choose a unique User ID"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          required
        />

        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Input
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Account"}
        </Button>

      </form>

      <p className="auth-footer">
        Already have an account?{" "}
        <Link to="/login">
          Login
        </Link>
      </p>

    </Card>
  );
}