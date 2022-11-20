import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import alumnosRoutes from "./routes/alumnos.routes";
import authRoutes from "./routes/auth.routes";
import cursosRoutes from "./routes/cursos.routes";
import docentesRoutes from "./routes/docentes.routes";
import examenesRoutes from "./routes/examenes.routes";
import gradosRoutes from "./routes/grados.routes";
import matriculasRoutes from "./routes/matriculas.routes";
import notasRoutes from "./routes/notas.routes";
import padresRoutes from "./routes/padres.routes";
import recompensasRoutes from "./routes/recompensas.routes";
import recursosRoutes from "./routes/recursos.routes";
import salonesRoutes from "./routes/salones.routes";
import seccionesRoutes from "./routes/secciones.routes";
import tareasRoutes from "./routes/tareas.routes";
import usuariosRoutes from "./routes/usuarios.routes";

const app = express();

app.use(morgan("dev"));

app.set("pkg", pkg);

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.get("/api", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/alumnos", alumnosRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/docentes", docentesRoutes);
app.use("/api/examenes", examenesRoutes);
app.use("/api/grados", gradosRoutes);
app.use("/api/matriculas", matriculasRoutes);
app.use("/api/notas", notasRoutes);
app.use("/api/padres", padresRoutes);
app.use("/api/recompensas", recompensasRoutes);
app.use("/api/recursos", recursosRoutes);
app.use("/api/salones", salonesRoutes);
app.use("/api/secciones", seccionesRoutes);
app.use("/api/tareas", tareasRoutes);
app.use("/api/usuarios", usuariosRoutes);

export default app;
