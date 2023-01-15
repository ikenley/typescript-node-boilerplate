import { Router, Response } from "express";
import { isAuth } from "../../auth";
import FilmService from "./FilmService";

const route = Router();

const filmController = (app: Router) => {
  app.use("/film", route);
  route.use(isAuth);

  const getService = (res: Response) => {
    return res.locals.container.resolve(FilmService);
  };

  route.get("/", async (_req, res) => {
    const filmService = getService(res);
    const films = await filmService.find();
    res.send(films);
  });

  route.get("/year/:year", async (req, res) => {
    const filmService = getService(res);
    const year = parseInt(req.params.year);
    const films = await filmService.findByYear(year);
    res.send(films);
  });
};

export default filmController;
