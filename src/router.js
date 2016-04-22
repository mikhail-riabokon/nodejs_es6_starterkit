/* eslint-disable new-cap */
import express from 'express';

const router = express.Router();

// Write routes here
router.get('/', (req, res) => {
  res.status(200).send('Hello from ES6 Nodejs starterkit');
});

export default router;
