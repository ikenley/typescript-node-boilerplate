import { injectable, inject } from "tsyringe";
import winston from "winston";
import FilmRepository from "./FilmRepository";

@injectable()
export default class FilmService {
  constructor(
    @inject("logger") private logger: winston.Logger,
    private filmRepo: FilmRepository
  ) {}

  public async find() {
    //const filmRepo = getCustomRepository(FilmRepository);
    const films = await this.filmRepo.find({ take: 10 });
    return films;
  }

  public async findByYear(year: number) {
    this.logger.info(`FilmService: Finding films from year ${year}`);
    //const filmRepo = getCustomRepository(FilmRepository);
    const films = await this.filmRepo.findByYear(year);
    return films;
  }
}
