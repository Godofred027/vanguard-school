import dotenv from "dotenv";
import moment from "moment-timezone";

dotenv.config();
export const datePeru = moment()
  .tz("America/Lima")
  .format("YYYY-MM-DD HH:mm:ss");
export default {
  nameApp: process.env.NAME_APP,
  versionApp: process.env.VERSION_APP,
  descriptionApp: process.env.DESCRIPTION_APP,
  authorApp: process.env.AUTHOR_APP,
  authorMailApp: process.env.AUTHOR_MAIL_APP,
  urlApp: process.env.URL_APP,
  portApp: process.env.PORT_APP,
  licenseApp: process.env.LICENSE_APP,
  versionApp: process.env.VERSION_APP,
  portExpress: process.env.PORT || 4000,
  mongodbConnection:
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` ||
    "mongodb://localhost:27017/vanguardSchool",
  secret: process.env.SECRET || "vanguard2022",
  ADMIN_MAIL: process.env.ADMIN_MAIL,
  ADMIN_DOCUMENT: process.env.ADMIN_DOCUMENT,
  ADMIN_PASS: process.env.ADMIN_PASS,
};
