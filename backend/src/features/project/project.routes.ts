import { Router } from "express";
import { protect } from "../../middleware/auth.middleware";
import {
  create,
  getAll,
  getOne,
  remove,
  complete,
  update,
} from "./project.controller";

const router = Router();

router.get("/", getAll);

router.post("/", protect, create);

router.get("/:id", getOne);

router.delete("/:id", protect, remove);

router.patch(
    "/:id/complete",
    protect,
    complete
);

router.patch(
    "/:id",
    protect,
    update
);

export default router;