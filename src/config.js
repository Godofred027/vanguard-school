import pkg from "../package.json";
import dotenv from "dotenv";
import timeZone from "moment-timezone";

dotenv.config();
export const datePeru = timeZone.tz(Date.now(), "America/Lima");
export default {
  nameApp: pkg.name,
  authorApp: pkg.author,
  descriptionApp: pkg.description,
  versionApp: pkg.version,
  portExpress: 3000,
  mongodbConnection:
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` ||
    "mongodb://localhost:27017/vanguardSchool",
};
