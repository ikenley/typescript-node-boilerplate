import { Router } from "express";
import { authController } from "@/auth";
import { statusController } from "../components/status";
import { filmController } from "../components/film";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  authController(app);
  filmController(app);
  statusController(app);
  return app;
};
