import type { HydratedDocument } from "mongoose";
import type { IUser } from "../features/auth/auth.model";

declare global {
  namespace Express {
    interface Request {
      user?: HydratedDocument<IUser>;
    }
  }
}

export {};