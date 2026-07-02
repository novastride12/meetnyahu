import type { Request, Response } from "express";
import { createProjectSchema, updateProjectSchema  } from "./project.validator";
import { completeProject, createProject, deleteProject , updateProject } from "./project.service";
import { getAllProjects,getProject } from "./project.service";

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
export async function getAll(req: Request, res: Response) {
  try {
    const projects = await getAllProjects(req.query);

    return res.json({
      success: true,
      count: projects.length,
      data: projects,
    });

  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
}

export async function getOne(
  req: Request,
  res: Response
) {
  try {

    const project = await getProject(req.params.id as string);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.json({
      success: true,
      data: project,
    });

  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
}

export async function remove(
  req: Request,
  res: Response
) {

  try {

    const user = (req as any).user;

    await deleteProject(
      req.params.id as string,
      user._id.toString()
    );

    return res.json({
      success: true,
      message: "Project deleted",
    });

  } catch (error) {

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Delete failed",
    });

  }

}
export async function complete(
  req: Request,
  res: Response
) {

  try {

    const user = (req as any).user;

    const project =
      await completeProject(
        req.params.id as string,
        user._id.toString()
      );

    return res.json({
      success: true,
      data: project,
    });

  } catch (error) {

    return res.status(400).json({
      success:false, 
      message:
      error instanceof Error
      ? error.message
      : "Failed",
    });

  }

}
export async function update(
  req: Request,
  res: Response
) {
  try {

    const validation =
      updateProjectSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success:false,
        errors:
        validation.error.flatten().fieldErrors,
      });
    }

    const user = (req as any).user;

    const project =
      await updateProject(
        req.params.id as string,
        user._id.toString(),
        validation.data
      );

    return res.json({
      success:true,
      message:"Project updated",
      data:project,
    });

  } catch(error) {

    return res.status(400).json({
      success:false,
      message:
      error instanceof Error
      ? error.message
      : "Update failed",
    });

  }
}