import config from "../config";
import { createConnection } from "typeorm";
import { Film } from "../components/film";

// Configures database connection
const { host, port, user, password, database, schema } = config.db;

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
    synchronize: false, // config.nodeEnv === "test"
    logging: false,
    ssl: config.app.env !== "local",
  })
    .then((_connection) => {})
    .catch((error) => console.log(error));
};
