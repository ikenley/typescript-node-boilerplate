import { EntityRepository, Repository } from "typeorm";
import { injectable } from "tsyringe";
import Film from "./Film";

@injectable()
@EntityRepository(Film)
export default class FilmRepository extends Repository<Film> {
  findByYear(year: number) {
    return this.find({ year: year });
  }
}
