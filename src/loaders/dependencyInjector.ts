import { Container } from "typedi";
// import formData from 'form-data';
// import Mailgun from 'mailgun.js';
import LoggerInstance from "./logger";
import CognitoExpress from "cognito-express";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
// import agendaFactory from './agenda';
import config from "@/config";

export default () => {
  try {
    Container.set("logger", LoggerInstance);

    const cognitoExpress = new CognitoExpress({
      region: config.aws.region,
      cognitoUserPoolId: config.cognito.userPoolId,
      tokenUse: "id",
      tokenExpiration: 3600000,
    });
    Container.set("CognitoExpress", cognitoExpress);

    const cognitoClient = new CognitoIdentityProviderClient({
      region: config.aws.region,
    });
    Container.set(CognitoIdentityProviderClient, cognitoClient);
  } catch (e) {
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
