import express, { Router } from 'express';
import bookRoutes from './bookRoutes';

const router: Router = express.Router();

export default router.use('/books', bookRoutes);
