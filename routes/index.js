import express from 'express';
import franchisesRouter from './franchises.router.js';
import companyRouter from './company.router.js';

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/franchises', franchisesRouter);
  router.use('/company', companyRouter);
};

export default routerApi;
