import "reflect-metadata";
import { Express } from "express";
import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";
// import mongooseLoader from "./mongoose";
import typeOrmLoader from "./typeOrmLoader";
import Logger from "./logger";
//We have to import at least all the events once so they can be triggered
//import "./events";

type Props = {
  expressApp: Express;
};

export default async ({ expressApp }: Props) => {
  // const mongoConnection = await mongooseLoader();
  // Logger.info("✌️ DB loaded and connected!");

  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */

  // const userModel = {
  //   name: "userModel",
  //   // Notice the require syntax and the '.default'
  //   model: require("../models/user").default,
  // };
  await typeOrmLoader();
  Logger.info("typeOrm loaded");

  await dependencyInjectorLoader();
  Logger.info("Dependency Injector loaded");

  await expressLoader({ app: expressApp });
  Logger.info("Express loaded");
};
