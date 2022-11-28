import { Router } from "express";
import {
  createNivel,
  findNivel,
  findNiveles,
  deleteNivel,
  updateNivel,
} from "../controllers/niveles.controller";

const router = Router();

router.get("/", findNiveles);
router.get("/:codigo", findNivel);
router.post("/", createNivel);
router.put("/:codigo", updateNivel);
router.delete("/:codigo", deleteNivel);

export default router;
