import { Schema, model } from "mongoose";

const AlumnoSchema = new Schema(
  {
    tipoDocumento: {
      type: String,
      required: true,
      unique: true,
    },
    numeroDocumento: {
      type: String,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    contrasena: {
      type: String,
      required: true,
    },
    roles: {
      ref: "Role",
      type: Schema.Types.ObjectId,
    },
    genero: {
      type: String,
      required: true,
    },
    nacimiento: {
      type: Date,
      required: true,
    },
    celular: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    fechaInscripcion: {
      type: Date,
      required: true,
    },
    nombreApoderado: {
      type: String,
      required: true,
    },
    apellidoApoderado: {
      type: String,
      required: true,
    },
    tipoDocumentoApoderado: {
      type: String,
      required: true,
    },
    numeroDocumentoApoderado: {
      type: String,
      required: true,
    },
    parentescoApoderado: {
      type: String,
      required: true,
    },
    celularApoderado: {
      type: String,
      required: true,
    },
    correoApoderado: {
      type: String,
      required: true,
    },
    sede: {
      type: String,
      required: true,
    },
    nivel: {
      type: String,
      required: true,
    },
    grado: {
      type: String,
      required: true,
    },
    seccion: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: false,
    },
    matricula: {
      type: String,
      required: false,
    },
    pension: {
      type: String,
      required: false,
    },
    imagen: {
      type: String,
      required: false,
    },
    pais: {
      type: String,
      required: false,
    },
    departamento: {
      type: String,
      required: false,
    },
    provincia: {
      type: String,
      required: false,
    },
    distrito: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Alumno", AlumnoSchema);
