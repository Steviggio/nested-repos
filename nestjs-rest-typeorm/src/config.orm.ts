import { NODE_ENV, MONGO_URL, MONGO_DB, MONGO_PORT } from "./environments";

const orm = {
  development: {
    url: MONGO_URL!,
  },
  testing: {
    url: MONGO_URL!,
  },
  staging: {
    // protocol: MONGO_PROTOCOL,
    host: 'localhost',
    port: MONGO_PORT!,
    username: 'steviggio',
    password: 'adminpwd',
    database: MONGO_DB!,
  },
  production: {
    url: MONGO_URL!,
  },
};

export default orm[NODE_ENV];