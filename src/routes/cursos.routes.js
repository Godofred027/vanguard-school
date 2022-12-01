import { Router } from "express";
import {
  createCurso,
  findCurso,
  findCursos,
  deleteCurso,
  updateCurso,
  findCursosByNivel,
} from "../controllers/cursos.controller";

const router = Router();

router.get("/", findCursos);
router.get("/:codigo", findCurso);
router.post("/", createCurso);
router.put("/:codigo", updateCurso);
router.delete("/:codigo", deleteCurso);
router.get("/nivel/:nivel", findCursosByNivel);

export default router;
