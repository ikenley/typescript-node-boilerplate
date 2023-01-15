import { injectable, inject } from "tsyringe";
import winston from "winston";
import { LoggerToken } from "../loaders/logger";

/** Provides a module-specific Logger instance.
 * Includes additional container-provides context values
 */
@injectable()
export default class LoggerProvider {
  constructor(@inject(LoggerToken) private logger: winston.Logger) {}

  /** Creates a child logger module */
  public provide(moduleName: string) {
    return this.logger.child({ module: moduleName });
  }
}
