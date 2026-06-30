import { Request, Response } from "express";
import { registerUser } from "./auth.service";

export async function register(req: Request, res: Response) {
  try {
    const { userid, password } = req.body;

    const user = await registerUser(userid, password);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Registration failed",
    });
  }
}