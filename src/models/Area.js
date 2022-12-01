import { Schema, model } from "mongoose";
import { datePeru } from "../config";

const AreaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    nivel: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
      unique: true,
    },
    cursos: {
      type: Array,
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

export default model("Area", AreaSchema);
