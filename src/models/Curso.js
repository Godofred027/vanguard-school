import { Schema, model } from "mongoose";
import { datePeru } from "../config";

const CursoSchema = new Schema(
  {
    nivel: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
      unique: true,
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

export default model("Curso", CursoSchema);
