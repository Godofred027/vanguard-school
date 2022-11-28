import { Schema, model } from "mongoose";

const NivelSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  definicionGrado: {
    type: String,
    required: true,
  },
  gradoMinimo: {
    type: Number,
    required: true,
  },
  gradoMaximo: {
    type: Number,
    required: true,
  },
  tipoCalificacion: {
    type: String,
    required: true,
  },
  calificacionMaxima: {
    type: Number,
    required: false,
  },
  calificacionMinima: {
    type: Number,
    required: false,
  },
  calificacionAprobatoria: {
    type: Number,
    required: false,
  },
  grados: {
    type: Array,
    required: true,
  },
});

export default model("Nivel", NivelSchema);
