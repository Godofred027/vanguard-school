import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { datePeru } from "../config";

const SedeSchema = new Schema(
  {
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

SedeSchema.plugin(mongoosePaginate);

export default model("Sede", SedeSchema);
