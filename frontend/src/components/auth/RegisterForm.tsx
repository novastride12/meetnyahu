import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";

export default function RegisterForm() {
  return (
<Card>
      <h1>Create your account</h1>

      <p className="auth-subtitle">
        Join MeetnYahu and start building your dream team.
      </p>

      <form className="auth-form">

        

        <Input
    id="userid"
    label="User ID"
    placeholder="Choose a unique user ID"
/>

       <Input
    id="password"
    type="password"
    label="Password"
    placeholder="Enter password"
/>
    <Input
    id="confirmPassword"
    type="password"
    label="Confirm Password"
    placeholder="Confirm password"
/>

        <Button type="submit">
          Create Account
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