import express from "express";
import { getTiposolicitacao } from "../controllers/tiposolicitacao.js";

const routes = express.Router();

routes.get("/tiposolicitacao", getTiposolicitacao);

export default routes;