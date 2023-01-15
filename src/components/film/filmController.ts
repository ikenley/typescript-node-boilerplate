import { Router } from "express";
import { container } from "tsyringe";
import { isAuth } from "../../auth";
import FilmService from "./FilmService";

const route = Router();

const filmController = (app: Router) => {
  app.use("/film", route);
  route.use(isAuth);

  const getService = () => {
    return container.resolve(FilmService);
  };

  route.get("/", async (_req, res) => {
    const filmService = getService();
    const films = await filmService.find();
    res.send(films);
  });

  route.get("/year/:year", async (req, res) => {
    const filmService = getService();
    const year = parseInt(req.params.year);
    const films = await filmService.findByYear(year);
    res.send(films);
  });
};

export default filmController;
