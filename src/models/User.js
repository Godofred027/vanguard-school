import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { datePeru } from "../config";

const UserSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    numeroDocumento: {
      type: String,
      required: true,
      unique: true,
    },
    correo: {
      type: String,
      required: true,
    },
    contrasena: {
      type: String,
      required: true,
    },
    rol: {
      type: Array,
      required: true,
    },
    createdAt: {
      type: Date,
      default: datePeru,
    },
    updatedAt: {
      type: Date,
      default: datePeru,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.plugin(mongoosePaginate);
export default model("User", UserSchema);
