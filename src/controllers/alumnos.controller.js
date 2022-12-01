import Alumno from "../models/Alumno.js";
import Role from "../models/Role.js";
import User from "../models/User.js";
import { encrypt } from "../libs/passEncrypt";

export const getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the alumnos",
    });
  }
};

export const getOneAlumno = async (req, res) => {
  try {
    const { numeroDocumento } = req.params;
    const alumno = await Alumno.findOne({ numeroDocumento });
    res.json(alumno);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the alumno",
    });
  }
};

export const createAlumno = async (req, res) => {
  try {
    const {
      tipoDocumento,
      numeroDocumento,
      nombre,
      apellido,
      correo,
      genero,
      nacimiento,
      celular,
      direccion,
      fechaInscripcion,
      nombreApoderado,
      apellidoApoderado,
      parentescoApoderado,
      celularApoderado,
      correoApoderado,
      sede,
      nivel,
      grado,
      seccion,
      estado,
      matricula,
      pension,
      imagen,
      pais,
      departamento,
      provincia,
      distrito,
      roles,
    } = req.body;
    const newAlumno = new Alumno({
      tipoDocumento,
      numeroDocumento,
      nombre,
      apellido,
      correo,
      contrasena: encrypt(numeroDocumento),
      genero,
      nacimiento,
      celular,
      direccion,
      fechaInscripcion,
      nombreApoderado,
      apellidoApoderado,
      parentescoApoderado,
      celularApoderado,
      correoApoderado,
      sede,
      nivel,
      grado,
      seccion,
      estado,
      matricula,
      pension,
      imagen,
      pais,
      departamento,
      provincia,
      distrito,
    });
    const newUser = new User({
      nombre: numeroDocumento,
      numeroDocumento: numeroDocumento,
      correo: correo,
      contrasena: encrypt(numeroDocumento),
      roles,
    });
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "Alumno" });
      newUser.roles = [role._id];
      newAlumno.roles = [role._id];
    }
    await newUser.save();
    const alumnoSaved = await newAlumno.save();
    res.json(alumnoSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating the alumno",
    });
  }
};

export const deleteAlumno = async (req, res) => {
  try {
    const { numeroDocumento } = req.params;
    await Alumno.findOneAndDelete({ numeroDocumento });
    res.json({ message: "Alumno deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong deleting the alumno",
    });
  }
};

export const updateAlumno = async (req, res) => {
  try {
    const { numeroDocumento } = req.params;
    const alumno = req.body;
    await Alumno.findOneAndUpdate({ numeroDocumento }, alumno, { new: true });
    res.json({ message: "Alumno updated" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong updating the alumno",
    });
  }
};
