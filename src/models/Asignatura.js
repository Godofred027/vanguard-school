import { Schema, model } from "mongoose";

const AsignaturaSchema = new Schema({
  docente: {
    type: String,
    required: true,
  },
  sede: {
    type: String,
    required: true,
  },
  nivel: {
    type: String,
    required: true,
  },
  grado: {
    type: String,
    required: true,
  },
  seccion: {
    type: String,
    required: true,
  },
  anoAcademico: {
    type: String,
    required: true,
  },
  curso: {
    type: Array,
    required: true,
  },
});

export default model("Asignatura", AsignaturaSchema);
