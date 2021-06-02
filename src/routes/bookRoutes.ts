import express, { Router } from 'express';
import * as bookController from '../controllers/bookController';

const router: Router = express.Router();

export default router
  .get('/', bookController.list)
  .get('/:id', bookController.get)
  .post('/', bookController.create);
