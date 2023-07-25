import express from "express";
import { getProcedimentos } from "../controllers/procedimentos.js";

const router = express.Router()

router.get("/procedimentos", getProcedimentos)

export default router