import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import dotenv from 'dotenv';
import { getEnvVar } from './utils/getEnvVar.js';
import contactsRouter from './routers/contacts.js';
import { errorHandler } from './middlevares/errorHandler.js';
import { notFoundHandler } from './middlevares/notFoundHandler.js';

dotenv.config();

const PORT = Number(getEnvVar('PORT', 3000));

const setupServer = () => {
  const app = express();

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(contactsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer;
