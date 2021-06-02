import express, { Application } from 'express';
import routes from './routes';
import cors from 'cors';

const app: Application = express();
const port = 3000;

app.use(cors());

app.use(express.json());

// Application routing
app.use('/api/', routes);

// Start server
app.listen(port, () => console.log('Example app listening at http://localhost:3000'));
