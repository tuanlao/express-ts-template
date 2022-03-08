import dotenvSafe from 'dotenv-safe';
import path from 'path';
import fs from 'fs';

const pathEnv = path.join(__dirname, `../../.env.${process.env.NODE_ENV || 'dev'}`);

if (fs.existsSync(pathEnv)) {
  dotenvSafe.config({
    allowEmptyValues: true,
    path: pathEnv,
    sample: path.join(__dirname, '../../.env.example'),
  });
}
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  postgresSQL: {
    schema: process.env.POSTGRES_SCHEMA,
    db: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  },
  mongodb: {
    protocol: process.env.MONGODB_PROTOCOL,
    username: process.env.MONGODB_USERNAME,
    pasword: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    replicaSet: process.env.MONGODB_REPLICA_SET,
    dbName: process.env.MONGODB_NAME,
  },
  redisHost: process.env.REDIS_HOST,
};
