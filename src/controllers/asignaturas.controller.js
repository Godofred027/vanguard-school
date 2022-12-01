import Asignatura from "../models/Asignatura.js";

export const findAsignaturas = async (req, res) => {
  try {
    const asignaturas = await Asignatura.find();
    res.status(200).json(asignaturas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findAsignatura = async (req, res) => {
  const { codigo } = req.params;
  try {
    const asignatura = await Asignatura.findOne({ codigo });
    res.status(200).json(asignatura);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAsignatura = async (req, res) => {
  try {
    const newAsignatura = new Asignatura({
      docente: req.body.docente,
      sede: req.body.sede,
      codigo: req.body.codigo,
      nivel: req.body.nivel,
      grado: req.body.grado,
      seccion: req.body.seccion,
      anoAcademico: req.body.anoAcademico,
      curso: req.body.curso,
    });
    await newAsignatura.save();
    res.status(201).json({ message: "Asignatura Created" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAsignatura = async (req, res) => {
  const { codigo } = req.params;
  const asignatura = req.body;
  try {
    await Asignatura.findOneAndUpdate({ codigo }, asignatura, { new: true });
    res.status(200).json({ message: "Asignatura Updated" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteAsignatura = async (req, res) => {
  const { codigo } = req.params;
  try {
    await Asignatura.findOneAndDelete({ codigo });
    res.status(200).json({ message: "Asignatura Deleted" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
