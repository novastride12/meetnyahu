import { Router } from "express";
import { protect } from "../../middleware/auth.middleware";
import { create } from "./project.controller";

const router = Router();

router.post("/", protect, create);

export default router;