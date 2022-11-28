import { Router } from "express";
import {
  findCostos,
  createCosto,
  findCosto,
  updateCosto,
  deleteCosto,
} from "../controllers/costos.controller";

const router = Router();

router.get("/", findCostos);
router.post("/", createCosto);
router.get("/:codigo", findCosto);
router.put("/:codigo", updateCosto);
router.delete("/:codigo", deleteCosto);

export default router;
