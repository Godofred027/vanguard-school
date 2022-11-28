import { Router } from "express";
import {
  createSede,
  findSede,
  findSedes,
  deleteSede,
  updateSede,
} from "../controllers/sedes.controller";
const router = Router();

router.get("/", findSedes);
router.post("/", createSede);
router.get("/:codigo", findSede);
router.put("/:codigo", updateSede);
router.delete("/:codigo", deleteSede);

export default router;
