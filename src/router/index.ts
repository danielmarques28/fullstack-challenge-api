import express, { Router } from 'express';
import AuthorRouter from './AuthorRouter';
import BookRouter from './BookRouter';

const router: Router = express.Router();

export default router
  .use('/books', BookRouter)
  .use('/authors', AuthorRouter);
