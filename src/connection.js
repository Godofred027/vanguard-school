import mongoose from "mongoose";
import config from "./config";

const uri = config.mongodbConnection;

(async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log("Database is connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
