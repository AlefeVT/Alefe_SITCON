import express from "express";
import pacientesRoutes from "./routes/pacientes.js";
import procedimentosRoutes from "./routes/procedimentos.js";
import tiposolicitacaoRoutes from "./routes/tiposolicitacao.js";
import profissionalRoutes from "./routes/profissional.js";
import solicitacoesRoutes from "./routes/solicitacoes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", pacientesRoutes);
app.use("/", procedimentosRoutes); 
app.use("/", tiposolicitacaoRoutes); 
app.use("/", profissionalRoutes); 
app.use("/", solicitacoesRoutes); 

app.listen(8800);
