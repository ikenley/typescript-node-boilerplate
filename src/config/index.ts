import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

type ConfigOptions = {
  api: { prefix: string };
  logs: { level: string };
  port: number;
};

const config: ConfigOptions = {
  api: { prefix: "" },
  logs: { level: process.env.LOGS__LEVEL || "info" },
  port: parseInt(process.env.PORT || "8080", 10),
};

export { config };

export default config;
