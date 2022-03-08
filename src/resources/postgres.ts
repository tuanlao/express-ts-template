import { Sequelize, Options } from 'sequelize';
import config from 'config';
import logger from 'logger';

const postgresDb = {} as { sequelize: Sequelize };
const postgresConfig = config.postgresSQL;

const connection: Options = {
  host: postgresConfig.host,
  dialect: 'postgres',
  port: Number(postgresConfig.port),
  quoteIdentifiers: false,
  pool: {
    max: 50,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
};

const sequelize: Sequelize = new Sequelize(postgresConfig.db, postgresConfig.user, postgresConfig.password, connection);

const connectPostgresDB = async (): Promise<Sequelize> => {
  logger.info('Starting connect to postgresSQL DB...');
  try {
    await sequelize.authenticate();
    logger.info('Connection to postgres has been established successfully');
  } catch (error) {
    logger.error(`Unable to connect to the postgres database: ${JSON.stringify(postgresConfig)} ${error}`);
    process.exit(1);
  }
  postgresDb.sequelize = sequelize;
  return postgresDb.sequelize;
};

export default connectPostgresDB;
