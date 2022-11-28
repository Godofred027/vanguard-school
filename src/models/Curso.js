import { Schema, model } from "mongoose";

const CursoSchema = new Schema({
  nivel: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  abreviatura: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: false,
  },
  silabo: {
    type: String,
    required: false,
  },
});

export default model("Curso", CursoSchema);
