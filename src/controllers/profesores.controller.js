import Personal from "../models/personal.js";
import Role from "../models/role.js";
import User from "../models/user.js";
import { encrypt } from "../libs/passEncrypt.js";

export const getProfesores = async (req, res) => {
  try {
    const profesores = await Personal.find();
    res.json(profesores);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Something goes wrong retrieving the profesores",
    });
  }
};

export const getProfesor = async (req, res) => {
  try {
    const { numeroDocumento } = req.params;
    const profesor = await Personal.findOne({ numeroDocumento });
    res.json(profesor);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the profesor",
    });
  }
};

export const createProfesor = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      tipoDocumento,
      numeroDocumento,
      genero,
      estadoCivil,
      imagen,
      fechaNacimiento,
      paisNacimiento,
      departamentoNacimiento,
      provinciaNacimiento,
      distritoNacimiento,
      pais,
      departamento,
      provincia,
      distrito,
      direccion,
      telefono,
      correo,
      fechaIngreso,
      cargo,
      tipoContrato,
      observaciones,
      gradoInstruccion,
      centroEstudios,
      profesion,
      entrada,
      salida,
      roles,
    } = req.body;
    const newProfesor = new Personal({
      nombre,
      apellido,
      tipoDocumento,
      numeroDocumento,
      genero,
      estadoCivil,
      imagen,
      fechaNacimiento,
      paisNacimiento,
      departamentoNacimiento,
      provinciaNacimiento,
      distritoNacimiento,
      pais,
      departamento,
      provincia,
      distrito,
      direccion,
      telefono,
      correo,
      fechaIngreso,
      cargo,
      tipoContrato,
      observaciones,
      gradoInstruccion,
      centroEstudios,
      profesion,
      entrada,
      salida,
      roles,
      password: await encrypt(numeroDocumento),
    });
    const newUser = new User({
      nombre: nombre + " " + apellido,
      numeroDocumento,
      correo,
      contrasena: await encrypt(numeroDocumento),
      roles: roles,
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: rol } });
      newUser.rol = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "Maestro" });
      newUser.roles = [role._id];
      newProfesor.roles = [role._id];
    }
    const savedUser = await newUser.save();
    const savedProfesor = await newProfesor.save();
    res.json(savedProfesor);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating the profesor",
    });
  }
};

export const updateProfesor = async (req, res) => {
  try {
    const { numeroDocumento } = req.params;
    const profesor = req.body;
    await Personal.findOneAndUpdate({ numeroDocumento }, profesor, {
      new: true,
    });
    res.json({ message: "Profesor updated" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong updating the profesor",
    });
  }
};

export const deleteProfesor = async (req, res) => {
  try {
    const { numeroDocumento } = req.params;
    await Personal.findOneAndDelete({ numeroDocumento });
    res.json({ message: "Profesor deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong deleting the profesor",
    });
  }
};
