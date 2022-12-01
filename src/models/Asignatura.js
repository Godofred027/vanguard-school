import { Schema, model } from "mongoose";
import { datePeru } from "../config";

const AsignaturaSchema = new Schema(
  {
    docente: {
      type: String,
      required: true,
    },
    sede: {
      type: String,
      required: true,
    },
    codigo: {
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
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: datePeru,
    },
    updatedAt: {
      type: String,
      default: datePeru,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Asignatura", AsignaturaSchema);
