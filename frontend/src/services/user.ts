import api from "./api";

export async function completeProfile(data: any) {
  const response = await api.patch("/users/profile", data);
  return response.data;
}