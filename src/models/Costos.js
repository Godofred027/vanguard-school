import { Schema, model } from "mongoose";

const CostosSchema = new Schema({
  descripcion: {
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
});

export default model("Costos", CostosSchema);
