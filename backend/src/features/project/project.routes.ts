import { Router } from "express";
import { protect } from "../../middleware/auth.middleware";
import {
   create,
  getAll,
  getOne,
  update,
  remove,
  complete,
  getMine,
} from "./project.controller";

const router = Router();

router.get("/", getAll);

router.post("/", protect, create);

router.get(
  "/me",
  protect,
  getMine
);

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