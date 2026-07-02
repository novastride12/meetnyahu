import { Router } from "express";
import { protect } from "../../middleware/auth.middleware";
import { completeProfile } from "./user.controller";

const router = Router();

router.patch(
  "/profile",
  protect,
  completeProfile
);

export default router;