import { Router } from "express";
import {
  findAsignatura,
  findAsignaturas,
  createAsignatura,
  updateAsignatura,
  deleteAsignatura,
} from "../controllers/asignaturas.controller";

const router = Router();

router.get("/", findAsignaturas);
router.get("/:codigo", findAsignatura);
router.post("/", createAsignatura);
router.put("/:codigo", updateAsignatura);
router.delete("/:codigo", deleteAsignatura);

export default router;
