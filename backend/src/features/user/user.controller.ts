import type { Request, Response } from "express";
import { updateProfileSchema } from "./user.validator";
import { updateProfile } from "./user.service";

export async function completeProfile(
  req: Request,
  res: Response
) {
  try {
    const validation = updateProfileSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        errors: validation.error.flatten().fieldErrors,
      });
    }

    const currentUser = (req as any).user;

    const updatedUser = await updateProfile(
      currentUser._id,
      validation.data
    );

    return res.json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
}