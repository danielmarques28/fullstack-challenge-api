import { Request, Response } from 'express';
import Book from '../models/book';
import { paginate } from '../utils/pagination';

export const list = async (req: Request, res: Response) => {
  try {
    const { page, search } = req.query;
    const { offset, limit } = paginate(page as string);

    const books = await Book.findAndCountAll({
      where: { title: search },
      offset,
      limit,
    });

    return res.status(200).send(books);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).send({ msg: 'Not found' });

    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const book = await Book.create({ title, description });

    return res.status(201).send(book);
  } catch (error) {
    return res.status(400).send({ error });
  }
};
