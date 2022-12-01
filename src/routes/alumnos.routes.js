import { Router } from "express";

import {
  createAlumno,
  getAlumnos,
  getOneAlumno,
  deleteAlumno,
  updateAlumno,
} from "../controllers/alumnos.controller";

const router = Router();

router.post("/", createAlumno);
router.get("/", getAlumnos);
router.get("/:numeroDocumento", getOneAlumno);
router.delete("/:numeroDocumento", deleteAlumno);
router.put("/:numeroDocumento", updateAlumno);

export default router;
