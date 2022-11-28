import Sede from "../models/Sede.js";
import { getPagination } from "../libs/getPagination.js";

export const findSedes = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const data = await Sede.paginate({}, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      sedes: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSede = async (req, res) => {
  try {
    const newSede = new Sede({
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
    });
    await newSede.save();
    res.json({ message: "Sede Created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findSede = async (req, res) => {
  const { codigo } = req.params;
  try {
    const sede = await Sede.findOne({ codigo });
    res.json(sede);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSede = async (req, res) => {
  try {
    await Sede.findOneAndUpdate(req.params.codigo, req.body);
    res.json({ message: "Sede Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSede = async (req, res) => {
  try {
    await Sede.findOneAndDelete(req.params.codigo);
    res.json({ message: "Sede Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
