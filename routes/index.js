const express = require('express');
const franchisesRouter = require('./franchises.router');
const companyRouter = require('./company.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/franchises', franchisesRouter);
  router.use('/company', companyRouter);
};

module.exports = routerApi;
