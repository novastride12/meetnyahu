import type { Request, Response, NextFunction } from "express";
import User from "../features/auth/auth.model";
import { verifyToken } from "../shared/utils/jwt";

export async function protect(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const payload = verifyToken(token);

    const user = await User.findById(payload.userId).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    (req as any).user = user;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}