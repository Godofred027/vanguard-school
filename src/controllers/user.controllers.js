import User from "../models/User.js";
import { getPagination } from "../libs/getPagination.js";
import { encrypt } from "../libs/passEncrypt.js";
import Role from "../models/Role.js";

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
    const { nombre, numeroDocumento, correo, contrasena, roles } = req.body;
    const newUser = new User({
      nombre,
      numeroDocumento,
      correo,
      contrasena: await encrypt(contrasena),
      roles,
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.rol = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "Alumno" });
      newUser.roles = [role._id];
    }
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
    await User.findOneAndUpdate(
      { numeroDocumento: req.params.numeroDocumento },
      req.body,
      { new: true }
    );
    res.json({ message: "User Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findOneAndRemove({
      numeroDocumento: req.params.numeroDocumento,
    });
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
