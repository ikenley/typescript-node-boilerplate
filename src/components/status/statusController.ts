import { Router } from "express";

const route = Router();

const statusController = (app: Router) => {
  app.use("/status", route);

  route.get("/", (_req, res) => {
    res.send({ status: "ok" });
  });

  route.get("/health", (_req, res) => {
    res.send({ status: "ok" });
  });
};

export default statusController;
