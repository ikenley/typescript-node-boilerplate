import { Router } from "express";
import Product from "./Product";

const route = Router();

const products: Product[] = [
  { id: "0", name: "foo" },
  { id: "1", name: "bar" },
];

const productController = (app: Router) => {
  app.use("/product", route);

  route.get("/", (_req, res) => {
    res.send(products);
  });

  route.get("/:id", (req, res) => {
    const product = products.find((p) => p.id === req.params.id);
    res.send(product);
  });
};

export default productController;
