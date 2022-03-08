import config from 'config';
import connectMongo from './mongo';
import './redis';
import connectPostgresDB from './postgres';

export default async () => {
  if (config.mongodb.host) {
    await connectMongo();
  }
  if (config.postgresSQL.host) {
    await connectPostgresDB();
  }
};
