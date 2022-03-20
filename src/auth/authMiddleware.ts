import { Container } from "typedi";
import { Request, Response, NextFunction } from "express";
import JwtValidatorService from "./JwtValidatorService";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Invalid token");
  }

  try {
    const jwtValidatorService = Container.get(JwtValidatorService);
    const response = await jwtValidatorService.validate(token);
    res.locals.user = response;
    next();
  } catch (e) {
    return res.status(401).send(e);
  }
  return;
};
