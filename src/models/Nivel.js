import { Schema, model } from "mongoose";
import { datePeru } from "../config";

const Mixed = Schema.Types.Mixed;

const NivelSchema = new Schema(
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
    definicionGrado: {
      type: String,
      required: true,
    },
    gradoMinimo: {
      type: Number,
      required: true,
    },
    gradoMaximo: {
      type: Number,
      required: true,
    },
    tipoCalificacion: {
      type: String,
      required: true,
    },
    calificacionMaxima: {
      type: Number,
      required: false,
    },
    calificacionMinima: {
      type: Number,
      required: false,
    },
    calificacionAprobatoria: {
      type: Number,
      required: false,
    },
    grados: {
      type: Array,
      default: function () {
        this.grados = [];
        if (this.definicionGrado.trim() === "Grado") {
          for (let i = this.gradoMinimo; i <= this.gradoMaximo; i++) {
            this.grados.push(i + " Grado");
          }
        } else if (this.definicionGrado.trim() === "Años") {
          for (let i = this.gradoMinimo; i <= this.gradoMaximo; i++) {
            this.grados.push(i + " Años");
          }
        }
      },
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

export default model("Nivel", NivelSchema);
