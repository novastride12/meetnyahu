import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { completeProfile } from "../services/user";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const navigate = useNavigate();
const { user, refreshUser } = useAuth();
  const [name, setName] = useState("");
  const [srn, setSrn] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [skills, setSkills] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;

    console.log("Loading profile", user);

    setName(user.name ?? "");
    setSrn(user.srn ?? "");
    setDepartment(user.department ?? "");
    setGender(user.gender ?? "");
    setCgpa(user.cgpa?.toString() ?? "");
    setSkills(user.skills.join(", "));
}, [user]);

  

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      console.log({
    name,
    srn,
    department,
    gender,
    cgpa: Number(cgpa),
    skills: skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
});

      await completeProfile({
        name,
        srn,
        department,
        gender,
        cgpa: Number(cgpa),
        skills: skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });

      await refreshUser();

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container section">

      <Card
        className="auth-card"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1>
  {user?.profileCompleted ? "My Profile" : "Complete Profile"}
</h1>

<p className="auth-subtitle">
  {user?.profileCompleted
    ? "Update your information and skills."
    : "Tell others a little about yourself."}
</p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >
          <Input
            id="name"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            id="srn"
            label="SRN"
            value={srn}
            onChange={(e) => setSrn(e.target.value)}
            required
          />

          <div className="form-group">
    <label htmlFor="department">
        Department
    </label>

    <select
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
    >
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="AIML">AIML</option>
        <option value="ECE">ECE</option>
    </select>
</div>

<div className="form-group">
    <label htmlFor="gender">
        Gender
    </label>

    <select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
    >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>
</div>

          <Input
            id="cgpa"
            type="number"
            step="0.01"
            label="CGPA"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            required
          />

          <Input
            id="skills"
            label="Skills"
            placeholder="React, Node.js, MongoDB"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

        <Button
  type="submit"
  disabled={loading}
>
  {loading
    ? "Saving..."
    : user?.profileCompleted
      ? "Update Profile"
      : "Save Profile"}
</Button>

        </form>

      </Card>

    </main>
  );
}