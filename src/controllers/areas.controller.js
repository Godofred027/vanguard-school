import Area from "../models/Area.js";
import Curso from "../models/Curso.js";

export const findAreas = async (req, res) => {
  try {
    const areas = await Area.find();
    res.status(200).json(areas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findArea = async (req, res) => {
  const { codigo } = req.params;
  try {
    const area = await Area.findOne({ codigo });
    res.status(200).json(area);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createArea = async (req, res) => {
  try {
    const newArea = new Area({
      nombre: req.body.nombre,
      nivel: req.body.nivel,
      codigo: req.body.codigo,
      cursos: req.body.cursos,
    });
    await newArea.save();
    res.status(201).json({ message: "Area Created" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateArea = async (req, res) => {
  const { codigo } = req.params;
  const area = req.body;
  try {
    const updatedArea = await Area.findOneAndUpdate({ codigo }, area, {
      new: true,
    });
    res.status(200).json({ message: "Area Updated" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteArea = async (req, res) => {
  const { codigo } = req.params;
  try {
    await Area.findOneAndDelete({ codigo });
    res.status(200).json({ message: "Area Deleted" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const findCoursesForArea = async (req, res) => {
  try {
    const nivel = await Area.findOne({ codigo: req.params.codigo });
    const courses = await Curso.find({ nivel: nivel.nivel });
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const insertCourseForArea = async (req, res) => {
  try {
    if (req.body.nombre === undefined) {
      res.status(404).json({ message: "No se ha encontrado el curso" });
    } else {
      const newCourseAdd = {
        nombre: req.body.nombre,
      };
      const insertCourse = await Area.findOneAndUpdate(
        { codigo: req.params.codigo },
        { $push: { cursos: newCourseAdd } },
        { new: true }
      );
      res.status(201).json(insertCourse);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
