import express from "express";
import {
  criarAvaliacao,
  listarAvaliacoes,
  listarAvaliacoesPorJogo,
  deletarAvaliacao
} from "../controllers/avaliacaoController.js";

const router = express.Router();

router.post("/", criarAvaliacao);
router.get("/", listarAvaliacoes);
router.get("/:id", listarAvaliacoesPorJogo);
router.delete("/:id", deletarAvaliacao);

export default router;
