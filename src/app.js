import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import indexRoutes from "./routes/index.routes";
import userRoutes from "./routes/user.routes";
import sedesRoutes from "./routes/sedes.routes";
import nivelesRoutes from "./routes/niveles.routes";
import costosRoutes from "./routes/costos.routes";
import areasRoutes from "./routes/areas.routes";
import cursosRoutes from "./routes/cursos.routes";
import asignaturasRoutes from "./routes/asignaturas.routes";

const app = express();

//settings
app.set("port", config.portExpress);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", indexRoutes);
app.use("/api/usuarios", userRoutes);
app.use("/api/sedes", sedesRoutes);
app.use("/api/niveles", nivelesRoutes);
app.use("/api/costos", costosRoutes);
app.use("/api/areas", areasRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/asignaturas", asignaturasRoutes);

export default app;
