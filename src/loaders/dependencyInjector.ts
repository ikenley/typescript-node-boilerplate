import { Container } from "typedi";
// import formData from 'form-data';
// import Mailgun from 'mailgun.js';
import LoggerInstance from "./logger";
// import agendaFactory from './agenda';
// import config from '@/config';

export default () => {
  try {
    Container.set("logger", LoggerInstance);
  } catch (e) {
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
