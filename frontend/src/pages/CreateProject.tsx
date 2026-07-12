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

      await createProject({
        title,
        description,
        domain,
        skills: skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
        membersNeeded: Number(membersNeeded),
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

          <Input
            id="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Input
            id="domain"
            label="Domain"
            placeholder="AI, Web, Blockchain..."
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />

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