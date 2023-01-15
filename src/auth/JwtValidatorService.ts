import { injectable, inject } from "tsyringe";
import winston from "winston";
import LoggerProvider from "../utils/LoggerProvider";

@injectable()
export default class JwtValidatorService {
  private logger: winston.Logger;

  constructor(
    private loggerProvider: LoggerProvider,
    @inject("CognitoExpress") private cognitoExpress: any
  ) {
    this.logger = this.loggerProvider.provide("LoggerProvider");
  }

  public async validate(token: string) {
    if (!token) {
      throw new Error("Incorrect token format");
    }
    const tokenParts = token.split(" ");
    if (tokenParts[0] !== "Bearer") {
      throw new Error("Incorrect token format");
    }

    try {
      const response = await this.cognitoExpress.validate(tokenParts[1]);
      return response;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
