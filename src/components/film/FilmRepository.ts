import { EntityRepository, Repository } from "typeorm";
import { Service } from "typedi";
import Film from "./Film";

@Service()
@EntityRepository(Film)
export default class FilmRepository extends Repository<Film> {
  findByYear(year: number) {
    return this.find({ year: year });
  }
}
