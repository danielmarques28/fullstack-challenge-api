import express, { Router } from 'express';
import * as authorController from '../controller/AuthorController';

const router: Router = express.Router();

export default router
  .get('/', authorController.list)
  .post('/', authorController.create);
