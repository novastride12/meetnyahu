import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().max(50).optional(),

  srn: z.string().trim().max(20).optional(),

  gender: z.enum(["Male", "Female", "Other"]),

  department: z.enum(["CSE", "AIML", "ECE"]),

  cgpa: z.number().min(0).max(10),

  skills: z.array(z.string()).optional(),
});