import { Router } from "express";
import { statusController } from "../components/status";
import { productController } from "../components/product";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  statusController(app);
  productController(app);
  return app;
};
