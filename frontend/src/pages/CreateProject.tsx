import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { createProject } from "../services/project";

export default function CreateProject() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [domain, setDomain] = useState("");
  const [skills, setSkills] = useState("");
  const [membersNeeded, setMembersNeeded] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      console.log({
  title,
  description,
  domain,
  requiredSkills: skills
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
  teammatesNeeded: Number(membersNeeded),
});

      await createProject({
    title,
    description,
    domain,

    requiredSkills: skills
        .split(",")
        .map(s => s.trim())
        .filter(Boolean),

    teammatesNeeded: Number(membersNeeded),
});

      navigate("/browse");

    } catch (err) {
      console.error(err);
      alert("Failed to create project.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container section">

      <Card
        className="auth-card"
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <h1>Create Project</h1>

        <p className="auth-subtitle">
          Publish your project and start finding teammates.
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <Input
            id="title"
            label="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

         

          <div className="form-group">
  <label htmlFor="domain">Domain</label>

  <select
    id="domain"
    value={domain}
    onChange={(e) => setDomain(e.target.value)}
    required
  >
    <option value="">Select Domain</option>

    <option value="Web Development">Web Development</option>
    <option value="Mobile Development">Mobile Development</option>
    <option value="Machine Learning">Machine Learning</option>
    <option value="Artificial Intelligence">Artificial Intelligence</option>
    <option value="Cybersecurity">Cybersecurity</option>
    <option value="Blockchain">Blockchain</option>
    <option value="Cloud Computing">Cloud Computing</option>
    <option value="IoT">IoT</option>
    <option value="Data Science">Data Science</option>
    <option value="Game Development">Game Development</option>
    <option value="Other">Other</option>
  </select>
</div>

          <Input
            id="skills"
            label="Required Skills"
            placeholder="React, Node.js, MongoDB"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <Input
            id="members"
            type="number"
            label="Members Needed"
            value={membersNeeded}
            onChange={(e) => setMembersNeeded(e.target.value)}
            required
          />
           <div className="form-group">
  <label htmlFor="description">
    Description
  </label>

  <textarea
    id="description"
    rows={6}
    placeholder="Describe your project, expected work, goals and the type of teammates you're looking for..."
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
  />
</div>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Project"}
          </Button>

        </form>

      </Card>

    </main>
  );
}