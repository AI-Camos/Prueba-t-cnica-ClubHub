import express from 'express';
import routerApi from './routes/index.js';

import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } from './middleware/error.handler.js'
const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})


