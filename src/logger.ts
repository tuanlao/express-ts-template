import winston from 'winston';
import expressWinston from 'express-winston';

const { createLogger, format, transports } = winston;
const { combine, colorize, printf } = format;

const prodFormat = () => {
  const replaceError = ({ label, level, message, stack }: any) => ({
    label,
    level,
    message,
    stack,
  });

  const replacer = (key: string, value: any) => (value instanceof Error ? replaceError(value) : value);

  return combine(format.json({ replacer }));
};

const devFormat = () => {
  const formatMessage = (info: any) =>
    `${info.level} ${info.message}${info.meta ? ` ${JSON.stringify(info.meta)}` : ''}`;
  const formatError = (info: any) => `${info.level} ${info.message}\n\n${info.stack}\n`;

  const fmt = (info: any) => (info instanceof Error ? formatError(info) : formatMessage(info));
  return combine(colorize(), printf(fmt));
};

const logger = createLogger({
  exitOnError: false,
  format: process.env.NODE_ENV === 'prd' ? prodFormat() : devFormat(),
  level: 'info',
  silent: process.env.NODE_ENV === 'test',
  transports: [new transports.Console()],
});

export const requestLogging = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: process.env.NODE_ENV === 'prd' ? prodFormat() : devFormat(),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute: function (req, res) {
    return req.path?.includes('swagger-ui') || req.path?.includes('api-docs');
  }, // optional: allows to skip some log messages based on request and/or response
});

export const errorLogging = expressWinston.errorLogger({
  transports: [new winston.transports.Console()],
  format: process.env.NODE_ENV === 'prd' ? prodFormat() : devFormat(),
});

export default logger;
