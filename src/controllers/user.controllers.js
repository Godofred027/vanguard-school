import User from "../models/User.js";
import { getPagination } from "../libs/getPagination.js";

export const findUsers = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const data = await User.paginate({}, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      users: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = new User({
      nombre: req.body.nombre,
      numeroDocumento: req.body.numeroDocumento,
      correo: req.body.correo,
      contrasena: req.body.contrasena,
      rol: req.body.rol,
    });
    await newUser.save();
    res.json({ message: "User Created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findOneUsers = async (req, res) => {
  const { numeroDocumento } = req.params;
  try {
    const user = await User.findOne({ numeroDocumento });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.findOneAndUpdate(req.params.numeroDocumento, req.body);
    res.json({ message: "User Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.numeroDocumento);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
