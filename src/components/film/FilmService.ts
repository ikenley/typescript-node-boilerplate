import { injectable } from "tsyringe";
import winston from "winston";
import LoggerProvider from "../../utils/LoggerProvider";
import FilmRepository from "./FilmRepository";

@injectable()
export default class FilmService {
  private logger: winston.Logger;

  constructor(
    private loggerProvider: LoggerProvider,
    private filmRepo: FilmRepository
  ) {
    this.logger = this.loggerProvider.provide("FilmService");
  }

  public async find() {
    this.logger.info(`find`);
    const films = await this.filmRepo.find({ take: 10 });
    return films;
  }

  public async findByYear(year: number) {
    this.logger.info(`Finding films from year ${year}`);
    const films = await this.filmRepo.findByYear(year);
    return films;
  }
}
