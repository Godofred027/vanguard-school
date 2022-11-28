import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import userRoutes from "./routes/user.routes";
import sedesRoutes from "./routes/sedes.routes";
import nivelesRoutes from "./routes/niveles.routes";
import costosRoutes from "./routes/costos.routes";

const app = express();

//settings
app.set("port", config.portExpress);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.get("/", (req, res) => {
  res.json({
    name: config.nameApp,
    author: config.authorApp,
    description: config.descriptionApp,
    version: config.versionApp,
  });
});

app.get("/api", (req, res) => {
  res.json({
    name: config.nameApp,
    author: config.authorApp,
    description: config.descriptionApp,
    version: config.versionApp,
  });
});

app.use("/api/users", userRoutes);
app.use("/api/sedes", sedesRoutes);
app.use("/api/niveles", nivelesRoutes);
app.use("/api/costos", costosRoutes);

export default app;
