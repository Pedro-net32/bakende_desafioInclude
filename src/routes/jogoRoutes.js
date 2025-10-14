import express from "express";
import {
  criarJogo,
  listarJogos,
  atualizarJogo,
  deletarJogo,
  detalhesJogo,
} from "../controllers/jogoController.js";

const router = express.Router();
router.post("/", criarJogo);
router.get("/", listarJogos);
router.get("/:id", detalhesJogo);
router.put("/:id", atualizarJogo);
router.delete("/:id", deletarJogo);

export default router;
