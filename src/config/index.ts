import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

type AppEnv = "local" | "dev" | "staging" | "prod";

type ConfigOptions = {
  api: { prefix: string };
  appEnv: AppEnv;
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    schema: string;
  };
  logs: { level: string };
  port: number;
};

const config: ConfigOptions = {
  api: { prefix: "" },
  appEnv: process.env.APP_ENV as AppEnv,
  db: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE!,
    schema: process.env.DB_SCEHMA!,
  },
  logs: { level: process.env.LOGS__LEVEL || "info" },
  port: parseInt(process.env.PORT || "8080", 10),
};

export { config };

export default config;
