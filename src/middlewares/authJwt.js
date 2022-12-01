import { Jwt } from "jsonwebtoken";
import User from "../models/User";
import Role from "../models/Role";
import { secret } from "../config";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({
      message: "No token provided!",
    });
  }
  try {
    const decoded = Jwt.verify(token, secret);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
      return res.status(404).json({
        message: "No user found!",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized!",
    });
  }
};

export const isProfessor = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "Maestro") {
      next();
      return;
    }
  }
  return res.status(403).json({
    message: "Require Professor Role!",
  });
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "Administrador") {
      next();
      return;
    }
  }
  return res.status(403).json({
    message: "Require Admin Role!",
  });
};
