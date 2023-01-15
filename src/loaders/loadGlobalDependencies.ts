import { container } from "tsyringe";
import { getCustomRepository } from "typeorm";
import { NIL } from "uuid";
import LoggerInstance from "./logger";
import CognitoExpress from "cognito-express";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import config from "../config";
import FilmRepository from "../components/film/FilmRepository";
import { LoggerToken } from "./logger";
import { RequestIdToken } from "../middleware/dependencyInjectionMiddleware";

export default () => {
  try {
    container.register(LoggerToken, { useValue: LoggerInstance });

    // Register default request Id.
    // This will be replaced by request-level dependency container in most cases
    container.register(RequestIdToken, { useValue: NIL });

    const cognitoExpress = new CognitoExpress({
      region: config.aws.region,
      cognitoUserPoolId: config.cognito.userPoolId,
      tokenUse: "id",
      tokenExpiration: 3600000,
    });
    container.register("CognitoExpress", { useValue: cognitoExpress });

    const cognitoClient = new CognitoIdentityProviderClient({
      region: config.aws.region,
    });
    container.register(CognitoIdentityProviderClient, {
      useValue: cognitoClient,
    });

    // Register ORM repositories
    container.register(FilmRepository, {
      useFactory: () => getCustomRepository(FilmRepository),
    });
  } catch (e) {
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
