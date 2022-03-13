import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "film", schema: "app" })
class Film {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("int")
  year: number;
}

export default Film;
