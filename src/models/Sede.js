import { Schema, model } from "mongoose";

const SedeSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
});

export default model("Sede", SedeSchema);
