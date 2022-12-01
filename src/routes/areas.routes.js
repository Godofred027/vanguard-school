import { Router } from "express";
import {
  createArea,
  findArea,
  findAreas,
  deleteArea,
  updateArea,
  findCoursesForArea,
  insertCourseForArea,
} from "../controllers/areas.controller";

const router = Router();

router.get("/", findAreas);
router.get("/:codigo", findArea);
router.post("/", createArea);
router.put("/:codigo", updateArea);
router.delete("/:codigo", deleteArea);
router.get("/cursos/:codigo", findCoursesForArea);
router.post("/cursos/:codigo", insertCourseForArea);

export default router;
