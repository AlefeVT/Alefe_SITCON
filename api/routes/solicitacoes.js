import express from "express";
import { getSolicitacoes, salvarSolicitacao } from "../controllers/solicitacoes.js";

const router = express.Router();

router.get("/listagem", getSolicitacoes);
router.post("/salvar", salvarSolicitacao);

export default router;
