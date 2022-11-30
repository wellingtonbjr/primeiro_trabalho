import express from "express";
import { createAluno, updateAluno, deleteAluno, getAluno, getAlunos } from "../controllers/alunoController.js";
import { verificarToken } from "../utils/verificarToken.js";

const router = express.Router();

router.post("/", createAluno);
router.put("/:id", verificarToken, updateAluno);
router.delete("/:id", verificarToken, deleteAluno);
router.get("/:id", verificarToken, getAluno);
router.get("/", verificarToken, getAlunos);

export default router;