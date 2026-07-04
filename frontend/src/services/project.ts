import api from "./api";

export async function getProjects() {
  const response = await api.get("/projects");
  return response.data;
}

export async function getProject(id: string) {
  const response = await api.get(`/projects/${id}`);
  return response.data;
}

export async function createProject(data: any) {
  const response = await api.post("/projects", data);
  return response.data;
}

export async function updateProject(id: string, data: any) {
  const response = await api.patch(`/projects/${id}`, data);
  return response.data;
}

export async function deleteProject(id: string) {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
}

export async function completeProject(id: string) {
  const response = await api.patch(`/projects/${id}/complete`);
  return response.data;
}