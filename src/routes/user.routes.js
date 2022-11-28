import { Router } from "express";
import {
  findUsers,
  createUser,
  findOneUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers";

const router = Router();

router.get("/", findUsers);
router.get("/:numeroDocumento", findOneUsers);
router.post("/", createUser);
router.put("/:numeroDocumento", updateUser);
router.delete("/:numeroDocumento", deleteUser);

export default router;
