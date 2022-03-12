import { Router } from "express";
import { getRepository } from "typeorm";
import Film from "./Film";

const route = Router();

// const films: Film[] = [
//   { id: "0", name: "foo" },
//   { id: "1", name: "bar" },
// ];

const filmController = (app: Router) => {
  app.use("/film", route);

  route.get("/", async (_req, res) => {
    const filmRepo = getRepository(Film);
    const films = await filmRepo.find({ take: 10 });
    res.send(films);
  });

  // route.get("/:id", (req, res) => {
  //   const product = films.find((p) => p.id === req.params.id);
  //   res.send(product);
  // });
};

export default filmController;
