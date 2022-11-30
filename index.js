import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDatabase from "./config/db.js";
import { errorHandling } from "./utils/error.js";

import routeAlunos from "./routes/alunoRoutes.js";
import routeInstrutores from "./routes/instrutorRoutes.js";
import routeGruposMusculares from "./routes/grupoMuscularRoutes.js";
import routeTiposExercicios from "./routes/tipoExercicioRoutes.js";
import routeFichas from "./routes/fichaRoutes.js";
import routeAuth from "./routes/authRoutes.js";

const app = express();
dotenv.config({path: "./vars/.env"});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(errorHandling);

app.use("/api/auth", routeAuth);
app.use("/api/alunos", routeAlunos);
app.use("/api/instrutores", routeInstrutores);
app.use("/api/gruposmusculares", routeGruposMusculares);
app.use("/api/tiposexercicios", routeTiposExercicios);
app.use("/api/fichas", routeFichas);

app.listen(8080, () => {
    connectDatabase();
    console.log("Servidor rodando na porta 8080.");
});