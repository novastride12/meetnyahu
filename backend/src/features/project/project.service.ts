import Project from "./project.model";

export async function createProject(userId: string, data: any) {
  const existingProject = await Project.findOne({
    createdBy: userId,
    status: "OPEN",
  });

  if (existingProject) {
    throw new Error(
      "You already have an active project."
    );
  }

  const project = await Project.create({
    ...data,
    createdBy: userId,
  });

  return project;
}