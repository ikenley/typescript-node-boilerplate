import config from "@/config";
import { createConnection, useContainer } from "typeorm";
import { Film } from "@/components/film";
import { Container } from "typeorm-typedi-extensions";

// Configures database connection
const { host, port, user, password, database, schema } = config.db;

useContainer(Container);

export default async () => {
  await createConnection({
    type: "postgres",
    host: host,
    port: port,
    username: user,
    password: password,
    database: database,
    schema: schema,
    entities: [Film],
    synchronize: false,
    logging: false,
    ssl: config.appEnv !== "local",
  })
    .then((_connection) => {})
    .catch((error) => console.log(error));
};
