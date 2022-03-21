import { Container } from "typedi";
import { Request, Response, NextFunction } from "express";
import { Logger } from "winston";
import JwtValidatorService from "./JwtValidatorService";
import { User } from "./User";

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
    const jwtPayload = await jwtValidatorService.validate(token);
    res.locals.user = new User(jwtPayload);
    next();
  } catch (e) {
    return res.status(401).send(e);
  }
  return;
};

/** Verify that a given user is authorized.
 *  This is a simple example function.
 *  Cognito Groups manage user roles.
 *  In this case we check whether a user is in the "admin" group
 */
export const isAuthorized = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: User = res.locals.user; // set by isAuthenticated

  if (!user) {
    return res.status(401).send("Invalid token");
  }

  if (user.isInGroup("admin")) {
    next();
  } else {
    const logger: Logger = Container.get("logger");
    logger.warn("User not authorized");
    return res.status(403).send("Not authorized");
  }
  return;
};

/** Verify that a user is both authenticated and authorized */
export const isAuth = [isAuthenticated, isAuthorized];
