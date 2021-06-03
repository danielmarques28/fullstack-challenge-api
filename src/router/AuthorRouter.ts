import express, { Router } from 'express';
import * as authorController from '../controller/AuthorController';

const router: Router = express.Router();

export default router
  .post('/', authorController.create);
