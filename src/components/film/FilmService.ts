import { Service, Inject } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import winston from "winston";
import FilmRepository from "./FilmRepository";

@Service()
export default class FilmService {
  constructor(
    @Inject("logger") private logger: winston.Logger,
    @InjectRepository() private filmRepo: FilmRepository
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
