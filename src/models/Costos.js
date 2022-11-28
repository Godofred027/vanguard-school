import { Schema, model } from "mongoose";
import { datePeru } from "../config";

const CostosSchema = new Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    valorMatricula: {
      type: Number,
      required: true,
    },
    valorMensualidad: {
      type: Number,
      required: true,
    },
    valorAgenda: {
      type: Number,
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

export default model("Costos", CostosSchema);
