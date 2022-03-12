import { Router } from "express";
import { statusController } from "../components/status";
import { filmController } from "../components/film";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  statusController(app);
  filmController(app);
  return app;
};
