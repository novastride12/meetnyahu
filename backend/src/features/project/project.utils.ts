import Project from "./project.model";

export async function getOwnedProject(
  projectId: string,
  userId: string
) {
  const project = await Project.findById(projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  if (project.createdBy.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  return project;
}