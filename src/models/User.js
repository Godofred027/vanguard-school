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
    },
    contrasena: {
      type: String,
      required: true,
    },
    roles: {
      ref: "Role",
      type: Schema.Types.ObjectId,
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

UserSchema.plugin(mongoosePaginate);
export default model("User", UserSchema);
