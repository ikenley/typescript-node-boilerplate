import winston from "winston";
import { injectable, inject } from "tsyringe";

@injectable()
export default class JwtValidatorService {
  constructor(
    @inject("logger") private logger: winston.Logger,
    @inject("CognitoExpress") private cognitoExpress: any
  ) {}

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
