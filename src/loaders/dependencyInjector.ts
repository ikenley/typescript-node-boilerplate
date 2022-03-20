import { Container } from "typedi";
// import formData from 'form-data';
// import Mailgun from 'mailgun.js';
import LoggerInstance from "./logger";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
// import agendaFactory from './agenda';
import config from "@/config";

export default () => {
  try {
    Container.set("logger", LoggerInstance);

    const cognitoClient = new CognitoIdentityProviderClient({
      region: config.aws.region,
    });
    Container.set(CognitoIdentityProviderClient, cognitoClient);
  } catch (e) {
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
