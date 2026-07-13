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

export async function getAllProjects(filters: any) {
  const query: any = {
    status: "OPEN",
  };

  if (filters.domain) {
    query.domain = filters.domain;
  }

  if (filters.search) {
    query.title = {
      $regex: filters.search,
      $options: "i",
    };
  }

  return Project.find(query)
    .populate(
      "createdBy",
      "userid department cgpa skills"
    )
    .sort({
      createdAt: -1,
    });
}

export async function getProject(id: string) {
  return Project.findById(id).populate(
    "createdBy",
    "userid department cgpa skills"
  );
}

export async function deleteProject(
  id: string,
  userId: string
) {

  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  if (
    project.createdBy.toString() !== userId
  ) {
    throw new Error("Unauthorized");
  }

  await project.deleteOne();
}

export async function completeProject(
  id: string,
  userId: string
) {

  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  if (
    project.createdBy.toString() !== userId
  ) {
    throw new Error("Unauthorized");
  }

  project.status = "TEAM_COMPLETE";

  await project.save();

  return project;

}
export async function updateProject(
  id: string,
  userId: string,
  data: any
) {
  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  if (project.createdBy.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  Object.assign(project, data);

  await project.save();

  return project;
}

export async function getMyProject(userId: string) {
  return await Project.findOne({
    createdBy: userId,
    status: "OPEN",
  }).populate(
    "createdBy",
    "userid name department cgpa"
  );
}