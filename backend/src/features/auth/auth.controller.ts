import type { Request, Response } from "express";
import { registerSchema } from "./auth.validator";
import { registerUser } from "./auth.service";

export async function register(req: Request, res: Response) {
  try {
    console.log("========== REGISTER REQUEST ==========");
    console.log("BODY:", req.body);

    const validation = registerSchema.safeParse(req.body);

    console.log("VALIDATION:", validation);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.error.flatten().fieldErrors,
      });
    }

    const { userid, password } = validation.data;

    const user = await registerUser(userid, password);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Registration failed",
    });
  }
}