import { Schema, model } from "mongoose";

const PersonalSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  tipoDocumento: {
    type: String,
    required: true,
  },
  numeroDocumento: {
    type: String,
    required: true,
    unique: true,
  },
  genero: {
    type: String,
    required: true,
  },
  estadoCivil: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  paisNacimiento: {
    type: String,
    required: true,
  },
  departamentoNacimiento: {
    type: String,
    required: true,
  },
  provinciaNacimiento: {
    type: String,
    required: true,
  },
  distritoNacimiento: {
    type: String,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
  departamento: {
    type: String,
    required: true,
  },
  provincia: {
    type: String,
    required: true,
  },
  distrito: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: false,
  },
  celular: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  },
  tipoContrato: {
    type: String,
    required: true,
  },
  observaciones: {
    type: String,
    required: false,
  },
  gradoInstruccion: {
    type: String,
    required: true,
  },
  centroEstudios: {
    type: String,
    required: false,
  },
  profesion: {
    type: String,
    required: false,
  },
  entrada: {
    type: Date,
    required: false,
  },
  salida: {
    type: Date,
    required: false,
  },
});

export default model("Personal", PersonalSchema);
