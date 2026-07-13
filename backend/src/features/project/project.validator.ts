import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().trim().min(2).max(100),

  description: z.string().trim().min(5).max(1000),

  domain: z.enum([
    "Web Development",
    "Mobile Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Cybersecurity",
    "Blockchain",
    "Cloud Computing",
    "IoT",
    "Data Science",
    "Game Development",
    "Other",
  ]),

  requiredSkills: z.array(z.string()).optional(),

  teammatesNeeded: z.number().min(1).max(10),
});

export const updateProjectSchema = createProjectSchema.partial();