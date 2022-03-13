import { Router } from "express";
import { Container } from "typedi";
import FilmService from "./FilmService";

const route = Router();

const filmController = (app: Router) => {
  app.use("/film", route);

  const filmService = Container.get(FilmService);

  route.get("/", async (_req, res) => {
    const films = await filmService.find();
    res.send(films);
  });

  route.get("/year/:year", async (req, res) => {
    const year = parseInt(req.params.year);
    const films = await filmService.findByYear(year);
    res.send(films);
  });
};

export default filmController;
