import winston from "winston";
import { Service, Inject } from "typedi";

@Service()
export default class JwtValidatorService {
  constructor(
    @Inject("logger") private logger: winston.Logger,
    @Inject("CognitoExpress") private cognitoExpress: any
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
