import express from 'express';
import franchisesRouter from './franchises.router.js';
import companyRouter from './company.router.js';
import locationRouter from './location.router.js';

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/franchises', franchisesRouter);
  router.use('/company', companyRouter);
  router.use('/location', locationRouter);
};

export default routerApi;
