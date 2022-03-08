import * as app from './app';
import logger from './logger';

process.on('uncaughtException', (e) => {
  logger.error(e);
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  logger.error(e);
  process.exit(1);
});

app.listen();
