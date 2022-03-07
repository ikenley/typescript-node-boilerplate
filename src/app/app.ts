import express from "express";
import routes from "../routes";

const app = express();

// define a route handler for the default home page
app.get("/", (_req, res) => {
  res.send("Hello world!");
});

//config.api.prefix
app.use("/", routes());

export default app;
