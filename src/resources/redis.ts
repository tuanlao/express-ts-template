import IORedis, { Redis } from 'ioredis';
import config from 'config';
import logger from 'logger';

const connection = (): Redis => {
  if (!config.redisHost) {
    return;
  }
  const redisInstance = new IORedis(config.redisHost, { connectTimeout: 10000 });

  redisInstance.on('error', (error: any) => {
    logger.error(`Redis error: ${error}`);
  });

  redisInstance.on('connect', () => {
    logger.info('Redis connected');
  });

  return redisInstance;
};

const redis = connection();

const set = async (key: string, value: any, ttl: number | string) => {
  logger.info(`set cache with key: ${key}`);
  return redis.set(key, value, 'EX', ttl);
};

const get = async (key: string) => {
  logger.info(`get cache with key: ${key}`);
  const data = await redis.get(key);
  logger.info(`get redis: ${data}`);
  return data;
};

const clear = async (key: string) => {
  logger.info(`clear cache with key: ${key}`);
  const data = await redis.del(key);
  logger.info(`clear redis: ${data}`);
  return data;
};

export { set, get, clear };
