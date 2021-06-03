import express, { Router } from 'express';
import BookRouter from './BookRouter';

const router: Router = express.Router();

export default router.use('/books', BookRouter);
