/* eslint-disable max-len */
import { connect, connection } from 'mongoose';
import config from 'config';
import logger from 'logger';

const mongoDBConfig = config.mongodb;

const mongodbProtocol = mongoDBConfig.protocol || 'mongodb';
const userNamePwd = mongoDBConfig.username ? `${mongoDBConfig.username}:${mongoDBConfig.pasword}@` : '';

let mongodbUrl = `${mongodbProtocol}://${userNamePwd}${mongoDBConfig.host}/${mongoDBConfig.dbName}?${
  userNamePwd ? 'authSource=admin' : ''
}retryWrites=true`;

if (mongoDBConfig.replicaSet) {
  mongodbUrl += `&replicaSet=${mongoDBConfig.replicaSet}`;
}

const options = {
  autoIndex: true,
  autoCreate: true,
};

export default async () => {
  logger.info('Starting connect to MongoDB...');
  await connect(mongodbUrl, options);
  connection.on('error', () => {
    logger.error('MongoDB connection error');
    process.exit(1);
  });
  logger.info('Successfully connected to MongoDB');
};
