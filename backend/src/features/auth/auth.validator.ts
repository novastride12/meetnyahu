import { z } from "zod";

export const registerSchema = z.object({
  userid: z
    .string()
    .trim()
    .min(4, "User ID must be at least 4 characters.")
    .max(20, "User ID cannot exceed 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "User ID can only contain letters, numbers and underscores."
    ),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password cannot exceed 64 characters."),
});