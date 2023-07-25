import express from "express";
import { getProfissional } from "../controllers/profissional.js";

const routes = express.Router();

routes.get("/profissional", getProfissional);

export default routes;