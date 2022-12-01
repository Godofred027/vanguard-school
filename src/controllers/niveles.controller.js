import Nivel from "../models/Nivel.js";

export const findNiveles = async (req, res) => {
  try {
    const niveles = await Nivel.find();
    res.status(200).json(niveles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findNivel = async (req, res) => {
  const { codigo } = req.params;
  try {
    const nivel = await Nivel.findOne({ codigo });
    res.status(200).json(nivel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNivel = async (req, res) => {
  try {
    const newNivel = new Nivel({
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      definicionGrado: req.body.definicionGrado,
      gradoMinimo: req.body.gradoMinimo,
      gradoMaximo: req.body.gradoMaximo,
      tipoCalificacion: req.body.tipoCalificacion,
      calificacionMaxima: req.body.calificacionMaxima,
      calificacionMinima: req.body.calificacionMinima,
      calificacionAprobatoria: req.body.calificacionAprobatoria,
    });
    await newNivel.save();
    res.status(201).json({ message: "Nivel Created" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateNivel = async (req, res) => {
  const { codigo } = req.params;
  const nivel = req.body;
  try {
    const updatedNivel = await Nivel.findOneAndUpdate({ codigo }, nivel, {
      new: true,
    });
    res.status(200).json({ message: "Nivel Updated" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteNivel = async (req, res) => {
  const { codigo } = req.params;
  try {
    await Nivel.findOneAndDelete({ codigo });
    res.status(200).json({ message: "Nivel eliminado" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findGradosByNivel = async (req, res) => {
  const { nivel } = req.params;
  try {
    const grados = await Nivel.findOne({ nombre: nivel });
    console.log(grados);
    res.status(200).json(grados.grados);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
