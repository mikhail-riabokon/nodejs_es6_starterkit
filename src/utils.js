import superagentPromise from 'superagent-promise';
import superagent from 'superagent';
import winston from 'winston';

export const agent = superagentPromise(superagent, Promise);

export const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
  ],
});
