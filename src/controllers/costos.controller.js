import Costos from "../models/costos.js";

export const findCostos = async (req, res) => {
  try {
    const costos = await Costos.find();
    res.status(200).json(costos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findCosto = async (req, res) => {
  const { codigo } = req.params;
  try {
    const costo = await Costos.findOne({ codigo });
    res.status(200).json(costo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCosto = async (req, res) => {
  try {
    const newCosto = new Costos({
      descripcion: req.body.descripcion,
      codigo: req.body.codigo,
      valorMatricula: req.body.valorMatricula,
      valorMensualidad: req.body.valorMensualidad,
      valorAgenda: req.body.valorAgenda,
    });
    await newCosto.save();
    res.status(201).json({ message: "Costo Created" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCosto = async (req, res) => {
  const { codigo } = req.params;
  const costo = req.body;
  try {
    const updatedCosto = await Costos.findOneAndUpdate({ codigo }, costo, {
      new: true,
    });
    res.status(200).json({ message: "Costo Updated" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteCosto = async (req, res) => {
  const { codigo } = req.params;
  try {
    await Costos.findOneAndDelete({ codigo });
    res.status(200).json({ message: "Costo eliminado" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
