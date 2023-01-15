import { injectable } from "tsyringe";
import {
  CognitoIdentityProviderClient,
  AdminInitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import winston from "winston";
import { createHmac } from "crypto";
import config from "../config";
import LoggerProvider from "../utils/LoggerProvider";

const { userPoolId, userPoolClientId, userPoolClientSecret } = config.cognito;

@injectable()
export default class AuthService {
  private logger: winston.Logger;

  constructor(
    private loggerProvider: LoggerProvider,
    private cognitoClient: CognitoIdentityProviderClient
  ) {
    this.logger = this.loggerProvider.provide("AuthService");
  }

  public async login(username: string, password: string) {
    try {
      const secretHash = this.generateHash(username);
      const command = new AdminInitiateAuthCommand({
        UserPoolId: userPoolId,
        ClientId: userPoolClientId,
        AuthFlow: "ADMIN_NO_SRP_AUTH",
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password,
          SECRET_HASH: secretHash,
        },
      });

      const response = await this.cognitoClient.send(command);
      this.logger.info(`AuthService login success for ${username}`);

      return response.AuthenticationResult;
    } catch (error) {
      throw error;
    }
  }

  private generateHash(username: string): string {
    return createHmac("SHA256", userPoolClientSecret)
      .update(username + userPoolClientId)
      .digest("base64");
  }
}
