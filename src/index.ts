import 'reflect-metadata';
import express, { Application } from 'express';
import { createConnection } from 'typeorm';
import routes from './router';
import cors from 'cors';

createConnection()
  .then(() => {
    const app: Application = express();
    const port = 3000;

    app.use(cors());

    app.use(express.json());

    // Application routing
    app.use('/api/', routes);

    // Start server
    app.listen(port, () =>
      console.log('Example app listening at http://localhost:3000')
    );
  })
  .catch((error) => console.log(error));
