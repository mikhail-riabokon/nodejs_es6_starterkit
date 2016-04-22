import errorHandler from './middlewares/errorHandler';
import bodyParser from 'body-parser';
import { logger } from './utils';
import express from 'express';
import router from './router';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server started at http://localhost:${port}`);
});
