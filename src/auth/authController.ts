import { Router } from "express";
import AuthService from "./AuthService";

const route = Router();

type LoginRequest = {
  username: string;
  password: string;
};

const authController = (app: Router) => {
  app.use("/auth", route);

  route.post("/login", async (req, res) => {
    const loginRequest = req.body as LoginRequest;
    const { username, password } = loginRequest;

    const authService = res.locals.container.resolve(AuthService);
    const result = await authService.login(username, password);

    res.send(result);
  });
};

export default authController;
