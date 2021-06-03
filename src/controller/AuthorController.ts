import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Author } from '../entity/Author';

export const create = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const authorRepo = getRepository(Author);
    const author = await authorRepo.save({ name, description });

    return res.status(201).send(author);
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const list = async (_req: Request, res: Response) => {
  try {
    const authorRepo = getRepository(Author);
    const authors = await authorRepo.find();

    return res.status(200).send(authors);
  } catch (error) {
    return res.status(400).send({ error });
  }
};
