import config from "@/config";
import { createConnection } from "typeorm";
import { Film } from "@/components/film";

// Configures database connection
const { host, port, user, password, database, schema } = config.db;

export default () => {
  createConnection({
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
