import { logger } from '../utils';

export default function errorHandler(err, req, res, next) {
  if (err) {
    logger.error(err);

    if (res.headersSent) {
      res.end();
    } else {
      res.status(500).send('Internal server error');
    }
  } else {
    next();
  }
}
