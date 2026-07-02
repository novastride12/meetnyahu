import type { Request, Response } from "express";
import { createProjectSchema } from "./project.validator";
import { createProject } from "./project.service";

export async function create(req: Request, res: Response) {
  try {
    const validation = createProjectSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        errors: validation.error.flatten().fieldErrors,
      });
    }

    const user = (req as any).user;

    const project = await createProject(
      user._id,
      validation.data
    );

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Project creation failed",
    });
  }
}