import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "film", schema: "app" })
class Film {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;
}

export default Film;
