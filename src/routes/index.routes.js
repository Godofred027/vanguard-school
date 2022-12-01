import { Router } from "express";
import config from "../config";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    name: config.nameApp,
    version: config.versionApp,
    description: config.descriptionApp,
    author: config.authorApp,
    authorMail: config.authorMailApp,
    url: config.urlApp,
    port: config.portApp,
    license: config.licenseApp,
  });
});

router.get("/api", (req, res) => {
  res.json({
    name: config.nameApp,
    version: config.versionApp,
    description: config.descriptionApp,
    author: config.authorApp,
    authorMail: config.authorMailApp,
    url: config.urlApp,
    port: config.portApp,
    license: config.licenseApp,
  });
});

export default router;
