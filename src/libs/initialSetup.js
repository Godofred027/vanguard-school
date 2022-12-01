import Role from "../models/Role";
import User from "../models/User";
import config from "../config";
import { encrypt } from "../libs/passEncrypt";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new Role({ name: "Maestro" }).save(),
      new Role({ name: "Administrador" }).save(),
      new Role({ name: "Alumno" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  try {
    const document = config.ADMIN_DOCUMENT;
    const correo = config.ADMIN_MAIL;
    const password = config.ADMIN_PASS;
    const user = await User.findOne({ numeroDocumento: document });
    if (!user) {
      const user = new User({
        nombre: "Administrador",
        numeroDocumento: document,
        correo: correo,
        contrasena: await encrypt(password),
        roles: ["Administrador"],
      });
      const savedUser = await user.save();
    }
  } catch (error) {
    console.error(error);
  }
};

createRoles();
createAdmin();
