import Curso from "../models/Curso.js";

export const findCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findCurso = async (req, res) => {
  const { codigo } = req.params;
  try {
    const curso = await Curso.findOne({
      codigo,
    });
    res.status(200).json(curso);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCurso = async (req, res) => {
  try {
    const newCurso = new Curso({
      nivel: req.body.nivel,
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      imagen: req.body.imagen,
      silabo: req.body.silabo,
    });
    await newCurso.save();
    res.status(201).json({ message: "Curso Created" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCurso = async (req, res) => {
  const { codigo } = req.params;
  try {
    const curso = await Curso.findOne({
      codigo,
    });
    if (curso) {
      curso.nombre = req.body.nombre;
      curso.creditos = req.body.creditos;
      curso.nivel = req.body.nivel;
      curso.area = req.body.area;
      await curso.save();
      res.status(200).json({ message: "Curso Updated" });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteCurso = async (req, res) => {
  const { codigo } = req.params;
  try {
    const curso = await Curso.findOne({
      codigo,
    });
    if (curso) {
      await curso.remove();
      res.status(200).json({ message: "Curso Deleted" });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const findCursosByNivel = async (req, res) => {
  const { nivel } = req.params;
  try {
    const cursos = await Curso.find({ nivel });
    console.log(cursos);
    res.status(200).json(cursos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
