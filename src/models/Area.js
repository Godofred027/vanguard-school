import { Schema, model } from "mongoose";

const AreaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  nivel: {
    type: String,
    required: true,
  },
  cursos: {
    type: Array,
    required: false,
  },
});

export default model("Area", AreaSchema);
