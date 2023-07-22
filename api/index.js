import express from "express";
import pacientesRoutes from "./routes/pacientes.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", pacientesRoutes)

app.listen(8800);