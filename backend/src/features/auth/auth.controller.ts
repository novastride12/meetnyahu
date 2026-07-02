import type { Request, Response } from "express";
import { registerSchema } from "./auth.validator";
import { loginUser, registerUser } from "./auth.service";
import { generateToken } from "../../shared/utils/jwt";

export async function register(req: Request, res: Response) {
  try {
    const validation = registerSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.error.flatten().fieldErrors,
      });
    }

    const { userid, password } = validation.data;

    const user = await registerUser(userid, password);

    const token = generateToken(user.id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        userid: user.userid,
        profileCompleted: user.profileCompleted,
      },
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Registration failed",
    });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { userid, password } = req.body;

    const user = await loginUser(userid, password);

    const token = generateToken(user.id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: "Login successful",
      data: {
        userid: user.userid,
        profileCompleted: user.profileCompleted,
      },
    });

  } catch (error) {
    return res.status(401).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Login failed",
    });
  }
}

export async function logout(req: Request, res: Response) {
  res.clearCookie("token");

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
}

export async function me(req: Request, res: Response) {
  return res.json({
    success: true,
    data: (req as any).user,
  });
}